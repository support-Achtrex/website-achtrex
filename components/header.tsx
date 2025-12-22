'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/buttons';
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
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Life at Achtrex', href: '/life-at-achtrex' },
        { label: 'Blog', href: '/blog' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
            scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4 shadow-sm" : "bg-transparent border-transparent py-6"
        )}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12">
                            <img
                                src="/logo.png"
                                alt="Achtrex Logo"
                                className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                            />
                        </div>
                        <span className="text-xl font-display font-bold text-white tracking-wide group-hover:text-primary transition-colors">Achtrex</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative group py-2",
                                    pathname === link.href ? "text-white" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                                <span className={cn(
                                    "absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                                    pathname === link.href && "scale-x-100"
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact-us">
                            <Button variant="primary" size="sm" className="bg-white text-black hover:bg-gray-200 font-semibold px-6">
                                Let's Talk
                            </Button>
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
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium py-3 border-b border-white/5 transition-colors",
                                        pathname === link.href ? "text-primary px-2 bg-white/5 rounded-md border-none" : "text-muted-foreground hover:text-white hover:px-2 hover:bg-white/5 rounded-md"
                                    )}
                                >
                                    {link.label}
                                </Link>
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