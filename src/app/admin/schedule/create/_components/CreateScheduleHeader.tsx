"use client";

import React from "react";
import { Upload } from "lucide-react";
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="px-4 py-2 text-sm font-medium text-white bg-[#263c32] rounded-lg hover:bg-[#1e3028] shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50"
        >
            <Upload className="w-4 h-4" />
            {pending ? 'Saving...' : 'Publish'}
        </button>
    );
}

export function CreateScheduleHeader() {
    return (
        <>
            <div className="md:hidden flex items-center justify-between mb-8 sticky top-0 bg-[#F3F1EC] dark:bg-[#111816] z-10 py-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#263c32] flex items-center justify-center text-white font-serif font-bold italic text-lg">
                        K
                    </div>
                    <span className="font-serif font-bold text-lg text-[#263c32] dark:text-white">
                        Kelas Inovatif
                    </span>
                </div>
                <button className="text-gray-600 dark:text-gray-300 p-2">
                    {/* Menu icon placeholder */}
                    <span className="material-icons-round">menu</span>
                </button>
            </div>
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#263c32] dark:text-white leading-tight">
                        Create New Schedule
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Save Draft
                    </button>
                    <SubmitButton />
                </div>
            </header>
        </>
    );
}
