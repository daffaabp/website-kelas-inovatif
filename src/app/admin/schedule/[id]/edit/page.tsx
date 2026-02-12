import { AdminSidebar } from "../../../_components/AdminSidebar";
import { ThemeToggle } from "../../../_components/ThemeToggle";
import { getScheduleById } from '@/app/actions/schedule';
import { notFound } from 'next/navigation';
import React from 'react';

// Client component for the form wrapper to handle action
import { EditScheduleFormWrapper } from './_components/EditScheduleFormWrapper';

export default async function EditSchedulePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const scheduleId = parseInt(id);
    if (isNaN(scheduleId)) notFound();

    const schedule = await getScheduleById(scheduleId);
    if (!schedule) notFound();


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
