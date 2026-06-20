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
            <div className="relative bg-transparent pt-20">
                {/* Dark background for the bottom half to create overlap effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#001a22]"></div>
                
                <div className="relative max-w-[1200px] mx-auto px-4 lg:px-8 z-10">
                    <div className="relative bg-[#00a9ce] rounded-xl shadow-2xl overflow-hidden pt-16 pb-12 px-6 text-center border-b-[6px] border-[#76bc1d]">
                        
                        {/* Floating Shapes */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                            {/* Top Left Circle */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/80 rounded-full"></div>
                            {/* Purple/Orange Diamonds */}
                            <div className="absolute top-6 left-[20%] md:left-[30%] w-3 h-3 bg-purple-700 rotate-45"></div>
                            <div className="absolute top-8 left-[22%] md:left-[32%] w-6 h-6 border-2 border-orange-500 rotate-45"></div>
                            {/* Top Right Circles */}
                            <div className="absolute top-6 right-[22%] md:right-[32%] w-6 h-6 bg-white/80 rounded-full"></div>
                            <div className="absolute top-8 right-[20%] md:right-[30%] w-8 h-8 border-[3px] border-[#76bc1d] rounded-full"></div>
                            {/* Bottom Left Diamond */}
                            <div className="absolute bottom-6 left-[10%] w-10 h-10 border-[4px] border-[#007b99] rotate-45"></div>
                            {/* Bottom Center Triangle */}
                            <div className="absolute -bottom-2 left-[45%] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-transparent border-b-orange-500"></div>
                            {/* Right Square */}
                            <div className="absolute top-1/2 right-[10%] md:right-[15%] w-5 h-5 bg-white/80"></div>
                        </div>

                        {/* Top Center Diamond Logo */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rotate-45 flex items-center justify-center shadow-sm">
                            <div className="-rotate-45 flex items-center justify-center w-full h-full">
                                <Image src="/logo.png" alt="Achtrex Logo" width={32} height={32} className="object-contain" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-extrabold text-[#001a22] mb-4 tracking-tight">
                                Work with Us
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white text-lg md:text-[19px] font-medium mb-8">
                                Responsive web design, branding and digital marketing that get results? We can help.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="tel:+233242167632" className="w-full sm:w-auto px-8 py-3 rounded-md border border-white text-white font-bold hover:bg-white hover:text-[#00a9ce] transition-colors text-center text-[15px]">
                                    Call Us: +233 242 167 632
                                </a>
                                <button onClick={() => router.push('/contact-us')} className="w-full sm:w-auto px-8 py-3 rounded-md bg-logo-gradient text-white font-bold transition-transform hover:scale-105 text-center shadow-md border-0 text-[15px]">
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