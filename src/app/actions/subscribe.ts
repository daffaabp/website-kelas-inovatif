'use server'

import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    const email = formData.get('email');

    const validatedFields = schema.safeParse({ email });

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email",
        };
    }

    const validEmail = validatedFields.data.email;

    try {
        const existing = await prisma.email.findUnique({ where: { email: validEmail } });
        if (existing) {
            return {
                success: false,
                message: "Email already subscribed",
            };
        }

        await prisma.email.create({ data: { email: validEmail } });
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
