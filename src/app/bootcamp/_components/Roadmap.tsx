"use client";

import { Microscope, Bot, BarChart3, FileCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Metodologi Penelitian",
    subtitle: "Foundation",
    description: "Membedah cara memilih dan merancang metode riset yang tepat agar riset Anda memiliki pondasi yang kuat.",
    icon: Microscope,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Academic Writing with AI",
    subtitle: "Acceleration",
    description: "Teknik prompting, paraphrasing, dan citasi otomatis untuk mempercepat drafting naskah tanpa melanggar etika.",
    icon: Bot,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Data Analysis (Kuan/Kual)",
    subtitle: "Evidence",
    description: "Bimbingan teknis analisis data (SPSS/SEM-PLS atau NVivo/Atlas.ti) hingga interpretasi hasil yang valid.",
    icon: BarChart3,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    title: "Publication Strategy",
    subtitle: "Goal",
    description: "Strategi menembus jurnal Sinta atau Scopus, mulai dari bedah jurnal, submit, hingga korespondensi review.",
    icon: FileCheck,
    color: "bg-green-100 text-green-600",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding bg-white relative overflow-hidden py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A3C34] mb-4">
            Roadmap Menuju Publikasi
          </h2>
          <p className="text-muted-foreground text-lg">
            Kurikulum &quot;End-to-End&quot; yang dirancang sistematis untuk memandu Anda dari ide mentah hingga naskah siap terbit.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 animate-fadeIn fill-mode-[both] ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`p-6 rounded-2xl bg-[#FDFBF7] border border-[#1A3C34]/10 shadow-sm hover:shadow-md transition-shadow duration-300 relative group`}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-[#1A3C34] select-none">
                      0{step.id}
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1A3C34]/5 text-[#1A3C34] mb-3">
                      {step.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#1A3C34] mb-2 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#FDFBF7] shadow-lg shrink-0">
                  <step.icon className={`w-8 h-8 ${step.color.split(" ")[1]}`} />
                </div>

                {/* Empty Side for Layout Balance */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
