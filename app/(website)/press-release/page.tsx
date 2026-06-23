import { pressReleases } from "@/lib/press-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import * as motion from 'framer-motion/client';
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
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="mb-16 relative">
 <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#00a9ce]/5 rounded-full blur-[80px] -z-10"></div>
 <h2 className="text-2xl font-black mb-6 flex items-center gap-3 tracking-tight">
 <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#00a9ce] to-[#053787] shadow-sm flex items-center justify-center">
 <div className="w-2 h-2 rounded-full bg-white"></div>
 </div>
 Featured Press Release
 </h2>
 <Link href={`/press-release/${featuredPress.slug}`} className="group block bg-white p-4 rounded-full-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#00a9ce]/30 transition-all">
 <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden mb-8 bg-slate-100 shadow-inner">
 <Image
 src={featuredPress.image}
 alt={featuredPress.title}
 fill
 className="object-cover transition-transform duration-1000 group-hover:scale-105"
 priority
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
 </div>
 <div className="px-4 pb-4">
 <div className="flex items-center gap-3 text-[13px] font-bold text-[#00a9ce] uppercase tracking-wider mb-4">
 <span className="bg-[#00a9ce]/10 px-3 py-1 rounded-full">{featuredPress.category}</span>
 <span className="text-slate-400">|</span>
 <span className="text-slate-500">{featuredPress.date}</span>
 </div>
 <h3 className="text-3xl md:text-[36px] font-black leading-tight mb-4 group-hover:text-[#00a9ce] transition-colors tracking-tight text-slate-900">
 {featuredPress.title}
 </h3>
 <p className="text-lg text-slate-600 mb-8 line-clamp-3 font-medium leading-relaxed">
 {featuredPress.excerpt}
 </p>
 <div className="inline-flex items-center gap-2 text-[#00a9ce] font-bold group-hover:gap-4 transition-all bg-[#00a9ce]/5 px-6 py-3 rounded-xl group-hover:bg-[#00a9ce] group-hover:text-white">
 Read Full Release <ArrowRight className="w-5 h-5" />
 </div>
 </div>
 </Link>
 </motion.div>

 {/* Latest News List */}
 <div>
 <h2 className="text-2xl font-black mb-8 flex items-center gap-3 border-b border-slate-200 pb-6 tracking-tight">
 <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#76bc1d] to-[#4a7d0e] shadow-sm flex items-center justify-center">
 <div className="w-2 h-2 rounded-full bg-white"></div>
 </div>
 Latest Announcements
 </h2>
 <div className="flex flex-col gap-6">
 {latestPress.map((press, idx) => (
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1 }}
 key={press.id}>
 <Link href={`/press-release/${press.slug}`} className="group grid grid-cols-1 md:grid-cols-4 gap-6 items-center bg-white p-4 rounded-full border border-slate-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:border-[#00a9ce]/20 transition-all">
 <div className="md:col-span-1 relative aspect-video md:aspect-square lg:aspect-video rounded-2xl overflow-hidden bg-slate-100">
 <Image
 src={press.image}
 alt={press.title}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-110"
 />
 </div>
 <div className="md:col-span-3 flex flex-col justify-center h-full px-2">
 <div className="flex items-center gap-3 text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-3">
 <span className="text-[#00a9ce] bg-[#00a9ce]/5 px-2 py-1 rounded-md">{press.category}</span>
 <span className="text-slate-300">|</span>
 <span className="text-slate-500">{press.date}</span>
 </div>
 <h4 className="text-xl md:text-2xl font-black mb-3 group-hover:text-[#00a9ce] transition-colors leading-snug tracking-tight text-slate-900">
 {press.title}
 </h4>
 <p className="text-slate-500 line-clamp-2 font-medium">
 {press.excerpt}
 </p>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 
 {/* Pagination / Load More */}
 <div className="mt-12 flex justify-center border-t border-slate-200 pt-12">
 <button className="bg-white border-2 border-[#00a9ce] text-[#00a9ce] font-bold text-[15px] px-8 py-3 rounded-full hover:bg-[#00a9ce] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
 View Older Releases
 </button>
 </div>
 </div>
 </div>

 {/* Sidebar */}
 <div className="lg:col-span-4 space-y-12">
 
 {/* Filter by Topic */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a9ce]/5 rounded-full blur-xl -z-0 translate-x-10 -translate-y-10"></div>
 <h3 className="text-xl font-black mb-6 tracking-tight relative z-10">Filter by Topic</h3>
 <div className="flex flex-col gap-4 relative z-10">
 {categories.map((cat, idx) => (
 <label key={idx} className="flex items-center gap-4 cursor-pointer group">
 <div className={`w-6 h-6 rounded-lg border ${idx === 0 ? 'bg-[#00a9ce] border-[#00a9ce] shadow-sm' : 'bg-slate-50 border-slate-200 group-hover:border-[#00a9ce] group-hover:bg-[#00a9ce]/5'} flex items-center justify-center transition-all`}>
 {idx === 0 && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
 </div>
 <span className={`text-[15px] ${idx === 0 ? 'font-black text-slate-900' : 'text-slate-600 font-medium group-hover:text-slate-900 transition-colors'}`}>
 {cat}
 </span>
 </label>
 ))}
 </div>
 </motion.div>

 {/* Media Contacts */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.1 }}
 className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
 <h3 className="text-xl font-black mb-6 tracking-tight">Media Contacts</h3>
 <div className="space-y-6">
 <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
 <p className="font-black text-slate-900">Achtrex Global Media</p>
 <a href="mailto:press@achtrex.com" className="text-[#00a9ce] font-medium hover:text-[#053787] transition-colors block mt-1">press@achtrex.com</a>
 <p className="text-slate-500 font-medium text-sm mt-2 flex items-center gap-2">
 <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
 +1 (800) 555-0199
 </p>
 </div>
 <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
 <p className="font-black text-slate-900">Investor Relations</p>
 <a href="mailto:investors@achtrex.com" className="text-[#00a9ce] font-medium hover:text-[#053787] transition-colors block mt-1">investors@achtrex.com</a>
 </div>
 </div>
 </motion.div>

 {/* Download Assets */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.2 }}
 className="bg-gradient-to-br from-[#061420] to-[#0A2235] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00a9ce]/20 rounded-full blur-2xl"></div>
 <h3 className="text-xl font-black mb-4 tracking-tight relative z-10">Brand Assets</h3>
 <p className="text-slate-300 mb-8 text-[15px] font-medium leading-relaxed relative z-10">Download official Achtrex logos, executive headshots, and product screenshots for media use.</p>
 <button className="flex items-center gap-3 bg-logo-gradient text-white px-6 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,169,206,0.4)] hover:scale-[1.02] transition-all w-full justify-center relative z-10">
 <Download className="w-5 h-5" /> Download Media Kit
 </button>
 </motion.div>
 </div>

 </div>
 </div>
 </main>
 );
}
