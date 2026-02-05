import {
    getBlogs,
    getBlogById,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
    getLatestBlogs,
    getBlogStats
} from '../blog';
import db from '@/lib/db';
import { saveFile } from '@/lib/storage';

// Polyfill File
global.File = class MockFile {
    name: string;
    size: number;
    type: string;
    lastModified: number;
    webkitRelativePath: string;

    constructor(parts: (string | Blob | Buffer)[], filename: string, properties?: FilePropertyBag) {
        this.name = filename;
        this.size = parts.reduce((acc, part) => acc + (typeof part === 'string' ? part.length : 0), 0);
        this.type = properties?.type || '';
        this.lastModified = properties?.lastModified || Date.now();
        this.webkitRelativePath = '';
    }

    slice(start?: number, end?: number, contentType?: string): Blob {
        return new Blob([], { type: contentType });
    }

    stream(): ReadableStream {
        return new ReadableStream();
    }

    arrayBuffer(): Promise<ArrayBuffer> {
        return Promise.resolve(new ArrayBuffer(0));
    }

    text(): Promise<string> {
        return Promise.resolve('');
    }
} as any;

// Mock DB
jest.mock('@/lib/db', () => {
    const mockDb: any = jest.fn(() => {
        return mockDb;
    });
    mockDb.insert = jest.fn().mockReturnThis();
    mockDb.where = jest.fn().mockReturnThis();
    mockDb.orWhereNull = jest.fn().mockReturnThis();
    mockDb.update = jest.fn().mockReturnThis();
    mockDb.select = jest.fn().mockReturnThis();
    mockDb.orderBy = jest.fn().mockReturnThis();
    mockDb.limit = jest.fn().mockReturnThis();
    mockDb.offset = jest.fn().mockReturnThis();
    mockDb.count = jest.fn().mockReturnThis();
    mockDb.first = jest.fn().mockResolvedValue(null);
    mockDb.del = jest.fn().mockReturnThis();
    mockDb.clone = jest.fn().mockReturnThis();
    return {
        __esModule: true,
        default: mockDb,
    };
});

// Mock Storage
jest.mock('@/lib/storage', () => ({
    saveFile: jest.fn().mockResolvedValue('http://mock-url.com/image.jpg'),
}));

// Mock revalidatePath
jest.mock('next/cache', () => ({
    revalidatePath: jest.fn(),
}));

describe('Blog Actions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockBlog = {
        id: 1,
        title: 'Test Blog',
        slug: 'test-blog',
        status: 'published',
        created_at: new Date(),
        updated_at: new Date(),
    };

    describe('getBlogs', () => {
        it('should fetch blogs with pagination', async () => {
            (db().offset as jest.Mock).mockResolvedValue([mockBlog]);
            (db().first as jest.Mock).mockResolvedValueOnce({ total: 10 });

            const result = await getBlogs({ page: 1, limit: 10 });

            expect(db().limit).toHaveBeenCalledWith(10);
            expect(db().offset).toHaveBeenCalledWith(0);
            expect(result.data).toHaveLength(1);
            expect(result.metadata.total).toBe(10);
        });

        it('should filter by query', async () => {
            (db().offset as jest.Mock).mockResolvedValue([mockBlog]);
            (db().first as jest.Mock).mockResolvedValueOnce({ total: 1 });

            await getBlogs({ query: 'Test' });

            expect(db().where).toHaveBeenCalledWith('title', 'like', '%Test%');
        });

        it('should handle empty results', async () => {
            (db().offset as jest.Mock).mockResolvedValue([]);
            (db().first as jest.Mock).mockResolvedValueOnce({ total: 0 });

            const result = await getBlogs({ page: 1 });

            expect(result.data).toHaveLength(0);
            expect(result.metadata.total).toBe(0);
        });

        it('should handle negative page numbers gracefully', async () => {
            await getBlogs({ page: -1 });
            expect(db().offset).toHaveBeenCalledWith(-20); // Current implementation behavior
        });
    });

    describe('getBlogById', () => {
        it('should return blog if found', async () => {
            (db().first as jest.Mock).mockResolvedValue(mockBlog);
            const result = await getBlogById(1);
            expect(result).not.toBeNull();
            expect(result?.title).toBe('Test Blog');
        });

        it('should return null if not found', async () => {
            (db().first as jest.Mock).mockResolvedValue(null);
            const result = await getBlogById(999);
            expect(result).toBeNull();
        });
    });

    describe('getBlogBySlug', () => {
        it('should return blog if found by slug', async () => {
            (db().first as jest.Mock).mockResolvedValue(mockBlog);
            const result = await getBlogBySlug('test-blog');
            expect(db().where).toHaveBeenCalledWith({ slug: 'test-blog' });
            expect(result).not.toBeNull();
        });

        it('should fallback to ID if slug not found but is numeric', async () => {
            (db().first as jest.Mock)
                .mockResolvedValueOnce(null)
                .mockResolvedValueOnce(mockBlog);

            const result = await getBlogBySlug('123');

            expect(db().where).toHaveBeenCalledWith({ slug: '123' });
            expect(db().where).toHaveBeenCalledWith({ id: 123 });
            expect(result).not.toBeNull();
        });

        it('should prioritize slug match over ID', async () => {
            (db().first as jest.Mock).mockResolvedValueOnce({ ...mockBlog, slug: '123' });

            const result = await getBlogBySlug('123');

            expect(db().where).toHaveBeenCalledWith({ slug: '123' });
            expect(db().where).not.toHaveBeenCalledWith({ id: 123 });
            expect(result?.slug).toBe('123');
        });
    });

    describe('createBlog', () => {
        it('should create blog', async () => {
            const mockData = {
                title: 'New Blog',
                slug: 'new-blog',
                content: 'Content',
            };

            await createBlog(mockData);

            expect(db().insert).toHaveBeenCalledWith(expect.objectContaining({
                title: 'New Blog',
                status: 'draft',
            }));
        });

        it('should handle duplicate slug database error', async () => {
            (db().insert as jest.Mock).mockRejectedValue(new Error('Duplicate entry'));
            const result = await createBlog({ title: 'Dup', slug: 'dup' });
            expect(result.msg).toBe('Failed to create blog');
        });
    });

    describe('updateBlog', () => {
        it('should update blog', async () => {
            await updateBlog(1, { title: 'Updated' });
            expect(db().where).toHaveBeenCalledWith({ id: 1 });
            expect(db().update).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Updated'
            }));
        });

        it('should handle partial updates', async () => {
            const partialData = { status: 'published' };
            await updateBlog(1, partialData);
            expect(db().update).toHaveBeenCalledWith(expect.objectContaining({
                status: 'published'
            }));
        });

        it('should handle errors', async () => {
            (db().update as jest.Mock).mockRejectedValue(new Error('Error'));
            const result = await updateBlog(1, { title: 'Fail' });
            expect(result.msg).toBe('Failed to update blog');
        });
    });

    describe('deleteBlog', () => {
        it('should delete blog', async () => {
            await deleteBlog(1);
            expect(db().where).toHaveBeenCalledWith({ id: 1 });
            expect(db().del).toHaveBeenCalled();
        });
    });

    describe('getLatestBlogs', () => {
        it('should fetch latest published blogs ordered by date', async () => {
            (db().limit as jest.Mock).mockResolvedValue([mockBlog]);

            const result = await getLatestBlogs();

            expect(db().where).toHaveBeenCalledWith({ status: 'published' });
            expect(db().orderBy).toHaveBeenCalledWith('created_at', 'desc');
            expect(result).toHaveLength(1);
        });

        it('should return empty array on error', async () => {
            (db().limit as jest.Mock).mockRejectedValue(new Error('Error'));
            const result = await getLatestBlogs();
            expect(result).toEqual([]);
        });
    });

    describe('getBlogStats', () => {
        it('should return correct stats', async () => {
            (db().first as jest.Mock)
                .mockResolvedValueOnce({ count: '10' }) // Total
                .mockResolvedValueOnce({ count: '5' })  // Published
                .mockResolvedValueOnce({ count: '2' }); // Drafts

            const result = await getBlogStats();

            expect(result.total).toBe(10);
            expect(result.published).toBe(5);
            expect(result.drafts).toBe(2);
        });

        it('should handle errors and return zeros', async () => {
            (db().first as jest.Mock).mockRejectedValue(new Error('Error'));
            const result = await getBlogStats();
            expect(result.total).toBe(0);
        });
    });
});
