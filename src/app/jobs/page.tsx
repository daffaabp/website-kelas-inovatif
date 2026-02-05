"use client";

import React from "react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AIChatBot } from "@/components/commons/AIChatBot";
import { Hero } from "./_components/Hero";
import { WhyJoinUs } from "./_components/WhyJoinUs";
import { JobOpenings } from "./_components/JobOpenings";
import { Testimonial } from "./_components/Testimonial";
import { JobsCTA } from "./_components/JobsCTA";

export default function JobsPage() {
    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen font-sans">
            <Navbar />
            <Hero />
            <WhyJoinUs />
            <JobOpenings />
            <Testimonial />
            <JobsCTA />
            <Footer />
            <AIChatBot />
        </main>
    );
}