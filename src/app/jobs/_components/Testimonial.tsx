import Image from 'next/image';

export function Testimonial() {
    return (
        <div className="relative h-80 w-full overflow-hidden">
            <Image
                alt="University students collaborating in a modern library"
                className="object-cover"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop"
                fill
            />
            <div className="absolute inset-0 bg-eduzin-dark/40 flex items-center justify-center">
                <div className="text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">&quot;Bekerja di sini berarti berkontribusi langsung bagi dosen dan mahasiswa.&quot;</h2>
                    <p className="text-white/90 text-sm md:text-base font-light italic">— Tim Kelas Inovatif</p>
                </div>
            </div>
        </div>
    );
}
