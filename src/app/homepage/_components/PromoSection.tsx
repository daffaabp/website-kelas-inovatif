import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function PromoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">

          {/* Left Student */}
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-[400px]">
              <Image
                src="/community/community8.avif"
                alt="Student smiling"
                className="object-cover rounded-t-[100px] rounded-b-[20px] shadow-xl transition-all duration-500"
                fill
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="w-full md:w-1/3 text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center animate-spin-slow">
                <span className="text-[8px] font-bold uppercase tracking-widest text-center transform rotate-12">10.000+<br />Member Aktif</span>
              </div>
            </div>
            <span className="inline-block px-4 py-1 border border-gray-800 rounded-full text-xs font-bold uppercase tracking-wider">
              Komunitas AI Milik Anda
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium">
              Bertumbuh, Berinovasi, dan Berkolaborasi Bersama
            </h2>
            <Link href="/schedule" className="mx-auto bg-eduzin-dark text-white px-6 py-3 rounded-full gap-2 text-sm font-bold cursor-pointer group transition inline-flex items-center">
              Gabung Sekarang <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Student */}
          <div className="w-full md:w-1/3">
            <div className="relative w-full h-[400px]">
              <Image
                src="/community/community9.avif"
                alt="Student smiling"
                className="object-cover rounded-t-[20px] rounded-b-[100px] shadow-xl transition-all duration-500"
                fill
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

