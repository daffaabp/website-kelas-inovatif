import Link from "next/link";
import { MoveLeft, BookOpen, FileQuestion } from "lucide-react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-eduzin-light font-sans selection:bg-eduzin-dark selection:text-white">
      <Navbar />

      <main className="grow flex items-center justify-center p-6 relative overflow-hidden pt-24 md:pt-32">
        {/* Decorative background elements matching the brand style */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-eduzin-dark/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-eduzin-dark/10 rounded-full blur-3xl animate-float"></div>

        <div className="max-w-2xl w-full text-center relative z-10 glass-panel p-8 md:p-12 rounded-3xl border border-eduzin-dark/10 shadow-sm">
          <div className="inline-flex items-center justify-center p-5 bg-eduzin-dark/5 rounded-full mb-8 animate-float">
            <FileQuestion className="w-10 h-10 text-eduzin-dark" strokeWidth={1.5} />
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-eduzin-dark mb-4 tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          
          <p className="text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto text-base md:text-lg">
            Mohon maaf, halaman yang Anda cari tidak dapat ditemukan. Kemungkinan halaman telah dihapus, dipindahkan, atau alamat URL yang Anda masukkan salah.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="group flex items-center gap-2 bg-eduzin-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-eduzin-dark/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
            
            <Link 
              href="/program"
              className="group flex items-center gap-2 bg-white text-eduzin-dark border border-eduzin-dark/20 px-8 py-3.5 rounded-full font-medium hover:bg-eduzin-light transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              Lihat Program
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
