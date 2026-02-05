import React from 'react';
import { Mail, Globe, CheckCircle } from 'lucide-react';

interface SpeakerBioProps {
    speaker: {
        name: string;
        image: string;
        role?: string;
    };
}

export function SpeakerBio({ speaker }: SpeakerBioProps) {
    return (
        <div className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
                <div className="w-24 h-24 rounded-full p-1 border-2 border-dashed border-blog-accent">
                    <img
                        alt={speaker.name}
                        className="w-full h-full rounded-full object-cover"
                        src={speaker.image}
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-blog-primary rounded-full flex items-center justify-center text-white border-2 border-white dark:border-blog-surface-dark">
                    <CheckCircle className="w-4 h-4" />
                </div>
            </div>
            <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                        <h4 className="text-xl font-serif font-bold text-blog-primary dark:text-white">
                            {speaker.name}
                        </h4>
                        <p className="text-xs text-blog-primary/60 dark:text-blog-accent font-bold uppercase tracking-wide mt-1">
                            {speaker.role || 'Speaker'}
                        </p>
                    </div>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 mt-4">
                    {speaker.name} adalah pembicara pada acara ini. Ikuti sesi ini untuk mendapatkan wawasan lebih lanjut.
                </p>
            </div>
        </div>
    );
}
