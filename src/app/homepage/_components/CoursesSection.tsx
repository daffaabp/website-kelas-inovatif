"use client";

import { useState } from 'react';
import { BookOpen, Laptop, Users, Handshake, Trophy, RefreshCcw, ArrowRight, ArrowDown } from 'lucide-react';
import { courses } from '../_data/courses';
import { Course } from '../types';

interface CoursesSectionProps {
  onCourseSelect?: (course: Course) => void;
}

export function CoursesSection({ onCourseSelect }: CoursesSectionProps) {
  // Logic for diagram
  const [activePath, setActivePath] = useState<'scopus' | 'update' | null>(null);
  const scale = 1.1;

  // Existing logic (if any needed, e.g. for selection later)
  const academicCourse = courses[0];

  const handleCourseClick = (course: Course) => {
    if (onCourseSelect) {
      onCourseSelect(course);
    }
  };

  return (
    <section 
      id="pages" 
      className="relative py-24 overflow-hidden" 
      style={{ backgroundColor: "#F8F9FA" }} 
    >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-eduzin-dark rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-eduzin-dark shadow-sm">
                    Ekosistem Belajar
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Satu Komunitas, <span className="bg-clip-text bg-linear-to-r from-eduzin-dark to-eduzin-light">Semua Solusi Akademik.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Kami mendesain ekosistem yang menghubungkan pembelajaran, praktik, dan kolaborasi riset untuk memastikan Anda tidak hanya belajar, tapi menghasilkan karya nyata.
                </p>
            </div>

            {/* INTEGRATED JOURNEY DIAGRAM */}
            <div className="w-full py-16 px-4 pt-2 md:px-8 rounded-3xl shadow-xl border bg-white/50 backdrop-blur-sm" style={{ minHeight: '650px' }}>
              
              {/* Desktop View container - Compact & Responsive */}
              <div className="hidden xl:block relative w-full h-[550px] mx-auto -translate-x-6" style={{ maxWidth: '1050px' }}>
                
                {/* --- CONNECTOR LAYER (SVG) --- */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 1050 550" preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
                        <defs>
                           <linearGradient id="gradFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#cbd5e1" />
                                <stop offset="100%" stopColor="#94a3b8" />
                            </linearGradient>
                            <linearGradient id="gradActiveGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#34d399" />
                                <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                             <linearGradient id="gradActivePurple" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#9333ea" />
                            </linearGradient>
                            <filter id="glowPath">
                                 <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                 <feMerge>
                                     <feMergeNode in="coloredBlur"/>
                                     <feMergeNode in="SourceGraphic"/>
                                 </feMerge>
                            </filter>
                        </defs>
        
                        {/* 1. Classes -> Praktik 
                            Col 1 Center: 100 
                            Col 2 Center: 350
                        */}
                        <path d="M 200 100 C 240 100, 240 250, 260 250" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                        <path d="M 200 250 L 260 250" fill="none" stroke="#cbd5e1" strokeWidth="3" />
                        <path d="M 200 400 C 240 400, 240 250, 260 250" fill="none" stroke="#cbd5e1" strokeWidth="3" />
        
                        {/* 2. Praktik -> Komunitas 
                            Col 2 Center: 350
                            Col 3 Center: 600
                        */}
                        <path d="M 450 250 L 520 250" fill="none" stroke="#94a3b8" strokeWidth="4" />
        
                        {/* 3. Komunitas -> Branches
                            Col 3 Center: 600
                            Col 4 Center: 900
                        */}
                        
                        {/* Branch Update */}
                        <path 
                            d="M 680 250 C 740 250, 740 150, 800 150" 
                            fill="none" 
                            stroke={activePath === 'update' ? "url(#gradActiveGreen)" : "#cbd5e1"} 
                            strokeWidth={activePath === 'update' ? 5 : 3} 
                            className="transition-all duration-500"
                            filter={activePath === 'update' ? "url(#glowPath)" : ""}
                        />
                        
                        {/* Branch Collab -> Scopus */}
                        <path 
                            d="M 680 250 C 740 250, 740 400, 800 400" 
                            fill="none" 
                            stroke={activePath === 'scopus' ? "url(#gradActivePurple)" : "#cbd5e1"} 
                            strokeWidth={activePath === 'scopus' ? 5 : 3} 
                            className="transition-all duration-500"
                            filter={activePath === 'scopus' ? "url(#glowPath)" : ""}
                        />
                    </svg>
                </div>
        
                {/* --- NODE LAYER --- */}
                
                {/* COL 1: Classes (Center X: 100) */}
                <div className="absolute top-[100px] left-[100px] -translate-x-1/2 -translate-y-1/2 z-10">
                    <NodeCard icon={BookOpen} title="Kelas Literature Review" sub="Riset Otomatis" color="blue" />
                </div>
                <div className="absolute top-[250px] left-[100px] -translate-x-1/2 -translate-y-1/2 z-10">
                    <NodeCard icon={BookOpen} title="Kelas Writing" sub="Anti-Plagiasi" color="indigo" />
                </div>
                <div className="absolute top-[400px] left-[100px] -translate-x-1/2 -translate-y-1/2 z-10">
                    <NodeCard icon={BookOpen} title="Kelas Data Analysis" sub="Pengolahan Data" color="sky" />
                </div>
        
                {/* COL 2: Praktik (Center X: 350) */}
                <div className="absolute top-[250px] left-[350px] -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-50 flex flex-col items-center gap-3 w-48 text-center hover:-translate-y-1 transition-transform duration-300">
                         <div className="p-4 bg-blue-100 rounded-full text-blue-600 shadow-inner">
                             <Laptop size={32} />
                         </div>
                         <div>
                             <h4 className="font-bold text-gray-900 text-xl mb-1">Praktik Intensif</h4>
                             <p className="text-[11px] bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-block">Bimbingan Mentor</p>
                         </div>
                    </div>
                </div>
        
                {/* COL 3: Komunitas (Center X: 600) */}
                <div className="absolute top-[250px] left-[600px] -translate-x-1/2 -translate-y-1/2 z-20"
                     onMouseEnter={() => setActivePath(null)}
                >
                     <div className="relative group cursor-pointer flex flex-col items-center">
                         {/* Hub Circle */}
                         <div className="w-32 h-32 rounded-full bg-eduzin-dark border-[6px] border-white shadow-2xl flex items-center justify-center text-white relative z-10 group-hover:scale-105 transition-transform duration-300 ring-1 ring-gray-100">
                              <Users size={48} />
                              <div className="absolute -top-3 bg-yellow-400 text-eduzin-dark text-[11px] font-bold px-3 py-1 rounded-full shadow-md border-2 border-white">
                                 Central Hub
                              </div>
                         </div>
                         
                         {/* Text Label Outside */}
                         <div className="mt-5 text-center bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-100 shadow-xl w-48">
                              <h4 className="font-serif font-bold text-xl text-eduzin-dark leading-none mb-1">KOMUNITAS</h4>
                              <p className="text-[11px] text-gray-500 font-medium">Jejaring Riset Nasional</p>
                         </div>
                     </div>
                </div>
        
                {/* COL 4: Outputs (Center X: 900) */}
                
                {/* Top: Update Materi */}
                <div className="absolute top-[150px] left-[900px] -translate-x-1/2 -translate-y-1/2 z-10"
                     onMouseEnter={() => setActivePath('update')}
                     onMouseLeave={() => setActivePath(null)}
                >
                     <div className={`
                         bg-white p-5 rounded-2xl shadow-md border border-gray-100 w-64 transition-all duration-300 flex items-center gap-4 cursor-default
                         ${activePath === 'update' ? 'ring-4 ring-emerald-100 border-emerald-200 scale-105 shadow-xl' : 'opacity-90 hover:opacity-100'}
                     `}>
                          <div className={`p-3 rounded-xl shrink-0 transition-colors ${activePath === 'update' ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                              <RefreshCcw size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900 text-base">Update Materi</h4>
                              <p className="text-xs text-gray-500 mt-1">Akses modul baru & <br/>rekaman seminar.</p>
                          </div>
                     </div>
                </div>
        
                {/* Bottom: Kolaborasi & Scopus */}
                <div className="absolute top-[400px] left-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 z-10"
                     onMouseEnter={() => setActivePath('scopus')}
                     onMouseLeave={() => setActivePath(null)}
                >
                     {/* Kolaborasi Node */}
                     <div className={`
                         bg-white p-4 rounded-xl shadow-md border border-gray-100 w-44 transition-all duration-300 flex flex-col items-center text-center cursor-default
                         ${activePath === 'scopus' ? 'border-purple-200 shadow-purple-100' : 'opacity-90 hover:opacity-100'}
                     `}>
                          <div className="p-2 bg-purple-50 rounded-full text-purple-600 mb-2">
                               <Handshake size={20} />
                          </div>
                          <h4 className="font-bold text-gray-800 text-sm">Kolaborasi Riset</h4>
                          <p className="text-[10px] text-gray-400 mt-0.5">Partner & Tim</p>
                     </div>
                     
                     {/* Arrow */}
                     <ArrowRight className={`transition-colors ${activePath === 'scopus' ? 'text-purple-500' : 'text-gray-300'}`} />
        
                     {/* Scopus Goal Node */}
                     <div className={`
                         relative bg-linear-to-b from-amber-50 to-white p-5 rounded-xl shadow-xl border w-64 flex flex-col gap-2 cursor-default transition-all duration-300
                         ${activePath === 'scopus' ? 'border-amber-400 scale-110 shadow-amber-200/50 ring-4 ring-amber-50 z-20' : 'border-amber-200'}
                     `}>
                          <div className="flex justify-between items-start">
                              <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                                <Trophy size={24} />
                              </div>
                              <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
                                  Main Goal
                              </span>
                          </div>
                          <div>
                              <h4 className="font-serif font-bold text-2xl text-gray-900 mb-1">Publikasi</h4>
                              <p className="text-xs text-gray-600 leading-tight">Tembus Jurnal Scopus/Sinta</p>
                          </div>
                     </div>
                </div>
        
              </div>
        
              {/* Mobile View - Vertical Step-by-Step Timeline */}
              <div className="xl:hidden max-w-sm mx-auto relative pt-4 pb-10">
                  
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-8 bottom-8 w-1 bg-linear-to-b from-blue-200 via-gray-200 to-amber-200 rounded-full"></div>
        
                  <div className="space-y-8 relative">
                      
                      {/* Step 1: Classes */}
                      <div className="relative pl-16">
                           <div className="absolute left-3 top-0 w-7 h-7 bg-blue-500 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold z-10">1</div>
                           <div className="space-y-3">
                               <div className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
                                   Learning Phase
                               </div>
                               <div className="flex flex-col gap-3">
                                  <NodeCard icon={BookOpen} title="Kelas Literature Review" sub="Riset Otomatis" color="blue" />
                                  <NodeCard icon={BookOpen} title="Kelas Writing" sub="Anti-Plagiasi" color="indigo" />
                                  <NodeCard icon={BookOpen} title="Kelas Data Analysis" sub="Pengolahan Data" color="sky" />
                               </div>
                           </div>
                      </div>
        
                      {/* Step 2: Praktik */}
                      <div className="relative pl-16">
                          <div className="absolute left-3 top-0 w-7 h-7 bg-indigo-500 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold z-10">2</div>
                          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-md flex items-center gap-4 relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                              <div className="p-3 bg-indigo-100 rounded-full text-indigo-600 shrink-0 z-10"><Laptop size={24}/></div>
                              <div className="flex-1 z-10">
                                   <h4 className="font-bold text-gray-900 text-lg">Praktik Intensif</h4>
                                   <p className="text-xs text-gray-500">Bimbingan Mentor Eksklusif</p>
                              </div>
                          </div>
                      </div>
        
                      {/* Step 3: Hub */}
                      <div className="relative pl-16">
                          <div className="absolute left-3 top-0 w-7 h-7 bg-eduzin-dark rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold z-10">3</div>
                          <div className="bg-eduzin-dark p-6 rounded-2xl shadow-xl text-white relative overflow-hidden ring-4 ring-gray-50 group">
                               <div className="absolute top-0 right-0 p-4 opacity-20"><Users size={64}/></div>
                               <h4 className="font-serif font-bold text-xl mb-1">KOMUNITAS</h4>
                               <p className="text-xs text-white/70 tracking-wide uppercase">Jejaring Riset Nasional</p>
                          </div>
                      </div>
        
                      {/* Step 4: Outcomes */}
                      <div className="relative pl-16">
                           <div className="absolute left-3 top-0 w-7 h-7 bg-amber-500 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold z-10">4</div>
                           <div className="grid gap-3">
                               {/* Update */}
                               <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-center gap-3">
                                   <div className="p-2.5 bg-white rounded-lg text-emerald-600 shadow-sm shrink-0"><RefreshCcw size={20}/></div>
                                   <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Update Materi</h4>
                                        <p className="text-xs text-emerald-700 leading-tight">Lifetime Access & Updates</p>
                                   </div>
                               </div>
                               
                               {/* Scopus Goal */}
                               <div className="bg-linear-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200 shadow-md relative overflow-hidden">
                                   <div className="flex items-center gap-3 relative z-10">
                                       <div className="p-3 bg-white rounded-full text-amber-500 shadow-md shrink-0">
                                           <Trophy size={24} />
                                       </div>
                                       <div>
                                           <div className="flex items-center gap-2 mb-1">
                                               <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm">FINAL GOAL</span>
                                           </div>
                                           <h4 className="font-serif font-bold text-xl text-gray-900">Publikasi Scopus</h4>
                                           <p className="text-xs text-gray-600">Tembus Jurnal Bereputasi</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                      </div>
                  </div>
              </div>
        
            </div>
            {/* END INTEGRATED JOURNEY DIAGRAM */}

        </div>
    </section>
  );
}

function NodeCard({ icon: Icon, title, sub, color }: any) {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
        indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
        sky: 'bg-sky-50 text-sky-600 border-sky-100',
        gray: 'bg-gray-50 text-gray-600 border-gray-100'
    };

    const activeColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.gray;

    return (
        <div className="bg-white px-5 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 w-full md:w-52 hover:border-gray-300 hover:shadow-md transition-all cursor-default group">
            <div className={`p-2.5 rounded-lg ${activeColor} group-hover:scale-110 transition-transform`}>
                <Icon size={18} />
            </div>
            <div>
                <h4 className="font-bold text-sm text-gray-900 mb-0.5">{title}</h4>
                <p className="text-[11px] text-gray-500 font-medium">{sub}</p>
            </div>
        </div>
    )
}
