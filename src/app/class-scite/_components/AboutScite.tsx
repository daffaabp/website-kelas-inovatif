import { CheckCircle, TrendingUp } from 'lucide-react';

export function AboutScite() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="about-scite">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200/50 dark:bg-green-900/30 rounded-full blur-2xl"></div>
                        <img
                            alt="Researcher looking at data visualization"
                            className="relative rounded-2xl shadow-2xl w-full h-auto object-contain max-h-[600px]"
                            src="/images/class-scite/image.png"
                        />
                        <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Kutipan Cerdas</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Analisis berbasis AI untuk melihat apakah artikel mendukung atau bertentangan dengan klaim Anda.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Kenapa SciSpace?</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">Kualitas Referensi Menentukan Kualitas Karya Ilmiah</h3>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8 text-justify">
                            <p className="mb-4 indent-8">
                                Kualitas karya ilmiah baik tesis, disertasi, maupun artikel ditentukan oleh kualitas referensi yang digunakan. SciSpace hadir sebagai solusi untuk penelusuran literatur akademik secara real-time dari database jurnal, sehingga referensi yang Anda pakai selalu relevan, terbaru, dan dapat dipertanggungjawabkan.
                            </p>
                            <p className="indent-8">
                                Dengan bantuan fitur AI, SciSpace memudahkan analisis isi paper: mulai dari ringkasan, abstrak, metodologi, hingga kesimpulan. Proses screening dan literature review pun menjadi jauh lebih cepat tanpa mengorbankan ketelitian akademik.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <CheckCircle className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Pencarian Real-Time</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Akses database jurnal untuk menemukan referensi yang relevan dan terkini.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <TrendingUp className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Pemahaman Cepat dengan AI</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Ekstrak ringkasan, metodologi, dan temuan utama tanpa membaca seluruh PDF.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
