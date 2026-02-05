'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getSchedules(page = 1, limit = 6, type?: string, month?: number, year?: number) {
    try {
        const offset = (page - 1) * limit;

        let query = db('schedules');
        let countQuery = db('schedules');

        if (type && type !== 'All') {
            query = query.where('type', type);
            countQuery = countQuery.where('type', type);
        }

        if (month && year) {
            // Construct start and end dates for the month
            const startDate = new Date(year, month - 1, 1);
            const endDate = new Date(year, month, 0, 23, 59, 59, 999); // Last day of the month at 23:59:59.999

            query = query.whereBetween('date', [startDate, endDate]);
            countQuery = countQuery.whereBetween('date', [startDate, endDate]);
        }

        const [countResult] = await countQuery.count('id as total');
        const total = countResult.total as number;

        const schedules = await query
            .select('*')
            .orderBy('date', 'desc')
            .limit(limit)
            .offset(offset);

        // Convert dates to string to avoid serialization issues in Next.js
        const data = schedules.map(schedule => ({
            ...schedule,
            date: schedule.date.toISOString(),
            created_at: schedule.created_at?.toISOString(),
            updated_at: schedule.updated_at?.toISOString(),
        }));

        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    } catch (error) {
        console.error('Error fetching schedules:', error);
        return {
            data: [],
            meta: { total: 0, page: 1, limit: 6, totalPages: 0 }
        };
    }
}

export async function getScheduleById(id: number) {
    try {
        const schedule = await db('schedules').where({ id }).first();
        if (!schedule) return null;
        return {
            ...schedule,
            date: schedule.date.toISOString(),
            created_at: schedule.created_at?.toISOString(),
            updated_at: schedule.updated_at?.toISOString(),
        };
    } catch (error) {
        console.error('Error fetching schedule by id:', error);
        return null;
    }
}

import { saveFile } from '@/lib/storage';

// ... imports

export async function createSchedule(data: any) {
    try {
        // Handle speaker image upload
        if (data.speaker_image_file && data.speaker_image_file instanceof File && data.speaker_image_file.size > 0) {
            data.speaker_image = await saveFile(data.speaker_image_file, 'speaker');
        }

        // Handle featured image upload
        if (data.featured_image_file && data.featured_image_file instanceof File && data.featured_image_file.size > 0) {
            data.image = await saveFile(data.featured_image_file, 'schedule');
        }

        // Basic validation
        if (!data.title || !data.date || !data.start_time || !data.end_time) {
            return { msg: 'Missing required fields' };
        }

        await db('schedules').insert({
            title: data.title,
            type: data.type,
            speaker_name: data.speaker_name,
            speaker_role: data.speaker_role,
            speaker_image: data.speaker_image,
            image: data.image,
            date: new Date(data.date), // Ensure it's a Date object
            start_time: data.start_time,
            end_time: data.end_time,
            location: data.location,
            description: data.description,
            excerpt: data.excerpt,
            benefits: data.benefits,
            register_url: data.register_url,
            original_price: data.original_price,
            discounted_price: data.discounted_price,
            created_at: new Date(),
            updated_at: new Date(),
        });

        revalidatePath('/admin/schedule');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating schedule:', error);
        return { msg: 'Failed to create schedule' };
    }
}

export async function updateSchedule(id: number, data: any) {
    try {
        // Handle speaker image upload
        if (data.speaker_image_file && data.speaker_image_file instanceof File && data.speaker_image_file.size > 0) {
            data.speaker_image = await saveFile(data.speaker_image_file, 'speaker');
        }

        // Handle featured image upload
        if (data.featured_image_file && data.featured_image_file instanceof File && data.featured_image_file.size > 0) {
            data.image = await saveFile(data.featured_image_file, 'schedule');
        }

        await db('schedules').where({ id }).update({
            title: data.title,
            type: data.type,
            speaker_name: data.speaker_name,
            speaker_role: data.speaker_role,
            speaker_image: data.speaker_image,
            image: data.image,
            date: new Date(data.date),
            start_time: data.start_time,
            end_time: data.end_time,
            location: data.location,
            description: data.description,
            excerpt: data.excerpt,
            benefits: data.benefits,
            register_url: data.register_url,
            original_price: data.original_price,
            discounted_price: data.discounted_price,
            updated_at: new Date(),
        });

        revalidatePath('/admin/schedule');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error updating schedule:', error);
        return { msg: 'Failed to update schedule' };
    }
}

export async function deleteSchedule(id: number) {
    try {
        await db('schedules').where({ id }).del();
        revalidatePath('/admin/schedule');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting schedule:', error);
        return { msg: 'Failed to delete schedule' };
    }
}

export async function getLatestSchedules(limit: number = 10) {
    try {
        const schedules = await db('schedules')
            .select('*')
            .orderBy('updated_at', 'desc')
            .orderBy('date', 'desc')
            .limit(limit);

        // Convert dates to string to avoid serialization issues in Next.js
        return schedules.map(schedule => ({
            ...schedule,
            date: schedule.date.toISOString(),
            created_at: schedule.created_at?.toISOString(),
            updated_at: schedule.updated_at?.toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching latest schedules:', error);
        return [];
    }
}

export async function getScheduleStats() {
    try {
        const now = new Date();

        const [totalResult] = await db('schedules').count('id as count');
        const [upcomingResult] = await db('schedules').where('date', '>=', now).count('id as count');
        const [completedResult] = await db('schedules').where('date', '<', now).count('id as count');

        return {
            totalEvents: Number(totalResult.count),
            upcomingEvents: Number(upcomingResult.count),
            completedEvents: Number(completedResult.count)
        };
    } catch (error) {
        console.error('Error fetching schedule stats:', error);
        return {
            totalEvents: 0,
            upcomingEvents: 0,
            completedEvents: 0
        };
    }
}
