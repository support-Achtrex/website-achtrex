'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ExternalLink, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  ArrowRight, 
  ArrowUp 
} from 'lucide-react';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800', '900'] });

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isPortal = pathname?.startsWith('/portal');

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Pre-Footer CTA Section */}
      {!isPortal && (
        <div className="relative bg-transparent pt-20 pb-0">
          {/* Seamless dark backdrop for the bottom half to mesh with footer */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#001119]"></div>

          <div className="relative max-w-[1240px] mx-auto px-4 lg:px-8 z-10">
            {/* Main CTA Card with Obsidian Deep Lighting & Mesh */}
            <div className="relative bg-gradient-to-b from-[#061b29] via-[#02111c] to-[#010910] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(0,169,206,0.12)] overflow-hidden py-14 px-6 sm:px-10 md:px-16 text-center border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
              
              {/* Luminous Ambient Light Accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/20 blur-[90px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#00a9ce]/15 blur-[80px] rounded-full pointer-events-none"></div>

              {/* High-Tech Grid Texture */}
              <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none"></div>

              {/* Floating Tech Geometry */}
              <div className="absolute top-8 left-8 w-24 h-24 border border-cyan-500/10 rounded-2xl rotate-12 pointer-events-none hidden md:block"></div>
              <div className="absolute bottom-6 right-10 w-20 h-20 border border-emerald-500/10 rounded-full pointer-events-none hidden md:block"></div>

              {/* Content Box */}
              <div className="relative z-10 max-w-3xl mx-auto space-y-6">

                {/* Main Headline */}
                <motion.h2 
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]"
                >
                  Ready to Deploy Next-Gen <br className="hidden sm:inline" />
                  <span className="text-gradient">Automotive Intelligence?</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto"
                >
                  Unlock high-velocity vehicle data feeds, automated DMS inventory synchronization, and bespoke AI platforms tailored for modern automotive leaders.
                </motion.p>

                {/* CTA Action Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center justify-center pt-2"
                >
                  {/* Primary CTA Button */}
                  <button 
                    onClick={() => router.push('/contact-us')}
                    className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#00a9ce] via-[#0cbdaf] to-[#76bc1d] text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,169,206,0.4)] hover:shadow-[0_0_35px_rgba(0,169,206,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-0"
                  >
                    <span>Work with Us</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer — hidden on portal pages */}
      {!isPortal && (
        <footer className="bg-[#001119] text-slate-200 pt-20 pb-10 font-sans relative border-t border-white/5 overflow-hidden">
          {/* Subtle Top Glow Divider Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00a9ce]/40 to-transparent"></div>

          {/* Background Ambient Radial Highlights */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-950/20 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#041c29]/30 blur-[130px] pointer-events-none"></div>

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 z-10">

            {/* Main Footer 4-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

              {/* Column 1: Brand & Infrastructure Info (Span 4) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 p-1 rounded-xl bg-white/5 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,169,206,0.2)]">
                    <Image
                      src="/logo.png"
                      alt="Achtrex Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className={cn("text-[24px] font-black text-white tracking-wide", montserrat.className)}>
                    Achtrex
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
                  Automotive intelligence, real-time vehicle datasets, and cognitive infrastructure for modern dealerships, OEMs, and mobility enterprises.
                </p>

                {/* Social Connect Icons */}
                <div className="flex items-center gap-3 pt-2">
                  <a 
                    href="https://www.linkedin.com/company/achtrexproducts" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,169,206,0.3)] flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,169,206,0.3)] flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href="mailto:support@achtrex.com" 
                    aria-label="Email"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#76bc1d] hover:bg-[#76bc1d]/10 hover:shadow-[0_0_15px_rgba(118,188,29,0.3)] flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>

              {/* Column 2: Platform Ecosystem (Span 3) */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00a9ce]"></span>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                    Platform Ecosystem
                  </h4>
                </div>

                <ul className="space-y-3 pt-1">
                  <li>
                    <a 
                      href="https://automotivedataset.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
                        AutomotiveDataset.com
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        LIVE <ExternalLink size={10} />
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link 
                      href="/products/lumi"
                      className="group flex items-center justify-between text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76bc1d] group-hover:scale-125 transition-transform"></span>
                        AAIA Platform
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        AI
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/automotive"
                      className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
                      <span>Achtrex Core APIs</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/enterprise-platforms"
                      className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#76bc1d] group-hover:scale-125 transition-transform"></span>
                      <span>Enterprise Platforms</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/products/sales-inventory"
                      className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform"></span>
                      <span>Sales &amp; Inventory Cloud</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Company & Resources (Span 2) */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#76bc1d]"></span>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                    Company
                  </h4>
                </div>

                <ul className="space-y-3 pt-1">
                  <li>
                    <Link href="/about-us" className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block">
                      About Achtrex
                    </Link>
                  </li>
                  <li>
                    <Link href="/why-achtrex" className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block">
                      Why Achtrex
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block">
                      Partner Network
                    </Link>
                  </li>
                  <li>
                    <Link href="/use-cases" className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block">
                      Industry Use Cases
                    </Link>
                  </li>
                  <li>
                    <Link href="/book-a-demo" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors hover:translate-x-1 inline-block">
                      Book a Demo &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Direct Engineering Contact (Span 3) */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00a9ce]"></span>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                    Contact &amp; Support
                  </h4>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Email Box */}
                  <a 
                    href="mailto:support@achtrex.com"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 flex items-center gap-3 text-slate-300 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Direct Email</div>
                      <div className="text-xs sm:text-sm font-semibold text-white">support@achtrex.com</div>
                    </div>
                  </a>

                  {/* UAE Phone Box */}
                  <a 
                    href="tel:+971502229587"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 flex items-center gap-3 text-slate-300 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                        <span>Middle East HQ</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white">🇦🇪 +971 50 222 9587</div>
                    </div>
                  </a>

                  {/* US Phone Box */}
                  <a 
                    href="tel:+16133664271"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 flex items-center gap-3 text-slate-300 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                        <span>Americas &amp; Global</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white">🇺🇸 +1 613 366-4271</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Legal & Meta Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[12px] text-slate-400 font-medium text-center md:text-left">
                &copy; {new Date().getFullYear()} Achtrex Technologies FZCO. All rights reserved.
              </p>

              <div className="flex items-center gap-6 text-[12px] text-slate-400 font-medium">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/contact-us" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/contact-us" className="hover:text-white transition-colors">Security</Link>
              </div>

              {/* Back to top button */}
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-[12px] font-bold text-slate-400 hover:text-cyan-300 transition-colors px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
                aria-label="Scroll back to top"
              >
                <span>Back to top</span>
                <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </footer>
      )}
    </>
  );
};