import { blogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blog/blog-card";
import Image from "next/image";
import Link from "next/link";
import { InnerPageHeader } from "@/components/inner-page-header";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog | Architecture & Infrastructure",
  description: "Deep dives into automotive software engineering, cognitive AI diagnostics, and enterprise venture building from the Achtrex team. Learn our technical approach to building high-velocity platforms.",
  keywords: ["Engineering Blog", "System Architecture", "SaaS Engineering", "Automotive Software Builds", "Cognitive AI Diagnostics", "Achtrex Insights"],
  openGraph: {
    title: "Achtrex Engineering Blog | Technical Deep Dives",
    description: "Engineering bespoke automotive software platforms and cognitive AI architectures.",
    images: ["/projects/aaia_ui_v2.png"],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Achtrex Engineering Blog",
  "description": "Deep dives into automotive software engineering, cognitive AI diagnostics, and enterprise venture building from the Achtrex team.",
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
  const categories = ["All", "Software Builds", "Cognitive AI", "Automotive Consultation", "Systems Architecture", "Infrastructure"];

  return (
    <main className="min-h-screen bg-[#f4f4f4] pb-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InnerPageHeader title="Insights & Engineering" subtitle="Explore technical deep dives, architectural decisions, and our approach to building high-velocity platforms." theme="data" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12">

        {/* Categories Navigation */}
        <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-4 mb-12">
          {categories.map((cat, idx) => (
            <button key={idx} className={`text-[15px] font-semibold px-5 py-2 rounded-full transition-all cursor-pointer ${idx === 0 ? 'bg-gradient-to-r from-[#F37021] to-[#00A9CE] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200/50 hover:text-[#00a9ce]'}`}>
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
            <p className="text-[15px] sm:text-base text-slate-800 leading-[1.8] font-normal mb-6 line-clamp-3">
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
          <button className="btn-navbar-cta">
            <span className="btn-navbar-cta-inner !py-3 !px-8 text-[13px] uppercase tracking-wider">
              <span>Load More Articles</span>
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
