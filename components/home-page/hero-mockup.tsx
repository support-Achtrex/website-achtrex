'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroMockupProps {
  desktopImage: string;
  tabletImage?: string;
  mobileImage?: string;
  foregroundImage?: string;
}

export const HeroMockup: React.FC<HeroMockupProps> = ({
  desktopImage,
  tabletImage,
  mobileImage,
  foregroundImage
}) => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center py-12 overflow-visible">
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center h-full perspective-[1500px]">
        
        {/* 1. Desktop Mockup (Back Layer, Angled slightly right) */}
        <motion.div
          initial={{ opacity: 0, rotateY: -10, x: -20 }}
          animate={{ opacity: 1, rotateY: 10, x: -40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-[95%] md:w-[85%] -ml-[5%]"
        >
          <div className="rounded-[1rem] p-3 md:p-4 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[1px] border-slate-700 relative overflow-hidden">
            <div className="relative aspect-[16/10] bg-[#1e293b] overflow-hidden rounded-[0.5rem]">
              <Image
                src={desktopImage}
                alt="Platform Preview"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* 2. Tablet Mockup (Middle Layer - Vertical on the right) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 0 }}
          animate={{ opacity: 1, x: 20, rotateY: -15 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute z-20 right-[2%] md:right-[5%] bottom-[15%] w-[30%] md:w-[25%]"
        >
          <div className="rounded-[2rem] p-3 border-[6px] border-black bg-black shadow-2xl overflow-hidden">
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-[#1e293b]">
              <Image
                src={tabletImage || desktopImage}
                alt="Tablet Preview"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* 3. Mobile Mockup (Front Layer) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 30 }}
          animate={{ opacity: 1, x: 40, y: 40 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="absolute z-30 right-[-5%] md:right-[-2%] bottom-[5%] w-[18%] md:w-[12%]"
        >
          <div className="rounded-[2.5rem] p-2 border-[6px] border-black bg-black shadow-2xl overflow-hidden">
            <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-[#1e293b]">
              <Image
                src={mobileImage || tabletImage || desktopImage}
                alt="Mobile Preview"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* 4. Foreground Object (e.g. Car) */}
        {foregroundImage && (
          <motion.div
            initial={{ opacity: 0, x: -100, y: 50 }}
            animate={{ opacity: 1, x: -60, y: 60 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute z-40 left-[0%] md:left-[5%] bottom-[-5%] w-[60%] md:w-[50%]"
          >
            <div className="relative w-full aspect-[16/9] drop-shadow-2xl">
              <Image
                src={foregroundImage}
                alt="Foreground Element"
                fill
                className="object-contain object-bottom"
                unoptimized
              />
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
