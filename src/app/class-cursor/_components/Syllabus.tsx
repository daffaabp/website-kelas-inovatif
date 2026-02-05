"use client";

import { useState } from 'react';
import { Download, ChevronDown, ArrowRight } from 'lucide-react';

interface Week {
    number: string;
    title: string;
    subtitle: string;
    topics: string[];
}

export function Syllabus() {
    const [openWeek, setOpenWeek] = useState<number>(0);

    const weeks: Week[] = [
        {
            number: "01",
            title: "Pengenalan Cursor sebagai Alat Penunjang Penulisan Akademik",
            subtitle: "Memahami antarmuka dan fitur AI untuk produktivitas menulis.",
            topics: [
                "Mempelajari menu dasar dan navigasi Cursor yang dioptimalkan untuk penulisan akademik.",
                "Memahami kemampuan AI dalam membaca dokumen hingga level baris dan dukungan berbagai model AI.",
                "Praktik: Menyiapkan environment Cursor pertama kali dan eksplorasi fitur dengan pendampingan."
            ]
        },
        {
            number: "02",
            title: "Pencarian dan Seleksi Referensi Akademik",
            subtitle: "Menemukan dan mengelola literatur akademik dengan AI.",
            topics: [
                "Teknik pencarian referensi akademik yang presisi menggunakan Cursor AI: jurnal, artikel, dan sumber terpercaya.",
                "Mengelola dan mengorganisir referensi untuk memudahkan sitasi dan literature review.",
                "Praktik: Mencari dan menyusun daftar referensi untuk topik penelitian Anda dengan bimbingan."
            ]
        },
        {
            number: "03",
            title: "Sintesis dan Pemahaman Literatur Riset",
            subtitle: "Merangkum dan memahami literatur secara efisien.",
            topics: [
                "Memanfaatkan Cursor AI untuk merangkum paper dan literatur kompleks dengan cepat.",
                "Teknik ekstraksi insight penting, metodologi, dan temuan kunci dari kumpulan dokumen.",
                "Praktik: Membuat rangkuman literature review dari beberapa jurnal dengan pendampingan intensif."
            ]
        },
        {
            number: "04",
            title: "Identifikasi Novelty dan Research Gap",
            subtitle: "Mengidentifikasi peluang kontribusi akademik.",
            topics: [
                "Teknik memetakan tema penelitian dan mengidentifikasi celah riset (research gap) dengan bantuan AI.",
                "Menentukan kebaruan (novelty) dan kontribusi yang dapat diberikan pada bidang studi.",
                "Praktik: Analisis gap dan novelty dari kumpulan paper untuk menyusun latar belakang penelitian."
            ]
        },
        {
            number: "05",
            title: "Perumusan Ide dan Judul Penelitian",
            subtitle: "Merumuskan topik yang kuat dan fokus.",
            topics: [
                "Brainstorming ide penelitian yang layak dan berdampak dengan panduan AI.",
                "Teknik merumuskan judul yang jelas, spesifik, dan menarik untuk publikasi akademik.",
                "Praktik: Menghasilkan beberapa alternatif judul dan memilih yang paling tepat dengan diskusi."
            ]
        },
        {
            number: "06",
            title: "Penyusunan Kerangka Teoretis dan Outline Karya Ilmiah",
            subtitle: "Membangun struktur yang logis dan koheren.",
            topics: [
                "Menyusun kerangka penulisan karya ilmiah: dari pendahuluan, literature review, metodologi, hingga kesimpulan.",
                "Teknik mengatur alur logis dan memastikan setiap bagian terhubung dengan baik.",
                "Praktik: Membuat outline lengkap untuk artikel, tesis, atau disertasi dengan pendampingan."
            ]
        },
        {
            number: "07",
            title: "Integritas Akademik dan Penulisan Bebas Plagiasi",
            subtitle: "Menjaga integritas dan originalitas tulisan.",
            topics: [
                "Memahami jenis-jenis plagiasi dan cara menghindarinya dalam penulisan akademik.",
                "Teknik parafrase yang benar, penggunaan kutipan, dan penulisan dengan gaya sendiri.",
                "Praktik: Menulis ulang paragraf dari sumber dengan tetap menjaga makna dan menghindari plagiasi."
            ]
        },
        {
            number: "08",
            title: "Pengembangan Outline ke Paragraf Akademik yang Koheren",
            subtitle: "Dari outline ke tulisan yang koheren dan profesional.",
            topics: [
                "Teknik mengembangkan poin-poin outline menjadi paragraf yang utuh dengan bantuan Cursor AI.",
                "Menjaga konsistensi istilah, gaya akademik, dan alur logis antar paragraf.",
                "Praktik: Menulis draft paragraf dari outline dengan pendampingan untuk memastikan koheren dan akademis."
            ]
        },
        {
            number: "09",
            title: "Pengutipan dan Manajemen Sitasi Berbasis AI",
            subtitle: "Mengelola referensi dengan efisien dan tepat.",
            topics: [
                "Teknik pencarian dan penyisipan sitasi secara otomatis dalam format akademik (APA, IEEE, Chicago, dll).",
                "Memastikan akurasi informasi sitasi dan konsistensi format di seluruh dokumen.",
                "Praktik: Membuat sitasi in-text dan mengintegrasikan dengan daftar pustaka menggunakan Cursor AI."
            ]
        },
        {
            number: "10",
            title: "Penyusunan dan Validasi Daftar Pustaka",
            subtitle: "Menjaga kerapian dan konsistensi bibliografi.",
            topics: [
                "Menyusun daftar pustaka yang rapi, konsisten, dan sesuai standar akademik.",
                "Teknik memvalidasi format referensi dan memastikan semua sumber tercantum dengan lengkap.",
                "Praktik: Membuat daftar pustaka lengkap dari kumpulan referensi dengan styling akademik yang benar."
            ]
        }
    ];

    return (
        <section className="py-20 bg-teal-50/30 dark:bg-gray-800/50 transition-colors duration-300" id="syllabus">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12">
                    <div>
                        <h2 className="text-sm font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wide mb-3">Silabus</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">Materi yang Akan Dipelajari</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Setiap topik disertai sesi praktik langsung dengan pendampingan dan tanya jawab.</p>
                    </div>
                    <a
                        href="/dokumen/silabus/Silabus Kelas Intensif Penulisan Karya Ilmiah - Kelas Inovatif.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition"
                    >
                        <Download className="w-4 h-4 mr-2" />
                        Unduh Silabus
                    </a>
                </div>
                <div className="space-y-4">
                    {weeks.map((week, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all">
                            <button
                                onClick={() => setOpenWeek(openWeek === index ? -1 : index)}
                                className="w-full flex justify-between items-center p-6 cursor-pointer text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-teal-700/10 dark:bg-teal-700/20 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold font-serif text-xl">
                                        {week.number}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition">{week.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{week.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openWeek === index && (
                                <div className="px-6 pb-6 pt-0 ml-18 border-l-2 border-teal-700/10 dark:border-teal-700/20">
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                        {week.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex} className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 mt-1 shrink-0" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
