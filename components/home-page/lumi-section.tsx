import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const LumiSection = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-[56px] font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        The AI infrastructure behind smarter automotive products
                    </h2>
                    <Link href="/products/lumi" className="text-[20px] font-medium text-[#0055FF] hover:text-[#0044CC] transition-colors flex items-center gap-1">
                        Explore intelligent mobility
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Mockup area mirroring Plaid's notification stream / UI displays */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <div className="bg-transparent border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4 transform transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                <span className="text-xl font-bold text-blue-600">A</span>
                            </div>
                            <div>
                                <div className="flex justify-between items-center w-full mb-1">
                                    <h4 className="font-semibold text-slate-900 text-lg">Achtrex Fleet</h4>
                                    <span className="text-slate-500 text-sm font-medium">Just now</span>
                                </div>
                                <p className="text-slate-900 font-medium">Predictive maintenance alert: Engine oil pressure anomaly detected on Unit 42.</p>
                            </div>
                        </div>


                        
                        <div className="bg-transparent border border-slate-200 rounded-2xl p-6 shadow-sm flex items-start gap-4 transform transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                                <span className="text-xl font-bold text-purple-600">L</span>
                            </div>
                            <div>
                                <div className="flex justify-between items-center w-full mb-1">
                                    <h4 className="font-semibold text-slate-900 text-lg">LUMI Platform</h4>
                                    <span className="text-slate-500 text-sm font-medium">1hr ago</span>
                                </div>
                                <p className="text-slate-900 font-medium">Automated chat agent successfully resolved 45 support tickets.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-transparent border border-slate-200 shadow-lg">
                            <Image 
                                src="/projects/lumi_hero_new.png" 
                                alt="LUMI AI Interface" 
                                fill
                                className="object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
