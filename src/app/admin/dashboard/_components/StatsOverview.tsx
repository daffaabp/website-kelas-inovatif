import React from "react";
import { Users, GraduationCap, FileText, Calendar, ArrowUp, ArrowRight, Minus } from "lucide-react";

export function StatsOverview() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Visitors */}
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <Users className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                        +12% <ArrowUp className="w-3 h-3" />
                    </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                    12.5k
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    Total Visitors
                </p>
            </div>

            {/* Enrollments */}
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                        +5% <ArrowUp className="w-3 h-3" />
                    </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                    843
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    New Enrollments
                </p>
            </div>

            {/* Blogs */}
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4A373]/10 text-[#D4A373] flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                        0% <Minus className="w-3 h-3" />
                    </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                    98
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    Active Blogs
                </p>
            </div>

            {/* Events */}
            <div className="bg-white dark:bg-[#1C2624] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                        +3 <ArrowUp className="w-3 h-3" />
                    </span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white">
                    12
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    Schedule Events
                </p>
            </div>
        </div>
    );
}
