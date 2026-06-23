'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['700', '800', '900'] });

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isDarkBg = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [forcedOpenDropdown, setForcedOpenDropdown] = useState<string | null>(null);

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

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleOpenServices = () => {
      setForcedOpenDropdown('Industries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Close automatically after 5 seconds
      clearTimeout(timeout);
      timeout = setTimeout(() => setForcedOpenDropdown(null), 5000);
    };
    
    window.addEventListener('open-services-dropdown', handleOpenServices);
    
    return () => {
      window.removeEventListener('open-services-dropdown', handleOpenServices);
      clearTimeout(timeout);
    };
  }, []);

  const navLinks: any[] = [
    { label: 'Home', href: '/' },
    { 
      label: 'Company', 
      href: '/company',
      sub: [
        { label: 'About Us', href: '/about-us' },
        { label: 'What We Do', href: '/why-achtrex' }
      ]
    },
    { 
      label: 'Our Solutions', 
      href: '/products',
      sub: [
        { label: 'Automotive Data & APIs', href: '/products/automotive' },
        { label: 'Sales & Inventory Management', href: '/products/sales-inventory' },
        { label: 'Custom Software Development', href: '/products/enterprise-platforms' },
        { label: 'AI Solutions', href: '/products/lumi' }
      ]
    },
    { 
      label: 'Industries', 
      href: '/services',
      sub: [
        { label: 'Car Insurance', href: '/industries/auto-insurance' },
        { label: 'Car Dealership', href: '/industries/car-dealerships' },
        { label: 'Auto Repair Service', href: '/industries/auto-repair' },
        { label: 'Car Website', href: '/industries/car-website' },
        { label: 'Classified Website', href: '/industries/classifieds-websites' },
        { label: 'Manufacturers', href: '/industries/manufacturers' },
        { label: 'Car Rental', href: '/industries/car-rental' },
        { label: 'Auto Parts Company', href: '/industries/auto-parts' },
        { label: 'Car Finance', href: '/industries/car-finance' },
        { label: 'Fleet Management', href: '/industries/fleet-management' },
        { label: 'Ride-Sharing', href: '/industries/ride-sharing' },
        { label: 'Government Agencies', href: '/industries/government-agencies' }
      ]
    },
    { 
      label: 'Resources', 
      href: '/resources',
      sub: [
        { label: 'Blogs', href: '/blog' },
        { label: 'Press Release', href: '/press-release' },
        { label: 'Use Cases', href: '/use-cases' }
      ]
    },
    { label: 'Contact Us', href: '/contact-us' }
  ];

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50" : "pt-6 pb-2 bg-transparent"
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
          <span className={cn(
            "text-[22px] lg:text-[26px] font-black tracking-normal transition-all duration-300", 
            isDarkBg ? "text-white" : "text-transparent bg-clip-text bg-logo-gradient drop-shadow-sm",
            outfit.className
          )}>
            Achtrex
          </span>
        </Link>

        <div className="flex items-center">
          {/* Desktop Navigation in White Pill */}
          <div className="hidden lg:flex items-center gap-6 bg-white rounded-full pl-8 pr-2 py-2 shadow-lg border border-gray-100">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group h-full flex items-center">
                <Link
                  href={link.sub ? "#" : link.href}
                  onClick={(e) => link.sub ? e.preventDefault() : null}
                  className={cn(
                    "text-[14px] font-semibold transition-colors flex items-center gap-1.5 text-slate-800 hover:text-[#00a9ce] py-2"
                  )}
                >
                  {link.label}
                  {link.sub && (
                    <svg className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.sub && (
                  <div className={cn(
                    "absolute top-[calc(100%+10px)] left-0 pt-2 transition-all duration-200 z-50",
                    forcedOpenDropdown === link.label 
                      ? "opacity-100 visible" 
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                    link.sub.length > 4 ? "w-[600px] left-[-150px]" : "w-[240px]"
                  )}>
                    <div className={cn(
                      "bg-white border border-gray-100 rounded-xl shadow-xl p-2",
                      link.sub.length > 4 ? "grid grid-cols-2 gap-x-2 gap-y-1" : "flex flex-col gap-1"
                    )}>
                      {link.sub.map((subLink: any) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className={cn(
                            "rounded-lg transition-colors hover:bg-slate-50 flex items-start px-4 py-3"
                          )}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-[14px] text-slate-700 hover:text-[#00a9ce]">
                              {subLink.label}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Call Now Button inside the pill */}
            <div className="ml-4">
              <Link href="tel:+1234567890" className="bg-logo-gradient text-white text-[14px] font-bold px-6 py-2.5 rounded-full transition-transform hover:scale-105 border-0 shadow-md flex items-center justify-center">
                Call Now
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn("lg:hidden p-2 transition-colors", isDarkBg ? "text-white hover:text-gray-200" : "text-slate-800 hover:text-[#0263C6]")}
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
            className="fixed top-[76px] left-4 right-4 bottom-4 bg-[#081622] border border-white/10 rounded-none overflow-y-auto overscroll-contain shadow-2xl lg:hidden z-[60]"
          >
            <div className="px-5 py-5 space-y-1 flex flex-col">
              {navLinks.map((link) => {
                const hasSub = !!link.sub;
                const isSubOpen = forcedOpenDropdown === link.label;
                
                return (
                  <div key={link.href} className="border-b border-white/5 last:border-0 py-2">
                    <div className="flex justify-between items-center transition-colors rounded-none py-1">
                      <Link
                        href={hasSub ? "#" : link.href}
                        onClick={(e) => {
                          if (hasSub) {
                            e.preventDefault();
                            setForcedOpenDropdown(isSubOpen ? null : link.label);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className="text-[16px] font-bold py-2 w-full text-white block flex-1 flex items-center justify-between"
                      >
                        {link.label}
                        {hasSub && (
                          <svg 
                            className={cn("w-4 h-4 transition-transform duration-200", isSubOpen ? "rotate-180" : "")} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    </div>
                    {hasSub && isSubOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-3 pb-2 pt-1 flex flex-col gap-2 overflow-hidden"
                      >
                        {link.sub.map((subLink: any) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-3 p-2 rounded-none hover:bg-transparent/5 transition-colors block"
                          >
                            <div className="flex flex-col">
                              <span className={cn("font-semibold", subLink.description ? "text-white text-[15px]" : "text-[14px] text-white/70 hover:text-[#00a9ce]")}>
                                {subLink.label}
                              </span>
                              {subLink.description && (
                                <span className="text-[13px] text-white/60 mt-0.5 leading-snug">
                                  {subLink.description}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/contact-us" onClick={() => setIsOpen(false)} className="w-full text-center bg-logo-gradient text-white font-bold py-3 rounded-none">
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