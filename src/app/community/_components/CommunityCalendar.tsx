import React from 'react';

export function CommunityCalendar() {
    return (
        <section className="py-24 bg-community-primary text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full border-60 border-white"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full border-30 border-white"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold mb-4">Kalender Komunitas</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">Jangan lewatkan apa yang sedang terjadi. Dari kuliah tamu hingga acara sosial, tetap terhubung.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div className="shrink-0 w-full md:w-24 text-center mb-4 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-8">
                            <span className="block text-sm uppercase tracking-wider opacity-70">SETIAP</span>
                            <span className="block text-3xl font-serif font-bold">BULAN</span>
                        </div>
                        <div className="grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="text-xs bg-white text-community-primary px-2 py-0.5 rounded font-bold uppercase">UTAMA</span>
                                <span className="text-xs opacity-70 flex items-center"><span className="material-icons-outlined text-sm mr-1">schedule</span> Sabtu, 19:30 WIB</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Monthly Meeting Bersama Pak Arianto</h3>
                            <p className="text-sm text-gray-300">Zoom Meeting • Bedah kasus AI, Update Tools, & Tanya Jawab Riset.</p>
                        </div>
                        <div className="mt-4 md:mt-0 shrink-0">
                            <button className="bg-transparent border border-white hover:bg-white hover:text-community-primary px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">Daftar Hadir</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div className="shrink-0 w-full md:w-24 text-center mb-4 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-8">
                            <span className="block text-sm uppercase tracking-wider opacity-70">FEB</span>
                            <span className="block text-3xl font-serif font-bold">15</span>
                        </div>
                        <div className="grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded font-bold uppercase">Workshop</span>
                                <span className="text-xs opacity-70 flex items-center"><span className="material-icons-outlined text-sm mr-1">schedule</span> 09:00 - 12:00</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Bedah Jurnal Scopus Q1</h3>
                            <p className="text-sm text-gray-300">Live Case Study • Strategi Menembus Reviewer Internasional</p>
                        </div>
                        <div className="mt-4 md:mt-0 shrink-0">
                            <button className="bg-transparent border border-white hover:bg-white hover:text-community-primary px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">Ikuti Sesi</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div className="shrink-0 w-full md:w-24 text-center mb-4 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-8">
                            <span className="block text-sm uppercase tracking-wider opacity-70">FEB</span>
                            <span className="block text-3xl font-serif font-bold">22</span>
                        </div>
                        <div className="grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded font-bold uppercase">Klinik</span>
                                <span className="text-xs opacity-70 flex items-center"><span className="material-icons-outlined text-sm mr-1">schedule</span> 13:00 - 15:00</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Klinik Percepatan Disertasi</h3>
                            <p className="text-sm text-gray-300">Sesi Khusus • Konsultasi Kendala Promovendus</p>
                        </div>
                        <div className="mt-4 md:mt-0 shrink-0">
                            <button className="bg-transparent border border-white hover:bg-white hover:text-community-primary px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">Daftar Antrian</button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a className="inline-flex items-center text-sm font-bold text-white hover:text-gray-200 transition" href="#">
                        Lihat Kalender Lengkap <span className="material-icons-outlined ml-2">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
