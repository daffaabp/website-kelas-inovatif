import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kelas Menguasai NotebookLM - Kelas Inovatif',
    description: 'Riset dan belajar mendalam dari ratusan sumber dengan NotebookLM. Kuasai 9 fitur untuk memahami jurnal lebih cepat, menyusun literature review, dan mempercepat alur kerja penelitian Anda.',
};

export default function NotebookLMLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
