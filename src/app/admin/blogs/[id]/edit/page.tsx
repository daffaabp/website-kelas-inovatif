import { PostMainContent } from '../../create/_components/PostMainContent';
import { PostSidebar } from '../../create/_components/PostSidebar';
import { CreatePostHeader } from '../../create/_components/CreatePostHeader'; // You might want to rename/reuse or make a GenericPostHeader
import { AdminSidebar } from '../../../_components/AdminSidebar';
import { ThemeToggle } from '../../../_components/ThemeToggle';
import { getBlogById, updateBlog, getBlogBySlug } from '@/app/actions/blog';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';

// Reusing PostHeader for simplicity, but ideally should be "EditPostHeader" with "Update" text
// For now, let's create a local implementation or just wrap handling.

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Check if ID is numeric, if not try to use it as a slug (user might find this route via some means, though usually ID)
    // The route is [id], so typical usage is /admin/blogs/123/edit.

    let blog: any = null;
    const itemsId = parseInt(id);
    if (!isNaN(itemsId)) {
        blog = await getBlogById(itemsId);
    } else {
        // Fallback for string-based IDs or testing 'test'
        blog = await getBlogBySlug(id);
    }

    if (!blog) notFound();

    async function handleUpdate(formData: FormData) {
        "use server";

        const readTimeVal = formData.get('read_time');
        const readTime = readTimeVal ? `${readTimeVal} min read` : '5 min read';

        const res = await updateBlog(blog.id, {
            title: formData.get('title'),
            slug: formData.get('slug'),
            excerpt: formData.get('excerpt'),
            content: formData.get('content'),
            category: formData.get('category'),
            image: formData.get('image'),
            read_time: readTime,
            featured: formData.get('featured') === 'on',
            status: formData.get('status'),
            // Preserve author info or update if needed
            author_name: blog.author_name,
            author_image: blog.author_image,
        });

        if (res.msg === 'success') {
            redirect('/admin/blogs');
        }
        // If error, we'd need client side handling or robust form state. 
        // For server action on form, redirect is best success, error... 
        // We'll rely on redirect only for success for now.
    }

    return (
        <form action={handleUpdate} className="flex h-screen w-full font-sans antialiased transition-colors duration-300 overflow-hidden bg-[#F3F1EC] dark:bg-[#111816] text-gray-800 dark:text-gray-200">
            <AdminSidebar />
            <main className="flex-1 h-full overflow-y-auto relative scroll-smooth bg-[#F3F1EC] dark:bg-[#111816]">
                <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full pb-24">
                    {/* Manual Header since CreatePostHeader is specific */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-[#263c32] dark:text-white">
                                Edit Post
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                Update your blog post details
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href="/admin/blogs"
                                className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-6 py-2.5 rounded-xl bg-[#263c32] text-white hover:bg-[#1e2f27] transition-all shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
                            >
                                Update Post
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <PostMainContent initialData={blog} />
                        <PostSidebar initialData={blog} />
                    </div>
                </div>
            </main>
            <ThemeToggle />
        </form>
    );
}
