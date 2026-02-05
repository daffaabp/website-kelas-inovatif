import React from 'react';

export function Hero() {
    return (
        <header className="bg-(--color-bg-light) dark:bg-(--color-bg-dark) pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1C302B]/5 dark:bg-[#1C302B]/20 -z-10 rounded-bl-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10"></div>
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-4 block">Kisah Nyata Alumni</span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C302B] dark:text-white mb-6">
                        Mereka Juga Pernah Ragu. <span className="italic text-[#D4AF37]">Seperti Anda.</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        Bukan profesor. Bukan jenius. Hanya orang biasa yang memutuskan untuk mencoba. Dan berhasil.
                    </p>
                </div>
            </div>
        </header>
    );
}
