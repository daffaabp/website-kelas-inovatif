import { Award, Users } from 'lucide-react';
import Image from 'next/image';

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image Mosaic */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4 pt-12">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src="/community/community3.avif" fill className="object-cover" alt="Kegiatan bersama member 1" />
              </div>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image src="/community/community2.avif" fill className="object-cover" alt="Kegiatan bersama member 2" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image src="/community/community4.avif" fill className="object-cover" alt="Kegiatan bersama member 3" />
              </div>
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src="/images/documentation-alumni/dokumentasi6.avif" fill className="object-cover" alt="Kegiatan bersama member 4" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="pl-0 lg:pl-10">
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Mengapa Memilih Kami?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-eduzin-dark">
              Jadilah Inovator Bersama Kelas Inovatif
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Kelas Inovatif adalah komunitas AI untuk akademisi yang ingin belajar, berkolaborasi, dan berkembang bersama dengan teknologi Artificial Intelligence. Didukung jalur pembelajaran, mentoring, networking, serta bukti nyata dari ribuan alumni sukses.
            </p>

            <div className="space-y-7 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduzin-light rounded-lg">
                  <Award size={20} className="text-eduzin-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mentor & Alumni Terpercaya</h4>
                  <p className="text-md text-gray-600">
                    Dibimbing instruktur berpengalaman, serta support nyata dari alumni doktoral dan peneliti AI Indonesia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-eduzin-light rounded-lg">
                  <Users size={20} className="text-eduzin-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Komunitas Aktif & Supportif</h4>
                  <p className="text-md text-gray-600">
                    Lingkungan belajar yang terbuka, ramah, dan inklusif — mendukung sharing pengetahuan, kolaborasi, dan pengembangan jaringan profesional.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
