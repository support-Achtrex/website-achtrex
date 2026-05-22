'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    const router = useRouter();
    
    return (
        <>
            {/* Pre-Footer CTA Section */}
            <section className="relative overflow-hidden bg-[#0A1A1E] border-b border-gray-800">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 mix-blend-overlay opacity-30">
                    <Image 
                        src="/hero-bg-team.png" 
                        alt="Team collaborating" 
                        fill 
                        className="object-cover object-center grayscale"
                    />
                </div>
                
                {/* Large Background Arrow Graphic (Decorative) */}
                <svg className="absolute -right-20 top-1/2 -translate-y-1/2 h-[150%] w-auto text-[#1B4B4C] z-0 pointer-events-none opacity-50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100 H150 M100 50 L150 100 L100 150" stroke="currentColor" strokeWidth="20" strokeLinecap="square" strokeLinejoin="miter" />
                    <path d="M-50 100 H100 M50 50 L100 100 L50 150" stroke="currentColor" strokeWidth="20" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-8">
                            Not sure <br className="hidden sm:block" /> where to start?
                        </h2>
                        
                        <div className="space-y-6 text-[17px] text-white/80 font-medium mb-10 max-w-xl">
                            <p>
                                Tell us your goals. We'll guide you to the right solution for your data, your challenges, and your growth.
                            </p>
                            <p>
                                Get an assessment of your data quality.
                            </p>
                        </div>
                        
                        {/* Slanted Button */}
                        <button 
                            onClick={() => router.push('/contact-us')}
                            className="group relative inline-flex items-center justify-center bg-[#1A8B8C] hover:bg-[#157172] transition-colors duration-300 transform -skew-x-12 px-10 py-4 shadow-lg shadow-teal-900/20"
                        >
                            <span className="transform skew-x-12 text-white font-bold tracking-wide text-sm">
                                Let's Talk
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-white pt-8 pb-12 font-sans border-t border-gray-200 mt-20">
                <div className="max-w-[1400px] mx-auto px-4">
                    {/* Top Section - Horizontal Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6 text-sm text-[#333333] font-medium">
                        <Link href="/press-release" className="hover:text-blue-600 transition-colors">Press</Link>
                        <Link href="/life-at-achtrex" className="hover:text-blue-600 transition-colors">Careers</Link>
                        <Link href="/contact-us" className="hover:text-blue-600 transition-colors">Contact Us</Link>
                    </div>

                    {/* Middle Section - Badges */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 border-t border-b border-gray-200 py-6 mb-8">
                        {/* Inclusion Badge */}
                        <div className="flex items-center gap-4">
                            <div className="text-purple-700 flex shrink-0">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-[#333333] tracking-wide uppercase">Achtrex's Inclusion and Belonging</span>
                                <span className="text-[13px] text-gray-500">Committed to an inclusive future</span>
                            </div>
                        </div>

                        {/* Privacy Badge */}
                        <div className="flex items-center gap-4">
                            <div className="text-blue-600 flex shrink-0 bg-white border-2 border-blue-600 rounded-full p-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-bold text-[#333333] tracking-wide uppercase">Data Privacy</span>
                                <span className="text-[13px] text-gray-500">Protected by enterprise security</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Legal Text */}
                    <div className="flex flex-col items-center text-center space-y-4 max-w-5xl mx-auto px-4">
                        <p className="text-[11px] text-[#555555]">
                            ©{new Date().getFullYear()} Achtrex. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};