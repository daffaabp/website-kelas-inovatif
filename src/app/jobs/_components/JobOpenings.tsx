"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

const jobs = [
    {
        id: "curriculum-specialist",
        title: "Curriculum Specialist",
        location: "Remot (Indonesia)",
        type: "Full-time",
        department: "Akademik",
        description: "Mengembangkan kurikulum pembelajaran inovatif berbasis AI untuk mahasiswa dan akademisi."
    },
    {
        id: "learning-designer",
        title: "Learning Designer",
        location: "Remot (Indonesia)",
        type: "Part-time",
        department: "Akademik",
        description: "Merancang instruksional dan pengalaman belajar yang menarik untuk bootcamp penulisan ilmiah."
    },
    {
        id: "community-manager",
        title: "Community Manager",
        location: "Kroya, Cilacap",
        type: "Full-time",
        department: "Marketing",
        description: "Membangun dan mengelola komunitas akademisi di platform Kelas Inovatif."
    }
];

interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    department: string;
    description: string;
}

export const JobOpenings = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const handleApplyClick = (job: Job) => {
        setSelectedJob(job);
    };

    return (
        <section className="py-20 md:py-32 bg-white dark:bg-[#0F1210]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-eduzin-dark dark:text-white mb-6">Bergabunglah dengan Tim Kami</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                        Kami mencari individu yang bersemangat untuk mengubah masa depan pendidikan di Indonesia melalui teknologi dan inovasi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <div key={job.id} className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-eduzin-dark dark:hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none">
                            <div className="mb-6 flex justify-between items-start">
                                <span className="bg-eduzin-dark/10 dark:bg-white/10 text-eduzin-dark dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{job.department}</span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {job.type}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-eduzin-dark dark:text-white mb-2 group-hover:text-eduzin-dark dark:group-hover:text-about-primary transition-colors">{job.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 font-light">
                                <MapPin className="w-4 h-4" /> {job.location}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 leading-relaxed font-light">
                                {job.description}
                            </p>
                            <button
                                onClick={() => handleApplyClick(job)}
                                className="w-full md:w-auto bg-eduzin-dark hover:bg-eduzin-dark/90 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-eduzin-dark/20"
                            >
                                Lamar Sekarang
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Tidak melihat peran yang cocok? Kami tetap terbuka untuk talenta yang ingin berkontribusi di dunia pendidikan akademik.</p>
                    <Link className="inline-flex items-center text-eduzin-dark dark:text-white font-medium hover:underline decoration-2 underline-offset-4" href="/contact">
                        Kirimkan aplikasi umum Anda
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>

            <ApplicationModal
                isOpen={!!selectedJob}
                onClose={() => setSelectedJob(null)}
                jobTitle={selectedJob?.title || ""}
                jobCategory={selectedJob?.department || ""}
            />
        </section>
    );
};
