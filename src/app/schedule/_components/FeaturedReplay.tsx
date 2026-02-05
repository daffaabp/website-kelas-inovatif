import React from 'react';
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedReplay() {
    return (
        <section className="bg-schedule-primary dark:bg-schedule-bg-dark py-24 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 text-white z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-white text-schedule-primary rounded-full p-2">
                                <Play className="w-4 h-4" />
                            </span>
                            <span className="uppercase tracking-widest text-sm font-medium opacity-80">Rekaman Unggulan</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Upacara ke-50 Pablo Benzo 2025
                        </h2>
                        <div className="space-y-3 mb-8 text-white/80 font-light">
                            <p><strong className="font-semibold text-white">Zona Waktu:</strong> 02:36 WIB (GMT)</p>
                            <p><strong className="font-semibold text-white">Harga:</strong> Gratis</p>
                            <p><strong className="font-semibold text-white">Lokasi:</strong> Auditorium Utama</p>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <img
                                alt="Natalia T. Morgan"
                                className="w-12 h-12 rounded-full border-2 border-white/30"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLyPHMTP3maUhJYZEieYq1u2_lzGyeawg7QnoW0fTGVgSM32OpVk_1DQd9S7BUQS_SbdZrzsrppy4LxFTUnx0_vvrF8owoVAWawfNqxu7jOAPeA_QfLHBoQOWYaTbAd6goRu4Zog1BCmyOrXU5ybMxVYpiYbmvhsTz3-XRig71CqkvCZeW0IycE7d7SHGZ5XITYA2WnDyKyHKKKAr9fz4Rp2iX8V22ShP9OpsEPsGnGI8QyZeVGeaKHGn1iY2C9F_NQ_ymfjuTSI"
                            />
                            <div>
                                <p className="font-semibold">Natalia T. Morgan</p>
                                <p className="text-sm opacity-70">Guru Sains</p>
                            </div>
                        </div>
                        <button className="bg-white text-schedule-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2">
                            Tonton Rekaman
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="lg:w-1/2 w-full z-10">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                alt="Ceremony hall"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAMtYK2f8wlZdfRhLXP9w4emvsLRDL6G2BWp91Q7H_jARYYOAuOfMkUl3Cl0MXgKk93ge75sgShlOKXx2i11F1kHNqWMV26pmUOgTES5jYHLqqsPErOMicKBtDerIzm-OQGEt2fA_rrCO9p45TRort79q7HhCB_M_ytQ8EUd2rXzi9HYNOlr2swHLNdqmgaiLUOXwX88Gm2K3OAbbiSejGRb8N9PfGwH8XzcN2tUbfg8ipFI3MuiPLB1d4Y0JJ5H-7Wn5pDpFh0U8"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 text-white hover:bg-white hover:text-schedule-primary transition-all duration-300">
                                    <Play className="w-10 h-10" />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
