import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export function ProgramList() {
    return (
        <section className="py-20 md:py-32 bg-program-bg-light dark:bg-program-bg-dark relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-program-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-program-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="space-y-24">
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-program-accent dark:bg-program-primary/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5 relative">
                                <div className="aspect-4/3 rounded-xl overflow-hidden shadow-lg relative">
                                    <Image alt="Students analyzing scientific data" className="object-cover transform group-hover:scale-105 transition duration-700" src="/images/program/scispace.avif" fill />
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <span className="text-xs font-bold text-program-primary dark:text-white flex items-center gap-1">
                                            <Sparkles className="w-4 h-4" /> Eksklusif Class
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">Pencarian Referensi</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                    Kelas Menguasai SciSpace
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Tingkatkan kualitas riset dengan pencarian referensi yang lebih akurat. Anda akan belajar cara menemukan, menyaring, dan mengelola literatur secara efisien agar sumber yang dipakai relevan dan dapat dipertanggungjawabkan.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Pencarian Lebih Akurat</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Temukan referensi yang tepat untuk topik Anda.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Seleksi Literatur Efisien</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Percepat proses review tanpa kehilangan kualitas.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <Link className="inline-flex items-center gap-2 px-6 py-3 bg-program-primary dark:bg-program-primary text-white rounded-lg font-semibold hover:bg-program-primary/90 dark:hover:bg-program-primary/80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105" href="/class-scite">
                                        Lihat Detail Program <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-program-accent dark:bg-program-primary/20 rounded-br-full -ml-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full">Riset Cepat</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                    Kelas Menguasai NotebookLM
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Riset dan belajar lebih mendalam dari ratusan sumber. Anda akan mempraktikkan cara merangkum, membandingkan, dan menghubungkan informasi lintas dokumen sehingga pemahaman Anda lebih cepat, rapi, dan terstruktur.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-start space-x-3">
                                        <Sparkles className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Sintesis Multi-Sumber</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Gabungkan insight dari banyak dokumen sekaligus.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Sparkles className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Belajar Lebih Mendalam</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Tanya-jawab berbasis dokumen agar paham konteks.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <Link className="inline-flex items-center gap-2 px-6 py-3 bg-program-primary dark:bg-program-primary text-white rounded-lg font-semibold hover:bg-program-primary/90 dark:hover:bg-program-primary/80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105" href="/class-notebooklm">
                                        Lihat Detail Program <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:col-span-5 relative order-1 lg:order-2">
                                <div className="aspect-4/3 rounded-xl overflow-hidden shadow-lg relative">
                                    <Image alt="Students using tablets for digital learning" className="object-cover transform group-hover:scale-105 transition duration-700" src="/images/program/notebooklm.avif" fill />
                                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <span className="text-xs font-bold text-program-primary dark:text-white flex items-center gap-1">
                                            <Sparkles className="w-4 h-4" /> Eksklusif Class
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Cursor Class - SPECIAL PREMIUM CLASS */}
                    <div className="group relative bg-linear-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900/20 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
                        {/* Premium Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-r from-teal-600 to-teal-700 blur-lg opacity-50 animate-pulse"></div>
                                <span className="relative px-4 py-2 text-xs font-bold tracking-wider uppercase bg-linear-to-r from-teal-600 via-teal-700 to-teal-800 text-white rounded-full shadow-lg flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Best Seller
                                </span>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-linear-to-tl from-teal-400/20 via-cyan-400/10 to-transparent dark:from-teal-700/20 dark:via-cyan-700/10 rounded-tl-full -mr-24 -mb-24 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-teal-400/20 via-cyan-400/10 to-transparent dark:from-teal-700/20 dark:via-cyan-700/10 rounded-br-full -ml-16 -mt-16"></div>

                        {/* Sparkle Effects */}
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-500 rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-600 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            <div className="lg:col-span-5 relative">
                                <div className="aspect-4/3 rounded-xl overflow-hidden shadow-2xl relative ring-2 ring-teal-300 dark:ring-teal-800/50">
                                    <Image alt="Penulisan karya ilmiah dengan bantuan Cursor di laptop" className="object-cover transform group-hover:scale-105 transition duration-700" src="/images/program/cursor.avif" fill />
                                    <div className="absolute inset-0 bg-linear-to-t from-teal-900/30 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 bg-linear-to-r from-teal-700/95 to-teal-800/95 dark:from-teal-800/95 dark:to-teal-900/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg ring-1 ring-white/20">
                                        <span className="text-xs font-bold text-white flex items-center gap-1">
                                            <Sparkles className="w-4 h-4" /> Eksklusif Class
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-linear-to-r from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50 text-teal-800 dark:text-teal-200 rounded-full border border-teal-200 dark:border-teal-700">Penulisan Akademik</span>
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-linear-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 rounded-full border border-purple-200 dark:border-purple-700">Berbasis AI</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold bg-linear-to-r from-gray-900 via-teal-900 to-cyan-900 dark:from-white dark:via-teal-200 dark:to-cyan-200 bg-clip-text text-transparent">
                                    Kelas Intensif Penulisan Karya Ilmiah
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Fokus pada penulisan karya ilmiah seperti artikel, tesis, disertasi, dan buku. Anda akan belajar memanfaatkan Cursor untuk mempercepat drafting, merapikan struktur, dan membantu revisi—tanpa mengorbankan kualitas akademik dan tetap bebas plagiasi.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-linear-to-r from-teal-200 via-cyan-200 to-teal-200 dark:from-teal-800/50 dark:via-cyan-800/50 dark:to-teal-800/50">
                                    <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm">
                                        <CheckCircle className="text-teal-700 dark:text-teal-400 mt-1 w-5 h-5 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Akurat & Cepat</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Software dirancang untuk menulis dengan akurasi dan kecepatan tinggi </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm">
                                        <CheckCircle className="text-teal-700 dark:text-teal-400 mt-1 w-5 h-5 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Bebas Plagiasi</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Fitur struktur paragraf dan pengecekan referensi meminimalisir plagiasi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                                    <Link className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-teal-700 via-teal-800 to-teal-900 hover:from-teal-800 hover:via-teal-900 hover:to-teal-950 text-white rounded-lg font-bold transition-all duration-300 shadow-xl shadow-teal-700/50 hover:shadow-2xl hover:shadow-teal-800/50 hover:scale-105 ring-2 ring-teal-600/50" href="/class-cursor">
                                        Lihat Detail Program <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
