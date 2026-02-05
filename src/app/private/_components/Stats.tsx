
import React from 'react';

export function Stats() {
    const stats = [
        { label: "Peserta Terbantu", value: "500+" },
        { label: "Karya Tervalidasi", value: "98%" },
        { label: "Kepuasan Mentor", value: "4.9/5" },
        { label: "Jurnal Terbit", value: "200+" }
    ];

    return (
        <section className="py-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors duration-300">
                            <h3 className="text-4xl font-serif font-bold text-private-primary dark:text-white mb-1">{stat.value}</h3>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
