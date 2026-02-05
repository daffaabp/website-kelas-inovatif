import React from 'react';

export function Hero() {
    return (
        <header className="relative bg-blog-secondary dark:bg-blog-surface-dark pt-32 pb-32 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blog-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blog-primary/10 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blog-primary/10 dark:bg-white/10 text-blog-primary dark:text-white text-xs font-semibold tracking-wider uppercase mb-4">
                    Blog Kami
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-medium text-blog-primary dark:text-white mb-6 leading-tight">
                    Wawasan &amp; <span className="italic font-normal">Inovasi</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-sans">
                    Jelajahi berita terbaru, terobosan penelitian, dan cerita mahasiswa dari komunitas Kelas Inovatif. Tetap terinformasi dan terinspirasi.
                </p>
            </div>
        </header>
    );
}
