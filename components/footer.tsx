'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Linkedin, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800', '900'] });

export const Footer = () => {
    const router = useRouter();

    return (
        <>
            {/* Pre-Footer CTA Section */}
            <section className="relative overflow-hidden bg-[#081622] border-b border-[#00a9ce]/20">
                <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
                    <Image
                        src="/hero-bg-team.png"
                        alt="Team collaborating"
                        fill
                        className="object-cover object-center grayscale"
                    />
                </div>

                <svg className="absolute -right-20 top-1/2 -translate-y-1/2 h-[150%] w-auto text-[#00a9ce] z-0 pointer-events-none opacity-20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100 H150 M100 50 L150 100 L100 150" stroke="currentColor" strokeWidth="20" strokeLinecap="square" strokeLinejoin="miter" />
                    <path d="M-50 100 H100 M50 50 L100 100 L50 150" stroke="currentColor" strokeWidth="20" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-14 relative z-10">
                    <div className="max-w-2xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-8">
                            Not sure <br className="hidden sm:block" /> where to start?
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="space-y-6 text-[17px] text-slate-300 font-medium mb-10 max-w-xl">
                            <p>Tell us your goals. We'll guide you to the right solution for your data, your challenges, and your growth.</p>
                            <p>Get an assessment of your data quality.</p>
                        </motion.div>
                        <button
                            onClick={() => router.push('/contact-us')}
                            className="group relative inline-flex items-center justify-center bg-logo-gradient transition-all duration-300 transform -skew-x-12 px-10 py-4 shadow-none border-0 hover:scale-105"
                        >
                            <span className="transform skew-x-12 text-white font-bold tracking-wide text-sm">
                                START A PROJECT
                            </span>
                        </button>
                    </div>
                </div>
            </section>

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
                                        <Mail size={15} className="mt-0.5 text-[#00a9ce] shrink-0" />
                                        <span>support@achtrex.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+16133664271"
                                        className="flex items-start gap-3 text-slate-400 hover:text-white text-sm font-medium transition-colors">
                                        <Phone size={15} className="mt-0.5 text-[#00a9ce] shrink-0" />
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