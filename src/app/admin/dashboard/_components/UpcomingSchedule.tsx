import React from "react";
import { User } from "lucide-react";

import { format } from "date-fns";
import { id } from "date-fns/locale";
import Link from "next/link";

interface UpcomingScheduleProps {
    schedules: any[];
}

export function UpcomingSchedule({ schedules }: UpcomingScheduleProps) {
    return (
        <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
                    Upcoming Schedule
                </h2>
                <Link href="/admin/schedule" className="text-sm text-[#263c32] dark:text-[#D4A373] font-medium hover:underline">
                    Full Schedule
                </Link>
            </div>
            <div className="space-y-4 flex-1">
                {schedules.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                        No upcoming events
                    </div>
                ) : (
                    schedules.map((schedule) => (
                        <div key={schedule.id} className="flex items-center p-3 rounded-lg hover:bg-[#F3F1EC] dark:hover:bg-gray-800/50 transition-colors border border-gray-100 dark:border-gray-800">
                            <div className="flex flex-col items-center justify-center w-12 h-12 bg-[#263c32]/5 dark:bg-white/5 rounded-lg mr-4 text-[#263c32] dark:text-[#D4A373] shrink-0">
                                <span className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                                    {format(new Date(schedule.date), 'MMM', { locale: id })}
                                </span>
                                <span className="text-lg font-bold leading-none">
                                    {format(new Date(schedule.date), 'dd', { locale: id })}
                                </span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-medium text-gray-800 dark:text-white text-sm line-clamp-1">
                                        {schedule.title}
                                    </h4>
                                    <span className="text-xs font-medium text-[#D4A373] bg-[#D4A373]/10 px-2 py-0.5 rounded shrink-0 ml-2">
                                        {schedule.startTime}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1 line-clamp-1">
                                    <User className="w-3 h-3" /> {schedule.speaker} • {schedule.location}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
