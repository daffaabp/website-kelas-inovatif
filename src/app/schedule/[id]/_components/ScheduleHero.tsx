import React from 'react';
import { Clock, MapPin, Calendar, Tag } from 'lucide-react';

interface ScheduleHeroProps {
    title: string;
    type: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    speaker: {
        name: string;
        image: string;
        role?: string;
    };
}

export function ScheduleHero({ title, type, date, startTime, endTime, location, speaker }: ScheduleHeroProps) {
    return (
        <header className="relative bg-blog-secondary dark:bg-blog-surface-dark pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blog-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blog-primary/10 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 bg-blog-accent/20 text-blog-accent dark:text-blog-accent px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-blog-accent/20">
                        <Tag className="w-4 h-4" />
                        {type}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-blog-primary dark:text-white mb-8 leading-tight">
                        {title}
                    </h1>

                    {/* Speaker */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <img
                            alt={speaker.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                            src={speaker.image}
                        />
                        <div className="text-left">
                            <p className="text-lg font-bold text-blog-primary dark:text-white leading-none mb-1">
                                {speaker.name}
                            </p>
                            <p className="text-sm text-blog-primary/70 dark:text-gray-400 font-medium">
                                {speaker.role || 'Speaker'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                    {/* Date */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Tanggal</h3>
                        <p className="text-gray-600 dark:text-gray-300">{date}</p>
                    </div>

                    {/* Time */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-3 group-hover:scale-110 transition-transform">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Waktu</h3>
                        <p className="text-gray-600 dark:text-gray-300">{startTime} - {endTime}</p>
                    </div>

                    {/* Location */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center text-center group hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-3 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-gray-900 dark:text-white font-semibold mb-1">Lokasi</h3>
                        <p className="text-gray-600 dark:text-gray-300">{location}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
