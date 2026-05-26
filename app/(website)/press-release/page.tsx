import { pressReleases } from "@/lib/press-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
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
        <main className="pt-24 min-h-screen bg-[#070b14] pb-20 font-sans text-white">
            
            {/* Header */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 border-b border-white/10">
                <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-6">
                    <Link href="/" className="hover:text-[#005AB0]">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white">Newsroom</span>
                </nav>
                <h1 className="text-[40px] md:text-[56px] font-bold mb-4">Newsroom</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Discover the latest press releases, corporate announcements, and product innovations from Achtrex.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        {/* Featured News */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-[#005AB0]" />
                                Featured Press Release
                            </h2>
                            <Link href={`/press-release/${featuredPress.slug}`} className="group block">
                                <div className="relative h-[350px] md:h-[450px] w-full rounded-xl overflow-hidden mb-6 bg-transparent/5">
                                    <Image
                                        src={featuredPress.image}
                                        alt={featuredPress.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold text-[#005AB0] uppercase tracking-wide mb-3">
                                    <span>{featuredPress.category}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{featuredPress.date}</span>
                                </div>
                                <h3 className="text-3xl md:text-[32px] font-bold leading-tight mb-4 group-hover:text-[#005AB0] transition-colors">
                                    {featuredPress.title}
                                </h3>
                                <p className="text-lg text-gray-400 mb-6 line-clamp-3">
                                    {featuredPress.excerpt}
                                </p>
                                <div className="inline-flex items-center gap-2 text-[#005AB0] font-bold group-hover:gap-3 transition-all">
                                    Read Full Release <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </div>

                        {/* Latest News List */}
                        <div>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
                                <div className="w-4 h-4 bg-[#10b981]" />
                                Latest Announcements
                            </h2>
                            <div className="flex flex-col gap-10">
                                {latestPress.map((press) => (
                                    <Link key={press.id} href={`/press-release/${press.slug}`} className="group grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                                        <div className="md:col-span-1 relative h-[140px] rounded-lg overflow-hidden bg-transparent/5">
                                            <Image
                                                src={press.image}
                                                alt={press.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="md:col-span-3 flex flex-col justify-center h-full">
                                            <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                                <span className="text-[#005AB0]">{press.category}</span>
                                                <span className="text-gray-300">|</span>
                                                <span>{press.date}</span>
                                            </div>
                                            <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#005AB0] transition-colors leading-snug">
                                                {press.title}
                                            </h4>
                                            <p className="text-gray-400 line-clamp-2">
                                                {press.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            
                            {/* Pagination / Load More */}
                            <div className="mt-12 flex justify-center border-t border-white/10 pt-12">
                                <button className="bg-transparent border-2 border-[#005AB0] text-[#005AB0] font-bold text-[15px] px-8 py-3 rounded-full hover:bg-[#005AB0] hover:text-white transition-colors">
                                    View Older Releases
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-12">
                        
                        {/* Filter by Topic */}
                        <div className="bg-transparent p-8 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold mb-6">Filter by Topic</h3>
                            <div className="flex flex-col gap-3">
                                {categories.map((cat, idx) => (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border ${idx === 0 ? 'bg-[#005AB0] border-[#005AB0]' : 'border-gray-300 group-hover:border-[#005AB0]'} flex items-center justify-center transition-colors`}>
                                            {idx === 0 && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                        <span className={`text-[15px] ${idx === 0 ? 'font-bold text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                            {cat}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Media Contacts */}
                        <div className="bg-[#070b14] p-8 rounded-xl border border-white/10 shadow-sm">
                            <h3 className="text-xl font-bold mb-6">Media Contacts</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-bold text-white">Achtrex Global Media Relations</p>
                                    <a href="mailto:press@achtrex.com" className="text-[#005AB0] hover:underline block mt-1">press@achtrex.com</a>
                                    <p className="text-gray-500 mt-1">+1 (800) 555-0199</p>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <p className="font-bold text-white">Investor Relations</p>
                                    <a href="mailto:investors@achtrex.com" className="text-[#005AB0] hover:underline block mt-1">investors@achtrex.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Download Assets */}
                        <div className="bg-[#005AB0] p-8 rounded-xl text-white">
                            <h3 className="text-xl font-bold mb-4">Brand Assets</h3>
                            <p className="text-white/80 mb-6 text-sm">Download official Achtrex logos, executive headshots, and product screenshots for media use.</p>
                            <button className="flex items-center gap-2 bg-[#070b14] text-[#005AB0] px-6 py-3 rounded-full font-bold hover:bg-[#1a1a1c]/5 transition-colors w-full justify-center">
                                <Download className="w-4 h-4" /> Download Media Kit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
