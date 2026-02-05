"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['Semua Acara', 'Workshop', 'Kuliah', 'Upacara'];

export function EventFilters() {
    const [selectedCategory, setSelectedCategory] = useState('Semua Acara');
    const [currentMonth, setCurrentMonth] = useState('Oktober 2023');

    return (
        <section className="pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 dark:border-gray-700 pb-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${selectedCategory === category
                                    ? 'bg-schedule-primary text-white shadow-md'
                                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-schedule-primary hover:text-schedule-primary dark:hover:text-white'
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-schedule-surface-dark px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                        <button className="text-gray-400 hover:text-schedule-primary dark:hover:text-white cursor-pointer">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-gray-800 dark:text-gray-100 min-w-[100px] text-center">
                            {currentMonth}
                        </span>
                        <button className="text-gray-400 hover:text-schedule-primary dark:hover:text-white cursor-pointer">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
