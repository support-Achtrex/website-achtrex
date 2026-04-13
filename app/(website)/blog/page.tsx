import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering Blog | Architecture & Infrastructure",
    description: "Deep dives into API scaling, data engineering, and SaaS venture building from the Achtrex architecture team.",
};

export default function BlogListingPage() {
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1); // Show all remaining posts


    return (
        <main className="pt-24 min-h-screen bg-white pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Hero Section */}
                <div className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden mb-16 group">
                    <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <div className="max-w-3xl">
                            <span className="bg-[#005AB0] text-white px-3 py-1 rounded-md text-sm font-medium mb-4 inline-block">
                                {featuredPost.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                {featuredPost.title}
                            </h1>
                            <div className="flex items-center gap-4 text-white/90 mb-8">
                                <span className="font-medium text-sm border border-white/20 px-3 py-1 rounded-sm">{featuredPost.date || 'March 2026'}</span>
                            </div>
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                Read Article
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {otherPosts.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center">
                    <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full font-medium hover:border-gray-400 hover:text-gray-900 transition-colors">
                        Load More
                    </button>
                </div>
            </div>
        </main>
    );
}
