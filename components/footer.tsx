'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { Linkedin, Twitter, Mail, CallOut } from '@nobertdev/react-3d-icons/fc';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800', '900'] });

export const Footer = () => {
  const router = useRouter();

  return (
    <>
      {/* Pre-Footer CTA Section */}
      <div className="relative bg-transparent pt-20">
        {/* Dark background for the bottom half to create overlap effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#001a22]"></div>
        
        <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8 z-10">
          {/* Top Center Diamond Logo (Placed outside so it isn't clipped by overflow-hidden) */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rotate-45 flex items-center justify-center shadow-md z-20">
            <div className="-rotate-45 flex items-center justify-center w-full h-full">
              <Image src="/logo.png" alt="Achtrex Logo" width={32} height={32} className="object-contain" />
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-[#061420] to-[#0A2235] rounded-2xl shadow-2xl overflow-hidden pt-20 pb-16 px-6 text-center border border-white/10">
            
            {/* Light, Frosted Floating Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              {/* Top Left Circle */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full blur-md"></div>
              {/* Accent Diamonds */}
              <div className="absolute top-10 left-[20%] md:left-[25%] w-4 h-4 bg-white/10 rotate-45"></div>
              <div className="absolute top-12 left-[23%] md:left-[28%] w-8 h-8 border-[1.5px] border-white/10 rotate-45"></div>
              {/* Top Right Circles */}
              <div className="absolute top-8 right-[22%] md:right-[32%] w-8 h-8 bg-white/5 rounded-full"></div>
              <div className="absolute top-10 right-[20%] md:right-[30%] w-12 h-12 border-[1.5px] border-white/10 rounded-full"></div>
              {/* Bottom Left Diamond */}
              <div className="absolute bottom-8 left-[10%] w-14 h-14 border-[1.5px] border-white/10 rotate-45"></div>
              {/* Right Square */}
              <div className="absolute top-1/2 right-[10%] md:right-[15%] w-6 h-6 border-[1.5px] border-white/10 rotate-12"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                Work with Us
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-[15px] md:text-base font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                Need robust vehicle APIs, intelligent automation, or bespoke automotive software? We can help.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+19733851305" className="w-full sm:w-auto px-8 py-3 rounded-md border border-white/20 text-white font-bold hover:bg-white/5 transition-colors text-center text-[15px]">
                  Call Us: +1 973 385 1305
                </a>
                <button onClick={() => router.push('/contact-us')} className="w-full sm:w-auto px-8 py-3 rounded-md bg-logo-gradient text-white font-bold transition-transform hover:scale-105 text-center shadow-lg border-0 text-[15px]">
                  Work with Us
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#001a22] text-slate-200 pt-16 pb-8 font-sans border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 lg:mb-16">

            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <div className="mb-5 flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.png"
                    alt="Achtrex Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className={cn("text-[22px] font-bold text-white tracking-wide", montserrat.className)}>Achtrex</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Automotive intelligence &amp; cognitive infrastructure for the connected mobility era.
              </p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/achtrexproducts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-9 h-9 rounded-none bg-transparent/5 hover:bg-[#00a9ce] flex items-center justify-center transition-colors">
                  <Linkedin size={15} className="text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                  className="w-9 h-9 rounded-none bg-transparent/5 hover:bg-[#00a9ce] flex items-center justify-center transition-colors">
                  <Twitter size={15} className="text-white" />
                </a>
                <a href="mailto:support@achtrex.com" aria-label="Email"
                  className="w-9 h-9 rounded-none bg-transparent/5 hover:bg-[#00a9ce] flex items-center justify-center transition-colors">
                  <Mail size={15} className="text-white" />
                </a>
              </div>
            </div>

            {/* Column 2: Platform Ecosystem */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Platform Ecosystem</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://automotivedataset.com" target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></span>
                    AutomotiveDataset.com
                    <ExternalLink size={11} className="text-slate-500 group-hover:text-slate-500" />
                  </a>
                </li>
                <li>
                  <Link href="/products/lumi"
                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></span>
                    LUMI AI Platform
                  </Link>
                </li>
                <li>
                  <Link href="/products"
                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#00a9ce] shrink-0"></span>
                    Achtrex Core APIs
                  </Link>
                </li>
                <li>
                  <Link href="/products/enterprise-platforms"
                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-[#76bc1d] shrink-0"></span>
                    Enterprise Platforms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about-us" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">About Achtrex</Link></li>
                <li><Link href="/why-achtrex" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Why Achtrex</Link></li>
                <li><Link href="/products" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Products</Link></li>
                <li><Link href="/partners" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Partners</Link></li>
                <li><Link href="/use-cases" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Client &amp; Industry Use Cases</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-5">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:support@achtrex.com"
                    className="flex items-start gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                    <Mail className="w-5 h-5 text-[#00a9ce] mt-1" />
                    <span>support@achtrex.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+16133664271"
                    className="flex items-start gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                    <CallOut className="w-5 h-5 text-[#00a9ce] mt-1" />
                    <span>+1 613 366-4271</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>



          {/* Bottom Legal Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-slate-400">
              &copy;{new Date().getFullYear()} Achtrex. All rights reserved.
            </p>
            <div className="flex gap-6 text-[12px] text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};