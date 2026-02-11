import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <header className="relative h-[85vh] w-full flex items-end pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/community/komunitas_kelasinovatif.avif"
                    alt="Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mt-20 mb-8 drop-shadow-lg max-w-3xl">
                    <span className="block font-light">10.000+ Akademisi Indonesia</span>
                    <span className="block font-bold italic text-eduzin-main">Sudah Belajar AI</span>
                    <span className="block font-light">di Sini</span>
                </h1>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <p className="text-white/90 max-w-xl text-base md:text-lg leading-relaxed font-medium">
                        Kuasai tools AI untuk riset, penulisan skripsi, dan publikasi ilmiah dengan bimbingan komunitas yang supportif.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            className="bg-[#F59E0B] text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:bg-amber-600 transition group shadow-xl hover:scale-105 transform duration-200"
                            href="/schedule"
                        >
                            Gabung Gratis Sekarang
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            className="px-8 py-4 rounded-full font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition flex items-center gap-2 backdrop-blur-sm"
                            href="/program"
                        >
                            Lihat Program
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
