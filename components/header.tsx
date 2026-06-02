'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Database, ScanSearch, CarFront, Bot, Code2, ShieldCheck, Car, Store, Wrench, Globe, Search, Key, Package, CircleDollarSign, FileText, Newspaper, Target, Factory } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800', '900'] });

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks: any[] = [
        { 
            label: 'Products', 
            href: '/products',
            sub: [
                { 
                    label: 'AutomotiveDataset.com', 
                    description: 'High-frequency vehicle datasets and API endpoints.',
                    href: '/products/automotive',
                    icon: Database
                },
                { 
                    label: 'LUMI AI', 
                    description: 'Predictive intelligence and workflow automation.',
                    href: '/products/lumi',
                    icon: Bot
                },
                { 
                    label: 'Enterprise Automotive Platforms', 
                    description: 'Automotive API integrations and custom architecture.',
                    href: '/products/enterprise-platforms',
                    icon: Code2
                }
            ]
        },
        { 
            label: 'Industries', 
            href: '/industries',
            sub: [
                { label: 'Car Insurance', description: 'Precise VIN decoding, ADAS specs, and historical data for risk modeling.', href: '/industries/auto-insurance', icon: ShieldCheck },
                { label: 'Car Dealership', description: 'Real-time market insights, valuation data, and inventory management APIs.', href: '/industries/car-dealerships', icon: Store },
                { label: 'Auto Repair Service', description: 'Detailed OEM specifications, maintenance schedules, and cross-reference parts data.', href: '/industries/auto-repair', icon: Wrench },
                { label: 'Car Website', description: 'Rich vehicle databases and high-resolution imagery for digital automotive platforms.', href: '/industries/car-website', icon: Globe },
                { label: 'Classified Website', description: 'Automated listing enrichment, accurate valuations, and VIN-to-specs integration.', href: '/industries/classifieds-websites', icon: Search },
                { label: 'Manufacturers', description: 'Competitive intelligence, production insights, and global market trends.', href: '/industries/manufacturers', icon: Factory },
                { label: 'Car Rental', description: 'Fleet optimization data, lifecycle tracking, and depreciation intelligence.', href: '/industries/car-rental', icon: Key },
                { label: 'Auto Parts Company', description: 'Comprehensive fitment data, OEM cross-referencing, and supply chain insights.', href: '/industries/auto-parts', icon: Package },
                { label: 'Car Finance', description: 'Accurate residual values, depreciation curves, and loan origination data.', href: '/industries/car-finance', icon: CircleDollarSign }
            ]
        },
        { 
            label: 'Resources', 
            href: '/resources', 
            sub: [
                { label: 'Blog', description: 'Latest news & tech insights.', href: '/blog', icon: FileText },
                { label: 'Press Release', description: 'Company announcements.', href: '/press-release', icon: Newspaper },
                { label: 'Client & Industry Use Cases', description: 'Real-world data applications.', href: '/use-cases', icon: Target }
            ] 
        },
        {
            label: 'About Us',
            href: '/about-us'
        }
    ];

    return (
        <div className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled || !isHome ? "bg-[#F8F9FA]/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm" : "bg-transparent py-6"
        )}>
            <nav className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                        <Image
                            src="/logo.png"
                            alt="Achtrex Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn("text-[20px] lg:text-[22px] font-bold tracking-wide", montserrat.className, scrolled || !isHome ? "text-slate-900" : "text-white")}>Achtrex</span>
                </Link>

                <div className="flex items-center gap-10">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group h-full flex items-center">
                                <Link
                                    href={link.sub ? "#" : link.href}
                                    onClick={(e) => link.sub ? e.preventDefault() : null}
                                    className={cn(
                                        "text-[14px] font-semibold transition-colors flex items-center gap-1.5",
                                        scrolled || !isHome ? "text-slate-900/90 hover:text-slate-900" : "text-white/90 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                    {link.sub && (
                                        <svg className={cn("w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180", scrolled || !isHome ? "text-slate-900" : "text-white")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                                {link.sub && (
                                    <div className={cn(
                                        "absolute top-[30px] left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                                        link.sub.length > 4 ? "w-[700px] left-[-150px]" : (link.sub[0]?.description ? "w-[400px]" : "w-[240px]")
                                    )}>
                                        <div className={cn(
                                            "bg-white border border-slate-200 rounded-xl shadow-2xl p-3",
                                            link.sub.length > 4 ? "grid grid-cols-2 gap-x-2 gap-y-1" : "flex flex-col gap-1",
                                            link.sub[0]?.description && link.sub.length <= 4 && "gap-2"
                                        )}>
                                            {link.sub.map((subLink: any) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    className={cn(
                                                        "rounded-lg transition-colors hover:bg-transparent/5 flex items-start",
                                                        subLink.description ? "p-3 gap-4" : "px-4 py-2"
                                                    )}
                                                >

                                                    <div className="flex flex-col">
                                                        <span className={cn(
                                                            "font-semibold",
                                                            subLink.description ? "text-[15px] text-slate-900" : "text-[14px] text-slate-600 hover:text-slate-900"
                                                        )}>
                                                            {subLink.label}
                                                        </span>
                                                        {subLink.description && (
                                                            <span className="text-[13px] text-slate-500 mt-0.5 leading-snug">
                                                                {subLink.description}
                                                            </span>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact-us" className="relative group rounded-md overflow-hidden p-[1px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 rounded-md opacity-70 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-[#F8F9FA]/90 backdrop-blur-md text-slate-900 text-[14px] font-bold px-6 py-2 rounded-md transition-colors">
                                Contact Us
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn("lg:hidden p-2 transition-colors", scrolled || !isHome ? "text-slate-900 hover:text-slate-600" : "text-white hover:text-gray-200")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-[76px] left-4 right-4 bottom-4 bg-white border border-slate-200 rounded-2xl overflow-y-auto overscroll-contain shadow-2xl lg:hidden"
                    >
                        <div className="px-5 py-5 space-y-1 flex flex-col">
                            {navLinks.map((link) => (
                                <div key={link.href} className="border-b border-white/5 last:border-0 py-2">
                                    <div className="flex justify-between items-center transition-colors rounded-md py-1">
                                        <Link
                                            href={link.sub ? "#" : link.href}
                                            onClick={(e) => {
                                                if (link.sub) e.preventDefault();
                                                else setIsOpen(false);
                                            }}
                                            className="text-[16px] font-bold py-2 w-full text-slate-900"
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                    {link.sub && (
                                        <div className="pl-3 pb-2 pt-1 flex flex-col gap-2">
                                            {link.sub.map((subLink: any) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-start gap-3 p-2 rounded-md hover:bg-transparent/5 transition-colors"
                                                >

                                                    <div className="flex flex-col">
                                                        <span className={cn("font-semibold", subLink.description ? "text-slate-900 text-[15px]" : "text-[14px] text-slate-600 hover:text-slate-900")}>
                                                            {subLink.label}
                                                        </span>
                                                        {subLink.description && (
                                                            <span className="text-[13px] text-slate-600 mt-0.5 leading-snug">
                                                                {subLink.description}
                                                            </span>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <Link href="/contact-us" onClick={() => setIsOpen(false)} className="w-full text-center bg-transparent text-slate-900 font-bold py-3 rounded-xl">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};