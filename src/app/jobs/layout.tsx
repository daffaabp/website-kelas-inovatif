import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Karier - Kelas Inovatif University',
    description: 'Bergabunglah dengan tim kami. Jelajahi peluang karier dan bantu kami mendefinisikan ulang masa depan pendidikan.',
};

export default function JobsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
