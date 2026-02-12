import Link from 'next/link';
import { MonthNavigator } from './MonthNavigator';

export function Hero({ currentType = 'All' }: { currentType?: string }) {
    return (
        <header className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="inline-block bg-(--color-schedule-bg-light) dark:bg-(--color-schedule-bg-dark) px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-6 text-gray-600 dark:text-gray-400">
                Kalender Akademik
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-(--color-schedule-primary) dark:text-white mb-4">
                Awali Kesuksesan Akademik Anda <br />
                <span className="italic font-normal text-gray-700 dark:text-gray-300">& Mulai Sekarang</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Temukan workshop, kuliah, dan aktivitas kampus yang dirancang untuk memperluas perspektif Anda dan meningkatkan perjalanan pembelajaran Anda.
            </p>
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {[
                        "All",
                        "FREE WEBINAR",
                        "KELAS INTENSIF: CURSOR",
                        "WORKSHOP REGULAR: SCISPACE",
                        "WORKSHOP REGULAR: NOTEBOOKLM",
                        "PERTEMUAN ALUMNI"
                    ].map((category) => {
                        const isActive = currentType === category || (currentType === 'All' && category === 'All');
                        return (
                            <Link
                                key={category}
                                href={category === 'All' ? '/schedule' : `/schedule?type=${encodeURIComponent(category)}`}
                                scroll={false}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition shadow-sm ${isActive
                                    ? "bg-(--color-schedule-primary) text-white shadow-md hover:opacity-90"
                                    : "bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {category === 'All' ? 'Semua Acara' : category}
                            </Link>
                        );
                    })}
                </div>
                <MonthNavigator />
            </div>
        </header>
    );
}
