import React from "react";
import { AdminSidebar } from "../_components/AdminSidebar";
import { BlogHeader } from "./_components/BlogHeader";
import { StatsCards } from "./_components/StatsCards";
import { BlogTable } from "./_components/BlogTable";
import { ThemeToggle } from "../_components/ThemeToggle";
import { getBlogs, getBlogStats } from "@/app/actions/blog";

export default async function AdminBlogsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedSearchParams = await searchParams;
    const page = typeof resolvedSearchParams.page === 'string' ? parseInt(resolvedSearchParams.page) : 1;
    const { data: blogs, metadata } = await getBlogs({ page, limit: 6 });
    const stats = await getBlogStats();

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full">
                    <BlogHeader />
                    <StatsCards total={stats.total} published={stats.published} drafts={stats.drafts} />
                    <BlogTable blogs={blogs} metadata={metadata} />
                    <footer className="mt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2026 Kelas Inovatif. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
