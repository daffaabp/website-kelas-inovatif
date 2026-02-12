
import React from 'react';
import { Hero } from './_components/Hero';
import { Stats } from './_components/Stats';
import { Pricing } from './_components/Pricing';
import { Benefits } from './_components/Benefits';
import { Testimonials } from './_components/Testimonials';
import { WaitlistCTA } from './_components/WaitlistCTA';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Private Master Class - Bimbingan Intensif AI & Riset',
    description: 'Bimbingan privat intensif untuk skripsi, tesis, dan disertasi. Manfaatkan AI untuk riset yang lebih cepat, akurat, dan bebas plagiasi.',
};

export default function PrivatePage() {
    return (
        <div className="min-h-screen bg-private-bg-light dark:bg-private-bg-dark font-sans text-gray-800 dark:text-gray-200 selection:bg-private-primary selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Benefits />
                <Pricing />
                {/* <InstructorList /> */}
                <Testimonials />
                <WaitlistCTA />
            </main>
            <Footer />
        </div>
    );
}
