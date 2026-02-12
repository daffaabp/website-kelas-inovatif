import Image from 'next/image';

export function AboutHero() {
    return (
        <header className="relative pt-32 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Kegiatan komunitas Kelas Inovatif"
                    className="object-cover opacity-20 dark:opacity-10"
                    fill
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4-_qe17AU3qQ_289nbOlJE5KVNyNoOcz9bPaYVi2OXNlbO9QNkZ0AQEQgELo6W9oQtVf779r33P7NsREBsGY4X6qbtdDcASYp_IXiA6wOqAYyT6bILk5mHuOfERX7I2VJ96LBxh-vy6RF9P1o-vE0pm1fZ7dYEVrH3Y8X5DCbO6rFAHNpUkst1lGuERC6qRczaHpn-OFvVbDQKqSYx7k0TgEkth_xfL8MHdFQ4fNHeXDLkb2nlO_lz_Mf2yAhKytlxvWtp_F1yw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-about-bg-light dark:from-about-bg-dark to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/10 border border-gray-200 dark:border-gray-700 backdrop-blur-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-about-primary"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-600 dark:text-gray-400">
                        10.000+ Anggota Akademik
                    </span>
                </div>
                <h3 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-about-primary dark:text-white">
                    Komunitas AI untuk Akademisi Indonesia
                </h3>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Kelas Inovatif adalah komunitas pembelajaran AI No.1 di Indonesia yang
                    didedikasikan khusus untuk akademisi. Kami membantu mahasiswa, dosen, dan
                    peneliti menyelesaikan skripsi, tesis, disertasi, dan publikasi internasional
                    melalui pendekatan yang praktis, terstruktur, dan didukung komunitas yang aktif.
                </p>
            </div>
        </header>
    );
}
