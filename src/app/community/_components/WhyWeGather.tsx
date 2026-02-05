import React from 'react';

export function WhyWeGather() {
    return (
        <section className="py-24 bg-community-bg-light dark:bg-community-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-xs font-bold tracking-widest text-community-primary dark:text-gray-400 uppercase mb-4">Misi & Visi Kami</h2>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Bersatu untuk kemajuan <br /> <span className="italic text-community-primary dark:text-white/80">akademik Indonesia.</span>
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Kami percaya kemajuan bangsa dimulai dari kualitas riset dan pendidikan. Kelas Inovatif menyatukan potensi terbaik untuk berkolaborasi, bukan berkompetisi.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group relative bg-white dark:bg-community-card-dark rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="w-14 h-14 bg-community-primary/10 dark:bg-community-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-community-primary group-hover:text-white transition-colors duration-300 text-community-primary">
                            <span className="material-icons-outlined text-3xl">hub</span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Kolaborasi Lintas Disiplin</h4>
                        <p className="text-gray-600 dark:text-gray-400">Memecahkan batasan antar bidang ilmu. Dosen Teknik berkolaborasi dengan ahli Sosial, Peneliti Kesehatan bersinergi dengan pakar AI.</p>
                    </div>
                    <div className="group relative bg-white dark:bg-community-card-dark rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="w-14 h-14 bg-community-primary/10 dark:bg-community-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-community-primary group-hover:text-white transition-colors duration-300 text-community-primary">
                            <span className="material-icons-outlined text-3xl">auto_fix_high</span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Akselerasi dengan AI</h4>
                        <p className="text-gray-600 dark:text-gray-400">Mengoptimalkan proses riset menggunakan Artificial Intelligence. Dari pencarian literatur hingga analisis data, semua lebih efisien.</p>
                    </div>
                    <div className="group relative bg-white dark:bg-community-card-dark rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="w-14 h-14 bg-community-primary/10 dark:bg-community-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-community-primary group-hover:text-white transition-colors duration-300 text-community-primary">
                            <span className="material-icons-outlined text-3xl">verified</span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-4">Integritas & Kredibilitas</h4>
                        <p className="text-gray-600 dark:text-gray-400">Membangun kepercayaan melalui hasil nyata. Kami menjunjung tinggi etika akademik dalam setiap penggunaan teknologi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
