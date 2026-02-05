import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { CategoryCards } from './_components/CategoryCards';
import { FAQSection } from './_components/FAQSection';
import { ContactCTA } from './_components/ContactCTA';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - Kelas Inovatif',
    description: 'Temukan jawaban untuk pertanyaan tentang keunggulan kami, program pembelajaran AI untuk akademik, hasil alumni, komunitas, dan cara bergabung.',
};

export default function FAQPage() {
    return (
        <main className="bg-gray-50 dark:bg-faq-bg-dark min-h-screen">
            <Navbar />
            <Hero />
            <CategoryCards />
            <FAQSection />
            <ContactCTA />
            <Footer />
        </main>
    );
}
