'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[128px] pointer-events-none" />

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

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'Digital Marketing', 'Consulting'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
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
                                { label: 'Portfolio', href: '/portfolio' },
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
                            <li className="flex gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>support@achtrex.com</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <div>
                                    <p>GH +233 500 496700</p>
                                    <p>US +1 973 385 1305</p>
                                </div>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Accra, Ghana & New Jersey, USA</span>
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