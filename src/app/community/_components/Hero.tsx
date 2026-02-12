'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function Hero() {
    const scrollToTestimonials = () => {
        const element = document.getElementById('video-testimonials');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="relative bg-community-primary overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
                </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-xs font-semibold tracking-widest uppercase mb-4">
                            Bergabung Bersama Kami
                        </div>
                        <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight">
                            Komunitas Peneliti<br />
                            <span className="italic font-normal opacity-90">Kelas Inovatif.</span>
                        </h1>
                        <p className="text-lg text-gray-200 max-w-lg leading-relaxed font-light">
                            Wadah kolaborasi dosen, peneliti, dan mahasiswa untuk mencetak ratusan Doktor dan menembus publikasi Sinta/Scopus. Kami bersatu memajukan pendidikan Indonesia melalui penguasaan teknologi AI yang etis.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/schedule" className="bg-white text-community-primary px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 cursor-pointer">
                                Gabung Sekarang <ArrowRight className="h-4 w-4" />
                            </Link>
                            <button onClick={scrollToTestimonials} className="border border-white/40 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition flex items-center gap-2 cursor-pointer">
                                <PlayCircle className="h-5 w-5" /> Kisah Alumni
                            </button>
                        </div>
                    </div>
                    <div className="relative lg:h-[500px] w-full hidden lg:flex items-center justify-center">
                        <div className="relative w-[600px] h-[480px] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 z-20 border-4 border-white/10">
                            <Image
                                alt="Campus exterior gathering"
                                className="object-cover"
                                src="/community/hero-graduation.avif"
                                fill
                                priority
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 backdrop-blur-md rounded-full z-0 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
