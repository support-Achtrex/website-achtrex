import { pressReleases } from "@/lib/press-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const press = pressReleases.find(p => p.slug === params.slug);
    if (!press) return { title: "Not Found" };
    
    return {
        title: `${press.title} | Achtrex Newsroom`,
        description: press.excerpt,
    };
}

export default function PressReleaseSingle({ params }: { params: { slug: string } }) {
    const press = pressReleases.find(p => p.slug === params.slug);

    if (!press) {
        notFound();
    }

    return (
        <main className="pt-24 min-h-screen bg-[#f4f4f4] pb-20 font-sans text-slate-900">
            {/* Header */}
            <div className="max-w-[800px] mx-auto px-6 pt-12 pb-8">
                <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 font-medium mb-8">
                    <Link href="/" className="hover:text-[#00a9ce]">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/press-release" className="hover:text-[#00a9ce]">Newsroom</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 truncate max-w-[200px] sm:max-w-none">{press.title}</span>
                </nav>

                <div className="flex items-center gap-3 text-sm font-bold text-[#00a9ce] uppercase tracking-wide mb-4">
                    <span>{press.category}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">{press.date}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
                    {press.title}
                </h1>
            </div>

            {/* Featured Image */}
            <div className="max-w-[1000px] mx-auto px-6 mb-12">
                <div className="relative aspect-video w-full rounded-none overflow-hidden bg-slate-100 shadow-sm border border-slate-200">
                    <Image
                        src={press.image}
                        alt={press.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[800px] mx-auto px-6">
                <div className="prose prose-lg prose-slate max-w-none">
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                        {press.excerpt}
                    </p>
                    
                    <p className="mb-6 text-slate-700 leading-relaxed">
                        <strong>NEW YORK, NY — {press.date} —</strong> Achtrex, the global leader in enterprise automotive data infrastructure and cognitive AI platforms, today announced a major step forward with its latest initiative. This announcement underscores the company's commitment to delivering high-availability, low-latency solutions for the modern mobility ecosystem.
                    </p>
                    
                    <p className="mb-6 text-slate-700 leading-relaxed">
                        As the automotive industry continues to evolve at a breakneck pace, the demand for scalable and reliable data architecture has never been higher. Achtrex's proprietary systems process over one billion queries per month, ensuring that OEM partners, insurers, and dealerships have real-time access to mission-critical intelligence.
                    </p>

                    <blockquote className="border-l-4 border-[#00a9ce] pl-6 my-10 italic text-xl text-slate-800 font-medium">
                        "We are building the foundational infrastructure that will power the next decade of autonomous mobility and intelligent enterprise applications," said the CEO of Achtrex. "Our team is relentlessly focused on pushing the boundaries of what is possible with scalable cloud architecture."
                    </blockquote>

                    <p className="mb-6 text-slate-700 leading-relaxed">
                        The company's advanced AI models, including the LUMI cognitive framework, are uniquely positioned to interpret complex telematics streams and synthesize actionable insights. By leveraging edge computing and advanced machine learning techniques, Achtrex continues to redefine the standards of enterprise software in the automotive sector.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-4">About Achtrex</h3>
                    <p className="mb-8 text-slate-700 leading-relaxed">
                        Achtrex is an enterprise SaaS venture builder specializing in robust data infrastructure and AI solutions for the global automotive market. With a focus on scale, security, and extreme reliability, Achtrex empowers businesses to navigate the complexities of digital transformation with confidence.
                    </p>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200">
                    <Link href="/press-release" className="inline-flex items-center gap-2 text-[#00a9ce] font-bold hover:gap-3 transition-all">
                        <ArrowLeft className="w-5 h-5" /> Back to Newsroom
                    </Link>
                </div>
            </div>
        </main>
    );
}
