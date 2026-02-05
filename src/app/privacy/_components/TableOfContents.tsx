"use client";

import React from 'react';

const sections = [
    { id: 'introduction', title: '1. Pengantar' },
    { id: 'collection', title: '2. Pengumpulan Informasi' },
    { id: 'usage', title: '3. Bagaimana Kami Menggunakan Data' },
    { id: 'security', title: '4. Keamanan Data' },
    { id: 'cookies', title: '5. Cookie & Pelacakan' },
    { id: 'rights', title: '6. Hak Anda' },
    { id: 'contact', title: '7. Hubungi Kami' },
];

export function TableOfContents() {
    const [activeSection, setActiveSection] = React.useState('introduction');

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <aside className="hidden lg:block lg:w-1/4">
            <nav className="sticky top-32 space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-3">
                    Daftar Isi
                </p>
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block px-3 py-2 text-sm font-medium border-l-2 transition-colors ${activeSection === section.id
                                ? 'text-privacy-primary dark:text-white border-privacy-primary dark:border-white bg-privacy-primary/5 dark:bg-white/5 rounded-r-lg'
                                : 'text-gray-600 dark:text-gray-400 hover:text-privacy-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-privacy-surface-dark border-transparent'
                            }`}
                    >
                        {section.title}
                    </a>
                ))}
            </nav>
        </aside>
    );
}
