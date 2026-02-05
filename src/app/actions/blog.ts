'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getBlogs({ page = 1, limit = 10, query = '' }: { page?: number; limit?: number; query?: string } = {}) {
    try {
        const offset = (page - 1) * limit;

        let baseQuery = db('blogs');

        if (query) {
            baseQuery = baseQuery.where('title', 'like', `%${query}%`);
        }

        const countResult = await baseQuery.clone().count('id as total').first();
        const total = countResult ? parseInt(countResult.total as string) : 0;
        const totalPages = Math.ceil(total / limit);

        const blogs = await baseQuery
            .select('*')
            .orderBy('created_at', 'desc')
            .limit(limit)
            .offset(offset);

        return {
            data: blogs.map(blog => ({
                ...blog,
                created_at: blog.created_at?.toISOString(),
                updated_at: blog.updated_at?.toISOString(),
                slug: blog.slug,
                status: blog.status,
            })),
            metadata: {
                total,
                page,
                limit,
                totalPages,
            }
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return {
            data: [],
            metadata: {
                total: 0,
                page: 1,
                limit: 10,
                totalPages: 0,
            }
        };
    }
}

export async function getBlogById(id: number) {
    try {
        const blog = await db('blogs').where({ id }).first();
        if (!blog) return null;
        return {
            ...blog,
            created_at: blog.created_at?.toISOString(),
            updated_at: blog.updated_at?.toISOString(),
            slug: blog.slug,
            status: blog.status,
        };
    } catch (error) {
        console.error('Error fetching blog by id:', error);
        return null;
    }
}

export async function getBlogBySlug(slug: string) {
    try {
        let blog = await db('blogs').where({ slug }).first();

        // If not found by slug, and input is numeric, try ID (Legacy support)
        if (!blog && !isNaN(parseInt(slug))) {
            blog = await db('blogs').where({ id: parseInt(slug) }).first();
        }

        if (!blog) return null;
        return {
            ...blog,
            created_at: blog.created_at?.toISOString(),
            updated_at: blog.updated_at?.toISOString(),
            slug: blog.slug,
            status: blog.status,
        };
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        return null;
    }
}

export async function createBlog(data: any) {
    try {
        // Ensure slug is unique if possible, or handle DB error.
        // For now trusting the input.
        await db('blogs').insert({
            title: data.title,
            slug: data.slug, // Add slug
            excerpt: data.excerpt,
            content: data.content,
            category: data.category,
            author_name: data.author_name,
            author_image: data.author_image,
            image: data.image,
            read_time: data.read_time,
            featured: data.featured || false,
            status: data.status || 'draft',
            created_at: new Date(),
            updated_at: new Date(),
        });

        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error creating blog:', error);
        return { msg: 'Failed to create blog' };
    }
}

export async function updateBlog(id: number, data: any) {
    try {
        await db('blogs').where({ id }).update({
            title: data.title,
            slug: data.slug, // Add slug
            excerpt: data.excerpt,
            content: data.content,
            category: data.category,
            author_name: data.author_name,
            author_image: data.author_image,
            image: data.image,
            read_time: data.read_time,
            featured: data.featured,
            status: data.status,
            updated_at: new Date(),
        });

        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error updating blog:', error);
        return { msg: 'Failed to update blog' };
    }
}

export async function deleteBlog(id: number) {
    try {
        await db('blogs').where({ id }).del();
        revalidatePath('/blogs');
        revalidatePath('/admin/blogs');
        revalidatePath('/homepage');
        return { msg: 'success' };
    } catch (error) {
        console.error('Error deleting blog:', error);
        return { msg: 'Failed to delete blog' };
    }
}

export async function getLatestBlogs(limit: number = 3) {
    try {
        const blogs = await db('blogs')
            .where({ status: 'published' })
            .select('*')
            .orderBy('created_at', 'desc')
            .limit(limit);

        return blogs.map(blog => ({
            ...blog,
            created_at: blog.created_at?.toISOString(),
            updated_at: blog.updated_at?.toISOString(),
            slug: blog.slug,
            status: blog.status,
        }));
    } catch (error) {
        console.error('Error fetching latest blogs:', error);
        return [];
    }
}

export async function getBlogStats() {
    try {
        const totalResult = await db('blogs').count('id as count').first();
        const total = totalResult ? parseInt(totalResult.count as string) : 0;

        const publishedResult = await db('blogs')
            .where('status', 'published')
            .orWhereNull('status') // Assuming legacy posts with null status are published
            .count('id as count')
            .first();
        const published = publishedResult ? parseInt(publishedResult.count as string) : 0;

        const draftsResult = await db('blogs')
            .where('status', 'draft')
            .count('id as count')
            .first();
        const drafts = draftsResult ? parseInt(draftsResult.count as string) : 0;

        return {
            total,
            published,
            drafts
        };
    } catch (error) {
        console.error('Error fetching blog stats:', error);
        return {
            total: 0,
            published: 0,
            drafts: 0
        };
    }
}
