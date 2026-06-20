'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';

export const ServicesGrid = () => {
    return (
        <section className="py-16 bg-transparent relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    <div className="w-full lg:w-1/2">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
                            Start building today.<br />
                            We've got the API keys.
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-[16px] text-slate-500 mb-8 font-medium leading-[1.4]">
                            You build the experience. We'll handle the data. Connect seamlessly to our live automotive datasets with our enterprise-grade API infrastructure. Available today for testing and integration.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-6 mb-12">
                            <Link href="/contact-us" className="text-[#00a9ce] font-semibold hover:text-[#008db0] flex items-center gap-1 transition-all">
                                Request Trial API Key
                                <CaretRight weight="bold" className="w-4 h-4 mt-0.5" />
                            </Link>
                            <Link href="/contact-us" className="text-[#76bc1d] font-semibold hover:text-[#65a317] flex items-center gap-1 transition-all">
                                See Sample Responses
                                <CaretRight weight="bold" className="w-4 h-4 mt-0.5" />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2">
                        <div className="bg-[#081622] border border-[#00a9ce]/20 rounded-none p-6 md:p-8 shadow-xl overflow-hidden font-mono text-[13px] md:text-[15px] leading-relaxed relative">
                            {/* Window controls */}
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>

                            <div className="text-slate-500 mb-4">##### /vehicles/decode</div>
                            <pre className="overflow-x-auto">
                                <code className="text-[#e5e5e5]">
                                    <span className="text-[#ff7b72]">request</span> = <span className="text-[#79c0ff]">DecodeRequest</span>(vin=vin_number)<br/>
                                    <span className="text-[#ff7b72]">response</span> = client.vehicle_decode(request)<br/>
                                    <br/>
                                    <span className="text-[#ff7b72]">make</span> = response[<span className="text-[#a5d6ff]">'vehicle'</span>][<span className="text-[#a5d6ff]">'make'</span>]<br/>
                                    <span className="text-[#ff7b72]">model</span> = response[<span className="text-[#a5d6ff]">'vehicle'</span>][<span className="text-[#a5d6ff]">'model'</span>]<br/>
                                    <span className="text-[#ff7b72]">year</span> = response[<span className="text-[#a5d6ff]">'vehicle'</span>][<span className="text-[#a5d6ff]">'year'</span>]<br/>
                                    <span className="text-[#ff7b72]">specs</span> = response[<span className="text-[#a5d6ff]">'specifications'</span>][<span className="text-[#a5d6ff]">'engine'</span>]<br/>
                                </code>
                            </pre>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};