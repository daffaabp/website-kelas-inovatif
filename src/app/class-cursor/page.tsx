"use client";

import React from "react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AIChatBot } from "@/components/commons/AIChatBot";
import { Hero } from "./_components/Hero";
import { VideoIntro } from "./_components/VideoIntro";
import { Methodology } from "./_components/Methodology";
import { Syllabus } from "./_components/Syllabus";
import { Testimonials } from "./_components/Testimonials";
import { CTA } from "./_components/CTA";

export default function ClassCursorPage() {
    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen font-sans">
            <Navbar />
            <Hero />
            <VideoIntro />
            <Methodology />
            <Syllabus />
            <Testimonials />
            <CTA />
            <Footer />
            <AIChatBot />
        </main>
    );
}