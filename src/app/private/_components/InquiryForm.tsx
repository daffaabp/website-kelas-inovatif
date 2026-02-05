
import React from 'react';
import { Check, Mail, Phone, Send } from 'lucide-react';

export function InquiryForm() {
    return (
        <section className="py-20 bg-private-bg-light dark:bg-private-bg-dark overflow-hidden" id="inquire">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-private-primary rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-20">
                        <img alt="Abstract Background" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfP6S9S0rMQK0E3I2EksWg9OSChmadSaCAaxnsHOLYDpjeag1xuRnLhw3jq7eotIc_WqztvoDFt_dFAt8b0ljhcBKruhVw8A5yf5gYaMJjRCtRgP0WRI-YaBlzqDO8KB-1QvChgOtzp_2Fdp77gqKEp-zYpxztVMFn3EOeA-3_wQvxLkhmq7fBTqqDi13PJt-4uzsLnY8YFH-GwVInGY80hhL5EfcYlrLkFEFVsu271Rx4kQQ7WPta0LJbta4jkFfdmDSGFCCw58" />
                    </div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-12">
                        <div className="lg:w-5/12 text-white">
                            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-xs font-bold tracking-wider uppercase mb-4 text-white">Permintaan Kustom</span>
                            <h3 className="font-serif text-3xl md:text-4xl mb-6">Tidak menemukan yang Anda butuhkan?</h3>
                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                Setiap perjalanan pembelajaran unik. Jika Anda memiliki persyaratan khusus atau membutuhkan paket yang disesuaikan untuk grup penelitian Anda, beri tahu kami. Kami akan mencocokkan Anda dengan mentor yang sempurna.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <Check className="text-white bg-white/20 rounded-full p-1 w-6 h-6" />
                                    <span className="text-sm md:text-base">Diskon grup tersedia</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-white bg-white/20 rounded-full p-1 w-6 h-6" />
                                    <span className="text-sm md:text-base">Desain kurikulum kustom</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="text-white bg-white/20 rounded-full p-1 w-6 h-6" />
                                    <span className="text-sm md:text-base">Opsi pembayaran fleksibel</span>
                                </li>
                            </ul>
                            <div className="flex items-center gap-4 text-white/60">
                                <span className="flex items-center gap-2 text-sm"><Mail className="w-4 h-4" /> private@kelasinovatif.edu</span>
                                <span className="flex items-center gap-2 text-sm"><Phone className="w-4 h-4" /> +1 (555) 123-4567</span>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full">
                            <form className="bg-white dark:bg-private-surface-dark p-8 rounded-2xl shadow-xl">
                                <h4 className="font-serif text-2xl text-private-primary dark:text-white mb-6">Formulir Pertanyaan</h4>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="name">Nama</label>
                                            <input className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-private-bg-light dark:bg-private-bg-dark focus:ring-2 focus:ring-private-primary focus:border-transparent outline-none transition-all dark:text-white" id="name" placeholder="Nama Anda" type="text" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="email">Email</label>
                                            <input className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-private-bg-light dark:bg-private-bg-dark focus:ring-2 focus:ring-private-primary focus:border-transparent outline-none transition-all dark:text-white" id="email" placeholder="email@anda.com" type="email" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="topic">Topik Minat</label>
                                        <select className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-private-bg-light dark:bg-private-bg-dark focus:ring-2 focus:ring-private-primary focus:border-transparent outline-none transition-all dark:text-white text-gray-600">
                                            <option>Bimbingan Penelitian Umum</option>
                                            <option>Analisis Kuantitatif</option>
                                            <option>Analisis Kualitatif</option>
                                            <option>Alat AI untuk Penelitian</option>
                                            <option>Strategi Publikasi</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1" htmlFor="message">Pesan</label>
                                        <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-private-bg-light dark:bg-private-bg-dark focus:ring-2 focus:ring-private-primary focus:border-transparent outline-none transition-all dark:text-white h-32" id="message" placeholder="Ceritakan tentang kebutuhan spesifik Anda..."></textarea>
                                    </div>
                                    <button className="w-full bg-private-primary hover:bg-private-primary-light text-white font-bold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="submit">
                                        Kirim Pertanyaan <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
