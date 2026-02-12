"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { BlogPost } from './types';

const categories = ['Semua Postingan', 'Penulisan Akademik', 'Berita', 'Tutorial', 'Bisnis', 'Konten Kreator', 'Alumni', 'Produk'];

interface BlogGridProps {
    posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    const [selectedCategory, setSelectedCategory] = useState('Semua Postingan');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredPosts = posts
        .filter(post => !post.featured) // Exclude featured post
        .filter(post => {
            const matchesCategory = selectedCategory === 'Semua Postingan' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Optional: scroll to top of grid
            const gridElement = document.getElementById('blog-grid-start');
            if (gridElement) {
                gridElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Calculate page numbers to show (simple logic for now, can be enhanced)
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first, last, and current surroundings
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                if (totalPages > 4) pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                if (totalPages > 4) pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        // Remove duplicates if any logic slipped
        return [...new Set(pages)];
    };


    return (
        <section className="py-12 bg-blog-bg-light dark:bg-blog-bg-dark" id="blog-grid-start">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition shadow-md ${selectedCategory === category
                                    ? 'bg-blog-primary text-white'
                                    : 'bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white'
                                    }`}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setCurrentPage(1); // Reset to page 1 on filter change
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <input
                            className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blog-primary dark:focus:ring-white focus:border-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
                            placeholder="Cari artikel..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1); // Reset to page 1 on search change
                            }}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedPosts.map((post) => (
                        <a key={post.id} href={post.slug ? `/${post.slug}` : '#'}>
                            <article
                                className="flex flex-col bg-white dark:bg-blog-surface-dark rounded-xl overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group h-full"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        alt={post.title}
                                        className="object-cover transform group-hover:scale-105 transition duration-500"
                                        src={post.image}
                                        fill
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded text-blog-primary dark:text-white">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide font-medium">
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold text-blog-primary dark:text-white mb-3 group-hover:text-blog-primary/80 dark:group-hover:text-white/80 transition line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <Image
                                                alt={post.author.name}
                                                className="rounded-full"
                                                src={post.author.image}
                                                width={24}
                                                height={24}
                                            />
                                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                                {post.author.name}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-400">{post.readTime}</span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            ←
                        </button>

                        {getPageNumbers().map((page, index) => (
                            page === '...' ? (
                                <span key={`ellipsis-${index}`} className="text-gray-400 px-2">...</span>
                            ) : (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page as number)}
                                    className={`w-10 h-10 rounded-full font-medium shadow-md transition ${currentPage === page
                                        ? 'bg-blog-primary text-white'
                                        : 'bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white'
                                        }`}
                                >
                                    {page}
                                </button>
                            )
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-blog-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-blog-primary hover:text-blog-primary dark:hover:border-white dark:hover:text-white transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
