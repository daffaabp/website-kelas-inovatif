import Image from 'next/image';

export function Hero() {
    return (
        <header className="relative bg-program-primary py-24 sm:py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
                <Image
                    alt="University Campus Pattern"
                    className="object-cover mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvNfmmy8TluoI3JMEvDAebDud2myFxR7cyO9fd9C07qRtXHbzDzBA3EqACfk7Y7d2F9YlHZhks-Ng_28cICwMYKeSEJPEWs8sdDiNbpxfeEY7MI0kdisyrQKH1SutJ4FkWXMuvWjeSUnwCW38aDGBS8YPFi3L9UjRaO-IE9xNST8frUOHGCbp-htAMfLCRsLQAb35-vk80Rh-nZMkQW6XCHGa8e82n7mfnanAHv4i_1CU5UunTq8RMChba3Jfn0R3otgbdj-mrmgc"
                    fill
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-program-primary via-transparent to-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider mb-6 backdrop-blur-sm">
                    Tumbuh & Berkarya Bersama
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                    Belajar, Kolaborasi, dan Raih Cita Akademik<br className="hidden md:block" />
                    <i className="font-serif italic text-white/90">di Komunitas Kami</i>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 font-light">
                    Bergabunglah dengan program yang tidak hanya meningkatkan pengetahuan, tetapi juga menguatkan semangat, koneksi, dan kepedulian akademik Anda. Bersama, kita mengembangkan potensi untuk masa depan yang inovatif dan bermakna.
                </p>
            </div>
        </header>
    );
}
