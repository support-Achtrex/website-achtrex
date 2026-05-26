import React from 'react';
import Link from 'next/link';

export const ServicesGrid = () => {
    return (
        <section className="py-16 bg-transparent relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.05] mb-6">
                            Want access to millions of vehicles?<br />
                            We've got the API keys.
                        </h2>
                        <p className="text-[16px] text-gray-400 mb-8 font-medium leading-[1.4]">
                            You build the experience. We'll handle the data. Connect seamlessly to global automotive datasets with our enterprise-grade API infrastructure.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 mb-12">
                            <Link href="/contact-us" className="text-white font-semibold hover:text-[#c2fce3] flex items-center gap-1 transition-all">
                                Get the API keys
                                <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="bg-[#111112] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden font-mono text-[13px] md:text-[15px] leading-relaxed relative">
                            {/* Window controls */}
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>

                            <div className="text-gray-400 mb-4">##### /vehicles/decode</div>
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
                    </div>

                </div>
            </div>
        </section>
    );
};