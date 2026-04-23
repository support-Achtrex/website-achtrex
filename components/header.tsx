'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/buttons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about-us' },
        { 
            label: 'Products', 
            href: '/products',
            sub: [
                { label: 'Automotive Dataset', href: '/products/automotive' },
                { label: 'CarKasa', href: '/products/carkasa' },
                { label: 'Vehicle Report Check', href: '/products/vehiclereport' },
                { label: 'LUMI Platform', href: '/products/lumi' }
            ]
        },
        { label: 'Why Achtrex', href: '/why-achtrex' },
        { label: 'Blog', href: '/blog' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060913] border-b border-white/10 shadow-xl py-3">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/logo.png"
                                alt="Achtrex Logo"
                                fill
                                className="object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                            />
                        </div>
                        <span className="text-xl font-display font-bold text-white tracking-wide group-hover:text-primary transition-colors">Achtrex</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group">
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors group-hover:text-white relative py-4 flex items-center gap-1",
                                        pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? "text-white" : "text-gray-300"
                                    )}
                                >
                                    {link.label}
                                    {link.sub && (
                                        <svg className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 right-0 h-[4px] bg-logo-gradient transition-opacity duration-300",
                                        pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? "opacity-100" : "opacity-0"
                                    )} />
                                </Link>
                                {link.sub && (
                                    <div className="absolute top-[80%] left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="bg-[#0a0f1c]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl py-2 flex flex-col overflow-hidden">
                                            {link.sub.map((subLink) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    className="px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors font-medium border-l-4 border-transparent hover:border-l-logo-gradient hover:pl-6"
                                                >
                                                    {subLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact-us">
                            <button className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-2.5 rounded-full text-sm transition-colors shadow-md">
                                Let's Talk
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-2 flex flex-col">
                            {navLinks.map((link) => (
                                <div key={link.href} className="border-b border-white/5">
                                    <div className={cn(
                                        "flex justify-between items-center transition-colors rounded-md py-1",
                                        pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? "bg-white/5" : ""
                                    )}>
                                        <Link
                                            href={link.href}
                                            onClick={() => link.sub ? null : setIsOpen(false)}
                                            className={cn(
                                                "text-lg font-medium py-3 px-2 w-full",
                                                pathname === link.href || pathname.startsWith(link.href + '/') && link.href !== '/' ? "text-white" : "text-muted-foreground hover:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                    {link.sub && (
                                        <div className="pl-6 pb-4 pt-1 flex flex-col gap-3">
                                            {link.sub.map((subLink) => (
                                                <Link
                                                    key={subLink.href}
                                                    href={subLink.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-base text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> {subLink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-6">
                                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-white text-black hover:bg-gray-200 py-6 text-lg font-bold">
                                        Let's Talk
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};