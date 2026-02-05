import React from "react";
import { AdminSidebar } from "../_components/AdminSidebar";
import { ThemeToggle } from "../_components/ThemeToggle";
import { DashboardHeader } from "./_components/DashboardHeader";
import { StatsOverview } from "./_components/StatsOverview";
import { AnalyticsChart } from "./_components/AnalyticsChart";
import { RecentActivities } from "./_components/RecentActivities";
import { UpcomingSchedule } from "./_components/UpcomingSchedule";
import { getDashboardData } from "@/app/actions/dashboard";

export default async function AdminDashboardPage() {
    const data = await getDashboardData();

    return (
        <div className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full flex flex-col gap-6 md:gap-8">
                    <DashboardHeader />
                    <StatsOverview stats={data.stats} />
                    <AnalyticsChart />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                        <RecentActivities activities={data.activities} />
                        <UpcomingSchedule schedules={data.upcomingSchedules} />
                    </div>
                    <footer className="mt-4 mb-6 text-center text-xs text-gray-400 dark:text-gray-600">
                        © 2026 Kelas Inovatif. All rights reserved.
                    </footer>
                </div>
            </main>
            <ThemeToggle />
        </div>
    );
}
