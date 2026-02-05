export function MissionSection() {
    return (
        <section className="py-16 md:py-24 bg-about-surface-light dark:bg-about-surface-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-about-primary/10 rounded-full blur-xl"></div>
                        <img
                            alt="Workshop dan aktivitas komunitas Kelas Inovatif"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            src="/community/community8.avif"
                        />
                        <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                            <p className="font-serif text-lg italic text-about-primary dark:text-white">
                                &quot;Puji Tuhan, dengan mengikuti Kelas Inovatif, disertasi saya berhasil selesai. 
                                Saya dan tim juga sudah membuktikan, artikel yang kami tulis sudah berhasil tembus Scopus Q1.&quot;
                            </p>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-bold">
                                — Dr. Leopold Baginda, Alumni Doktoral & Publikasi Scopus
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold tracking-widest uppercase text-about-primary mb-2">
                            Visi & Misi Kami
                        </h2>
                        <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-about-primary dark:text-white">
                            Visi
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Menjadi platform pembelajaran terdepan yang mendorong transformasi digital 
                            di Indonesia melalui pemahaman dan penguasaan teknologi AI, memberdayakan 
                            setiap akademisi untuk berinovasi dan berkompetisi dalam era digital.
                        </p>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-about-primary dark:text-white">
                            Misi
                        </h3>
                        <div className="space-y-4 text-base text-gray-600 dark:text-gray-400">
                            <p>
                                <span className="font-bold text-about-primary dark:text-white">1.</span> Menyediakan akses pembelajaran AI yang praktis dan komprehensif bagi akademisi Indonesia—dari mahasiswa hingga peneliti—untuk mendukung penyelesaian skripsi, tesis, disertasi, dan publikasi ilmiah.
                            </p>
                            <p>
                                <span className="font-bold text-about-primary dark:text-white">2.</span> Menyajikan program e-learning interaktif, seminar berjadwal, dan video pembelajaran terkini untuk mendukung penelitian dan penulisan akademik.
                            </p>
                            <p>
                                <span className="font-bold text-about-primary dark:text-white">3.</span> Menghubungkan akademisi dengan praktisi AI dan mentor ahli untuk membangun komunitas inovatif yang mendorong kolaborasi riset dan berbagi pengetahuan.
                            </p>
                            <p>
                                <span className="font-bold text-about-primary dark:text-white">4.</span> Mendukung pengembangan penelitian dan publikasi ilmiah dengan memanfaatkan teknologi AI untuk meningkatkan efisiensi dan kualitas karya akademik.
                            </p>
                            <p>
                                <span className="font-bold text-about-primary dark:text-white">5.</span> Menjadi pusat informasi dan literasi digital yang memperluas adopsi teknologi AI secara berkelanjutan di kalangan akademisi Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
