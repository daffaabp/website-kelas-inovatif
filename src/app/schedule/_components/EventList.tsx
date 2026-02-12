import { ChevronsUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface EventItem {
    id: number | string;
    date: string | Date;
    type: string;
    start_time: string;
    end_time: string;
    title: string;
    location: string;
    speaker_name: string;
}

interface EventListProps {
    events: EventItem[];
    meta?: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export function EventList({ events, meta }: EventListProps) {
    if (!events || events.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center text-gray-500">
                Tidak ada acara yang ditemukan.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

            {/* Desktop View: Table */}
            <div className="hidden md:block bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                {['TANGGAL', 'WAKTU', 'KATEGORI', 'JUDUL', 'LOKASI', 'PEMBICARA', ''].map((header) => (
                                    <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800">
                                        <div className="flex items-center gap-1">
                                            {header}
                                            {header && <ChevronsUpDown className="w-3 h-3 text-gray-300" />}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {events.map((event) => {
                                const eventDate = new Date(event.date).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                });
                                // Simple category coloring logic (could be dynamic later)
                                let categoryColor = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
                                if (event.type === 'Workshop') categoryColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
                                if (event.type === 'Seminar') categoryColor = 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
                                if (event.type === 'Webinar') categoryColor = 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';

                                return (
                                    <tr key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition duration-150 ease-in-out group border-b border-gray-50 dark:border-gray-800 last:border-0">
                                        <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{eventDate}</td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.start_time} - {event.end_time} WIB</td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColor}`}>
                                                {event.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <Link href={`/schedule/${event.id}`} className="font-bold text-gray-900 dark:text-white line-clamp-1 max-w-[200px] hover:text-eduzin-dark dark:hover:text-eduzin-gold transition-colors" title={event.title}>
                                                {event.title}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.location}</td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{event.speaker_name}</td>
                                        <td className="px-6 py-5 whitespace-nowrap text-right">
                                            <Link
                                                href={`/schedule/${event.id}`}
                                                className="text-xs font-bold text-eduzin-dark dark:text-white border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full hover:bg-eduzin-dark hover:text-white dark:hover:bg-white dark:hover:text-eduzin-dark transition-colors"
                                            >
                                                Daftar Sekarang
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile View: Cards */}
            <div className="md:hidden space-y-4">
                {events.map((event) => {
                    const eventDate = new Date(event.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });
                    let categoryColor = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
                    if (event.type === 'Workshop') categoryColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
                    if (event.type === 'Seminar') categoryColor = 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
                    if (event.type === 'Webinar') categoryColor = 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';

                    return (
                        <div key={event.id} className="bg-white dark:bg-[#1E1E1E] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColor}`}>
                                    {event.type}
                                </span>
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded">
                                    {event.start_time} - {event.end_time} WIB
                                </span>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                <Link href={`/schedule/${event.id}`}>
                                    {event.title}
                                </Link>
                            </h3>

                            <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="w-20 font-medium text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide">Tanggal</span>
                                    <span>{eventDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-20 font-medium text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide">Pembicara</span>
                                    <span>{event.speaker_name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-20 font-medium text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide">Lokasi</span>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <Link
                                href={`/schedule/${event.id}`}
                                className="block w-full text-center text-sm font-bold bg-eduzin-dark text-white dark:bg-white dark:text-eduzin-dark py-3 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Lihat Detail & Daftar
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            {meta && meta.totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 pt-8">
                    {meta.page > 1 ? (
                        <Link
                            href={`/schedule?page=${meta.page - 1}`}
                            className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </Link>
                    ) : (
                        <button disabled className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm cursor-not-allowed">
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </button>
                    )}

                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Halaman {meta.page} dari {meta.totalPages}
                    </span>

                    {meta.page < meta.totalPages ? (
                        <Link
                            href={`/schedule?page=${meta.page + 1}`}
                            className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm"
                        >
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    ) : (
                        <button disabled className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm cursor-not-allowed">
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
