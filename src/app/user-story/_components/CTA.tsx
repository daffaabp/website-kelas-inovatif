import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-20 bg-[#F7F5F0] dark:bg-[#0F1210] border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="bg-[#1C302B] rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4AF37] rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4AF37] rounded-full blur-[100px] opacity-20"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Cerita Berikutnya Adalah <br /> Milik Anda.</h2>
                        <p className="text-white/80 text-lg mb-10 leading-relaxed">
                            Mereka sudah membuktikan. Sekarang giliran anda memulai kesuksesan. Bergabunglah dengan ratusan akademisi yang telah bertransformasi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a className="bg-white text-[#1C302B] px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-lg transform hover:scale-105" href="/community">
                                Gabung Komunitas Sekarang
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-white/10 transition" href="/program">
                                Lihat Program Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
