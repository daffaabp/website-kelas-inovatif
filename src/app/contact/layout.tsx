import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hubungi Kami - Kelas Inovatif University',
    description: 'Hubungi kami. Kami siap menjawab pertanyaan Anda tentang penerimaan, program, dan kemitraan.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
