import React from 'react';

export function CTA() {
    return (
        <section className="py-24 bg-bootcamp-bg-light dark:bg-background-dark">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-bootcamp-primary-light rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-bootcamp-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-bootcamp-primary/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Siap memulai perjalanan Anda?</h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            Bergabunglah dengan ribuan mahasiswa dan peneliti yang telah mengubah karier mereka dengan Kelas Inovatif.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-bootcamp-primary rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer">
                                Mulai Sekarang
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors cursor-pointer">
                                Hubungi Dukungan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
