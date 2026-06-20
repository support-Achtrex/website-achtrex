import { pressReleases } from "@/lib/press-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import { InnerPageHeader } from "@/components/inner-page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press Releases | Achtrex Newsroom",
    description: "The latest news, announcements, and press releases from Achtrex.",
};

export default function PressReleasePage() {
    const featuredPress = pressReleases[0];
    const latestPress = pressReleases.slice(1);
    
    const categories = ["All News", "Product Launch", "Infrastructure", "Partnerships", "Corporate", "Milestones"];

    return (
        <main className="min-h-screen bg-[#f4f4f4] pb-20 font-sans text-slate-900">
            
            {/* Header */}
            <InnerPageHeader title="Newsroom" subtitle="Discover the latest press releases, corporate announcements, and product innovations from Achtrex." />

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        {/* Featured News */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-[#00a9ce]" />
                                Featured Press Release
                            </h2>
                            <Link href={`/press-release/${featuredPress.slug}`} className="group block">
                                <div className="relative h-[350px] md:h-[450px] w-full rounded-none overflow-hidden mb-6 bg-transparent/5">
                                    <Image
                                        src={featuredPress.image}
                                        alt={featuredPress.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold text-[#00a9ce] uppercase tracking-wide mb-3">
                                    <span>{featuredPress.category}</span>
                                    <span className="text-slate-600">|</span>
                                    <span className="text-slate-400">{featuredPress.date}</span>
                                </div>
                                <h3 className="text-3xl md:text-[32px] font-bold leading-tight mb-4 group-hover:text-[#00a9ce] transition-colors">
                                    {featuredPress.title}
                                </h3>
                                <p className="text-lg text-slate-500 mb-6 line-clamp-3">
                                    {featuredPress.excerpt}
                                </p>
                                <div className="inline-flex items-center gap-2 text-[#00a9ce] font-bold group-hover:gap-3 transition-all">
                                    Read Full Release <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </div>

                        {/* Latest News List */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-slate-200 pb-4">
                                <div className="w-4 h-4 bg-[#76bc1d]" />
                                Latest Announcements
                            </h2>
                            <div className="flex flex-col gap-10">
                                {latestPress.map((press) => (
                                    <Link key={press.id} href={`/press-release/${press.slug}`} className="group grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                                        <div className="md:col-span-1 relative aspect-video md:aspect-auto md:h-[140px] rounded-none overflow-hidden bg-transparent/5">
                                            <Image
                                                src={press.image}
                                                alt={press.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="md:col-span-3 flex flex-col justify-center h-full">
                                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                                                <span className="text-[#00a9ce]">{press.category}</span>
                                                <span className="text-slate-600">|</span>
                                                <span>{press.date}</span>
                                            </div>
                                            <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#00a9ce] transition-colors leading-snug">
                                                {press.title}
                                            </h4>
                                            <p className="text-slate-500 line-clamp-2">
                                                {press.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            
                            {/* Pagination / Load More */}
                            <div className="mt-12 flex justify-center border-t border-slate-200 pt-12">
                                <button className="bg-transparent border-2 border-[#00a9ce] text-[#00a9ce] font-bold text-[15px] px-8 py-3 rounded-none hover:bg-[#00a9ce] hover:text-white transition-colors">
                                    View Older Releases
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        
                        {/* Filter by Topic */}
                        <div className="bg-transparent p-8 rounded-none border border-slate-200">
                            <h3 className="text-xl font-bold mb-6">Filter by Topic</h3>
                            <div className="flex flex-col gap-3">
                                {categories.map((cat, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded-none border ${idx === 0 ? 'bg-[#00a9ce] border-[#00a9ce]' : 'border-gray-300 group-hover:border-[#00a9ce]'} flex items-center justify-center transition-colors`}>
                                            {idx === 0 && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <span className={`text-[15px] ${idx === 0 ? 'font-bold text-slate-900' : 'text-slate-500 group-hover:text-slate-900'}`}>
                                            {cat}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Media Contacts */}
                        <div className="bg-white p-8 rounded-none border border-slate-200 shadow-sm">
                            <h3 className="text-xl font-bold mb-6">Media Contacts</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-slate-900">Achtrex Global Media Relations</p>
                                    <a href="mailto:press@achtrex.com" className="text-[#00a9ce] hover:underline block mt-1">press@achtrex.com</a>
                                    <p className="text-slate-400 mt-1">+1 (800) 555-0199</p>
                                </div>
                                <div className="pt-6 border-t border-slate-200">
                                    <p className="font-bold text-slate-900">Investor Relations</p>
                                    <a href="mailto:investors@achtrex.com" className="text-[#00a9ce] hover:underline block mt-1">investors@achtrex.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Download Assets */}
                        <div className="bg-[#001a22] p-8 rounded-none text-white">
                            <h3 className="text-xl font-bold mb-4">Brand Assets</h3>
                            <p className="text-slate-300 mb-6 text-sm">Download official Achtrex logos, executive headshots, and product screenshots for media use.</p>
                            <button className="flex items-center gap-2 bg-[#00a9ce] text-white px-6 py-3 rounded-none font-bold hover:bg-[#00a9ce]/90 transition-colors w-full justify-center">
                                <Download className="w-4 h-4" /> Download Media Kit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
