import React from 'react';


export function Hero() {
    return (
        <section className="relative pt-32 pb-24 bg-faq-primary dark:bg-faq-surface-dark overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-normal text-white mb-6 leading-tight">
                    Pertanyaan yang Sering Diajukan
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10">
                    Temukan jawaban untuk pertanyaan tentang keunggulan kami, program pembelajaran, hasil alumni, komunitas, dan cara bergabung dengan Kelas Inovatif.
                </p>
            </div>
        </section>
    );
}
