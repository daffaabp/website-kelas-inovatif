// Icons removed - no longer needed

import Image from 'next/image';

export function Instructor() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-lg">
                    <div className="shrink-0">
                        <Image
                            alt="Arianto"
                            className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
                            src="/images/speaker/arianto.avif"
                            width={160}
                            height={160}
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">Arianto</h3>
                        <p className="text-eduzin-dark dark:text-green-400 font-medium mb-4">AI Engineer & Researcher</p>
                        <p className="text-gray-600 dark:text-gray-400 italic mb-6">
                            &quot;Kualitas literature review sangat ditentukan oleh kedalaman pemahaman kita atas sumber. Melalui kelas ini, saya akan memandu Anda menguasai NotebookLM agar Anda dapat memahami alur berpikir peneliti dari ratusan jurnal dengan lebih cepat, memetakan pola penelitian, dan menyusun literature review yang terstruktur dan berbasis sumber.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
