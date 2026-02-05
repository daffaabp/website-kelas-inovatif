"use client";

import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AboutHero } from "./_components/AboutHero";
import { MissionSection } from "./_components/MissionSection";
import { ValuesSection } from "./_components/ValuesSection";
import { PartnershipSection } from "./_components/PartnershipSection";
import { CampusSection } from "./_components/CampusSection";


export default function AboutPage() {
    return (
        <main className="w-full overflow-x-hidden font-sans bg-about-bg-light dark:bg-about-bg-dark text-gray-900 dark:text-white">
            <Navbar />
            <AboutHero />
            <MissionSection />
            <ValuesSection />
            <PartnershipSection />
            {/* <CampusSection /> */}

            <Footer />
        </main>
    );
}