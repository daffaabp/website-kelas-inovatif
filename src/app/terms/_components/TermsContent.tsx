"use client";

import React, { useState } from 'react';
import { ChevronDown, Printer } from 'lucide-react';

interface AccordionItem {
    id: string;
    number: string;
    title: string;
    content: React.ReactNode;
}

const accordionData: AccordionItem[] = [
    {
        id: 'section-1',
        number: '01',
        title: 'Pengantar & Penerimaan Syarat',
        content: (
            <>
                <p>
                    Dengan mengakses situs web ini, kami berasumsi Anda menerima syarat dan ketentuan ini. Jangan melanjutkan menggunakan Kelas Inovatif jika Anda tidak setuju untuk menerima semua syarat dan ketentuan yang dinyatakan di halaman ini.
                </p>
                <p className="mt-4">
                    Terminologi berikut berlaku untuk Syarat dan Ketentuan ini, Pernyataan Privasi dan Pemberitahuan Penafian serta semua Perjanjian: "Klien", "Anda" dan "Milik Anda" merujuk pada Anda, orang yang masuk ke situs web ini dan mematuhi syarat dan ketentuan Perusahaan. "Perusahaan", "Kami Sendiri", "Kami", "Milik Kami" dan "Kita", merujuk pada Perusahaan kami.
                </p>
            </>
        ),
    },
    {
        id: 'section-2',
        number: '02',
        title: 'Lisensi & Kekayaan Intelektual',
        content: (
            <>
                <p>
                    Kecuali dinyatakan lain, Kelas Inovatif dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di Kelas Inovatif. Semua hak kekayaan intelektual dilindungi. Anda dapat mengakses ini dari Kelas Inovatif untuk penggunaan pribadi Anda sendiri tunduk pada pembatasan yang ditetapkan dalam syarat dan ketentuan ini.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Menerbitkan ulang materi dari Kelas Inovatif</li>
                    <li>Menjual, menyewakan atau mensublisensikan materi dari Kelas Inovatif</li>
                    <li>Mereproduksi, menduplikasi atau menyalin materi dari Kelas Inovatif</li>
                    <li>Mendistribusikan ulang konten dari Kelas Inovatif</li>
                </ul>
            </>
        ),
    },
    {
        id: 'section-3',
        number: '03',
        title: 'Kode Etik Mahasiswa',
        content: (
            <>
                <p>
                    Mahasiswa diharapkan mempertahankan standar integritas akademik tertinggi. Setiap bentuk kecurangan, plagiarisme, atau pemalsuan catatan akan mengakibatkan tindakan disipliner segera, yang mungkin termasuk penangguhan atau pengeluaran.
                </p>
                <p className="mt-4">
                    Perilaku hormat terhadap fakultas, staf, dan sesama mahasiswa wajib dilakukan baik di ruang fisik maupun digital yang disediakan oleh universitas.
                </p>
            </>
        ),
    },
    {
        id: 'section-4',
        number: '04',
        title: 'Komentar & Konten Pengguna',
        content: (
            <p>
                Bagian dari situs web ini menawarkan kesempatan bagi pengguna untuk memposting dan bertukar pendapat serta informasi di area tertentu dari situs web. Kelas Inovatif tidak memfilter, mengedit, menerbitkan atau meninjau Komentar sebelum kehadiran mereka di situs web. Komentar tidak mencerminkan pandangan dan pendapat Kelas Inovatif, agen dan/atau afiliasinya.
            </p>
        ),
    },
    {
        id: 'section-5',
        number: '05',
        title: 'Pembatasan Tanggung Jawab',
        content: (
            <p>
                Dalam keadaan apa pun Kelas Inovatif, atau pejabat, direktur, dan karyawannya, tidak akan bertanggung jawab atas apa pun yang timbul dari atau dengan cara apa pun terkait dengan penggunaan Situs Web ini oleh Anda, baik tanggung jawab tersebut berdasarkan kontrak. Kelas Inovatif, termasuk pejabat, direktur, dan karyawannya tidak akan bertanggung jawab atas tanggung jawab tidak langsung, konsekuensial atau khusus yang timbul dari atau dengan cara apa pun terkait dengan penggunaan Situs Web ini oleh Anda.
            </p>
        ),
    },
];

export function TermsContent() {
    const [openSections, setOpenSections] = useState<string[]>(['section-1']);

    const toggleSection = (id: string) => {
        setOpenSections((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-terms-surface-light dark:bg-terms-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="p-6 md:p-10">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-serif font-bold text-terms-text-light dark:text-terms-text-dark">
                        Syarat Layanan Detail
                    </h2>
                    <button
                        className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => window.print()}
                    >
                        <Printer className="w-4 h-4" />
                        Cetak
                    </button>
                </div>

                <div className="space-y-4">
                    {accordionData.map((item) => (
                        <div
                            key={item.id}
                            id={item.id}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/50"
                        >
                            <button
                                className="flex justify-between items-center cursor-pointer p-6 w-full text-left"
                                onClick={() => toggleSection(item.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="shrink-0 w-8 h-8 rounded-full bg-terms-primary text-white flex items-center justify-center font-bold text-sm">
                                        {item.number}
                                    </span>
                                    <h3 className="text-lg font-bold text-terms-text-light dark:text-terms-text-dark">
                                        {item.title}
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`transition-transform duration-300 text-gray-400 ${openSections.includes(item.id) ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openSections.includes(item.id) && (
                                <div className="px-6 pb-6 pt-0 text-terms-muted-light dark:text-terms-muted-dark prose dark:prose-invert max-w-none animate-fadeIn">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-terms-primary/5 dark:bg-terms-primary/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-terms-primary/10">
                    <div className="text-center md:text-left">
                        <h4 className="font-serif font-bold text-lg text-terms-primary dark:text-white">
                            Masih ada pertanyaan?
                        </h4>
                        <p className="text-sm text-terms-muted-light dark:text-gray-400 mt-1">
                            Tim hukum kami tersedia untuk membantu mengklarifikasi keraguan apa pun.
                        </p>
                    </div>
                    <a
                        className="px-6 py-3 bg-terms-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-colors shadow-md whitespace-nowrap"
                        href="#"
                    >
                        Hubungi Tim Hukum
                    </a>
                </div>
            </div>
        </div>
    );
}
