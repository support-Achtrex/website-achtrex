'use client';

import Link from 'next/link';
import Image from 'next/image';
import { STUDIO_CONFIG } from '@/data/studio-data';

export function StudioFooter() {
  return (
    <footer className="relative bg-[#000000] text-white pt-24 sm:pt-36 pb-12 px-6 sm:px-12 lg:px-20 border-t border-white/10 selection:bg-white selection:text-black">
      <div className="w-full max-w-[1720px] mx-auto min-h-[55vh] flex flex-col justify-between">
        {/* Main CTA Area */}
        <div className="pt-6 sm:pt-12">
          <span className="font-clash text-xs sm:text-sm text-[#889fa8] block mb-4 tracking-wide">
            Contacts
          </span>
          <Link
            href="/contact"
            className="group block"
            aria-label="Let's talk about your idea"
          >
            <h2 className="font-clash font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white group-hover:text-white/80 transition-colors leading-[1.05] max-w-5xl">
              Let&apos;s talk about your idea.
            </h2>
            <p className="font-clash text-lg sm:text-2xl text-white/70 font-light max-w-3xl mt-4 leading-relaxed">
              Have a product, experience or idea you want to bring to life? Let&apos;s build something meaningful together.
            </p>
            <div className="pt-6 sm:pt-10 flex items-center gap-6">
              <svg
                viewBox="0 0 64 24"
                className="w-16 sm:w-20 h-8 sm:h-10 fill-none stroke-white/80 group-hover:stroke-white transition-all group-hover:translate-x-3 duration-300"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="0" y1="12" x2="60" y2="12" />
                <polyline points="48,2 60,12 48,22" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Studio Navigation Row */}
        <div className="pt-16 sm:pt-20 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-12">
            <nav className="flex flex-wrap items-center gap-6 sm:gap-10">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-clash text-sm sm:text-base text-[#889fa8] hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href={STUDIO_CONFIG.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-clash text-xs sm:text-sm tracking-wide px-5 py-2.5 bg-white text-black rounded-full hover:bg-white/90 font-medium transition-all"
            >
              <span>Book a Meeting</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Bottom Corporate Metadata & Legal Notice */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 text-[11px] leading-relaxed text-[#708894]">
            <div className="flex flex-col space-y-2 max-w-xl">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Achtrex Logo"
                  width={20}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
                <span className="font-clash font-semibold text-sm tracking-wide text-white/90">
                  {STUDIO_CONFIG.name}
                </span>
                <span className="text-[11px] text-[#889fa8]">
                  / {STUDIO_CONFIG.tagline}
                </span>
              </div>
              <p>
                {STUDIO_CONFIG.address}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-[#889fa8]">
                <a href={STUDIO_CONFIG.phoneHref} className="hover:text-white transition-colors">
                  {STUDIO_CONFIG.phone}
                </a>
                <span>•</span>
                <a href={STUDIO_CONFIG.emailHref} className="hover:text-white transition-colors">
                  {STUDIO_CONFIG.email}
                </a>
              </div>
              <p className="text-[10px] pt-1">
                © 2026 Achtrex. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-[#708894]">
              <Link href="/legal#company" className="hover:text-white underline underline-offset-2 transition-colors">
                Company information
              </Link>
              <Link href="/legal#notice" className="hover:text-white underline underline-offset-2 transition-colors">
                Legal notice
              </Link>
              <Link href="/privacy" className="hover:text-white underline underline-offset-2 transition-colors">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
