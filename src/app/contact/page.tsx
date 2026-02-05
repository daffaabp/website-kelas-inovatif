"use client";

import React from "react";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { AIChatBot } from "@/components/commons/AIChatBot";
import { ContactHero } from "./_components/ContactHero";
import { ContactFormSection } from "./_components/ContactFormSection";
import { ContactFAQ } from "./_components/ContactFAQ";
import { BlogSection, LatestBlog } from "@/components/commons/BlogSection";
import { NewsletterSection } from "@/components/commons/NewsletterSection";
import { getLatestBlogs } from "@/app/actions/blog";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [blogs, setBlogs] = useState<LatestBlog[]>([]);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const data = await getLatestBlogs(3);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching latest blogs:', error);
                setBlogs([]);
            }
        }

        fetchBlogs();
    }, []);

    return (
        <main className="bg-(--color-contact-bg-light) dark:bg-(--color-contact-bg-dark) min-h-screen font-sans">
            <Navbar />
            <ContactHero />
            <ContactFormSection />
            <ContactFAQ />
            <BlogSection blogs={blogs} />
            <NewsletterSection />
            <Footer />
            <AIChatBot />
        </main>
    );
}