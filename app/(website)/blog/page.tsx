import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import Image from "next/image";
import Link from "next/link";
import { InnerPageHeader } from "@/components/inner-page-header";

import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Engineering Blog | Architecture & Infrastructure",
 description: "Deep dives into API scaling, data engineering, and SaaS venture building from the Achtrex architecture team. Learn our technical approach to building high-velocity platforms.",
 keywords: ["Engineering Blog", "System Architecture", "SaaS Engineering", "Data Engineering Articles", "Tech Infrastructure Blog", "Achtrex Insights"],
 robots: {
   index: false,
   follow: true,
 },
 openGraph: {
 title: "Achtrex Engineering Blog | Technical Deep Dives",
 description: "Scaling high-velocity data platforms and resilient architectures.",
 images: ["/projects/lumi_ui_v2.jpg"],
 }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Achtrex Engineering Blog",
  "description": "Deep dives into API scaling, data engineering, and SaaS venture building from the Achtrex architecture team.",
  "url": "https://achtrex.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Achtrex",
    "logo": {
      "@type": "ImageObject",
      "url": "https://achtrex.com/logo.png"
    }
  }
};

export default function BlogListingPage() {
 const featuredPost = blogPosts[0];
 const otherPosts = blogPosts.slice(1);
 const categories = ["All", "Data Engineering", "AI Architecture", "Venture Building", "API Design", "Infrastructure"];

 return (
 <main className="min-h-screen bg-[#f4f4f4] pb-20 font-sans">
 <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <InnerPageHeader title="Insights & Engineering" subtitle="Explore technical deep dives, architectural decisions, and our approach to building high-velocity platforms." />
 
 <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12">

 {/* Categories Navigation */}
 <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-4 mb-12">
 {categories.map((cat, idx) => (
 <button key={idx} className={`text-[15px] font-semibold px-5 py-2 rounded-full transition-colors ${idx === 0 ? 'bg-[#00a9ce] text-white' : 'text-slate-600 hover:bg-slate-200/50 hover:text-[#00a9ce]'}`}>
 {cat}
 </button>
 ))}
 </div>

 {/* Featured Post (Experian Style - Side by Side) */}
 <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 group">
 <Link href={`/blog/${featuredPost.slug}`} className="relative h-[300px] md:h-[400px] w-full rounded-none overflow-hidden block">
 <Image
 src={featuredPost.image}
 alt={featuredPost.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 priority
 />
 </Link>
 <div className="flex flex-col justify-center">
 <span className="text-[#00a9ce] font-bold tracking-wide uppercase text-sm mb-4">
 {featuredPost.category}
 </span>
 <Link href={`/blog/${featuredPost.slug}`}>
 <h2 className="text-3xl md:text-[36px] font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#00a9ce] transition-colors">
 {featuredPost.title}
 </h2>
 </Link>
 <p className="text-lg text-slate-500 mb-6 line-clamp-3">
 {featuredPost.excerpt}
 </p>
 <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
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
 <button className="bg-transparent border-2 border-[#00a9ce] text-[#00a9ce] font-bold text-[15px] px-8 py-3 rounded-full hover:bg-[#00a9ce] hover:text-white transition-colors">
 Load More Articles
 </button>
 </div>
 </div>
 </main>
 );
}
