import React from 'react';
import { ArrowRight } from 'lucide-react';

interface RelatedArticle {
    id: number | string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: {
        name: string;
        image: string;
    };
    image: string;
    slug: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <section className="py-20 bg-white dark:bg-blog-surface-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-blog-accent font-bold tracking-wider text-xs uppercase mb-3 block">
                            Lebih banyak untuk dijelajahi
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-blog-primary dark:text-white">
                            Artikel Terkait
                        </h2>
                    </div>
                    <a className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blog-primary dark:text-white hover:text-blog-accent transition uppercase tracking-wide" href="/blogs">
                        Lihat semua postingan <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <a key={article.id} href={`/${article.slug}`}>
                            <article
                                className="flex flex-col bg-blog-bg-light dark:bg-[#252525] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group h-full"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                        src={article.image}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 dark:bg-blog-surface-dark/95 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full text-blog-primary dark:text-white shadow-sm">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                                            {article.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-blog-primary dark:text-white mb-3 group-hover:text-blog-primary/70 dark:group-hover:text-blog-accent transition leading-tight line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6">
                                        {article.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center gap-3 pt-6 border-t border-gray-200 dark:border-gray-700/50">
                                        <img
                                            alt={article.author.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                            src={article.author.image}
                                        />
                                        <span className="text-xs font-bold text-blog-primary dark:text-white">
                                            {article.author.name}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>

                <div className="mt-10 md:hidden text-center">
                    <a className="inline-flex items-center gap-2 text-sm font-bold text-blog-primary dark:text-white hover:text-blog-accent transition uppercase tracking-wide border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full" href="/blogs">
                        Lihat semua postingan <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
