import { Search, GitBranch, Filter } from 'lucide-react';

export function CourseFocus() {
    const focuses = [
        {
            icon: Search,
            title: "Manajemen Sumber & Dasar NotebookLM",
            description: "Mengunggah dan mengorganisir puluhan hingga ratusan sumber (PDF, Google Docs, website, video) dalam satu notebook. Memahami panel Sources, Chat, dan Studio untuk riset yang efisien."
        },
        {
            icon: GitBranch,
            title: "9 Fitur untuk Memahami Alur Berpikir Penulis",
            description: "Menguasai berbagai format output (Audio, Video, Peta Pikiran, Laporan, Kuis, Infografis, Slide, Tabel Data) untuk memahami bagaimana peneliti membangun argumen, metodologi, dan kesimpulan dari puluhan hingga ratusan jurnal."
        },
        {
            icon: Filter,
            title: "Dari Pemahaman ke Literature Review",
            description: "Mengintegrasikan berbagai fitur untuk memetakan pola penelitian, mengidentifikasi gap dan hubungan antar studi, hingga menyusun kerangka dan draft literature review yang terstruktur."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Fokus Kursus</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Pahami Alur Berpikir Peneliti, Percepat Riset Anda</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Kami tidak hanya mengajarkan fitur; kami mengajarkan alur kerja. Pelajari cara memanfaatkan NotebookLM untuk memahami bagaimana peneliti membangun argumen, mengidentifikasi pola metodologi, dan memetakan hubungan antar studi—sehingga riset Anda lebih cepat dan tetap teliti.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {focuses.map((focus, index) => {
                        const Icon = focus.icon;
                        return (
                            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-eduzin-dark/20 dark:hover:border-eduzin-dark/40">
                                <div className="w-12 h-12 bg-eduzin-dark/10 dark:bg-eduzin-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{focus.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {focus.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
