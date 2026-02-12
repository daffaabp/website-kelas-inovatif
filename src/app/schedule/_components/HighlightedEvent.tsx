import { PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface HighlightedEventData {
    id: number | string;
    title: string;
    start_time: string;
    end_time: string;
    location: string;
    date: string | Date;
    speaker_name: string;
    speaker_role?: string;
    speaker_image?: string;
    [key: string]: unknown; // Allow loose props if needed, or strict
}

interface HighlightedEventProps {
    event?: HighlightedEventData;
}

export function HighlightedEvent({ event }: HighlightedEventProps) {
    if (!event) return null;

    return (
        <section className="bg-(--color-schedule-primary) text-white py-10 md:py-12 relative overflow-hidden rounded-xl mb-12 shadow-xl mx-auto max-w-7xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-linear-to-r from-white to-transparent transform rotate-12 blur-3xl"></div>
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 md:px-10">
                <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2 text-emerald-300 font-semibold uppercase tracking-wider text-xs mb-3">
                        <PlayCircle className="w-4 h-4" />
                        Acara Unggulan
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 leading-tight">
                        {event.title}
                    </h2>
                    <div className="space-y-1 mb-6 text-emerald-100/80 font-light text-sm">
                        <p><strong className="text-white font-medium">Waktu:</strong> {event.start_time} - {event.end_time} WIB</p>
                        <p><strong className="text-white font-medium">Lokasi:</strong> {event.location}</p>
                        <p><strong className="text-white font-medium">Tanggal:</strong> {new Date(event.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <Image
                            alt={event.speaker_name}
                            className="rounded-full border-2 border-emerald-600 object-cover"
                            src={event.speaker_image || "https://lh3.googleusercontent.com/aida-public/AB6AXuBpxo98xKfAoKf9eYIGlLTHrg0bpAxCPF5JJYlFS0d0IFzdVetmb7Ypx0nwCB3RHzjDAAAZmS4B2TxB8I1KyUhZpCGCpsPCrw8C3Jdy7_Iqaub6E5BTdfQASqvPo87RPjncapprpuOglOwsnxYspFZkut_-dy9yLTr9isnUhgC9mk8T25h3AM8ZjiyZsx0moSkmBn1bAlxqu9ZR74FxMBaQqJCyvH8i3kzEOe3Stiam1mXoPk9EqhJr40im56hWnXY8Wt80mwTAuqXP"}
                            width={40}
                            height={40}
                        />
                        <div>
                            <div className="text-white font-semibold text-sm">{event.speaker_name}</div>
                            <div className="text-emerald-200 text-xs">{event.speaker_role}</div>
                        </div>
                    </div>
                    <Link href={`/schedule/${event.id}`} className="bg-white text-(--color-schedule-primary) px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2 text-sm cursor-pointer">
                        Lihat Detail
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="relative rounded-t-[70px] rounded-b-lg overflow-hidden border border-emerald-800 shadow-2xl aspect-video group cursor-pointer">
                        {/* Placeholder image logic, ideally event has an image */}
                        <Image
                            alt={event.title}
                            className="object-cover transition transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1AljKiXVAMOTFnwKWu_z8UQd9CeeudS3_R76y4caOKT-c9TquoynZMjg1PQTHottUXajz-kVnJBvqYgVp6o1iJGf8o0nCyDY9oGzW_LnyZ5VqWo32F_kMhleKSIu3tYQA13VKn8KNL5CUA-mqzXgyYCQZxWgsfw5ADnEy-5Vv-Dqi-brJqI6I3vOgOlBxBLkNzYplE130w87rEfUdqn3QqorhRieRyLjwn1SVp4chI8kBBA-O54ylHlZDwE--sGuKWVwj1UPwbnMk"
                            fill
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition group-hover:bg-black/20">
                            {/* <div className="w-14 h-14 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition transform group-hover:scale-110">
                                <Play className="w-8 h-8 ml-1" fill="currentColor" />
                            </div> */}
                        </div>
                    </div>
                    {/* Navigation buttons could be functional if we had state here, but for now we remove or keep static */}
                </div>
            </div>
        </section>
    );
}
