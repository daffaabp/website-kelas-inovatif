
import React from 'react';
import { Quote, Star, PlayCircle } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            name: "Ibu Nova Hariani",
            role: "Penulis Buku",
            quote: "Alhamdulillah selesai membuat buku. Sangat terbantu dengan bimbingan privat ini karena saya dituntun step-by-step.",
            videoUrl: "https://youtu.be/z1JjhGsAf9g",
            thumbnail: "https://img.youtube.com/vi/z1JjhGsAf9g/maxresdefault.jpg",
            highlight: "Sukses Menerbitkan Buku"
        },
        {
            name: "Ibu Siti Maesura",
            role: "Mahasiswa S2",
            quote: "Akhirnya proposal tesis saya selesai! Mentor benar-benar sabar mengajarkan cara pakai AI yang valid dan tidak asal copy-paste.",
            videoUrl: "https://youtu.be/bjPH_o9mBY4",
            thumbnail: "https://img.youtube.com/vi/bjPH_o9mBY4/maxresdefault.jpg",
            highlight: "Proposal Tesis Disetujui"
        },
        {
            name: "Bpk. Ahmad Suhaedi",
            role: "Mahasiswa S2",
            quote: "Turnitin di bawah 5%! Teknik parafrase dan penggunaan AI yang diajarkan sangat presisi. Proposal tesis lancar jaya.",
            videoUrl: "https://youtu.be/8SntnOR87aM",
            thumbnail: "https://img.youtube.com/vi/8SntnOR87aM/maxresdefault.jpg",
            highlight: "Turnitin < 5%"
        },
        {
            name: "Alumni Disertasi",
            role: "Kandidat Doktor",
            quote: "Investasi terbaik untuk penyelesaian disertasi. Program ini sangat membantu memetakan research gap dengan cepat.",
            videoUrl: "https://youtu.be/1yh_Pp_0uQ4",
            thumbnail: "https://img.youtube.com/vi/1yh_Pp_0uQ4/maxresdefault.jpg",
            highlight: "Percepatan Disertasi"
        }
    ];

    return (
        <section className="py-24 bg-private-surface-light dark:bg-private-surface-dark transition-colors duration-300" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-private-primary dark:text-white uppercase mb-4 inline-block px-4 py-1 border border-private-primary dark:border-white rounded-full">Hasil Nyata</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-private-primary dark:text-white mb-6">Cerita Sukses Alumni</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Bukan sekadar janji, inilah bukti keberhasilan peserta Private Master Class dalam menuntaskan karya ilmiah mereka.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-private-bg-light dark:bg-private-bg-dark rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-300">
                            {/* Video Thumbnail */}
                            <div className="relative aspect-video overflow-hidden bg-gray-200">
                                <img 
                                    src={item.thumbnail} 
                                    alt={`Testimoni ${item.name}`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <a 
                                    href={item.videoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform hover:bg-white/30">
                                        <PlayCircle className="w-5 h-5 text-white fill-current" />
                                    </div>
                                </a>
                                <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">
                                    {item.highlight}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col grow relative">
                                <Quote className="text-gray-200 dark:text-gray-700 absolute top-4 right-4 w-8 h-8 opacity-50" />
                                <div className="mb-4">
                                     <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.name}</h3>
                                     <p className="text-xs text-private-primary font-medium">{item.role}</p>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 grow italic">
                                    "{item.quote}"
                                </p>
                                <div className="flex text-yellow-500 text-xs gap-0.5 mt-auto">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
