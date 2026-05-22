'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/buttons';
import Image from 'next/image';

export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="why-achtrex" className="py-24 px-6 relative overflow-hidden bg-white">
            <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#111112] tracking-tight leading-[1.1]">
                        A network that makes your products better
                    </h2>
                    
                    <p className="text-[20px] text-[#5C7695] leading-[1.4] max-w-3xl mx-auto font-medium mb-12">
                        When you build on the world's largest automotive data network, your products get smarter with every connection—helping you increase conversion, expand access, and grow faster.
                    </p>

                    <div className="w-full relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden mt-8 mb-12 border border-[#e5e5e5] shadow-sm">
                        <Image
                            src="/server_infrastructure.png" 
                            alt="Scalable Architecture Server Infrastructure"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};