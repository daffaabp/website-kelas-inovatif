'use server'

import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})

export async function login(prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData))

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    const { email, password } = result.data

    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    // Simple environment variable check
    if (email !== adminEmail || password !== adminPassword) {
        return {
            errors: {
                email: ['Invalid credentials'],
                password: ['Invalid credentials'],
            },
        }
    }

    await createSession('admin')
    redirect('/admin/dashboard')
}

export async function logout() {
    await deleteSession()
    redirect('/admin/login')
}
