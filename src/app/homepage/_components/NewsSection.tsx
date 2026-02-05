import { ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';
import { newsList } from '../_data/news';

function ShareButtons({ isDark = false }: { isDark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mr-4 md:mr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'text-white/80' : 'text-gray-400'}`}>
      <button
        className={`p-1.5 rounded-full transition-all hover:scale-110 cursor-pointer ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
        aria-label="Share on Facebook"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <Facebook size={14} />
      </button>
      <button
        className={`p-1.5 rounded-full transition-all hover:scale-110 cursor-pointer ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
        aria-label="Share on Twitter"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <Twitter size={14} />
      </button>
      <button
        className={`p-1.5 rounded-full transition-all hover:scale-110 cursor-pointer ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
        aria-label="Share on LinkedIn"
        onClick={(e) => { e.stopPropagation(); }}
      >
        <Linkedin size={14} />
      </button>
      <div className={`w-px h-4 mx-1 ${isDark ? 'bg-white/20' : 'bg-gray-200'}`}></div>
    </div>
  );
}

export function NewsSection() {
  return (
    <section className="py-20 bg-eduzin-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-2">Acara</span>
            <h2 className="text-3xl font-medium">Berita tentang komunitas<br />akademik Kelas Inovatif kami</h2>
          </div>
          <button className="bg-eduzin-dark text-white px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-opacity-90 transition-colors cursor-pointer">
            BERITA LAINNYA <ArrowRight size={14} />
          </button>
        </div>

        <div className="space-y-2">
          {/* Item 1 - Active Style (Highlight) */}
          <div className="group bg-eduzin-dark text-white p-8 rounded-lg flex flex-col md:flex-row justify-between items-center cursor-pointer transform hover:scale-[1.005] transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-8 w-full">
              <span className="text-xs opacity-60 font-mono">21 JUNI 2025</span>
              <h3 className="text-xl font-medium">Portal pembelajaran jarak jauh menyederhanakan interaksi mahasiswa-dosen</h3>
            </div>
            <div className="flex items-center mt-6 md:mt-0 whitespace-nowrap">
              <ShareButtons isDark={true} />
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">Baca Selengkapnya</span>
                <ArrowRight size={20} className="opacity-100 md:opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* List Items */}
          {newsList.filter(n => !n.isHighlight).map((news) => (
            <div key={news.id} className="group bg-transparent hover:bg-white border-b border-gray-200 p-8 rounded-lg flex flex-col md:flex-row justify-between items-center cursor-pointer transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-8 w-full">
                <span className="text-xs text-gray-500 font-mono">{news.date}</span>
                <h3 className="text-xl font-medium text-gray-800">{news.title}</h3>
              </div>
              <div className="flex items-center mt-6 md:mt-0">
                <ShareButtons isDark={false} />
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 group-hover:bg-eduzin-dark group-hover:text-white group-hover:border-transparent transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

