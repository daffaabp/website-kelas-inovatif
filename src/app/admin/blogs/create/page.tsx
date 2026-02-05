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

export default function CreatePostPage() {
    const router = useRouter();

    async function handleAction(formData: FormData) {
        const readTimeVal = formData.get('read_time');
        const readTime = readTimeVal ? `${readTimeVal} min read` : '5 min read';

        const res = await createBlog({
            title: formData.get('title'),
            slug: formData.get('slug'),
            excerpt: formData.get('excerpt'),
            content: formData.get('content'),
            category: formData.get('category'),
            image: formData.get('image'),
            read_time: readTime,
            featured: formData.get('featured') === 'on',
            status: formData.get('status'),
            // Author hardcoded or pulled from auth session in real app
            author_name: 'Admin',
            author_image: 'https://ui-avatars.com/api/?name=Admin',
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
