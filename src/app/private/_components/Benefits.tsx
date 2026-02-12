
import React from 'react';
import { Clock, Video, Users, MessageCircle, FileText, Zap } from 'lucide-react';

export function Benefits() {
    const benefits = [
        {
            icon: Users,
            title: "Personalisasi Total",
            description: "Materi disesuaikan 100% dengan kebutuhan spesifik riset Anda, baik Skripsi, Tesis, Disertasi, maupun publikasi Jurnal."
        },
        {
            icon: Clock,
            title: "Jadwal Fleksibel",
            description: "Tentukan waktu mentoring sesuai kesibukan Anda. Tidak perlu khawatir bentrok dengan jam mengajar atau pekerjaan."
        },
        {
            icon: MessageCircle,
            title: "Lifetime Support",
            description: "Akses tanya jawab selamanya via WhatsApp Group/Personal. Kendala teknis pasca-kelas tetap kami bantu."
        },
        {
            icon: Video,
            title: "Rekaman Sesi",
            description: "Setiap sesi direkam dan dapat diakses kapan saja untuk mengulang materi yang mungkin terlewat."
        },
        {
            icon: FileText,
            title: "Bonus Panduan Prompt",
            description: "Dapatkan library prompt siap pakai yang telah teruji untuk berbagai kebutuhan penulisan akademik."
        },
        {
            icon: Zap,
            title: "All-in-One Tools",
            description: "Kuasai ekosistem AI lengkap: SciSpace, NotebookLM, dan Cursor dalam satu paket pembelajaran terpadu."
        }
    ];

    return (
        <section className="py-20 bg-private-surface-light dark:bg-private-surface-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Mengapa Memilih Private Master Class?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Dirancang khusus untuk akademisi yang membutuhkan bimbingan intensif dan hasil nyata tanpa membuang waktu.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-private-primary/10 dark:bg-private-primary/20 rounded-xl flex items-center justify-center text-private-primary dark:text-white mb-6">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
