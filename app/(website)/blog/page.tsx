import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering Blog | Architecture & Infrastructure",
    description: "Deep dives into API scaling, data engineering, and SaaS venture building from the Achtrex architecture team. Learn our technical approach to building high-velocity platforms.",
    keywords: ["Engineering Blog", "System Architecture", "SaaS Engineering", "Data Engineering Articles", "Tech Infrastructure Blog", "Achtrex Insights"],
    openGraph: {
        title: "Achtrex Engineering Blog | Technical Deep Dives",
        description: "Scaling high-velocity data platforms and resilient architectures.",
        images: ["/projects/lumi_ui_v2.jpg"],
    }
};

export default function BlogListingPage() {
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);
    const categories = ["All", "Data Engineering", "AI Architecture", "Venture Building", "API Design", "Infrastructure"];

    return (
        <main className="pt-24 min-h-screen bg-white pb-20 font-sans">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Clean Header */}
                <div className="mb-12 pt-8">
                    <h1 className="text-[40px] md:text-[48px] font-bold text-[#111112] mb-4">Insights & Engineering</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Explore technical deep dives, architectural decisions, and our approach to building high-velocity platforms.</p>
                </div>

                {/* Categories Navigation */}
                <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 pb-4 mb-12">
                    {categories.map((cat, idx) => (
                        <button key={idx} className={`text-[15px] font-semibold px-5 py-2 rounded-full transition-colors ${idx === 0 ? 'bg-[#005AB0] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#005AB0]'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Post (Experian Style - Side by Side) */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 group">
                    <Link href={`/blog/${featuredPost.slug}`} className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden block">
                        <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </Link>
                    <div className="flex flex-col justify-center">
                        <span className="text-[#005AB0] font-bold tracking-wide uppercase text-sm mb-4">
                            {featuredPost.category}
                        </span>
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <h2 className="text-3xl md:text-[36px] font-bold text-[#111112] mb-4 leading-tight group-hover:text-[#005AB0] transition-colors">
                                {featuredPost.title}
                            </h2>
                        </Link>
                        <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                            <span>By Achtrex Engineering</span>
                            <span>&bull;</span>
                            <span>{featuredPost.date}</span>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
                    {otherPosts.map((post) => (
                        <BlogCard key={post.id} {...post} />
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center">
                    <button className="bg-transparent border-2 border-[#005AB0] text-[#005AB0] font-bold text-[15px] px-8 py-3 rounded-full hover:bg-[#005AB0] hover:text-white transition-colors">
                        Load More Articles
                    </button>
                </div>
            </div>
        </main>
    );
}
