import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tentang Kami - Komunitas Kelas Inovatif',
    description: 'Pelajari tentang misi, nilai-nilai, dan kepemimpinan kami. Temukan bagaimana kami membentuk masa depan pendidikan.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
