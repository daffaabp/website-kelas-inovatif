'use server'

import { prisma } from '@/lib/prisma';
import { resend } from '@/lib/resend';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

export async function subscribeToNewsletter(prevState: unknown, formData: FormData) {
    const rawData = {
        email: formData.get('email'),
        firstName: formData.get('firstName') || undefined,
        lastName: formData.get('lastName') || undefined,
    };

    const validatedFields = schema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid input",
        };
    }

    const { email, firstName, lastName } = validatedFields.data;

    try {
        const existing = await prisma.email.findUnique({ where: { email } });
        if (existing) {
            return {
                success: false,
                message: "Email already subscribed",
            };
        }

        await prisma.email.create({
            data: {
                email,
                firstName: firstName || null,
                lastName: lastName || null,
            }
        });

        try {
            const { error } = await resend.contacts.create({
                email: email,
                firstName: firstName || undefined,
                lastName: lastName || undefined,
                unsubscribed: false,
            });

            if (error) {
                console.error('Resend contact creation error:', error);
            }
        } catch (error) {
            // Log but don't fail the request if Resend fails
            console.error('Failed to sync to Resend:', error);
        }

        return {
            success: true,
            message: "Successfully subscribed!",
        };
    } catch (error) {
        console.error('Subscription error:', error);
        return {
            success: false,
            message: "Failed to subscribe. Please try again.",
        };
    }
}
