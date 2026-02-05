import React from 'react';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-bootcamp-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Mengapa belajar dengan Kelas Inovatif?</h2>
                        <p className="text-bootcamp-accent/90 text-lg mb-8 max-w-md">
                            Bootcamp kami lebih dari sekadar kelas. Mereka adalah pengalaman berbasis komunitas yang dirancang untuk mempercepat karier dan dampak penelitian Anda.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-bootcamp-accent mt-1 w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-lg">Mentorship Langsung</h4>
                                    <p className="text-white/70 text-sm">Dapatkan umpan balik real-time dari para ahli industri.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-bootcamp-accent mt-1 w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-lg">Proyek Praktis</h4>
                                    <p className="text-white/70 text-sm">Buat portofolio yang menampilkan keterampilan baru Anda.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-bootcamp-accent mt-1 w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-lg">Akses Seumur Hidup</h4>
                                    <p className="text-white/70 text-sm">Tinjau materi kursus kapan pun Anda membutuhkannya.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">95%</div>
                            <div className="text-sm text-white/80">Tingkat Penyelesaian</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10 translate-y-8">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">500+</div>
                            <div className="text-sm text-white/80">Makalah Diterbitkan</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">50+</div>
                            <div className="text-sm text-white/80">Mentor Ahli</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10 translate-y-8">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">4.9</div>
                            <div className="text-sm text-white/80">Rating Rata-rata</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
