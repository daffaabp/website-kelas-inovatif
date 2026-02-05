"use client";

import React from "react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AIChatBot } from "@/components/commons/AIChatBot";
import { Hero } from "./_components/Hero";
import { AboutNotebookLM } from "./_components/AboutNotebookLM";
import { CourseFocus } from "./_components/CourseFocus";
import { Syllabus } from "./_components/Syllabus";
import { Instructor } from "./_components/Instructor";
import { CTA } from "./_components/CTA";

export default function ClassNotebookLMPage() {
    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen font-sans">
            <Navbar />
            <Hero />
            <AboutNotebookLM />
            <CourseFocus />
            <Syllabus />
            <Instructor />
            <CTA />
            <Footer />
            <AIChatBot />
        </main>
    );
}
