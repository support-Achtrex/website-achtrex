import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, ArrowRight, Calendar, User, Clock } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Achtrex Engineering Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://achtrex.com/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": new Date(post.date).toISOString() || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Achtrex Engineering",
      "url": "https://achtrex.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Achtrex",
      "logo": {
        "@type": "ImageObject",
        "url": "https://achtrex.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://achtrex.com/blog/${post.slug}`
    }
  };

  return (
    <main className="pt-32 pb-24 min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-[#00a9ce] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-[#00a9ce] transition-colors">Engineering Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-bold truncate max-w-[240px] sm:max-w-none">{post.title}</span>
        </nav>

        {/* Header Content */}
        <div className="mb-10">
          <span className="bg-[#00a9ce]/10 text-[#00a9ce] border border-[#00a9ce]/20 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-semibold border-y border-slate-200 py-3">
            <span className="flex items-center gap-1.5 text-slate-700">
              <User className="w-4 h-4 text-[#00a9ce]" /> Achtrex Architecture Team
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#00a9ce]" /> {post.date}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00a9ce]" /> 6 Min Read
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#00a9ce] prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-strong:font-black prose-li:text-slate-700 prose-ul:text-slate-700 prose-blockquote:border-[#00a9ce] prose-blockquote:bg-sky-50/50 prose-blockquote:p-6 prose-blockquote:rounded-xl prose-blockquote:text-slate-800 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Post Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#00a9ce] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
          <Link 
            href="/contact-us" 
            className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#00a9ce] text-white hover:bg-[#001a22] transition-colors"
          >
            Discuss with Engineering
          </Link>
        </div>

        {/* More Articles */}
        {otherPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((other) => (
                <Link 
                  key={other.id} 
                  href={`https://achtrex.com/blog/${other.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#00a9ce]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#00a9ce] mb-2 block">
                      {other.category}
                    </span>
                    <h4 className="text-base font-black text-slate-900 group-hover:text-[#00a9ce] transition-colors mb-2 leading-snug">
                      {other.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                      {other.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#00a9ce]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
