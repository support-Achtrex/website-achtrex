'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Chat } from '@nobertdev/react-3d-icons/fc';
import { TypewriterWithPencil } from '../ui/typewriter-with-pencil';

export const Hero = () => {
  const router = useRouter();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { amount: 0.3 });
  const [isH1Done, setIsH1Done] = useState(false);

  useEffect(() => {
    if (!isHeroInView) {
      setIsH1Done(false);
    }
  }, [isHeroInView]);

  return (
    <section ref={heroRef} className="relative w-full min-h-[100vh] z-20 flex flex-col font-sans">
      <div className="relative w-full h-full flex-1 bg-[#001a22] overflow-hidden flex flex-col">
          {/* Background Image Layer */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Futuristic Connected Car"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a22] via-transparent to-transparent"></div>
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1200px] mx-auto px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start max-w-3xl text-left"
        >


          {/* Refined Title */}
          <div className="min-h-[140px] md:min-h-[180px] mb-8 w-full">
            <TypewriterWithPencil 
              text="We build the data,
the intelligence, and the platforms behind automotive businesses."
              className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] drop-shadow-2xl inline-block"
              asBlock={true}
              speed={40}
              pencilSize={36}
              active={isHeroInView}
              onComplete={() => setIsH1Done(true)}
            />
          </div>
          
          {/* Description */}
          <div className="min-h-[80px] mb-12 w-full">
            <TypewriterWithPencil 
              text="Achtrex delivers custom software, automotive data APIs, AI-powered intelligence, and sales & inventory management solutions for the modern automotive industry."
              className="text-base md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl drop-shadow-lg inline-block"
              speed={25}
              pencilSize={20}
              active={isH1Done}
            />
          </div>
          
          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Primary CTA */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-services-dropdown'));
              }}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white text-base md:text-lg font-semibold tracking-wide px-10 py-4 transition-all hover:scale-105 rounded-full overflow-hidden bg-logo-gradient border-0 shadow-[0_0_20px_rgba(0,169,206,0.3)] hover:shadow-[0_0_30px_rgba(0,169,206,0.6)]"
            >
              <span className="relative z-10">Explore what we build</span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
              {/* Gloss effect */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => router.push('/book-a-demo')}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white text-base md:text-lg font-semibold tracking-wide px-10 py-4 transition-all hover:bg-white/20 hover:scale-105 rounded-full border border-white/40 shadow-lg hover:shadow-white/20 backdrop-blur-md"
            >
              <span>Talk to us</span>
              <Chat className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};