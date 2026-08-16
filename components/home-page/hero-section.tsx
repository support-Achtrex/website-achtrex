'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setVideoLoaded(true);
    }
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] z-20 flex flex-col font-sans">
      <div className="relative w-full h-full flex-1 bg-[#001a22] overflow-hidden flex flex-col">
        {/* Background Image / Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Instant Poster Image to prevent any black/blank delay while video streams */}
          <Image
            src="/aaia-poster.jpg"
            alt="Automotive Intelligence Background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* Optimized Background Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/aaia-poster.jpg"
            onCanPlay={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-90'}`}
          >
            <source src="/aaia-video.mp4" type="video/mp4" />
          </video>

          {/* Dark gradient overlay to ensure text readability while keeping the video clear */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Main Content Layout */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto px-6 pt-24 md:pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center max-w-5xl relative"
          >
            {/* Subtle radial dark backdrop behind the text to make it pop without blurring the video */}
            <div className="absolute inset-0 bg-black/30 blur-[100px] -z-10 rounded-full pointer-events-none w-[120%] h-[120%] left-[-10%] top-[-10%]"></div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.2] mb-16 [text-shadow:0_4px_12px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.4)]">
              We build the data, the intelligence, and the platforms behind automotive businesses.
            </h1>

            {/* Keywords */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[13px] font-bold tracking-widest text-slate-200 uppercase mb-12 [text-shadow:0_2px_8px_rgba(0,0,0,0.8),0_0_10px_rgba(255,255,255,0.3)]">
              <span>CUSTOM SOFTWARE SOLUTIONS</span>
              <span className="text-slate-400">•</span>
              <span>AUTOMOTIVE DATA SOLUTIONS</span>
              <span className="text-slate-400">•</span>
              <span>AI-POWERED SOLUTIONS</span>
              <span className="text-slate-400">•</span>
              <span>SALES & INVENTORY MANAGEMENT SOLUTIONS</span>
            </div>
            
            {/* CTA */}
            <Link
              href="/portal"
              className="inline-block bg-white text-black px-12 py-4 font-bold tracking-[0.15em] text-xs md:text-sm uppercase transition-all hover:bg-slate-200 hover:scale-105 rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              Access Platform
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};