export function CampusSection() {
    return (
        <section className="py-20 bg-about-bg-light dark:bg-about-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
                        Rasakan Kehidupan di Sini
                    </span>
                    <h2 className="font-serif text-4xl font-bold mt-2 text-about-primary dark:text-white">
                        Kampus Kami
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                    <div className="md:col-span-8 h-80 md:h-full relative group overflow-hidden rounded-2xl">
                        <img
                            alt="Main Hall"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo75Qik7L9NdMhSmMD9NKGRe-hCLQL0s0t5AkEqvqyKL_fFToseRwHBuyFYduU1ACqJcPCFrIqyGtIPbK0C-L6Z6COKosHjHa91Y6hvDi1j9mbs3RUamos_eGe6s3tpEK_K7NUa7WlrdcjBEFGzoYQ2pFIggKteDTx4chmNpFZMpuecVzt_P5oqOZTOuxGHnkxY6px6L1rUpIqzal5KBHx9qk2u66JhDm2oGWAMtSiychF0fG-fvokaKDklS6fo9ukcTNOR324JmM"
                        />
                        <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black/80 to-transparent w-full">
                            <h3 className="text-white text-xl font-bold">Aula Utama</h3>
                            <p className="text-gray-300 text-sm">
                                Tempat sejarah bertemu dengan wacana modern
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-6 h-full">
                        <div className="relative group overflow-hidden rounded-2xl flex-1">
                            <img
                                alt="Innovation Lab"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJI6GA5_nYx1B74xRAnxWNhO1HZIvfdPE3MfXBvFQ7JONvl78z82fQeyvDqm0lJ4FWanwhinAuc9U9H6y3s-FhCfH6_FbI33gKoRHrQdZkFsqDF5gH5txrCbAasLEb7BQkKEsL9k28bGA27dkZH97w9WN4CcnQUP0C-rsLjxBseyhDR82BlAdjxh0SzQWNNnIMb_JNiSX9agx4ywd6KJTrxONa8ZQGqpos6tHi_QMWTGkE1ASCf6tMVVDnzQ_v-qsEeCa7Wdoa2kM"
                            />
                            <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black/80 to-transparent w-full">
                                <h3 className="text-white text-lg font-bold">Laboratorium Sains</h3>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl flex-1">
                            <img
                                alt="Student Center"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBshDKeSwDV1kb0wfR1bFUTCD-nTuPNwoZxzj6x_sApdhX-q4hk0X57i1SJcFupYT0AFWUeOH57NgLbzIwFjQNITcxeVUyrcWOLlbf12c4PuQv4mOm8uFL2U5tfNnBKLPRZrMcicyv_3nJJV9K88CFE07Kv2eujRx8KmZckKzrYpermUA5UC6t5GRkQuCXjWbhAKYSTCALgSsZmGyyD_EvsWGMpHAy3otdcD3wZVMAvFw3umCBF2RapCo_UmgbDSvzGEReRadbGFTw"
                            />
                            <div className="absolute bottom-0 left-0 p-6 bg-linear-to-t from-black/80 to-transparent w-full">
                                <h3 className="text-white text-lg font-bold">Pusat Mahasiswa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <a
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-base font-medium text-about-primary dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                        href="#"
                    >
                        Ikuti Tur Virtual
                    </a>
                </div>
            </div>
        </section>
    );
}
