import React from 'react';
import { Handshake, CreditCard, Heart } from 'lucide-react';

export function BeyondGraduation() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">Tumbuh Bersama Komunitas</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Dukungan tanpa henti untuk setiap langkah perjalanan akademik Anda.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-community-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-community-primary transition duration-300">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Handshake className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Lifetime Support 24/7</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Budaya saling bertanya jawab dan memecahkan masalah tanpa batasan waktu.</p>
                    </div>
                    <div className="bg-white dark:bg-community-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-community-primary transition duration-300">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CreditCard className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Jejaring Akademisi Nasional</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Terhubung langsung dengan ribuan akademisi dari Sabang hingga Merauke.</p>
                    </div>
                    <div className="bg-white dark:bg-community-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-community-primary transition duration-300">
                        <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kontribusi Nyata</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Bersama membangun ekosistem penelitian Indonesia yang lebih maju.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
