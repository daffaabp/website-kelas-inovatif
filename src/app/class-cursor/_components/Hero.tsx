import Image from 'next/image';
import { Clock, TrendingUp, Users, Star } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative bg-linear-to-br from-teal-900 via-teal-800 to-teal-900 dark:from-gray-900 dark:via-teal-950 dark:to-gray-900 overflow-hidden">
            {/* Premium Background Pattern */}
            <div className="absolute inset-0">
                <Image
                    alt="Students in library"
                    className="object-cover opacity-20"
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-teal-900/90 via-teal-800/80 to-transparent"></div>
            </div>

            {/* Animated Sparkles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="lg:w-2/3">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-teal-400/30 bg-white/10 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
                        <Star className="w-4 h-4 mr-2 text-teal-300 fill-teal-300" />
                        KELAS INTENSIF • PENULISAN AKADEMIK
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Kelas Intensif Penulisan<br />
                        <span className="italic font-light bg-linear-to-r from-teal-200 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                            dengan Cursor AI
                        </span>
                    </h1>

                    <p className="text-lg text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
                        Ratusan mahasiswa S2/S3 dan dosen telah mempercepat publikasi, penulisan artikel, tesis, disertasi, bahkan pembuatan buku dengan Cursor AI. Mulai dari draft hingga karya terbit—kini menulis karya ilmiah berkualitas dan bebas plagiasi jadi lebih mudah.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-gray-100 transition shadow-xl shadow-teal-900/30 flex items-center justify-center gap-2 group">
                            Daftar Kursus
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Tonton Pratinjau
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center gap-8 text-white/90 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-teal-300" />
                            <span className="font-medium">2× Pertemuan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-teal-300" />
                            <span className="font-medium">Semua Tingkat</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-teal-300" />
                            <span className="font-medium">Kursi Terbatas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-teal-300 fill-teal-300" />
                            <span className="font-medium">Bebas Plagiasi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
