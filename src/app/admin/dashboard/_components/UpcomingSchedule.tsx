import React from "react";
import { User } from "lucide-react";

export function UpcomingSchedule() {
    return (
        <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
                    Upcoming Schedule
                </h2>
                <button className="text-sm text-[#263c32] dark:text-[#D4A373] font-medium hover:underline">
                    Full Schedule
                </button>
            </div>
            <div className="space-y-4 flex-1">
                {/* Event 1 */}
                <div className="flex items-center p-3 rounded-lg hover:bg-[#F3F1EC] dark:hover:bg-gray-800/50 transition-colors border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-[#263c32]/5 dark:bg-white/5 rounded-lg mr-4 text-[#263c32] dark:text-[#D4A373] shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                            Oct
                        </span>
                        <span className="text-lg font-bold leading-none">25</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                Introduction to UX Design
                            </h4>
                            <span className="text-xs font-medium text-[#D4A373] bg-[#D4A373]/10 px-2 py-0.5 rounded">
                                09:00 AM
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                            <User className="w-3 h-3" /> Sarah Kim • Room 302
                        </p>
                    </div>
                </div>
                {/* Event 2 */}
                <div className="flex items-center p-3 rounded-lg hover:bg-[#F3F1EC] dark:hover:bg-gray-800/50 transition-colors border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-[#263c32]/5 dark:bg-white/5 rounded-lg mr-4 text-[#263c32] dark:text-[#D4A373] shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                            Oct
                        </span>
                        <span className="text-lg font-bold leading-none">25</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                Modern History
                            </h4>
                            <span className="text-xs font-medium text-[#D4A373] bg-[#D4A373]/10 px-2 py-0.5 rounded">
                                11:00 AM
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                            <User className="w-3 h-3" /> Alex Morgan • Room 105
                        </p>
                    </div>
                </div>
                {/* Event 3 */}
                <div className="flex items-center p-3 rounded-lg hover:bg-[#F3F1EC] dark:hover:bg-gray-800/50 transition-colors border border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-[#263c32]/5 dark:bg-white/5 rounded-lg mr-4 text-[#263c32] dark:text-[#D4A373] shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-wide opacity-70">
                            Oct
                        </span>
                        <span className="text-lg font-bold leading-none">25</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                                Creative Writing Workshop
                            </h4>
                            <span className="text-xs font-medium text-[#D4A373] bg-[#D4A373]/10 px-2 py-0.5 rounded">
                                02:00 PM
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                            <User className="w-3 h-3" /> Jane Doe • Room 204
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
