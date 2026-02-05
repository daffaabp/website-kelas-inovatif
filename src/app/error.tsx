"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen bg-eduzin-light font-sans selection:bg-eduzin-dark selection:text-white">
      <Navbar />

      <main className="grow flex items-center justify-center p-6 relative overflow-hidden pt-24 md:pt-32">
        {/* Decorative background elements matching the brand style */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-eduzin-dark/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-eduzin-dark/10 rounded-full blur-3xl animate-float"></div>

        <div className="max-w-2xl w-full text-center relative z-10 glass-panel p-8 md:p-12 rounded-3xl border border-eduzin-dark/10 shadow-sm">
          <div className="inline-flex items-center justify-center p-5 bg-red-50 rounded-full mb-8 animate-float">
            <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold text-eduzin-dark mb-4 tracking-tight">
            Terjadi Kesalahan
          </h1>
          
          <p className="text-gray-600 mb-2 leading-relaxed max-w-lg mx-auto text-base md:text-lg">
            Mohon maaf, sistem mengalami kendala teknis saat memproses permintaan Anda.
          </p>
          
          {/* Show error message in development only, or a generic message */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-lg text-left overflow-auto max-h-40">
               <p className="text-red-800 font-mono text-xs md:text-sm whitespace-pre-wrap wrap-break-word">
                 {error.message || "Unknown error occurred"}
               </p>
               {error.digest && (
                 <p className="text-red-600 font-mono text-xs mt-2">
                   Digest: {error.digest}
                 </p>
               )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={reset}
              className="group flex items-center gap-2 bg-eduzin-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-eduzin-dark/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Coba Lagi
            </button>
            
            <Link 
              href="/"
              className="group flex items-center gap-2 bg-white text-eduzin-dark border border-eduzin-dark/20 px-8 py-3.5 rounded-full font-medium hover:bg-eduzin-light transition-all duration-300"
            >
              <Home className="w-4 h-4" />
              Beranda
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
