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

    return (
        <main className="pt-32 pb-20 min-h-screen bg-white">
            <article className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-8">
                    <span className="bg-[#005AB0] text-white px-3 py-1 rounded-md text-sm font-medium mb-4 inline-block">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-500">
                        <span className="font-bold text-sm bg-gray-100 px-3 py-1 rounded-sm">{post.date}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div
                    className="prose prose-lg max-w-none prose-h3:text-3xl prose-h3:font-black prose-h3:mt-12 prose-h3:mb-6 prose-p:text-black prose-p:leading-loose prose-p:mb-8 prose-a:text-[#005AB0] prose-a:font-bold prose-strong:text-black prose-strong:font-black prose-li:text-black prose-img:rounded-xl text-gray-500 font-manrope"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </main>
    );
}
