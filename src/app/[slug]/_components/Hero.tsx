import React from 'react';

interface HeroProps {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        image: string;
        role?: string;
    };
}

export function Hero({ title, category, date, readTime, author }: HeroProps) {
    return (
        <header className="relative bg-blog-secondary dark:bg-blog-surface-dark pt-16 pb-32 lg:pt-20 lg:pb-48 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blog-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blog-primary/10 rounded-full blur-3xl"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                    <span className="bg-blog-accent text-blog-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{date}</span>
                    <span className="text-gray-400 dark:text-gray-600">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-blog-primary dark:text-white mb-8 leading-tight">
                    {title}
                </h1>
                <div className="flex items-center justify-center gap-4">
                    <img
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
                        src={author.image}
                    />
                    <div className="text-left">
                        <p className="text-base font-bold text-blog-primary dark:text-white leading-none mb-1">
                            {author.name}
                        </p>
                        <p className="text-xs text-blog-primary/60 dark:text-blog-accent font-bold uppercase tracking-wide">
                            {author.role || 'Penulis'}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
