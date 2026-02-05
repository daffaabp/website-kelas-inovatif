import React from 'react';

export function CommunityLeader() {
    return (
        <section className="py-24 bg-community-bg-light dark:bg-community-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-community-card-dark rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative h-96 lg:h-auto">
                            <img
                                alt="Arianto, S.T., M.T."
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/images/speaker/arianto.avif"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold text-lg">M. Arianto</p>
                                <p className="text-gray-300 text-sm">Pembina Kelas Inovtif (AI Engineer & Researcher)</p>
                            </div>
                        </div>
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <span className="text-6xl text-community-primary opacity-20 font-serif leading-none">"</span>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                                Visi kami sederhana: Memastikan tidak ada akademisi Indonesia yang tertinggal. Kami membangun jembatan antara kerumitan teknologi AI dan integritas riset ilmiah.
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Kelas Inovatif bukan sekadar kursus, tapi keluarga. Di sesi bulanan, kami membedah tantangan nyata yang dihadapi rekan-rekan dalam meraih gelar Doktor dan publikasi internasional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
