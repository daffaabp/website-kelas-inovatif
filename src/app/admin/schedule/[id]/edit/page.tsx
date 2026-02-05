import { AdminSidebar } from "../../../_components/AdminSidebar";
import { ThemeToggle } from "../../../_components/ThemeToggle";
import { ScheduleForm } from "../../create/_components/ScheduleForm";
import { ScheduleSidebar } from "../../create/_components/ScheduleSidebar";
import { getScheduleById, updateSchedule } from '@/app/actions/schedule';
import { toast } from 'sonner';
import { notFound, redirect } from 'next/navigation';
import { Upload } from "lucide-react";
import React from 'react';

// Client component for the form wrapper to handle action
import { EditScheduleFormWrapper } from './_components/EditScheduleFormWrapper';

export default async function EditSchedulePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const scheduleId = parseInt(id);
    if (isNaN(scheduleId)) notFound();

    const schedule = await getScheduleById(scheduleId);
    if (!schedule) notFound();

    async function handleUpdate(formData: FormData) {
        'use server';

        const res = await updateSchedule(scheduleId, {
            title: formData.get('title'),
            type: formData.get('type'),
            speaker_name: formData.get('speaker_name'),
            speaker_role: formData.get('speaker_role'),
            speaker_image: formData.get('speaker_image'),
            date: formData.get('date'),
            start_time: formData.get('start_time'),
            end_time: formData.get('end_time'),
            location: formData.get('location'),
            description: formData.get('description'),
        });

        if (res.msg === 'success') {
            redirect('/admin/schedule');
        }
        // If error, we'd ideally show toast but we are in server action.
        // For better UX we should use a client component wrapper or useActionState.
        // I will implement a client wrapper below.
    }

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <EditScheduleFormWrapper schedule={schedule} scheduleId={scheduleId} />
            </main>
            <ThemeToggle />
        </div>
    );
}
