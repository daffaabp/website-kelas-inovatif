"use client";

import React from "react";
import { Search, Bell, Menu } from "lucide-react";

export function DashboardHeader() {
    return (
        <>
            <div className="md:hidden flex items-center justify-between sticky top-0 bg-[#F3F1EC] dark:bg-[#111816] z-10 py-4 border-b border-gray-200 dark:border-gray-800 -mx-6 px-6 md:mx-0 md:px-0">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#263c32] flex items-center justify-center text-white font-serif font-bold italic text-lg">
                        K
                    </div>
                    <span className="font-serif font-bold text-lg text-[#263c32] dark:text-white">
                        Kelas Inovatif
                    </span>
                </div>
                <button className="text-gray-600 dark:text-gray-300 p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#263c32] dark:text-white mb-2 leading-tight">
                        Welcome back, Admin User!
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Here's an overview of your platform's performance today.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#263c32]/20 transition-all">
                        <Search className="text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            className="bg-transparent border-none focus:ring-0 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 w-48 lg:w-64 focus:outline-none ml-2"
                            placeholder="Search..."
                        />
                    </div>
                    <button className="bg-white dark:bg-[#1C2624] hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 p-2 rounded-full shadow-sm transition-all relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-[#1C2624]"></span>
                    </button>
                </div>
            </header>
        </>
    );
}
