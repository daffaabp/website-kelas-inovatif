import React from "react";
import { Calendar, MonitorPlay, CheckCircle } from "lucide-react";

export interface ScheduleStatsProps {
    stats: {
        totalEvents: number;
        upcomingEvents: number;
        completedEvents: number;
    };
}

export function ScheduleStats({ stats }: ScheduleStatsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Total Events
                    </p>
                    <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                        {stats.totalEvents}
                    </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Calendar className="w-6 h-6" />
                </div>
            </div>
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Upcoming
                    </p>
                    <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                        {stats.upcomingEvents}
                    </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <MonitorPlay className="w-6 h-6" />
                </div>
            </div>
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Completed
                    </p>
                    <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                        {stats.completedEvents}
                    </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}
