import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { ScheduleContent } from './_components/ScheduleContent';
import { getScheduleById } from '@/app/actions/schedule';
import type { Metadata } from 'next';
import {
    Info,
    Calendar,
    Clock,
    Video,
    ArrowRight
} from 'lucide-react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const scheduleId = parseInt(id);

    if (isNaN(scheduleId)) {
        return {
            title: 'Acara Tidak Ditemukan - Kelas Inovatif',
        };
    }

    const schedule = await getScheduleById(scheduleId);

    if (!schedule) {
        return {
            title: 'Acara Tidak Ditemukan - Kelas Inovatif',
        };
    }

    return {
        title: `${schedule.title} - Kelas Inovatif`,
        description: schedule.description,
    };
}

export default async function ScheduleDetailPage({ params }: Props) {
    const { id } = await params;
    const scheduleId = parseInt(id);

    if (isNaN(scheduleId)) notFound();

    const schedule = await getScheduleById(scheduleId);

    if (!schedule) notFound();

    const formattedDate = new Date(schedule.date).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const speaker = {
        name: schedule.speaker_name,
        image: schedule.speaker_image,
        role: schedule.speaker_role,
    };

    const originalPrice = schedule.original_price || 0;
    const discountedPrice = schedule.discounted_price || 0;
    const discountPercentage = originalPrice > 0 && discountedPrice < originalPrice
        ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
        : 0;



    // The current design uses separate "Rp" span, so we just want the number string mostly, 
    // but Intl adds dots. 
    // e.g. 249.000
    const formatNumber = (amount: number) => {
        return new Intl.NumberFormat('id-ID').format(amount);
    };

    return (
        <main className="bg-schedule-bg-light dark:bg-schedule-bg-dark font-sans text-schedule-primary dark:text-white flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-schedule-surface-light dark:bg-schedule-bg-dark pt-28 md:pt-32 pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-schedule-primary/5 via-transparent to-transparent"></div>
                <div className="relative max-w-[1280px] mx-auto px-4 sm:px-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link className="hover:text-schedule-primary" href="/">Home</Link>
                        <span className="text-[16px] text-gray-400">›</span>
                        <Link className="hover:text-schedule-primary" href="/schedule">Webinar</Link>
                        <span className="text-[16px] text-gray-400">›</span>
                        <span className="text-schedule-primary dark:text-white font-medium">Detail Event</span>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                {schedule.type}
                            </div>
                            <h1 className="text-schedule-primary dark:text-white text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] tracking-tight">
                                {schedule.title}
                            </h1>
                            {/* Short description for header */}
                            <p className="text-muted-foreground dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                                {schedule.excerpt || ""}
                            </p>


                        </div>

                        {/* Right Side / Hero Image */}
                        <div className="lg:col-span-2 relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-schedule-primary/10 group mt-8 lg:mt-0">
                            {schedule.image ? (
                                <Image
                                    src={schedule.image}
                                    alt={schedule.title}
                                    className="w-full h-auto object-cover bg-black/5 dark:bg-black/20"
                                    width={800}
                                    height={450}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            ) : (
                                <div className="w-full min-h-[300px] bg-slate-200 dark:bg-slate-700 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Split */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-10 py-12 w-full">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* About Event */}
                        <div className="bg-schedule-surface-light dark:bg-schedule-surface-dark rounded-2xl p-6 sm:p-8 shadow-sm border border-schedule-accent dark:border-gray-800">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-schedule-primary dark:text-white">
                                <Info className="text-schedule-primary" />
                                Tentang Event
                            </h3>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground dark:text-gray-400 leading-relaxed">
                                <ScheduleContent description={schedule.description} />
                            </div>
                        </div>



                        {/* Speaker Profile (Mobile) */}
                        <div className="lg:hidden bg-schedule-surface-light dark:bg-schedule-surface-dark rounded-2xl p-6 shadow-sm border border-schedule-accent dark:border-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-schedule-primary dark:text-white">Pembicara</h3>
                            <div className="flex items-center gap-4">
                                <Image alt={speaker.name} className="rounded-full object-cover" src={speaker.image || "https://i.pravatar.cc/150"} width={64} height={64} />
                                <div>
                                    <h4 className="font-bold text-lg text-schedule-primary dark:text-white">{speaker.name}</h4>
                                    <p className="text-sm text-muted-foreground">{speaker.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-schedule-surface-light dark:bg-schedule-surface-dark rounded-2xl shadow-lg shadow-schedule-primary/5 border border-schedule-accent dark:border-gray-800 overflow-hidden sticky top-24">
                            <div className="p-6 pb-0">
                                {/* Price Section Desktop */}
                                <div className="mb-4">
                                    {(originalPrice > 0 && originalPrice > discountedPrice) && (
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm text-muted-foreground line-through decoration-red-500/50">
                                                Rp {formatNumber(originalPrice)}
                                            </span>
                                            {discountPercentage > 0 && (
                                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800">
                                                    Hemat {discountPercentage}%
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xs font-medium text-muted-foreground">Rp</span>
                                        <span className="text-3xl font-bold text-schedule-primary dark:text-white">
                                            {discountedPrice > 0 ? formatNumber(discountedPrice) : "Gratis"}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href={schedule.register_url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 h-12 bg-schedule-primary hover:bg-schedule-primary-light text-white rounded-xl font-bold transition-all shadow-lg shadow-schedule-primary/20 hover:shadow-schedule-primary/40 hover:-translate-y-0.5"
                                >
                                    Daftar Sekarang
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-center text-xs text-muted-foreground mt-3">Slot terbatas! Tersisa 15 kursi.</p>
                            </div>
                            <div className="bg-schedule-primary/5 p-6 border-b border-schedule-accent dark:border-gray-800">
                                <h3 className="text-lg font-bold mb-4 text-[#111418] dark:text-white">Detail Pelaksanaan</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm text-schedule-primary">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase">Tanggal</p>
                                            <p className="font-semibold text-sm text-schedule-primary dark:text-white">{formattedDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm text-schedule-primary">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase">Waktu</p>
                                            <p className="font-semibold text-sm text-schedule-primary dark:text-white">{schedule.start_time} - {schedule.end_time} WIB</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm text-schedule-primary">
                                            <Video className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase">Lokasi</p>
                                            <p className="font-semibold text-sm text-schedule-primary dark:text-white">{schedule.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                {/* Desktop Speaker */}
                                <div className="hidden lg:block mb-6 pt-2">
                                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-3">Pembicara</h4>
                                    <div className="flex items-center gap-3">
                                        <Image alt={speaker.name} className="rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm" src={speaker.image || "https://i.pravatar.cc/150"} width={48} height={48} />
                                        <div>
                                            <p className="font-bold text-sm text-schedule-primary dark:text-white">{speaker.name}</p>
                                            <p className="text-xs text-muted-foreground">{speaker.role}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-muted-foreground uppercase mb-3">Fasilitas dan Benefit</h4>
                                    <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                                            {schedule.benefits || `- Akses workshop live
- Rekaman video webinar
- Materi presentasi (PDF)
- Community Access
- E-Sertifikat 32 JP`}
                                        </ReactMarkdown>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Sticky Bottom Bar for Mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-schedule-surface-light dark:bg-schedule-surface-dark border-t border-schedule-accent dark:border-gray-800 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-4 max-w-[1280px] mx-auto">
                    <div className="flex flex-col">
                        {(originalPrice > 0 && originalPrice > discountedPrice) && (
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[10px] text-muted-foreground line-through">Rp {formatNumber(originalPrice)}</span>
                                {discountPercentage > 0 && (
                                    <span className="text-[9px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">Hemat {discountPercentage}%</span>
                                )}
                            </div>
                        )}
                        <span className="text-lg font-bold text-schedule-primary leading-none">
                            {discountedPrice > 0 ? `Rp ${formatNumber(discountedPrice)}` : "Gratis"}
                        </span>
                    </div>
                    <a
                        href={schedule.register_url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 max-w-[200px] h-11 bg-schedule-primary text-white font-bold rounded-lg shadow-lg shadow-schedule-primary/20"
                    >
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </main>
    );
}
