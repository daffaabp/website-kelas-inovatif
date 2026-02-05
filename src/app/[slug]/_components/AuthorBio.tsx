import React from 'react';
import { Mail, Globe, CheckCircle } from 'lucide-react';

interface AuthorBioProps {
    author: {
        name: string;
        image: string;
        role?: string;
        bio?: string;
    };
}

export function AuthorBio({ author }: AuthorBioProps) {
    return (
        <div className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-10 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
                <div className="w-24 h-24 rounded-full p-1 border-2 border-dashed border-blog-accent">
                    <img
                        alt={author.name}
                        className="w-full h-full rounded-full object-cover"
                        src={author.image}
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
                            {author.name}
                        </h4>
                        <p className="text-xs text-blog-primary/60 dark:text-blog-accent font-bold uppercase tracking-wide mt-1">
                            {author.role || 'Penulis'}
                        </p>
                    </div>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 mt-4">
                    {author.bio || 'Penulis di Kelas Inovatif.'}
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                    <a className="text-gray-400 hover:text-blog-primary dark:hover:text-white transition" href="#">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a className="text-gray-400 hover:text-blog-primary dark:hover:text-white transition" href="#">
                        <Globe className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
