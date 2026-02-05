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
    const [openWeek, setOpenWeek] = useState<number>(1);

    const weeks: Week[] = [
        {
            number: "01",
            title: "Perumusan Keywords & Strategi Penelusuran",
            subtitle: "Merancang kata kunci yang tepat sasaran dan akurat.",
            topics: [
                "Mempelajari cara merumuskan keywords yang presisi, termasuk variasi istilah, sinonim, dan bentuk frasa relevan.",
                "Teknik pencarian lanjutan untuk menemukan literatur yang tepat.",
                "Praktik: Menyusun query pencarian untuk topik riset Anda dengan pendampingan dan tanya jawab."
            ]
        },
        {
            number: "02",
            title: "Strategi Menemukan Related Papers",
            subtitle: "Teknik penelusuran literatur terkait yang efisien.",
            topics: [
                "Menelusuri paper terkait melalui sitasi, rekomendasi, similarity, dan topical matching.",
                "Pengembangan keyword dari paper inti untuk memperluas cakupan literatur.",
                "Praktik: Menemukan dan mengelola related papers menggunakan SciSpace dengan panduan langsung."
            ]
        },
        {
            number: "03",
            title: "Identifikasi Research Gap & Novelty",
            subtitle: "Menggunakan AI untuk memetakan tema dan celah riset.",
            topics: [
                "Teknik mempercepat pemetaan tema dan perbandingan temuan lintas studi dengan bantuan AI.",
                "Menentukan celah riset (gap), kebaruan (novelty), dan peluang kontribusi akademik.",
                "Praktik: Analisis gap dan novelty dari kumpulan paper dengan pendampingan intensif."
            ]
        },
        {
            number: "04",
            title: "Seleksi Jurnal Bereputasi (Q1–Q3)",
            subtitle: "Memilih jurnal berkualitas untuk publikasi.",
            topics: [
                "Cara menyeleksi jurnal top-tier berdasarkan kuartil (Q1, Q2, Q3) dan indikator kualitas.",
                "Memahami faktor dampak dan reputasi jurnal untuk memastikan sumber yang kredibel.",
                "Praktik: Screening dan mengevaluasi kualitas jurnal untuk topik Anda dengan bimbingan."
            ]
        },
        {
            number: "05",
            title: "Optimasi Penelusuran via Google",
            subtitle: "Advanced search untuk hasil lebih relevan.",
            topics: [
                "Menyusun keyword dan query untuk mesin pencari Google agar hasil lebih relevan.",
                "Pola pencarian efektif untuk menemukan PDF, publisher, dan preprint.",
                "Praktik: Mencoba teknik advanced search dengan studi kasus nyata dan diskusi."
            ]
        },
        {
            number: "06",
            title: "Manajemen Referensi & Sitasi Otomatis",
            subtitle: "Menjaga konsistensi dan kerapian bibliografi.",
            topics: [
                "Menerapkan pembuatan sitasi dan daftar pustaka secara otomatis dalam format akademik umum.",
                "Menjaga konsistensi gaya sitasi dan kerapian bibliografi untuk publikasi.",
                "Praktik: Membuat dan mengelola referensi menggunakan tools sitasi otomatis dengan panduan."
            ]
        }
    ];

    return (
        <section className="py-20 bg-eduzin-dark/5 dark:bg-gray-800/50 transition-colors duration-300" id="syllabus">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12">
                    <div>
                        <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Silabus</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">Materi yang Akan Dipelajari</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2"><strong>Teori + Praktik.</strong> Setiap topik disertai sesi praktik langsung dengan pendampingan dan tanya jawab.</p>
                    </div>
                    <a
                        href="/dokumen/silabus/Silabus%20Menguasai%20Scispace%20-%20Kelas%20Inovatif.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
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
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-eduzin-dark/10 dark:bg-eduzin-dark/20 flex items-center justify-center text-eduzin-dark dark:text-green-400 font-bold font-serif text-xl">
                                        {week.number}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white hover:text-eduzin-dark dark:hover:text-green-400 transition">{week.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{week.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openWeek === index && (
                                <div className="px-6 pb-6 pt-0 ml-18 border-l-2 border-eduzin-dark/10 dark:border-eduzin-dark/20">
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
