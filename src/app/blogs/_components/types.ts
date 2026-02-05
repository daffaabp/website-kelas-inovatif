export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string; // Formatted date string
    author: {
        name: string;
        image: string;
        role: string;
    };
    image: string;
    readTime: string;
    featured?: boolean;
    slug?: string;
}

export interface BlogFromDB {
    id: number;
    title: string;
    excerpt: string | null;
    content: string | null;
    category: string | null;
    author_name: string | null;
    author_image: string | null;
    image: string | null;
    read_time: string | null;
    featured: boolean | null;
    slug: string | null;
    created_at: Date | string;
    updated_at: Date | string;
}
