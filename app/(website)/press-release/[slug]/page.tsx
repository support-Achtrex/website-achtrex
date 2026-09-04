import { pressReleases } from "@/lib/press-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Calendar, Tag, Building2, Mail } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const press = pressReleases.find(p => p.slug === slug);
  if (!press) return { title: "Not Found" };
  
  return {
    title: `${press.title} | Achtrex Newsroom`,
    description: press.excerpt,
  };
}

export default async function PressReleaseSingle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const press = pressReleases.find(p => p.slug === slug);

  if (!press) {
    notFound();
  }

  return (
    <main className="pt-32 min-h-screen bg-[#f8fafc] pb-24 font-sans text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: press.title,
            image: press.image,
            datePublished: new Date(press.date).toISOString() || new Date().toISOString(),
            author: {
              "@type": "Organization",
              name: "Achtrex"
            },
            publisher: {
              "@type": "Organization",
              name: "Achtrex",
              logo: {
                "@type": "ImageObject",
                url: "https://achtrex.com/logo.png"
              }
            }
          })
        }}
      />
      {/* Header & Breadcrumbs */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#00a9ce] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/press-release" className="hover:text-[#00a9ce] transition-colors">Newsroom</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-bold truncate max-w-[240px] sm:max-w-none">{press.title}</span>
        </nav>

        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-wider mb-4">
          <span className="bg-[#00a9ce]/10 text-[#00a9ce] border border-[#00a9ce]/20 px-3 py-1 rounded-full">
            {press.category}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#00a9ce]" /> {press.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-8">
          {press.title}
        </h1>
      </div>

      {/* Featured Image */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md border border-slate-200">
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
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-blockquote:border-[#00a9ce] prose-blockquote:bg-sky-50/50 prose-blockquote:p-6 prose-blockquote:rounded-xl prose-blockquote:text-slate-800 prose-blockquote:italic">
          {press.content ? (
            <div dangerouslySetInnerHTML={{ __html: press.content }} />
          ) : (
            <>
              <p className="text-lg sm:text-xl text-slate-700 font-semibold leading-relaxed mb-8 border-b border-slate-200 pb-6">
                {press.excerpt}
              </p>
              
              <p className="mb-6 text-slate-700 leading-relaxed">
                <strong>NEW YORK, NY, {press.date} — </strong> Achtrex, the global leader in enterprise automotive data infrastructure and cognitive AI platforms, today announced a major milestone with its latest platform expansion. This announcement underscores the company&apos;s commitment to delivering high-availability, low-latency solutions for the modern mobility ecosystem.
              </p>
              
              <p className="mb-6 text-slate-700 leading-relaxed">
                As the automotive industry continues to evolve at a breakneck pace, the demand for scalable and reliable data architecture has never been higher. Achtrex&apos;s proprietary systems process over millions of records monthly, ensuring that OEM partners, insurers, and dealerships have real-time access to mission-critical intelligence.
              </p>

              <blockquote className="border-l-4 border-[#00a9ce] pl-6 my-10 italic text-xl text-slate-800 font-medium">
                &quot;We are building the foundational infrastructure that will power the next decade of autonomous mobility and intelligent enterprise applications,&quot; said a spokesperson at Achtrex. &quot;Our team is relentlessly focused on pushing the boundaries of what is possible with scalable cloud architecture.&quot;
              </blockquote>

              <p className="mb-6 text-slate-700 leading-relaxed">
                The company&apos;s advanced AI models, including the AAIA cognitive framework, are uniquely positioned to interpret complex telematics streams and synthesize actionable insights. By leveraging edge computing and advanced machine learning techniques, Achtrex continues to redefine the standards of enterprise software in the automotive sector.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mt-12 mb-8">
                <h3 className="text-lg font-black text-slate-900 mb-2">About Achtrex</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Achtrex is an enterprise SaaS venture builder specializing in robust data infrastructure and AI solutions for the global automotive market. With a focus on scale, security, and extreme reliability, Achtrex empowers businesses to navigate the complexities of digital transformation with confidence.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#00a9ce]" /> Achtrex</span>
                  <a href="mailto:press@achtrex.com" className="flex items-center gap-1.5 text-[#00a9ce] hover:underline"><Mail className="w-4 h-4" /> press@achtrex.com</a>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link href="/press-release" className="inline-flex items-center gap-2 text-[#00a9ce] font-bold hover:gap-3 transition-all text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Newsroom
          </Link>
          <Link href="/contact-us" className="text-xs font-black uppercase tracking-wider text-slate-600 hover:text-[#00a9ce] transition-colors">
            Media Inquiries →
          </Link>
        </div>
      </div>
    </main>
  );
}
