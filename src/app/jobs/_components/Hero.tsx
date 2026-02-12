import Image from 'next/image';

export function Hero() {
    return (
        <div className="relative bg-eduzin-dark overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* Geser gambar ke bawah dengan translate-y-16 di Tailwind */}
                <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
                    alt="Professional workspace"
                    className="object-cover opacity-25 translate-y-16"
                    style={{ objectPosition: 'center 60%' }}
                    fill
                    priority
                />
                {/* Buat gradasi background sedikit lebih tipis supaya gambar lebih kelihatan */}
                <div className="absolute inset-0 bg-linear-to-b from-eduzin-dark/70 via-eduzin-dark/80 to-eduzin-dark/95"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border border-white/20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full border border-white/20"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium mb-6 uppercase tracking-wider backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        Karier Kelas Inovatif
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                        Bergabunglah Membangun <br /><span className="italic text-white/90">Masa Depan Akademik</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed">
                        Kelas Inovatif membuka peluang bagi para profesional untuk berkontribusi dalam memajukan ekosistem pendidikan tinggi di Indonesia. Jika Anda memiliki dedikasi dan keahlian yang relevan, kami mengundang Anda untuk melamar posisi yang tersedia.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a className="bg-white text-eduzin-dark hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all shadow-lg flex items-center gap-2" href="#openings">
                            Lihat Lowongan
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
