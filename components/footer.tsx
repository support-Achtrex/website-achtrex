'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 relative overflow-hidden pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                A
                            </div>
                            <span className="text-xl font-display font-bold text-white tracking-wide">Achtrex</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            Empowering businesses with cutting-edge digital solutions. We transform ideas into impactful realities through technology and design.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products & Platforms */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Products</h4>
                        <ul className="space-y-4">
                            {['Automotive Data Platform', 'AI Solutions', 'Platform Engineering', 'Strategy & Consulting'].map((item) => (
                                <li key={item}>
                                    <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'About Us', href: '/about-us' },
                                { label: 'Careers', href: '/life-at-achtrex' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Contact', href: '/contact-us' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1 text-muted-foreground">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Email</span>
                                <span>support@achtrex.com</span>
                            </li>
                            <li className="flex flex-col gap-1 text-muted-foreground">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Phone</span>
                                <p>+1 613 366 4271</p>
                            </li>
                            <li className="flex flex-col gap-1 text-muted-foreground">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Headquarters</span>
                                <div className="flex flex-col">
                                    <span>1111B S Governors Ave STE 48362</span>
                                    <span>Dover, DE 19904</span>
                                    <span>United States</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Achtrex. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};