import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    title: string;
}

export function Breadcrumb({ title }: BreadcrumbProps) {
    return (
        <nav className="bg-blog-secondary dark:bg-blog-surface-dark pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <ol className="flex items-center gap-2 text-sm">
                    <li className="flex items-center">
                        <Link
                            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blog-primary dark:hover:text-white transition"
                            href="/"
                        >
                            <Home className="w-4 h-4" />
                            <span>Beranda</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </li>
                    <li className="flex items-center">
                        <Link
                            className="text-gray-500 dark:text-gray-400 hover:text-blog-primary dark:hover:text-white transition"
                            href="/blogs"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </li>
                    <li className="flex items-center">
                        <span className="text-blog-primary dark:text-white font-medium line-clamp-1">
                            {title}
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}
