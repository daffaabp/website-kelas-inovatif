import React from 'react';

export function Stats() {
    return (
        <div className="bg-community-primary border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    <div className="p-4">
                        <div className="font-serif text-4xl text-white font-bold mb-2">300+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest">Lulusan Doktor</div>
                    </div>
                    <div className="p-4">
                        <div className="font-serif text-4xl text-white font-bold mb-2">500+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest">Publikasi Scopus/Sinta</div>
                    </div>
                    <div className="p-4">
                        <div className="font-serif text-4xl text-white font-bold mb-2">100%</div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest">Rutin Monthly Meeting</div>
                    </div>
                    <div className="p-4">
                        <div className="font-serif text-4xl text-white font-bold mb-2">10k+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest">Komunitas Akademisi</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
