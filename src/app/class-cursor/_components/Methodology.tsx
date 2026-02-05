export function Methodology() {
    const steps = [
        {
            number: "01",
            title: "Pencarian Referensi Berkualitas",
            description: "Manfaatkan Cursor AI untuk mencari dan mengelola referensi akademik yang tepat dan akurat. Dari jurnal hingga sitasi otomatis, semua terintegrasi dalam satu platform.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Pemahaman & Review Literatur",
            description: "Tingkatkan kemampuan memahami paper dan literatur kompleks dengan bantuan AI. Ekstrak insight penting, identifikasi novelty, dan temukan research gap dengan lebih cepat.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Penulisan Berkualitas & Bebas Plagiasi",
            description: "Hasilkan tulisan akademik yang koheren, profesional, dan bebas plagiasi. Cursor membantu drafting, strukturisasi paragraf, konsistensi istilah, hingga penyusunan daftar pustaka—semuanya dengan akurasi tinggi.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-linear-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14 116 144) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 dark:bg-teal-900/20 border border-teal-100 dark:border-teal-800/50 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></div>
                        <span className="text-teal-800 dark:text-teal-300 font-medium tracking-wide text-xs uppercase">
                            TIGA PILAR 
                        </span>
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Fokus Pembelajaran Utama
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Tiga pilar utama yang akan Anda kuasai untuk menghasilkan karya ilmiah berkualitas tinggi dan bebas plagiasi.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-linear-to-r from-teal-200 via-teal-300 to-transparent dark:from-teal-800 dark:via-teal-700 dark:to-transparent"></div>
                            )}

                            {/* Card */}
                            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 group-hover:border-teal-200 dark:group-hover:border-teal-800 h-full">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-teal-50/50 to-transparent dark:from-teal-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                <div className="relative z-10">
                                    {/* Number Badge */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-linear-to-br from-teal-600 to-teal-800 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                            <div className="relative w-14 h-14 bg-linear-to-br from-teal-700 to-teal-800 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                <span className="text-2xl font-serif font-bold text-white">{step.number}</span>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 transform group-hover:rotate-6 transition-transform duration-300">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
