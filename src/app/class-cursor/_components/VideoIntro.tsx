export function VideoIntro() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-linear-to-br from-teal-900 to-teal-800 dark:from-gray-800 dark:to-teal-950 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-12 lg:p-16 flex flex-col justify-center text-white relative z-10">
                            <span className="text-teal-300 font-semibold tracking-wider text-xs uppercase mb-4">Pengantar Kursus</span>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Mengapa Cursor untuk Penulisan Akademik?</h2>
                            <p className="text-gray-200 mb-8 leading-relaxed">
                                Penulisan karya ilmiah membutuhkan akurasi, struktur yang rapi, dan bebas plagiasi. Cursor AI dirancang khusus untuk membantu Anda menulis dengan tingkat akurasi tinggi—membaca hingga level baris, mendukung berbagai model AI, dan mempercepat proses drafting hingga revisi tanpa mengorbankan kualitas akademik.
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Instructor"
                                    className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
                                    src="/images/speaker/arianto.avif"
                                />
                                <div>
                                    <p className="font-semibold text-sm">Arianto</p>
                                    <p className="text-xs text-gray-300">AI Engineer & Researcher</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-black/20 min-h-[400px] group cursor-pointer">
                            <img
                                alt="Video thumbnail"
                                className="w-full h-full object-cover absolute inset-0 opacity-80 group-hover:opacity-60 transition duration-500"
                                src="/images/program/cursor.avif"
                            />
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300 border-2 border-white/40 ring-4 ring-teal-500/30">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="flex items-center justify-between text-white text-xs font-mono">
                                        <span>KELAS_INTENSIF_PENULISAN.MP4</span>
                                        <span>04:28</span>
                                    </div>
                                    <div className="w-full bg-white/20 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="w-1/3 bg-teal-500 h-full"></div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
