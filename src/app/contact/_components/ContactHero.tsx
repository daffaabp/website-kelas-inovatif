import React from "react";

export const ContactHero = () => {
    return (
        <header className="relative bg-eduzin-dark overflow-hidden pt-32 pb-24">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border border-white/20" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border border-white/20" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
                    Hubungi Kami
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Mari mulai percakapan.
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-300 font-light">
                    Baik Anda memiliki pertanyaan tentang program, bootcamp, komunitas, atau
                    kerja sama, tim kami siap membantu Anda. Kelas Inovatif hadir untuk
                    mendampingi perjalanan Anda menguasai AI.
                </p>
            </div>
        </header>
    );
};
