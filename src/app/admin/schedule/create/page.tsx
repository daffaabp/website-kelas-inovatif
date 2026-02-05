
"use client";

import React from "react";
import { AdminSidebar } from "../../_components/AdminSidebar";
import { ThemeToggle } from "../../_components/ThemeToggle";
import { CreateScheduleHeader } from "./_components/CreateScheduleHeader";
import { ScheduleForm } from "./_components/ScheduleForm";
import { ScheduleSidebar } from "./_components/ScheduleSidebar";
import { createSchedule } from '@/app/actions/schedule';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function CreateSchedulePage() {
    const router = useRouter();

    async function handleAction(formData: FormData) {
        const res = await createSchedule({
            title: formData.get('title'),
            type: formData.get('type'),
            speaker_name: formData.get('speaker_name'),
            speaker_role: formData.get('speaker_role'),
            speaker_image: formData.get('speaker_image'),
            speaker_image_file: formData.get('speaker_image_file'),
            image: formData.get('image'),
            featured_image_file: formData.get('featured_image_file'),
            date: formData.get('date'),
            start_time: formData.get('start_time'),
            end_time: formData.get('end_time'),
            location: formData.get('location'),
            description: formData.get('description'),
            excerpt: formData.get('excerpt'),
            benefits: formData.get('benefits'),
            register_url: formData.get('register_url'),
            original_price: formData.get('original_price'),
            discounted_price: formData.get('discounted_price'),
        });

        if (res.msg === 'success') {
            toast.success('Schedule created successfully');
            router.push('/admin/schedule');
        } else {
            toast.error(res.msg);
        }
    }

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <form action={handleAction} className="p-6 md:p-10 max-w-7xl mx-auto min-h-full flex flex-col">
                    <CreateScheduleHeader />
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                        <ScheduleForm />
                        <ScheduleSidebar />
                    </div>
                    <footer className="mt-auto pt-10 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2023 Kelas Inovatif Admin Panel. All rights reserved.
                    </footer>
                </form>
            </main>
            <ThemeToggle />
        </div>
    );
}
