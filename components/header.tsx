'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Database, ScanSearch, CarFront, Bot, Code2, ShieldCheck, Car } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                { label: 'Car Insurance', href: '/industries/auto-insurance' },
                { label: 'Car Dealership', href: '/industries/car-dealerships' },
                { label: 'Auto Repair Service', href: '/industries/auto-repair' },
                { label: 'Car Website', href: '/industries/car-website' },
                { label: 'Classified Website', href: '/industries/classifieds-websites' },
                { label: 'Car Rental', href: '/industries/car-rental' },
                { label: 'Auto Parts Company', href: '/industries/auto-parts' },
                { label: 'Car Finance', href: '/industries/car-finance' }
            ]
        },
        { 
            label: 'Resources', 
            href: '/resources', 
            sub: [
                { label: 'Blog', href: '/blog' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Press Release', href: '/press-release' }
            ] 
        },
    ];

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all">
            <nav className="w-full max-w-[900px] bg-[#eef3f7] rounded-full px-6 py-3 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-7 h-7">
                            <Image
                                src="/logo.png"
                                alt="Achtrex Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[17px] font-bold text-[#111112] tracking-wide">ACHTREX</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group h-full flex items-center">
                                <Link
                                    href={link.sub ? "#" : link.href}
                                    onClick={(e) => link.sub ? e.preventDefault() : null}
                                    className={cn(
                                        "text-[14px] font-semibold transition-colors flex items-center gap-1",
                                        pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? "text-[#111112]" : "text-[#111112] hover:text-gray-600"
                                    )}
                                >
                                    {link.label}
                                    {link.sub && (
                                        <svg className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                                {link.sub && (
                                    <div className={cn(
                                        "absolute top-[30px] left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                                        link.sub[0]?.description ? "w-[400px]" : "w-[240px]"
                                    )}>
                                        <div className={cn(
                                            "bg-white border border-[#e5e5e5] rounded-xl shadow-lg p-3 flex flex-col",
                                            link.sub[0]?.description ? "gap-2" : "gap-1"
                                        )}>
                                            {link.sub.map((subLink: any) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    className={cn(
                                                        "rounded-lg transition-colors hover:bg-gray-50 flex items-start",
                                                        subLink.description ? "p-3 gap-4" : "px-4 py-2"
                                                    )}
                                                >
                                                    {subLink.icon && (
                                                        <div className="bg-[#eef3f7] p-2 rounded-md shrink-0 text-[#111112]">
                                                            <subLink.icon size={20} />
                                                        </div>
                                                    )}
                                                    <div className="flex flex-col">
                                                        <span className={cn(
                                                            "font-semibold",
                                                            subLink.description ? "text-[15px] text-[#111112]" : "text-[14px] text-[#5C7695] hover:text-[#111112]"
                                                        )}>
                                                            {subLink.label}
                                                        </span>
                                                        {subLink.description && (
                                                            <span className="text-[13px] text-gray-500 mt-0.5 leading-snug">
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
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/contact-us" className="relative group rounded-full overflow-hidden p-[2px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-green-500 rounded-full" />
                        <div className="relative bg-[#111112] text-white text-[14px] font-bold px-5 py-2 rounded-full hover:bg-gray-900 transition-colors">
                            Contact Us
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-[#111112] hover:text-gray-600 transition-colors"
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
                        className="absolute top-20 left-4 right-4 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl lg:hidden"
                    >
                        <div className="px-6 py-6 space-y-1 flex flex-col">
                            {navLinks.map((link) => (
                                <div key={link.href} className="border-b border-gray-100 last:border-0 py-2">
                                    <div className="flex justify-between items-center transition-colors rounded-md py-1">
                                        <Link
                                            href={link.sub ? "#" : link.href}
                                            onClick={(e) => {
                                                if (link.sub) e.preventDefault();
                                                else setIsOpen(false);
                                            }}
                                            className="text-[16px] font-bold py-2 w-full text-[#111112]"
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                    {link.sub && (
                                        <div className="pl-4 pb-2 pt-1 flex flex-col gap-3">
                                            {link.sub.map((subLink: any) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors"
                                                >
                                                    {subLink.icon && (
                                                        <div className="bg-gray-100 p-2 rounded-md shrink-0 text-[#111112]">
                                                            <subLink.icon size={18} />
                                                        </div>
                                                    )}
                                                    <div className="flex flex-col">
                                                        <span className={cn("font-semibold", subLink.description ? "text-[#111112] text-[15px]" : "text-[14px] text-[#5C7695] hover:text-[#111112]")}>
                                                            {subLink.label}
                                                        </span>
                                                        {subLink.description && (
                                                            <span className="text-[13px] text-gray-500 mt-0.5">
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
                            <div className="pt-6 flex flex-col gap-3">
                                <Link href="/contact-us" onClick={() => setIsOpen(false)} className="w-full text-center bg-[#111112] text-white font-bold py-3 rounded-full">
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