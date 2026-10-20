'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDIO_CONFIG } from '@/data/studio-data';

export function StudioHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to data-header-theme on documentElement for adaptive headers
  useEffect(() => {
    const updateTheme = () => {
      const current = document.documentElement.getAttribute('data-header-theme');
      setTheme(current === 'light' ? 'light' : 'dark');
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-header-theme'] });
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when overlay is open
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

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    // Reset header theme on route change
    document.documentElement.removeAttribute('data-header-theme');
    setTheme('dark');
  }, [pathname]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const isLight = theme === 'light';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isLight
              ? 'bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-black/10'
              : 'bg-black/80 backdrop-blur-md py-4 sm:py-5 border-b border-white/10'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
          {/* LEFT ZONE: Official Achtrex Emblem + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Achtrex Home"
          >
            <Image
              src="/logo.png"
              alt="Achtrex Logo"
              width={28}
              height={24}
              className={`h-5 sm:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                isLight ? 'brightness-0' : ''
              }`}
              priority
            />
            <span
              className={`font-clash text-base sm:text-lg font-medium tracking-wide transition-colors duration-300 ${
                isLight ? 'text-black' : 'text-white'
              }`}
            >
              Achtrex
            </span>
          </Link>

          {/* RIGHT ZONE: Menu = button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2.5 group cursor-pointer focus:outline-none transition-colors duration-300 ${
              isLight ? 'text-black' : 'text-white'
            }`}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            <span className="font-clash text-xs sm:text-sm tracking-wider uppercase opacity-90 group-hover:opacity-100">
              Menu
            </span>
            <div className="flex flex-col justify-between w-4 h-2">
              <span
                className={`w-full h-[1.5px] transition-all group-hover:w-3.5 ${
                  isLight ? 'bg-black' : 'bg-white'
                }`}
              />
              <span
                className={`w-full h-[1.5px] transition-all group-hover:w-4 ${
                  isLight ? 'bg-black' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* =========================================================================
          FULL-SCREEN CINEMATIC MENU OVERLAY
      ========================================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#001a24] text-white overflow-y-auto overscroll-contain h-[100dvh] max-h-[100dvh] selection:bg-white selection:text-[#001a24]"
          >
            <div className="min-h-full h-full w-full max-w-[1720px] mx-auto px-6 py-6 sm:px-12 sm:py-8 lg:px-20 lg:py-8 flex flex-col justify-between">
              {/* Top Bar inside Overlay */}
              <div className="w-full flex items-center justify-between shrink-0">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group focus:outline-none">
                  <Image
                    src="/logo.png"
                    alt="Achtrex Logo"
                    width={28}
                    height={24}
                    className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                  <span className="font-clash text-base sm:text-lg font-medium tracking-wide">
                    Achtrex
                  </span>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[#889fa8] hover:text-white transition-colors cursor-pointer p-2 -mr-2 flex items-center gap-2 group focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <span className="font-clash text-xs tracking-wider uppercase text-white/70 group-hover:text-white hidden sm:inline">
                    Close
                  </span>
                  <svg viewBox="0 0 40 40" className="w-7 h-7 sm:w-8 sm:h-8 stroke-current" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="10" y1="10" x2="30" y2="30" />
                    <line x1="30" y1="10" x2="10" y2="30" />
                  </svg>
                </button>
              </div>

              {/* Menu Links Stacked with responsive height-scaling typography */}
              <div className="w-full my-auto py-4 sm:py-6 flex-1 flex flex-col justify-center">
                <nav className="flex flex-col space-y-1 sm:space-y-1.5">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Media', href: '/media' },
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="font-clash font-normal text-[clamp(2rem,5vh,4.25rem)] tracking-tight text-[#708894] hover:text-white transition-colors duration-200 inline-block leading-[1.12]"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom Section: Studio Coordinates & Direct Links (Left) + Studio Meta & Legal (Right) */}
              <div className="w-full pt-4 sm:pt-6 border-t border-white/10 shrink-0 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 sm:gap-6 text-xs text-[#889fa8]">
                {/* Bottom-Left */}
                <div className="flex flex-col space-y-1.5 sm:space-y-2">
                  <div className="text-xs sm:text-sm font-medium tracking-wide text-white">
                    {STUDIO_CONFIG.address}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#889fa8]">
                    <a href={STUDIO_CONFIG.phoneHref} className="hover:text-white transition-colors">
                      {STUDIO_CONFIG.phone}
                    </a>
                    <span className="text-white/30">•</span>
                    <a href={STUDIO_CONFIG.emailHref} className="hover:text-white transition-colors">
                      {STUDIO_CONFIG.email}
                    </a>
                    <span className="text-white/30">•</span>
                    <Link
                      href="/book-a-meeting"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-[#00A9CE] underline underline-offset-2 transition-colors font-medium"
                    >
                      Book a Meeting &rarr;
                    </Link>
                  </div>
                </div>

                {/* Bottom-Right */}
                <div className="flex flex-col md:items-end space-y-1.5 sm:space-y-2 text-[11px] text-[#708894]">
                  <div className="flex items-center gap-2">
                    <span className="font-clash font-semibold text-xs sm:text-sm text-white/90">
                      {STUDIO_CONFIG.name}
                    </span>
                    <span className="text-[10px] text-white/50">
                      / {STUDIO_CONFIG.tagline}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px]">
                    <Link href="/terms" onClick={() => setIsOpen(false)} className="hover:text-white underline underline-offset-2 transition-colors">
                      Terms of Service
                    </Link>
                    <Link href="/privacy" onClick={() => setIsOpen(false)} className="hover:text-white underline underline-offset-2 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/legal" onClick={() => setIsOpen(false)} className="hover:text-white underline underline-offset-2 transition-colors">
                      Legal Hub
                    </Link>
                    <span className="text-white/40">© 2026 Achtrex</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
