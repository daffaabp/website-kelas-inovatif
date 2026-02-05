import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Share2 } from 'lucide-react';

interface ArticleContentProps {
    content: string;
    image: string;
    tags?: string[];
}

export function ArticleContent({ content, image, tags = ['Pendidikan', 'Teknologi', 'Inovasi'] }: ArticleContentProps) {
    return (
        <article className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12">
            <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
                <img
                    alt="Blog Cover"
                    className="absolute inset-0 w-full h-full object-cover"
                    src={image}
                />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-blog-primary dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blog-primary dark:prose-a:text-blog-accent prose-blockquote:border-blog-accent">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>

                {/* Tags and Share */}
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Tag:</span>
                        {tags.map((tag, index) => (
                            <a key={index} className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                                {tag}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Bagikan:</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#3b5998] hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-blog-primary hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
