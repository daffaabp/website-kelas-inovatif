"use client";

import React from "react";
import { AdminSidebar } from "../../_components/AdminSidebar";
import { ThemeToggle } from "../../_components/ThemeToggle";
import { CreatePostHeader } from "./_components/CreatePostHeader";
import { PostMainContent } from "./_components/PostMainContent";
import { PostSidebar } from "./_components/PostSidebar";

import { createBlog } from "@/app/actions/blog";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { BlogStatus } from '@prisma/client';

export default function CreatePostPage() {
    const router = useRouter();

    async function handleAction(formData: FormData) {
        const readTimeVal = formData.get('read_time');
        const readTime = readTimeVal ? `${readTimeVal} min read` : '5 min read';

        const res = await createBlog({
            title: formData.get('title') as string,
            slug: formData.get('slug') as string,
            excerpt: formData.get('excerpt') as string | undefined,
            content: formData.get('content') as string | undefined,
            category: formData.get('category') as string | undefined,
            image: formData.get('image') as string | undefined,
            contentImage: formData.get('contentImage') as string | undefined, // Keep usage of URL input if needed
            image_file: formData.get('image_file') as File | undefined, // File upload for thumbnail
            content_image_file: formData.get('content_image_file') as File | undefined, // File upload for content image
            read_time: readTime,
            featured: formData.get('featured') === 'on',
            status: formData.get('status') as BlogStatus | undefined,
            // Author hardcoded or pulled from auth session in real app
            author_name: 'Admin',
            author_image: '/images/logo-kelas-inovatif/admin_image_placeholder.avif',
        });

        if (res.msg === 'success') {
            toast.success('Blog post created successfully');
            router.push('/admin/blogs');
        } else {
            toast.error(res.msg);
        }
    }

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full pb-24">
                    <form action={handleAction}>
                        <CreatePostHeader />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <PostMainContent />
                            <PostSidebar />
                        </div>
                    </form>
                    <footer className="mt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2026 Kelas Inovatif. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
