'use client';

import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            quote: "Alhamdulillah berkat ikut kelas inovatif pertama kali nulis artikel dan bisa diterima di Sinta 2. Terimakasih Pak Ari dan Tim 🙏🙏",
            name: "Mokhammad Ainur Rofiq, Lc., M.E.",
            role: "STIES Riyadlul Jannah Mojokerto"
        },
        {
            quote: "Saya suka pak Ari, kak.. saya suka dengan arahan beliau yang selalu bilang tetap fokus pada karya kita, tetap menghormati kaedah/ disiplin ilmu penelitian yang benar.",
            name: "Muharriroh, S.Pd.",
            role: "Guru"
        },
        {
            quote: "Saya sdh accepted Q2, pakai cursor. Ada pertanyaan reviwer yg analisis dari hasil paper. Cursor, memberi solusi yg cepat dan akurat.",
            name: "Ir. Nurmiati Pasra, S.T., M.T.",
            role: "Dosen Universitas ITPLN"
        },
        {
            quote: "Alhamdulilah satu paper saya masuk yang dipresentasikan di Global Conference International Waqf Jakarta Convention Center, terima kasih mas Ari dan mas Dafa atas ilmunya.",
            name: "Dede Rukanda",
            role: "Dosen Universitas Ibnu Khaldun Bogor"
        },
        {
            quote: "Puji Tuhan, dengan mengikuti Kelas Inovatif, khususnya kelas intensif Cursor bersama mentor Pak Arianto, disertasi saya berhasil selesai. Skor Turnitin saya waktu itu 11%",
            name: "Dr. Leopold Baginda, S.Pd., M.Th.",
            role: "Dosen Sekolah Tinggi Teologi Injili Indonesia Palu"
        },
        {
            quote: "Wahh luar biasa sekali... Alhamdulillah... Saya coba ya... sangat membantu sekali ini... Baru tau ada tools se powerful ini.",
            name: "Dr. Ratna Rostika, M.Si",
            role: "Dosen Universitas Islam Indonesia"
        },
        {
            quote: "Saya merasa terbantu dengan cursor ini karena mempermudah saya dalam mempersiapkan disertasi",
            name: "Elfa Yeni, S.TP., M.P.",
            role: "Dosen Universitas Abulyatama Banda Aceh"
        },
        {
            quote: "Dengan menggunakan Cursor AI ini mempermudah dan mempercepat kinerja mahasiswa S3 yang sedang bekejar-kejaram dengan dealine untuk konsultasi dengan pembimbing dan tagihan artikel yang harus dipublikasikan ke scopus. ",
            name: "Dewi Ekasari Kusumastuti, S.Pd.,M.Pd",
            role: "Dosen Universitas Lambung Mangkurat"
        },
        {
            quote: "Saya telah membandingkan ketiga software yang dianggap dewa yaitu Jeni dan Quillbot saya compare dengan Cursor. Kemudian saya tes dengan Turnitin AI punya kampus dan yang lolos justru hasil dari Cursor.",
            name: "Dr. Tri Nugraha Sakti. MSI",
            role: "Lecturer LSPR Institute"
        },
        {
            quote: "Saya baru pertama kali mengenal aplikasi Cursor, dan nampaknya sangat bermanfaat karena sangat fleksibel. Prompt bisa kita buat sesuai dengan keinginan kita.",
            name: "Imronudin, S.E., M.Si,. Ph.D",
            role: "Alumni Program"
        },
        {
            quote: "Alhamdulillah proses pembuatan buku ajar ke 3 untuk mahasiswa semester Ganjil sudah rampung dan terbit semua 🙏🙏🙏",
            name: "Dr. R. Arif Muljohadi, S.H., M.Hum.",
            role: "Dosen Universitas Bangkalan dan Penulis Buku"
        }
    ];

    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
    
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    
    const currentTestimonials = testimonials.slice(
        currentSlide * itemsPerSlide,
        (currentSlide + 1) * itemsPerSlide
    );

    return (
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <span className="text-teal-700 dark:text-teal-400 font-semibold tracking-wider text-xs uppercase">Kisah Mahasiswa</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mt-2">Apa yang dikatakan alumni</h2>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <button 
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Testimoni sebelumnya"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-linear-to-r from-teal-700 to-teal-800 text-white flex items-center justify-center hover:from-teal-800 hover:to-teal-900 transition shadow-lg"
                            aria-label="Testimoni selanjutnya"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentTestimonials.map((testimonial, index) => (
                            <div key={currentSlide * itemsPerSlide + index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl relative border-2 border-transparent hover:border-teal-200 dark:hover:border-teal-900 transition-all animate-in fade-in slide-in-from-right-4 duration-500">
                                <span className="text-6xl text-gray-200 dark:text-gray-700 font-serif absolute top-4 left-6 leading-none">"</span>
                                <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-6 mt-4 font-light italic text-lg leading-relaxed">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-teal-100 to-teal-200 dark:from-teal-800 dark:to-teal-900 flex items-center justify-center ring-2 ring-teal-300 dark:ring-teal-700">
                                        <User className="w-6 h-6 text-teal-700 dark:text-teal-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-teal-700 dark:bg-teal-400 w-8' 
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                            aria-label={`Ke slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
