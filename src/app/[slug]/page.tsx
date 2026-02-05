import React from 'react';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { ArticleContent } from './_components/ArticleContent';
import { AuthorBio } from './_components/AuthorBio';
import { Breadcrumb } from './_components/Breadcrumb';
import { RelatedArticles } from './_components/RelatedArticles';
import { Newsletter } from '@/app/blogs/_components/Newsletter';
import db from '@/lib/db';
import { BlogFromDB } from '@/app/blogs/_components/types';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Fallback metadata while fetching
    // In a real app we might want to fetch here too for accurate meta title
    // But for now let's reuse logic or just set a generic one if we don't want to double fetch
    // However, for SEO, better to fetch.
    const post: BlogFromDB = await db('blogs').where({ slug, status: 'published' }).first();

    if (!post) {
        return {
            title: 'Artikel Tidak Ditemukan',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt || "",
            url: `/${post.slug}`,
            images: [
                {
                    url: post.image || '/placeholder-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: 'article',
            publishedTime: new Date(post.created_at).toISOString(),
            authors: [post.author_name || 'Admin'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt || "",
            images: [post.image || '/placeholder-image.jpg'],
        },
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;

    const post: BlogFromDB = await db('blogs').where({ slug, status: 'published' }).first();

    if (!post) {
        notFound();
    }

    // Format post data
    const formattedPost = {
        title: post.title,
        category: post.category || 'Umum',
        date: new Date(post.created_at).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }),
        readTime: post.read_time || '5 menit baca',
        author: {
            name: post.author_name || 'Admin',
            image: post.author_image || '/admin_image_placeholder.jpeg',
            role: 'Penulis', // DB doesn't have role yet
            bio: 'Penulis di Kelas Inovatif.', // DB doesn't have bio yet
        },
        image: post.image || '/placeholder-image.jpg',
        content: post.content || '<p>Konten belum tersedia.</p>',
    };

    // Fetch related articles (random 3)
    const relatedPostsRaw = await db('blogs')
        .whereNot('id', post.id)
        .where({ status: 'published' })
        .orderByRaw('RANDOM()')
        .limit(3);

    const relatedArticles = relatedPostsRaw.map((p: BlogFromDB) => ({
        id: p.id,
        title: p.title,
        excerpt: p.excerpt || '',
        category: p.category || 'Umum',
        date: new Date(p.created_at).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }),
        readTime: p.read_time || '5 menit baca',
        author: {
            name: p.author_name || 'Admin',
            image: p.author_image || '/admin_image_placeholder.jpeg',
        },
        image: p.image || '/placeholder-image.jpg',
        slug: p.slug || '',
    }));

    return (
        <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
            <Navbar />
            <Breadcrumb title={formattedPost.title} />
            <Hero
                title={formattedPost.title}
                category={formattedPost.category}
                date={formattedPost.date}
                readTime={formattedPost.readTime}
                author={formattedPost.author}
            />

            <div className="relative -mt-24 lg:-mt-32 pb-16 px-4 sm:px-6 lg:px-8 z-20">
                <div className="max-w-4xl mx-auto">
                    <ArticleContent
                        content={formattedPost.content}
                        image={formattedPost.image}
                    />
                    <AuthorBio author={formattedPost.author} />
                    {/* Comments component can be added here once backend is ready */}
                    {/* <Comments /> */}
                </div>
            </div>

            <RelatedArticles articles={relatedArticles} />
            <Newsletter />
            <Footer />
        </main>
    );
}
