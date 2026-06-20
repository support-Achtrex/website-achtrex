import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";



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
        title: post.title,
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
        <main className="pt-32 pb-20 min-h-screen bg-[#f4f4f4]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <article className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-8">
                    <span className="bg-[#00a9ce] text-white px-3 py-1 rounded-none text-sm font-bold mb-4 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500">
                        <span className="font-bold text-sm bg-slate-200/50 px-3 py-1 rounded-none">{post.date}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-none overflow-hidden mb-12 border border-slate-200">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div
                    className="prose prose-lg prose-invert max-w-none prose-h3:text-3xl prose-h3:font-black prose-h3:text-slate-900 prose-h3:mt-12 prose-h3:mb-6 prose-p:text-slate-700 prose-p:leading-loose prose-p:mb-8 prose-a:text-[#00a9ce] prose-a:font-bold prose-strong:text-slate-900 prose-strong:font-black prose-li:text-slate-700 prose-ul:text-slate-700 prose-img:rounded-none font-sans"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
}
