'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full min-h-[100vh] z-20 flex flex-col font-sans">
      <div className="relative w-full h-full flex-1 bg-[#001a22] overflow-hidden flex flex-col">
        {/* Background Image / Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Instant Poster Image to prevent any black/blank delay while video streams */}
          <Image
            src="/hero-bg-poster.jpg"
            alt="Automotive Intelligence Background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Compressed Streaming Background Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-bg-poster.jpg"
            onCanPlay={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-90'}`}
          >
            <source src="/homepage-hero-bg.mp4" type="video/mp4" />
            <source src="/homepage-hero-bg.webm" type="video/webm" />
          </video>

          {/* Dark gradient overlay to ensure text readability while keeping the video clear */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Main Content Layout */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto px-6 pt-36 sm:pt-40 md:pt-48 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center max-w-5xl relative"
          >
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white !text-white leading-[1.2] mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Automotive businesses need more than tools. They need software, intelligence, and direction. We build all three.
            </h1>

            {/* Keywords */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[11px] md:text-[13px] font-bold tracking-widest text-neutral-100 uppercase">
              <span>AUTOMOTIVE SOFTWARE BUILDS</span>
              <span className="text-cyan-400">•</span>
              <span>COGNITIVE AI SOLUTIONS</span>
              <span className="text-cyan-400">•</span>
              <span>AUTOMOTIVE CONSULTATION</span>
            </div>

            {/* Signature Navbar-style Pill CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/contact-us"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-3.5 !px-8 text-xs sm:text-sm font-bold tracking-wide">
                  <span>Book a Consultation</span>
                  <span className="text-[#00A9CE]">→</span>
                </span>
              </Link>

              <Link 
                href="/services"
                className="btn-navbar-cta"
              >
                <span className="btn-navbar-cta-inner !py-3.5 !px-7 text-xs sm:text-sm font-bold tracking-wide">
                  <span>Explore Solutions</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};