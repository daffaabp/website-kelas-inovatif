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
            title: "Pengantar NotebookLM dan Manajemen Sumber",
            subtitle: "Fondasi riset terfokus pada dokumen Anda.",
            topics: [
                "Memahami konsep NotebookLM yang hanya berfokus pada sumber yang Anda berikan, cocok untuk riset dan belajar cepat.",
                "Teknik mengunggah dan mengorganisir puluhan hingga ratusan sumber (PDF, Google Docs, website, video YouTube).",
                "Praktik: Membangun notebook penelitian pertama dengan berbagai jenis dokumen."
            ]
        },
        {
            number: "02",
            title: "Mengubah Dokumen Menjadi Diskusi Audio untuk Pembelajaran Mendalam",
            subtitle: "Memahami alur berpikir peneliti lewat format Brief, Deep Dive, Critique, dan Debate.",
            topics: [
                "Menguasai format Audio Overview untuk memahami jurnal dengan cepat: Brief untuk ringkasan cepat, Deep Dive untuk eksplorasi detail, Critique untuk umpan balik, dan Debate untuk perspektif berbeda.",
                "Teknik memanfaatkan audio untuk mempelajari bagaimana penulis membangun argumen, mendebat perspektif, dan mengkritisi metodologi dari dokumen Anda.",
                "Praktik: Membuat diskusi audio interaktif dari kumpulan jurnal untuk memahami pola penelitian dengan pendampingan."
            ]
        },
        {
            number: "03",
            title: "Visualisasi Naratif untuk Memahami Struktur Penelitian",
            subtitle: "Mengubah dokumen menjadi video dengan visual, diagram, dan kutipan.",
            topics: [
                "Menghasilkan video naratif yang memvisualisasikan alur berpikir peneliti: dari pendahuluan, metodologi, hasil, hingga kesimpulan.",
                "Memilih format Explainer untuk penjelasan komprehensif atau Brief untuk ringkasan singkat, serta menyesuaikan gaya visual untuk presentasi.",
                "Praktik: Membuat video overview dari literature review untuk memahami struktur argumentasi dengan berbagai gaya visual."
            ]
        },
        {
            number: "04",
            title: "Memetakan Hubungan Konseptual dan Pola Penelitian Lintas Sumber",
            subtitle: "Memvisualisasikan bagaimana peneliti membangun dan menghubungkan ide.",
            topics: [
                "Teknik memvisualisasikan hubungan antar dokumen untuk melihat gambaran besar penelitian: tema utama, subtema, dan alur berpikir peneliti.",
                "Mengidentifikasi pola argumentasi, kontradiksi teori, dan koneksi metodologi lintas sumber melalui visualisasi peta pikiran.",
                "Praktik: Membangun mind map dari kumpulan paper untuk memahami landscape penelitian dan gap yang ada."
            ]
        },
        {
            number: "05",
            title: "Menghasilkan Laporan Analitis dan Kerangka Literature Review",
            subtitle: "Dari pemahaman mendalam ke dokumen terstruktur.",
            topics: [
                "Menguasai berbagai format laporan untuk riset: FAQ untuk menjawab pertanyaan kunci, Study Guide untuk pembelajaran, Briefing Document untuk ringkasan eksekutif, dan format kustom untuk outline literature review.",
                "Teknik menyesuaikan tone (profesional, akademis) dan tingkat detail untuk menghasilkan kerangka yang sesuai dengan kebutuhan penulisan.",
                "Praktik: Membuat laporan analitis dan outline literature review dari sumber penelitian dengan ekspor ke Google Docs."
            ]
        },
        {
            number: "06",
            title: "Menguji Pemahaman dengan Kartu Tanya Jawab dari Dokumen",
            subtitle: "Pembelajaran aktif untuk menguasai konsep dan argumentasi peneliti.",
            topics: [
                "Membuat kartu tanya jawab otomatis yang menguji pemahaman Anda tentang konsep kunci, metodologi, dan temuan dari dokumen penelitian.",
                "Teknik mengatur topik fokus (misalnya metodologi, teori, hasil), tingkat kesulitan, dan memanfaatkan pengulangan bertahap untuk pembelajaran efektif.",
                "Praktik: Membangun set flashcard dari jurnal untuk menguji pemahaman alur berpikir peneliti sebelum menulis literature review."
            ]
        },
        {
            number: "07",
            title: "Evaluasi Pemahaman Mendalam dengan Kuis Interaktif",
            subtitle: "Memastikan Anda benar-benar memahami isi dan argumentasi jurnal.",
            topics: [
                "Menghasilkan kuis otomatis yang menguji pemahaman mendalam: pilihan ganda untuk konsep, benar/salah untuk klaim peneliti, dan jawaban singkat untuk metodologi.",
                "Teknik mengatur tingkat kesulitan dan memanfaatkan penjelasan jawaban untuk memperdalam pemahaman alur berpikir peneliti.",
                "Praktik: Membuat kuis dari kumpulan jurnal untuk memastikan Anda siap menulis literature review dengan penilaian otomatis."
            ]
        },
        {
            number: "08",
            title: "Menyajikan Temuan Penelitian dalam Format Infografis",
            subtitle: "Visualisasi data dan konsep untuk komunikasi yang lebih efektif.",
            topics: [
                "Menguasai format infografis untuk berbagai kebutuhan: horizontal (16:9) untuk presentasi dan blog, vertikal (9:16) untuk media sosial, dan persegi (1:1) untuk berbagai platform.",
                "Teknik menyesuaikan tingkat detail (ringkas, standar, mendetail) dan gaya visual untuk menyajikan pola penelitian, temuan kunci, atau perbandingan metodologi.",
                "Praktik: Membuat infografis dari data literature review untuk presentasi seminar atau publikasi media sosial akademik."
            ]
        },
        {
            number: "09",
            title: "Mengubah Literature Review Menjadi Presentasi Akademik",
            subtitle: "Dari pemahaman mendalam ke slide yang komunikatif.",
            topics: [
                "Mengubah hasil riset dan analisis literature review menjadi slide presentasi yang menyajikan alur berpikir, pola penelitian, dan gap secara jelas.",
                "Teknik menyusun narasi presentasi: dari latar belakang, pemetaan studi, analisis gap, hingga kontribusi yang diusulkan dengan visualisasi data yang menarik.",
                "Praktik: Membuat slide deck dari literature review untuk seminar proposal atau ujian kualifikasi dengan styling akademik."
            ]
        },
        {
            number: "10",
            title: "Menyusun Tabel Perbandingan untuk Analisis Lintas Studi",
            subtitle: "Mengorganisir data penelitian untuk melihat pola dan gap.",
            topics: [
                "Mensintesis informasi dari puluhan sumber menjadi tabel terstruktur: perbandingan metodologi, hasil studi, variabel penelitian, atau temuan kunci.",
                "Teknik mengorganisir data untuk analisis sistematis: mengidentifikasi pola, inkonsistensi, dan gap penelitian melalui tabel perbandingan yang rapi.",
                "Praktik: Membuat tabel analisis literature review dari berbagai jurnal dengan ekspor ke Google Sheets untuk analisis lanjutan."
            ]
        },
        {
            number: "11",
            title: "Mengintegrasikan Semua Fitur untuk Menyusun Literature Review",
            subtitle: "Dari memahami alur berpikir peneliti hingga draft terstruktur.",
            topics: [
                "Memahami alur kerja literature review yang komprehensif: dari memahami alur berpikir penulis, memetakan pola penelitian, hingga menyusun kerangka dan draft.",
                "Teknik mengintegrasikan Peta Pikiran untuk memetakan tema dan hubungan, Tabel Data untuk analisis sistematis, dan Laporan untuk menghasilkan outline terstruktur.",
                "Strategi menulis literature review yang koheren: menyajikan perkembangan penelitian, mengidentifikasi gap, dan membangun argumen untuk kontribusi riset Anda.",
                "Praktik: Menyusun kerangka dan draft literature review lengkap dari puluhan jurnal dengan pendampingan intensif hingga siap dikonsultasikan ke pembimbing."
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
                        href="/dokumen/silabus/Silabus Menguasai NotebookLM - Kelas Inovatif.pdf"
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
