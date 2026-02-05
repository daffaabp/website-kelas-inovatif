import {
    getSchedules,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    getLatestSchedules,
    getScheduleStats
} from '../schedule';
import db from '@/lib/db';
import { saveFile } from '@/lib/storage';

// Polyfill File for Node environment
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
    mockDb.whereBetween = jest.fn().mockReturnThis();
    mockDb.update = jest.fn().mockReturnThis();
    mockDb.select = jest.fn().mockReturnThis();
    mockDb.orderBy = jest.fn().mockReturnThis();
    mockDb.limit = jest.fn().mockReturnThis();
    mockDb.offset = jest.fn().mockReturnThis();
    mockDb.count = jest.fn().mockResolvedValue([{ total: 1, count: 5 }]);
    mockDb.first = jest.fn().mockResolvedValue(null);
    mockDb.del = jest.fn().mockReturnThis();
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

describe('Schedule Actions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockSchedule = {
        id: 1,
        title: 'Test Event',
        type: 'Webinar',
        date: new Date('2026-02-02'),
        created_at: new Date(),
        updated_at: new Date(),
        original_price: 500000,
        discounted_price: 250000,
    };

    describe('getSchedules', () => {
        it('should fetch schedules with default pagination', async () => {
            (db().offset as jest.Mock).mockResolvedValue([mockSchedule]);

            const result = await getSchedules();

            expect(db().limit).toHaveBeenCalledWith(6);
            expect(db().offset).toHaveBeenCalledWith(0);
            expect(result.data).toHaveLength(1);
            expect(result.data[0].original_price).toBe(500000);
        });

        it('should filter by type', async () => {
            (db().offset as jest.Mock).mockResolvedValue([mockSchedule]);

            await getSchedules(1, 6, 'Webinar');

            expect(db().where).toHaveBeenCalledWith('type', 'Webinar');
        });

        it('should filter by month and year', async () => {
            (db().offset as jest.Mock).mockResolvedValue([mockSchedule]);

            await getSchedules(1, 6, undefined, 2, 2026);

            // Month is 0-indexed in Date, so 2 (February) -> 1
            expect(db().whereBetween).toHaveBeenCalledWith('date', [
                new Date(2026, 1, 1),
                new Date(2026, 2, 0, 23, 59, 59, 999)
            ]);
        });
    });

    describe('getScheduleById', () => {
        it('should return schedule if found', async () => {
            (db().first as jest.Mock).mockResolvedValue(mockSchedule);

            const result = await getScheduleById(1);

            expect(result).not.toBeNull();
            expect(result?.title).toBe('Test Event');
        });

        it('should return null if not found', async () => {
            (db().first as jest.Mock).mockResolvedValue(null);

            const result = await getScheduleById(999);

            expect(result).toBeNull();
        });
    });

    describe('createSchedule', () => {
        it('should insert original_price and discounted_price', async () => {
            const mockData = {
                title: 'Test Event',
                type: 'Webinar',
                speaker_name: 'John Doe',
                date: '2026-02-02',
                start_time: '10:00',
                end_time: '12:00',
                location: 'Zoom',
                original_price: 500000,
                discounted_price: 250000,
            };

            await createSchedule(mockData);

            expect(db().insert).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Test Event',
                original_price: 500000,
                discounted_price: 250000,
            }));
        });

        it('should upload images if provided', async () => {
            const mockFile = new File(['dummy content'], 'test.png', { type: 'image/png' });
            const mockData = {
                title: 'Image Test',
                date: '2026-02-02',
                start_time: '10:00',
                end_time: '12:00',
                speaker_image_file: mockFile,
                featured_image_file: mockFile,
            };

            await createSchedule(mockData);

            expect(saveFile).toHaveBeenCalledTimes(2);
            expect(db().insert).toHaveBeenCalledWith(expect.objectContaining({
                speaker_image: 'http://mock-url.com/image.jpg',
                image: 'http://mock-url.com/image.jpg',
            }));
        });

        it('should return error if missing required fields', async () => {
            const result = await createSchedule({});
            expect(result.msg).toBe('Missing required fields');
        });

        it('should handle database errors', async () => {
            (db().insert as jest.Mock).mockRejectedValue(new Error('DB Error'));

            const result = await createSchedule({
                title: 'Fail Event',
                date: '2026-02-02',
                start_time: '10:00',
                end_time: '12:00',
            });

            expect(result.msg).toBe('Failed to create schedule');
        });
    });

    describe('updateSchedule', () => {
        it('should update original_price and discounted_price', async () => {
            const scheduleId = 1;
            const mockData = {
                title: 'Updated Event',
                original_price: 600000,
                discounted_price: 300000,
                date: '2026-02-03',
            };

            await updateSchedule(scheduleId, mockData);

            expect(db().where).toHaveBeenCalledWith({ id: scheduleId });
            expect(db().update).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Updated Event',
                original_price: 600000,
                discounted_price: 300000,
            }));
        });

        it('should handle partial updates and image uploads', async () => {
            const scheduleId = 1;
            const mockFile = new File(['dummy'], 'new.jpg', { type: 'image/jpeg' });
            const mockData = {
                title: 'Partial Update',
                speaker_image_file: mockFile,
            };

            await updateSchedule(scheduleId, mockData);

            expect(saveFile).toHaveBeenCalledWith(mockFile, 'speaker');
            expect(db().update).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Partial Update',
                speaker_image: 'http://mock-url.com/image.jpg',
            }));
        });

        it('should handle database errors', async () => {
            (db().update as jest.Mock).mockRejectedValue(new Error('Update failed'));

            const result = await updateSchedule(1, { title: 'Fail' });

            expect(result.msg).toBe('Failed to update schedule');
        });
    });

    describe('deleteSchedule', () => {
        it('should delete schedule by id', async () => {
            await deleteSchedule(1);
            expect(db().where).toHaveBeenCalledWith({ id: 1 });
            expect(db().del).toHaveBeenCalled();
        });

        it('should handle errors', async () => {
            (db().del as jest.Mock).mockRejectedValue(new Error('Delete failed'));
            const result = await deleteSchedule(1);
            expect(result.msg).toBe('Failed to delete schedule');
        });
    });

    describe('getLatestSchedules', () => {
        it('should return latest schedules', async () => {
            (db().limit as jest.Mock).mockResolvedValue([mockSchedule]);

            const result = await getLatestSchedules();

            expect(db().orderBy).toHaveBeenCalledWith('updated_at', 'desc');
            expect(result).toHaveLength(1);
        });

        it('should return empty array on error', async () => {
            (db().limit as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
            const result = await getLatestSchedules();
            expect(result).toEqual([]);
        });
    });

    describe('getScheduleStats', () => {
        it('should return stats', async () => {
            // Mocking count return value for each call (total, upcoming, completed)
            // Simplified expectation given the mock setup
            const result = await getScheduleStats();
            expect(result.totalEvents).toBe(5);
            expect(result.upcomingEvents).toBe(5);
            expect(result.completedEvents).toBe(5);
        });

        it('should return default stats on error', async () => {
            (db().count as jest.Mock).mockRejectedValue(new Error('Stats failed'));
            const result = await getScheduleStats();
            expect(result).toEqual({
                totalEvents: 0,
                upcomingEvents: 0,
                completedEvents: 0
            });
        });
    });
});
