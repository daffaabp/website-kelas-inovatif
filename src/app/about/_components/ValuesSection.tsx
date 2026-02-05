import { Heart, Users, Shield } from "lucide-react";

export function ValuesSection() {
    return (
        <section className="py-20 bg-about-bg-light dark:bg-about-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-about-primary dark:text-white mb-4">
                        Prinsip Utama Kami
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Prinsip-prinsip yang memandu setiap langkah kami dalam membangun komunitas 
                        yang terpercaya dan mendukung perjalanan akademik Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Heart className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Kami Peduli dengan Perjalanan Anda
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                            Setiap anggota adalah prioritas kami. Kami memahami bahwa setiap 
                            perjalanan akademik memiliki tantangan uniknya sendiri. Itulah mengapa 
                            kami hadir untuk mendampingi Anda dari awal hingga sukses—mulai dari 
                            menyelesaikan skripsi, tesis, disertasi, hingga publikasi internasional. 
                            Dengan bimbingan step-by-step, materi terstruktur, dan dukungan komunitas, 
                            kami memastikan Anda tidak berjalan sendirian dalam mencapai tujuan akademik.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Users className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Anda Tidak Sendirian
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                            Di Kelas Inovatif, Anda bergabung dengan ribuan akademisi yang saling 
                            mendukung. Tidak ada pertanyaan yang terlalu sederhana, tidak ada 
                            tantangan yang terlalu besar. Kami menciptakan ruang aman di mana Anda 
                            dapat belajar, bertanya, berbagi, dan berkembang tanpa rasa takut 
                            dihakimi. Setiap suara didengar dan dihargai.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Shield className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Terpercaya & Terbukti
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                            Kami berkomitmen pada transparansi dan integritas dalam setiap aspek. 
                            Materi yang kami sajikan terbukti efektif, mentor kami berpengalaman, 
                            dan testimoni alumni kami nyata. Kami tidak menjanjikan jalan pintas, 
                            tapi kami berkomitmen memberikan dukungan terbaik untuk perjalanan 
                            akademik Anda yang sesungguhnya.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
