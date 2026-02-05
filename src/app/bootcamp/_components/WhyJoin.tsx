"use client";

import { CheckCircle2, Target, Users, Infinity as InfinityIcon } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Outcome Oriented",
    description: "Fokus utama bukan sekadar transfer ilmu, tapi progres nyata naskah Anda. Target kami adalah Anda pulang dengan draft yang siap submit.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Didampingi langsung oleh praktisi dan akademisi yang telah memiliki track record publikasi di jurnal bereputasi tinggi (Q1/Q2).",
  },
  {
    icon: CheckCircle2,
    title: "Integrated Workflow",
    description: "Satu benang merah pembelajaran. Materi hari pertama (Metode) akan langsung digunakan untuk materi hari ke-4 (Publikasi).",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime Access",
    description: "Akses selamanya ke rekaman materi dan grup komunitas alumni. Anda bisa *rewatch* kapan saja saat menulis paper di masa depan.",
  },
];

export default function WhyJoin() {
  return (
    <section className="py-24 bg-[#1A3C34] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Kenapa Harus Bootcamp Ini?
          </h2>
          <p className="text-white/80 text-lg">
            Kami mendesain pengalaman belajar yang berbeda dari webinar biasa. Ini adalah akselerasi karir akademik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors animate-fadeIn fill-mode-[both]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-bootcamp-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
