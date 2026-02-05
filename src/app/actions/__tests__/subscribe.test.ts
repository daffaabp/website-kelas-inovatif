import { subscribeToNewsletter } from '../subscribe';
import db from '@/lib/db';

// Mock DB
jest.mock('@/lib/db', () => {
    const mockDb: any = jest.fn(() => {
        return mockDb;
    });
    mockDb.insert = jest.fn().mockReturnThis();
    mockDb.where = jest.fn().mockReturnThis();
    mockDb.first = jest.fn().mockResolvedValue(null);
    return {
        __esModule: true,
        default: mockDb,
    };
});

describe('Subscribe Action', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should subscribe successfully with valid email', async () => {
        const formData = new FormData();
        formData.append('email', 'test@example.com');

        (db().first as jest.Mock).mockResolvedValue(null); // No existing email

        const result = await subscribeToNewsletter(null, formData);

        expect(db().where).toHaveBeenCalledWith({ email: 'test@example.com' });
        expect(db().insert).toHaveBeenCalledWith({ email: 'test@example.com' });
        expect(result).toEqual({
            success: true,
            message: "Successfully subscribed!",
        });
    });

    it('should validate invalid email', async () => {
        const formData = new FormData();
        formData.append('email', 'invalid-email');

        const result = await subscribeToNewsletter(null, formData);

        expect(db().where).not.toHaveBeenCalled();
        expect(result).toEqual({
            success: false,
            message: "Invalid email address",
        });
    });

    it('should handle duplicate email', async () => {
        const formData = new FormData();
        formData.append('email', 'test@example.com');

        (db().first as jest.Mock).mockResolvedValue({ id: 1, email: 'test@example.com' }); // Existing email

        const result = await subscribeToNewsletter(null, formData);

        expect(db().where).toHaveBeenCalledWith({ email: 'test@example.com' });
        expect(db().insert).not.toHaveBeenCalled();
        expect(result).toEqual({
            success: false,
            message: "Email already subscribed",
        });
    });

    it('should handle database errors', async () => {
        const formData = new FormData();
        formData.append('email', 'test@example.com');

        (db().first as jest.Mock).mockRejectedValue(new Error('DB Connection Failed'));

        const result = await subscribeToNewsletter(null, formData);

        expect(result).toEqual({
            success: false,
            message: "Failed to subscribe. Please try again.",
        });
    });
});
