"use client";

import { useState } from 'react';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

interface JobListing {
    category: string;
    categoryColor: string;
    location: string;
    title: string;
    description: string;
    type: string;
    experience: string;
    isPrimary?: boolean;
}

export function JobOpenings() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

    const handleApplyClick = (job: JobListing) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const jobs: JobListing[] = [
        {
            category: "AI & Konten",
            categoryColor: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
            location: "Remote / Hybrid",
            title: "Senior Prompt Engineer",
            description: "Anda akan merancang, menguji, dan mengoptimalkan prompt serta alur kerja AI yang dipakai oleh dosen, mahasiswa, dan peneliti dalam kegiatan akademik. Tujuan kami adalah membantu dunia akademik—dari penulisan karya ilmiah, riset, hingga pengajaran—melalui tools berbasis AI yang andal dan mudah dipakai. Latar belakang dalam linguistik, pendidikan, atau pengalaman dengan LLM adalah nilai plus.",
            type: "Penuh Waktu",
            experience: "Pengalaman 3+ Tahun",
            isPrimary: true
        },
        {
            category: "Produk & Pengalaman",
            categoryColor: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
            location: "Remote",
            title: "Vibe Coder",
            description: "Kami mencari pengembang yang peduli pada pengalaman pengguna. Anda akan fokus pada tampilan, interaksi, dan \"rasa\" platform kami—agar dosen, mahasiswa, dan peneliti merasa nyaman dan produktif saat memakai layanan pendidikan kami. Kemahiran dalam front-end modern, animasi, dan aksesibilitas sangat dihargai. Portofolio yang relevan diperlukan.",
            type: "Kontrak / Penuh Waktu",
            experience: "Portofolio Diperlukan"
        }
    ];

    return (
        <div className="py-24 bg-white dark:bg-gray-900" id="openings">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-eduzin-dark dark:text-white/80 font-bold text-xs tracking-widest uppercase mb-3 block">Peluang Saat Ini</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-eduzin-dark dark:text-white mb-6">Bergabunglah dengan Tim Kami</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Kami bergerak di bidang pendidikan untuk akademisi—dosen, mahasiswa, peneliti—dan mencari talenta untuk mengisi peran berikut. Jika Anda tertarik memajukan dunia akademik lewat teknologi, kami ingin mendengar dari Anda.</p>
                </div>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-eduzin-dark/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 ${job.categoryColor} text-xs font-semibold rounded-full`}>{job.category}</span>
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {job.location}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-eduzin-dark dark:text-white mb-3 group-hover:text-eduzin-dark transition-colors">{job.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl leading-relaxed">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" />
                                            {job.experience}
                                        </span>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    {job.isPrimary ? (
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="w-full md:w-auto bg-eduzin-dark hover:bg-eduzin-dark/90 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-eduzin-dark/20"
                                        >
                                            Lamar Sekarang
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="w-full md:w-auto bg-white dark:bg-gray-700 border-2 border-eduzin-dark dark:border-gray-600 text-eduzin-dark dark:text-white hover:bg-eduzin-dark hover:text-white dark:hover:bg-eduzin-dark dark:hover:border-eduzin-dark px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2"
                                        >
                                            Lamar Sekarang
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Tidak melihat peran yang cocok? Kami tetap terbuka untuk talenta yang ingin berkontribusi di dunia pendidikan akademik.</p>
                    <a className="inline-flex items-center text-eduzin-dark dark:text-white font-medium hover:underline decoration-2 underline-offset-4" href="/contact">
                        Kirimkan aplikasi umum Anda
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>

            {/* Application Modal */}
            {selectedJob && (
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    jobTitle={selectedJob.title}
                    jobCategory={selectedJob.category}
                />
            )}
        </div>
    );
}
