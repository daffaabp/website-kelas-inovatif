'use server';

import { prisma } from '@/lib/prisma';

export async function getDashboardData() {
    try {
        const now = new Date();

        // 1. Counts
        const [
            blogsCount,
            schedulesCount,
            publishedBlogsCount,
            upcomingSchedules
        ] = await Promise.all([
            prisma.blog.count(),
            prisma.schedule.count(),
            prisma.blog.count({ where: { status: 'published' } }),
            prisma.schedule.findMany({
                where: { date: { gte: now } },
                orderBy: { date: 'asc' },
                take: 3
            })
        ]);

        // 2. Recent Activities (Mocked by combining latest updates)
        // Fetch latest 3 blogs and 3 schedules
        const [latestBlogs, latestSchedules] = await Promise.all([
            prisma.blog.findMany({
                orderBy: { updatedAt: 'desc' },
                take: 3,
                select: { id: true, title: true, updatedAt: true, authorName: true }
            }),
            prisma.schedule.findMany({
                orderBy: { updatedAt: 'desc' },
                take: 3,
                select: { id: true, title: true, updatedAt: true }
            })
        ]);

        // Combine and sort
        const activities = [
            ...latestBlogs.map(b => ({
                id: `blog-${b.id}`,
                type: 'blog',
                message: `Blog "${b.title}" updated`,
                user: b.authorName || 'Admin',
                time: b.updatedAt
            })),
            ...latestSchedules.map(s => ({
                id: `schedule-${s.id}`,
                type: 'schedule',
                message: `Schedule "${s.title}" updated`,
                user: 'Admin',
                time: s.updatedAt
            }))
        ].sort((a, b) => b.time.getTime() - a.time.getTime()).slice(0, 5);

        return {
            stats: {
                totalBlogs: blogsCount,
                activeBlogs: publishedBlogsCount,
                totalSchedules: schedulesCount,
            },
            upcomingSchedules: upcomingSchedules.map(s => ({
                id: s.id,
                title: s.title,
                speaker: s.speakerName,
                location: s.location,
                date: s.date,
                startTime: s.startTime
            })),
            activities
        };

    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        return {
            stats: { totalBlogs: 0, activeBlogs: 0, totalSchedules: 0 },
            upcomingSchedules: [],
            activities: []
        };
    }
}
