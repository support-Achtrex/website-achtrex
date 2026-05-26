'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const ProductsGrid = () => {
  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            Powered by the largest automotive network.<br />
            Built for every mobility need.
          </h2>
          <Link href="/products" className="inline-block relative group rounded-full overflow-hidden p-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#111112] text-white text-[14px] font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 transition-colors">
              See all products
            </div>
          </Link>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6">
          
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: APIs */}
            <a href="https://automotivedataset.com" target="_blank" rel="noopener noreferrer" className="bg-[#111112] rounded-[32px] p-8 relative overflow-hidden group cursor-pointer border border-white/10 h-[450px] hover:bg-[#1a1a1c] transition-colors block">
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-[#0055ff]/30 flex items-center justify-center text-[#0055ff] bg-transparent transition-transform group-hover:scale-110">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              
              <h3 className="text-[20px] text-gray-400 max-w-[320px] leading-[1.3] relative z-10">
                <span className="font-bold text-white">Automotive data infrastructure</span> powering the future of mobility
              </h3>

              {/* Mockup UI */}
              <div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] bg-[#0a0a0b] rounded-[24px] shadow-[0_15px_50px_rgba(0,0,0,0.5)] p-6 transition-transform duration-500 group-hover:scale-105 flex justify-center items-center border-[6px] border-transparent"
                style={{ background: 'linear-gradient(#0a0a0b, #0a0a0b) padding-box, conic-gradient(from 0deg, #2563eb, #8b5cf6, #ec4899, #38bdf8, #2563eb) border-box' }}
              >
                
                {/* Automotive Dataset Logo Scaled Up */}
                <div className="flex items-center gap-5 my-2">
                  
                  {/* Icon Cluster */}
                  <div className="relative w-[70px] h-[70px]">
                     {/* Car Center SVG */}
                     <div className="absolute inset-0 flex items-center justify-center z-10">
                        <svg viewBox="0 0 24 24" fill="#214b8c" className="w-[50px] h-[50px]">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                          <circle cx="7.5" cy="14.5" r="1.5" fill="white"/>
                          <circle cx="16.5" cy="14.5" r="1.5" fill="white"/>
                        </svg>
                     </div>

                     {/* Pixels / Data Blocks */}
                     <div className="absolute top-[5%] left-[10%] w-[12px] h-[12px] bg-[#6366f1] rounded-[3px]"></div>
                     <div className="absolute top-[10%] left-[30%] w-[16px] h-[16px] bg-[#818cf8] rounded-[4px]"></div>
                     <div className="absolute top-[22%] right-[15%] w-[8px] h-[8px] bg-[#ec4899] rounded-[2px]"></div>
                     
                     <div className="absolute top-[40%] left-[-5%] w-[18px] h-[18px] bg-[#9333ea] rounded-[4px]"></div>
                     <div className="absolute top-[45%] right-[-5%] w-[10px] h-[20px] bg-[#38bdf8] rounded-[3px]"></div>
                     
                     <div className="absolute bottom-[20%] left-[5%] w-[12px] h-[12px] bg-[#ec4899] rounded-[3px]"></div>
                     <div className="absolute bottom-[0%] left-[15%] w-[10px] h-[10px] bg-[#ec4899] rounded-[2px]"></div>
                     <div className="absolute bottom-[5%] left-[35%] w-[20px] h-[14px] bg-[#2563eb] rounded-[4px]"></div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col text-white font-bold leading-[1.05] tracking-tight">
                     <span className="text-[30px]">Automotive</span>
                     <span className="text-[30px] text-[#38bdf8]">Dataset</span>
                  </div>

                </div>
              </div>
            </a>

            {/* Card 2: AI Scoring */}
            <Link href="/products/lumi" className="bg-[#111112] rounded-[32px] p-8 relative overflow-hidden group cursor-pointer border border-white/10 h-[450px] hover:bg-[#1a1a1c] transition-colors block">
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-[#0055ff]/30 flex items-center justify-center text-[#0055ff] bg-transparent transition-transform group-hover:scale-110">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <h3 className="text-[20px] text-gray-400 max-w-[320px] leading-[1.3] relative z-10">
                <span className="font-bold text-white">AI-powered vehicle intelligence</span> and predictive analytics system
              </h3>

              {/* Mockup UI */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[85%] max-w-[280px] h-[160px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center border-[4px] border-transparent transition-transform duration-500 group-hover:scale-105" style={{ background: 'linear-gradient(#ffffff, #ffffff) padding-box, conic-gradient(from 180deg, #ec4899, #8b5cf6, #3b82f6, #ec4899) border-box' }}>
                
                {/* LUMI Logo Image */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[20px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/logos/lumi-logo.png" 
                    alt="LUMI AI"
                    className="w-full h-full object-contain scale-[1.5]"
                  />
                </div>

              </div>
              
              {/* Background floating badges */}
              <div className="absolute top-[40%] left-[10%] text-[10px] text-blue-300/40 font-semibold tracking-wider blur-[1px]">Conversational Engine</div>
              <div className="absolute top-[60%] right-[10%] text-[10px] text-purple-300/40 font-semibold tracking-wider blur-[1px]">Predictive Analysis</div>
              <div className="absolute bottom-[10%] left-[20%] text-[10px] text-pink-300/40 font-semibold tracking-wider blur-[1px]">Smart Assistant</div>
            </Link>

          </div>

          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 3: Enterprise Dataset */}
            <a href="https://automotivedataset.com" target="_blank" rel="noopener noreferrer" className="bg-[#111112] rounded-[32px] p-8 relative overflow-hidden group cursor-pointer border border-white/10 h-[400px] hover:bg-[#1a1a1c] transition-colors block">
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-[#0055ff]/30 flex items-center justify-center text-[#0055ff] bg-transparent transition-transform group-hover:scale-110">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <h3 className="text-[18px] text-gray-400 max-w-[220px] leading-[1.3] relative z-10">
                <span className="font-bold text-white">Enterprise automotive dataset</span> provider for seamless integration
              </h3>

              {/* Mockup UI - Enhanced Enterprise Dataset */}
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[85%] max-w-[280px] bg-[#111112] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/10 p-5 transition-transform duration-500 group-hover:-translate-y-2">
                 <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="text-[12px] font-bold text-white flex items-center gap-1.5">
                       <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                       </svg>
                       Data Feeds
                    </div>
                    <div className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">Live</div>
                 </div>
                 
                 <div className="space-y-3">
                    <div className="flex justify-between items-center group/item">
                       <div className="text-[11px] font-semibold text-gray-400 group-hover/item:text-blue-400 transition-colors flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> VIN Decoding
                       </div>
                       <div className="text-[10px] font-mono text-gray-400">250M+ Records</div>
                    </div>
                    <div className="flex justify-between items-center group/item">
                       <div className="text-[11px] font-semibold text-gray-400 group-hover/item:text-blue-400 transition-colors flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Market Values
                       </div>
                       <div className="text-[10px] font-mono text-gray-400">Real-time</div>
                    </div>
                    <div className="flex justify-between items-center group/item">
                       <div className="text-[11px] font-semibold text-gray-400 group-hover/item:text-blue-400 transition-colors flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div> Tech Specs & Recalls
                       </div>
                       <div className="text-[10px] font-mono text-gray-400">Updated Daily</div>
                    </div>
                 </div>
              </div>
            </a>

            {/* Card 4: Developer API */}
            <Link href="/products" className="bg-[#111112] rounded-[32px] p-8 relative overflow-hidden group cursor-pointer border border-white/10 h-[400px] hover:bg-[#1a1a1c] transition-colors block">
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-[#0055ff]/30 flex items-center justify-center text-[#0055ff] bg-transparent transition-transform group-hover:scale-110">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <h3 className="text-[18px] text-gray-400 max-w-[220px] leading-[1.3] relative z-10">
                <span className="font-bold text-white">Developer API ecosystem</span> built for modern mobility applications
              </h3>

              {/* Mockup UI - Enhanced API Ecosystem */}
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[85%] max-w-[280px] bg-[#111112] rounded-t-[24px] shadow-[0_-15px_40px_rgba(0,0,0,0.5)] border border-white/10 border-b-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                 
                 <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 font-bold text-[13px] text-white">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        API Gateway
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 </div>
                 
                 <div className="bg-[#1a1a1c] border border-white/5 rounded-xl p-4 mb-4">
                     <div className="text-[11px] font-semibold text-gray-500 mb-3 uppercase tracking-wider">Route Request To:</div>
                     
                     <div className="flex flex-col gap-2">
                        <div className="bg-[#111112] border border-white/10 rounded-lg p-2.5 flex items-center justify-between shadow-sm group/route cursor-pointer">
                           <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                              </div>
                              <span className="text-[11px] font-bold text-white">Automotive Dataset</span>
                           </div>
                           <span className="text-[9px] font-mono text-gray-400 bg-transparent/5 px-1.5 rounded">Data</span>
                        </div>

                        <div className="bg-[#111112] border border-white/10 rounded-lg p-2.5 flex items-center justify-between shadow-sm group/route cursor-pointer">
                           <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md bg-purple-500/20 flex items-center justify-center">
                                 <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#38bdf8] to-[#a855f7]"></div>
                              </div>
                              <span className="text-[11px] font-bold text-white">LUMI AI</span>
                           </div>
                           <span className="text-[9px] font-mono text-gray-400 bg-transparent/5 px-1.5 rounded">Intelligence</span>
                        </div>
                     </div>
                 </div>

                 <div className="bg-transparent text-white text-[13px] font-bold rounded-xl py-3 text-center shadow-lg cursor-pointer hover:bg-gray-200 transition-colors">
                    Generate API Keys
                 </div>
              </div>
            </Link>

            {/* Card 5: Custom Development */}
            <Link href="/contact-us" className="bg-[#111112] rounded-[32px] p-8 relative overflow-hidden group cursor-pointer border border-white/10 h-[400px] hover:bg-[#1a1a1c] transition-colors block">
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-[#0055ff]/30 flex items-center justify-center text-[#0055ff] bg-transparent transition-transform group-hover:scale-110">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <h3 className="text-[17px] text-gray-400 max-w-[250px] leading-[1.3] relative z-10">
                <span className="font-bold text-white">Custom development & API integrations</span> empowering your automotive business
              </h3>

              {/* Mockup UI */}
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[85%] max-w-[300px] bg-[#111112] rounded-t-[20px] shadow-[0_-15px_40px_rgba(0,0,0,0.15)] border border-[#333] border-b-0 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                 {/* Mac Window Header */}
                 <div className="bg-[#1a1b1e] px-4 py-3 flex items-center gap-1.5 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
                    <span className="ml-3 text-[10px] text-gray-500 font-mono tracking-wider">integration.ts</span>
                 </div>
                 
                 {/* Code Content */}
                 <div className="p-5 text-[11px] font-mono leading-[1.6]">
                    <div className="text-[#c678dd]">import <span className="text-[#abb2bf]">{"{"} AchtrexClient {"}"}</span> from <span className="text-[#98c379]">'@achtrex/sdk'</span>;</div>
                    <div className="h-2"></div>
                    <div className="text-[#c678dd]">const <span className="text-[#e5c07b]">client</span> = new <span className="text-[#61afef]">AchtrexClient</span>({"{"}</div>
                    <div className="pl-4 text-[#abb2bf]">apiKey: process.env.<span className="text-[#d19a66]">ACHTREX_KEY</span>,</div>
                    <div className="pl-4 text-[#abb2bf]">environment: <span className="text-[#98c379]">'production'</span></div>
                    <div className="text-[#abb2bf]">{"}"});</div>
                    <div className="h-3"></div>
                    <div className="text-[#5c6370] italic">// Cutting-edge custom development</div>
                    <div className="text-[#c678dd]">await <span className="text-[#e5c07b]">client</span>.data.<span className="text-[#61afef]">syncInventory</span>();</div>
                    <div className="text-[#c678dd]">await <span className="text-[#e5c07b]">client</span>.lumi.<span className="text-[#61afef]">analyze</span>();</div>
                 </div>
              </div>
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);
