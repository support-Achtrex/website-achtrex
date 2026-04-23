import Link from 'next/link';
import { Plus } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import { AdminBlogCard } from '@/components/admin/blog/admin-blog-card';

export default function AdminBlogsPage() {
    const getMockStats = (index: number) => {
        const baseViews = 1200;
        const multiplier = (index + 1) * 345;

        return {
            views: ((baseViews + multiplier) % 10000).toLocaleString(),
            readTime: `${3 + (index % 5)} min read`
        };
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 font-manrope">Blogs</h1>
                    <p className="text-sm text-gray-500 font-montserrat mt-1">Manage and track your blog posts performance</p>
                </div>
                <Link href="/admin/blogs/new" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors shadow-[0_4px_14px_rgba(0,90,176,0.3)] font-manrope">
                    <Plus size={18} />
                    <span>New Post</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => {
                    const stats = getMockStats(index);
                    return (
                        <AdminBlogCard
                            key={post.id}
                            {...post}
                            {...stats}
                        />
                    );
                })}
            </div>
        </div>
    );
}
