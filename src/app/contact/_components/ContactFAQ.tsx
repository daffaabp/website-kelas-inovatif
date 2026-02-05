import React from "react";

export const ContactFAQ = () => {
    return (
        <section className="py-16 bg-[var(--color-contact-bg-light)] dark:bg-[var(--color-contact-bg-dark)] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-3xl font-bold text-[var(--color-contact-primary)] dark:text-white mb-4">
                    Ada pertanyaan? Kami punya jawaban.
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Sebelum menghubungi kami, periksa pertanyaan yang sering diajukan. Anda mungkin
                    menemukan jawaban yang Anda cari.
                </p>
                <a
                    className="inline-flex items-center text-[var(--color-contact-primary)] dark:text-white font-semibold border-b-2 border-[var(--color-contact-primary)] dark:border-white pb-1 hover:text-opacity-80 transition-opacity"
                    href="/faq"
                >
                    Kunjungi Pusat FAQ
                    <span className="material-icons-outlined ml-2 text-sm">
                        arrow_forward
                    </span>
                </a>
            </div>
        </section>
    );
};
