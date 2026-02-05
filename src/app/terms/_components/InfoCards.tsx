import React from 'react';
import { Gavel, GraduationCap, Lock } from 'lucide-react';

export function InfoCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-terms-surface-light dark:bg-terms-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-terms-primary/10 dark:bg-terms-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Gavel className="w-6 h-6 text-terms-primary dark:text-terms-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-terms-text-light dark:text-terms-text-dark">
                    Perjanjian Pengguna
                </h3>
                <p className="text-sm text-terms-muted-light dark:text-terms-muted-dark leading-relaxed">
                    Dengan mengakses situs web ini, Anda menerima syarat dan ketentuan ini sepenuhnya. Jangan melanjutkan penggunaan jika Anda tidak setuju.
                </p>
                <a className="inline-block mt-4 text-sm font-semibold text-terms-primary hover:underline dark:text-white" href="#section-1">
                    Baca Selengkapnya →
                </a>
            </div>

            <div className="bg-terms-surface-light dark:bg-terms-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-terms-primary/10 dark:bg-terms-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-terms-primary dark:text-terms-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-terms-text-light dark:text-terms-text-dark">
                    Integritas Akademik
                </h3>
                <p className="text-sm text-terms-muted-light dark:text-terms-muted-dark leading-relaxed">
                    Kami menjunjung tinggi standar kejujuran akademik. Plagiarisme dan kecurangan sangat dilarang.
                </p>
                <a className="inline-block mt-4 text-sm font-semibold text-terms-primary hover:underline dark:text-white" href="#section-3">
                    Baca Selengkapnya →
                </a>
            </div>

            <div className="bg-terms-surface-light dark:bg-terms-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-terms-primary/10 dark:bg-terms-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lock className="w-6 h-6 text-terms-primary dark:text-terms-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-terms-text-light dark:text-terms-text-dark">
                    Kebijakan Privasi
                </h3>
                <p className="text-sm text-terms-muted-light dark:text-terms-muted-dark leading-relaxed">
                    Data Anda aman bersama kami. Kami hanya mengumpulkan apa yang diperlukan untuk meningkatkan pengalaman pembelajaran Anda.
                </p>
                <a className="inline-block mt-4 text-sm font-semibold text-terms-primary hover:underline dark:text-white" href="#section-5">
                    Baca Selengkapnya →
                </a>
            </div>
        </div>
    );
}
