'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans border-b border-white/10",
        scrolled 
          ? "bg-[#0A0E14]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-1.5" 
          : "bg-[#0A0E14]/90 backdrop-blur-md py-3.5 sm:py-4"
      )}>
        {/* Subtle luminous neon top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00A9CE]/40 via-[#F37021]/50 to-transparent pointer-events-none" />

        <nav className={cn(
          "w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between transition-all duration-300 ease-in-out",
          scrolled ? "min-h-[54px] lg:min-h-[60px]" : "min-h-[76px] lg:min-h-[88px]"
        )}>
          
          {/* LEFT NAVIGATION: About Us, Our Services, Become a Partner */}
          <div className={cn(
            "hidden lg:flex items-center justify-end flex-1 transition-all duration-300",
            scrolled ? "gap-6 xl:gap-8" : "gap-7 xl:gap-9"
          )}>
            <Link 
              href="/about-us" 
              className={cn(
                "group/link relative font-semibold text-slate-200 hover:text-white transition-all whitespace-nowrap tracking-wide",
                scrolled ? "text-[13.5px] py-1" : "text-[14.5px] xl:text-[15px] py-2"
              )}
            >
              <span>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37021] transition-all duration-300 group-hover/link:w-full rounded-full" />
            </Link>

            {/* Our Services Link (Direct Page) */}
            <Link 
              href="/services" 
              className={cn(
                "group/link relative font-semibold text-slate-200 hover:text-white transition-all whitespace-nowrap tracking-wide",
                scrolled ? "text-[13.5px] py-1" : "text-[14.5px] xl:text-[15px] py-2"
              )}
            >
              <span>Our Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37021] transition-all duration-300 group-hover/link:w-full rounded-full" />
            </Link>

            {/* Become a Partner */}
            <Link 
              href="/partners" 
              className={cn(
                "group/link relative font-semibold text-slate-200 hover:text-white transition-all whitespace-nowrap tracking-wide",
                scrolled ? "text-[13.5px] py-1" : "text-[14.5px] xl:text-[15px] py-2"
              )}
            >
              <span>Become a Partner</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00A9CE] transition-all duration-300 group-hover/link:w-full rounded-full" />
            </Link>
          </div>

          {/* CENTER LOGO */}
          <div className={cn(
            "flex items-center justify-center shrink-0 transition-all duration-300 ease-in-out",
            scrolled ? "mx-4 sm:mx-6 xl:mx-8" : "mx-6 sm:mx-8 xl:mx-12"
          )}>
            <Link href="/" className="relative flex items-center justify-center group p-0.5" aria-label="Achtrex Home">
              {/* Creative Ambient Halo Glow */}
              <div className={cn(
                "absolute bg-gradient-to-tr from-[#00A9CE]/25 via-[#38BDF8]/20 to-[#F37021]/25 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-all duration-500",
                scrolled ? "w-14 h-14 opacity-35" : "w-24 h-24 sm:w-28 sm:h-28 opacity-70"
              )} />

              {/* Logo Icon dynamically scales down when scrolled */}
              <div className={cn(
                "relative shrink-0 transition-all duration-300 ease-in-out group-hover:scale-105 drop-shadow-[0_4px_20px_rgba(0,169,206,0.35)] group-hover:drop-shadow-[0_6px_28px_rgba(243,112,33,0.55)]",
                scrolled 
                  ? "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12" 
                  : "w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24"
              )}>
                <Image
                  src="/logo.png"
                  alt="Achtrex Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* RIGHT NAVIGATION: Industries, Contact Us, Book a meeting */}
          <div className={cn(
            "hidden lg:flex items-center justify-start flex-1 transition-all duration-300",
            scrolled ? "gap-6 xl:gap-8" : "gap-7 xl:gap-9"
          )}>
            {/* Industries Link (Direct Page) */}
            <Link 
              href="/industries" 
              className={cn(
                "group/link relative font-semibold text-slate-200 hover:text-white transition-all whitespace-nowrap tracking-wide",
                scrolled ? "text-[13.5px] py-1" : "text-[14.5px] xl:text-[15px] py-2"
              )}
            >
              <span>Industries</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37021] transition-all duration-300 group-hover/link:w-full rounded-full" />
            </Link>

            <Link 
              href="/contact-us" 
              className={cn(
                "group/link relative font-semibold text-slate-200 hover:text-white transition-all whitespace-nowrap tracking-wide",
                scrolled ? "text-[13.5px] py-1" : "text-[14.5px] xl:text-[15px] py-2"
              )}
            >
              <span>Contact Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F37021] transition-all duration-300 group-hover/link:w-full rounded-full" />
            </Link>

            {/* Glowing "Book a meeting" CTA */}
            <Link 
              href="/contact-us" 
              className="relative group/btn overflow-hidden rounded-full p-[1.5px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(243,112,33,0.45)] whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#F37021] via-[#FB923C] to-[#00A9CE] rounded-full transition-all duration-300 group-hover/btn:opacity-100 opacity-85" />
              <span className={cn(
                "relative flex items-center gap-2 bg-[#0C1118] hover:bg-[#141B26] text-white font-bold rounded-full transition-all",
                scrolled ? "text-[12.5px] px-4.5 py-1.5" : "text-[13.5px] px-6 py-2"
              )}>
                <Calendar className={cn("text-[#F37021] group-hover/btn:text-[#38BDF8] transition-colors", scrolled ? "w-3 h-3" : "w-3.5 h-3.5")} />
                <span>Book a meeting</span>
              </span>
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex lg:hidden items-center gap-3">
            <Link 
              href="/contact-us" 
              className={cn(
                "bg-[#F37021] text-white font-bold rounded-full hover:bg-[#d85d15] whitespace-nowrap shadow-md transition-all",
                scrolled ? "text-[11px] px-3 py-1" : "text-xs px-3.5 py-1.5"
              )}
            >
              Book Meeting
            </Link>

            <button
              className="text-white p-2 hover:text-[#F37021] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[70px] left-3 right-3 bottom-3 bg-[#0A0E14]/98 border border-white/15 rounded-2xl overflow-y-auto overscroll-contain shadow-2xl lg:hidden z-[60] font-sans p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F37021]">Menu</span>
                <span className="text-xs text-slate-400">Achtrex Automotive</span>
              </div>

              <div className="flex flex-col space-y-3">
                <Link 
                  href="/about-us" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-white hover:text-[#F37021] py-2 transition-colors border-b border-white/5"
                >
                  About Us
                </Link>

                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-white hover:text-[#F37021] py-2 transition-colors border-b border-white/5 flex items-center justify-between"
                >
                  <span>Our Services</span>
                  <span className="text-xs font-normal text-slate-400">4 Solutions</span>
                </Link>

                <Link 
                  href="/industries" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-white hover:text-[#F37021] py-2 transition-colors border-b border-white/5 flex items-center justify-between"
                >
                  <span>Industries</span>
                  <span className="text-xs font-normal text-slate-400">16 Sectors</span>
                </Link>

                <Link 
                  href="/partners" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-white hover:text-[#00A9CE] py-2 transition-colors border-b border-white/5"
                >
                  Become a Partner
                </Link>

                <Link 
                  href="/contact-us" 
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-white hover:text-[#F37021] py-2 transition-colors border-b border-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link 
                href="/contact-us" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gradient-to-r from-[#F37021] to-[#FB923C] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a meeting</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};