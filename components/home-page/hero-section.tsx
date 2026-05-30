'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#070b14]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/ai_car_hero_v4.png" 
            alt="Achtrex Autonomous Vehicle Architecture" 
            fill 
            className="object-cover object-center" 
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/90 via-[#070b14]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-32 sm:pb-48 flex flex-col items-start text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[30px] sm:text-[36px] lg:text-[44px] font-bold leading-[1.1] tracking-tight mb-6 text-white max-w-[1000px]"
        >
          Engineering the Intelligence Layer <br className="hidden lg:block" />
          Behind Modern Automotive Platforms
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[16px] sm:text-[17px] text-gray-400 font-medium leading-[1.7] max-w-[650px] mb-10"
        >
          Achtrex builds scalable automotive intelligence infrastructure <br className="hidden md:block" />
          powering vehicle data systems, enterprise APIs, AI-driven automation, <br className="hidden md:block" />
          and the future of connected mobility technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => router.push('/book-a-demo')}
            className="relative group overflow-hidden rounded-lg p-[2px] transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(59,130,246,0.15)] w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full flex items-center justify-center bg-[#070b14] hover:bg-[#0c1222] text-white font-bold text-[16px] px-8 py-3.5 rounded-[6px] transition-colors duration-500">
              Talk with our team
            </div>
          </button>
          <button
            onClick={() => router.push('/products')}
            className="relative group rounded-lg overflow-hidden p-[1px] w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 rounded-lg group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full flex items-center justify-center bg-[#070b14]/90 backdrop-blur-sm text-white font-bold text-[16px] px-8 py-3.5 rounded-lg hover:bg-[#111112] transition-colors">
              Start building
            </div>
          </button>
        </motion.div>
      </div>

      {/* Bottom Logos Banner */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-20 hidden md:block">
          <div className="bg-transparent/5 backdrop-blur-md border border-white/10 rounded-2xl flex justify-between items-center px-10 py-3.5">
              
              <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-black text-base tracking-tighter">Automotive</span>
                  <span className="text-[#38bdf8] font-bold text-base">Dataset</span>
              </div>

              <div className="w-px h-5 bg-transparent/10"></div>

              <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-bold text-base tracking-widest">LUMI</span>
                  <span className="text-[#a855f7] font-medium text-base">AI</span>
              </div>

              <div className="w-px h-5 bg-transparent/10"></div>

              <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-bold text-base tracking-tight">Achtrex</span>
                  <span className="text-[#34d399] font-light text-base ml-1">Core</span>
              </div>

              <div className="w-px h-5 bg-transparent/10"></div>

              <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity cursor-default whitespace-nowrap">
                  <span className="text-white font-bold text-base tracking-tight">Enterprise</span>
                  <span className="text-gray-400 font-light text-base ml-1">Gateway</span>
              </div>

          </div>
      </div>
    </section>
  );
};