import { login, logout } from '../auth';
import { createSession, deleteSession } from '@/lib/session';
import { redirect } from 'next/navigation';

// Mock dependencies
jest.mock('@/lib/session', () => ({
    createSession: jest.fn(),
    deleteSession: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}));

describe('Auth Actions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Reset env vars to known state
        process.env.ADMIN_EMAIL = 'admin@example.com';
        process.env.ADMIN_PASSWORD = 'password123';
    });

    describe('login', () => {
        it('should login successfully with valid credentials', async () => {
            const formData = new FormData();
            formData.append('email', 'admin@example.com');
            formData.append('password', 'password123');

            await login(null, formData);

            expect(createSession).toHaveBeenCalledWith('admin');
            expect(redirect).toHaveBeenCalledWith('/admin/dashboard');
        });

        it('should return errors for invalid credentials', async () => {
            const formData = new FormData();
            formData.append('email', 'admin@example.com');
            formData.append('password', 'wrongpass');

            const result = await login(null, formData);

            expect(createSession).not.toHaveBeenCalled();
            expect(result?.errors?.email).toBeDefined();
        });

        it('should return errors for invalid input format', async () => {
            const formData = new FormData();
            formData.append('email', 'not-an-email');
            formData.append('password', '');

            const result = await login(null, formData);

            expect(result?.errors?.email).toBeDefined(); // Zod validation error
            expect(createSession).not.toHaveBeenCalled();
        });
    });

    describe('logout', () => {
        it('should delete session and redirect', async () => {
            await logout();

            expect(deleteSession).toHaveBeenCalled();
            expect(redirect).toHaveBeenCalledWith('/admin/login');
        });
    });
});
