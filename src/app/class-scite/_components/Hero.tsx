export function Hero() {
    return (
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Students studying in library"
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop"
                />
                <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-gray-50/80 to-gray-50 dark:from-gray-900/50 dark:via-gray-900/80 dark:to-gray-900"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-eduzin-dark/20 bg-eduzin-dark/5 text-eduzin-dark dark:text-green-300 dark:bg-eduzin-dark/20 dark:border-eduzin-dark/40 text-xs font-semibold uppercase tracking-wide mb-6">
                    Program Kelas Reguler
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Menguasai <span className="italic text-eduzin-dark dark:text-green-400">SciSpace</span> untuk<br />Pencarian Referensi Akademik
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                    Setiap tool AI dirancang untuk tujuan dan fungsinya masing-masing. SciSpace dirancang khusus untuk penelusuran literatur akademik secara real-time. Fitur AI-nya membantu mempercepat pemahaman paper sehingga screening dan literature review lebih efisien.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-eduzin-dark hover:bg-eduzin-dark/90 transition md:py-4 md:text-lg shadow-xl shadow-eduzin-dark/20" href="#syllabus">
                        Lihat Silabus
                    </a>
                    <a className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition md:py-4 md:text-lg" href="#about-scite">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Tonton Pengantar
                    </a>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8">
                    <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">2 Jam</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Durasi</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">Pemula</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Tingkat</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">Zoom</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Format</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-gray-900 dark:text-white">Arianto</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Instruktur</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
