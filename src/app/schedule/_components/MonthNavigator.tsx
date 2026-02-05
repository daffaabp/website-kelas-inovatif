'use client';

import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export function MonthNavigator() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get current month/year from URL or default to current date
    const currentDate = new Date();
    const currentMonth = searchParams.get('month')
        ? parseInt(searchParams.get('month')!)
        : currentDate.getMonth() + 1; // 1-indexed for display/URL
    const currentYear = searchParams.get('year')
        ? parseInt(searchParams.get('year')!)
        : currentDate.getFullYear();

    // State for the popover's internal year view
    const [viewYear, setViewYear] = useState(currentYear);
    const [isOpen, setIsOpen] = useState(false);

    const date = new Date(currentYear, currentMonth - 1);
    const monthName = date.toLocaleDateString('id-ID', { month: 'long' });

    const handleNavigate = useCallback((direction: 'prev' | 'next') => {
        const newDate = new Date(currentYear, currentMonth - 1);
        if (direction === 'prev') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setMonth(newDate.getMonth() + 1);
        }

        const newMonth = newDate.getMonth() + 1;
        const newYear = newDate.getFullYear();

        const params = new URLSearchParams(searchParams.toString());
        params.set('month', newMonth.toString());
        params.set('year', newYear.toString());

        // Reset page when changing month to avoid empty states
        params.set('page', '1');

        router.push(`/schedule?${params.toString()}`, { scroll: false });
    }, [currentMonth, currentYear, router, searchParams]);

    const handleMonthSelect = (monthIndex: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('month', (monthIndex + 1).toString());
        params.set('year', viewYear.toString());
        params.set('page', '1');

        router.push(`/schedule?${params.toString()}`, { scroll: false });
        setIsOpen(false);
    };

    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    return (
        <div className="flex items-center bg-white dark:bg-[#1E1E1E] rounded-full px-1 py-1 border border-gray-200 dark:border-gray-700 shadow-sm">
            <button
                onClick={() => handleNavigate('prev')}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Previous month"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            <Popover open={isOpen} onOpenChange={(open) => {
                setIsOpen(open);
                if (open) setViewYear(currentYear);
            }}>
                <PopoverTrigger asChild>
                    <button className="px-4 py-1 text-sm font-medium text-gray-700 dark:text-gray-200 min-w-[140px] text-center select-none hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors flex items-center justify-center gap-2 group">
                        <CalendarIcon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        {monthName} {currentYear}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3 bg-white dark:bg-[#1E1E1E] border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <button
                            onClick={() => setViewYear(prev => prev - 1)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{viewYear}</span>
                        <button
                            onClick={() => setViewYear(prev => prev + 1)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {months.map((month, index) => {
                            const isSelected = viewYear === currentYear && index + 1 === currentMonth;
                            return (
                                <button
                                    key={month}
                                    onClick={() => handleMonthSelect(index)}
                                    className={cn(
                                        "px-2 py-1.5 text-xs rounded-md transition-colors",
                                        isSelected
                                            ? "bg-[var(--color-schedule-primary)] text-white font-medium"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                                    )}
                                >
                                    {month.substring(0, 3)}
                                </button>
                            );
                        })}
                    </div>
                </PopoverContent>
            </Popover>

            <button
                onClick={() => handleNavigate('next')}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Next month"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
}
