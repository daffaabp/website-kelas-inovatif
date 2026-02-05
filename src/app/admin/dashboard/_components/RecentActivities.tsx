import React from "react";
import { CopyPlus, Calendar, UserPlus } from "lucide-react";

export function RecentActivities() {
    return (
        <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
                    Recent Activities
                </h2>
                <button className="text-sm text-[#263c32] dark:text-[#D4A373] font-medium hover:underline">
                    View All
                </button>
            </div>
            <div className="space-y-6 flex-1">
                {/* Activity 1 */}
                <div className="flex gap-4 group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center z-10 relative">
                            <CopyPlus className="w-5 h-5" />
                        </div>
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-100 dark:bg-gray-800 -z-0 group-last:hidden"></div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                            Blog "AI in Classrooms" updated
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Edited by{" "}
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Jane Doe
                            </span>{" "}
                            • 2 hours ago
                        </p>
                    </div>
                </div>
                {/* Activity 2 */}
                <div className="flex gap-4 group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center z-10 relative">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-100 dark:bg-gray-800 -z-0 group-last:hidden"></div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                            Schedule updated for Class 101
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Updated by{" "}
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Admin User
                            </span>{" "}
                            • 4 hours ago
                        </p>
                    </div>
                </div>
                {/* Activity 3 */}
                <div className="flex gap-4 group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center z-10 relative">
                            <UserPlus className="w-5 h-5" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                            New Instructor Added
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Registered by{" "}
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                System
                            </span>{" "}
                            • 5 hours ago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
