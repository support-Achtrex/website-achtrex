import React from 'react';
import { MoreHorizontal, Plus, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';
import Image from 'next/image';
import Link from 'next/link';

const RecentBlogsList = () => {
    return (
        <div className="rounded-3xl p-px bg-linear-to-br from-gray-200 to-gray-50 h-full">
            <div className="bg-white rounded-[23px] p-6 h-full border border-transparent flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 font-manrope">Recent Blogs</h3>
                        <p className="text-xs text-gray-500 font-montserrat mt-1">Latest updates from your team</p>
                    </div>
                    <Link 
                        href="/admin/blogs/new"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900 text-white text-xs font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 font-manrope"
                    >
                        <Plus size={14} />
                        <span>New Post</span>
                    </Link>
                </div>

                <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                    {blogPosts.slice(0, 5).map((blog, index) => (
                        <div key={index} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 cursor-pointer">
                            {/* Thumbnail */}
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all">
                                <Image 
                                    src={blog.image} 
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors line-clamp-2 font-manrope leading-snug">
                                    {blog.title}
                                </h4>
                            </div>

                            {/* Arrow Action */}
                            <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                <ArrowRight size={16} className="text-primary" />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-50 text-center">
                    <Link href="/admin/blogs" className="text-xs font-bold text-gray-500 hover:text-primary transition-colors font-manrope">
                        View All Posts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogsList;
