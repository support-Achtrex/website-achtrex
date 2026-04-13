'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronRight, ChevronLeft, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/section-title';

import { MultiDeviceMockup } from '@/components/multi-device-mockup';

const products = [
    {
        title: 'LUMI',
        subtitle: 'Communications Ecosystem',
        description: 'LUMI is a unified communications platform featuring instant messaging, voice calls, video conferencing, and file sharing. Engineered to integrate seamlessly into any business workflow with AI-powered logic.',
        image: '/projects/lumi_ui_new.jpg',
        link: '/products',
        color: '#818cf8',
        tags: ['Unified Comms', 'Workflow SDK', 'Cross-Platform'],
        hasMobile: true,
        isRawImage: true
    },
    {
        title: 'AutomotiveDataset.com',
        subtitle: 'Deep Vehicle Intelligence',
        description: 'Unlock the power of vehicle data with a comprehensive API suite providing VIN-to-Build-Sheet decoding, real-time specs, service history, and official recall databases.',
        image: '/projects/automotive_ui_new.jpg',
        link: 'https://automotivedataset.com',
        color: '#3b82f6',
        tags: ['VIN Decoding', 'Recall API', 'Service History'],
        hasMobile: true,
        isRawImage: true
    }
];

export const ProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const AppStoreBadge = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40" viewBox="0 0 135 40">
            <rect width="135" height="40" rx="6" fill="black"/>
            <path d="M19.1 16.2c0-2.8 2.2-4.1 2.3-4.2-1.3-1.9-3.3-2.1-4-2.2-1.7-.2-3.4 1-4.2 1-.9 0-2.2-1-3.6-.9-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.5 1.4 11.3 1 1.4 2.1 2.9 3.6 2.9 1.4 0 2-.9 3.7-.9s2.3.9 3.7.9c1.5 0 2.5-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.2s-2.6-1-2.6-4.6zm-3.3-9.5c.8-1 1.3-2.3 1.1-3.7-1.2.1-2.6.8-3.4 1.8-.8.9-1.4 2.3-1.2 3.6 1.3.1 2.6-.7 3.5-1.7z" fill="white"/>
            <text x="42" y="18" fill="white" font-family="Arial" font-size="8">Download on the</text>
            <text x="42" y="32" fill="white" font-family="Arial" font-weight="bold" font-size="14">App Store</text>
        </svg>
    );

    const PlayStoreBadge = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40" viewBox="0 0 135 40">
            <rect width="135" height="40" rx="6" fill="black"/>
            <path d="M8.2 5.1c-.2.2-.4.6-.4 1.1v27.6c0 .5.2.9.4 1.1l.1.1 15.4-15.4v-.2L8.3 5l-.1.1z" fill="#3bccff"/>
            <path d="M23.7 21.1l-5.4-5.4-5.4 5.4.1.1 5.3 5.3 5.4-5.4z" fill="#ff3030"/>
            <path d="M30.4 17.5l-6.7-3.8-5.4 5.4 5.4 5.4 6.7-3.8c1.9-1.1 1.9-2.8 0-3.2z" fill="#ffc300"/>
            <path d="M23.7 13.7L18.3 19.1l-.1-.1-5.3-5.3 5.4-5.4z" fill="#48ff48"/>
            <text x="42" y="18" fill="white" font-family="Arial" font-size="8">GET IT ON</text>
            <text x="42" y="32" fill="white" font-family="Arial" font-weight="bold" font-size="14">Google Play</text>
        </svg>
    );

    return (
        <section id="products" className="py-32 bg-[#030014] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 text-center lg:text-left">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Market-Ready Solutions</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Internal Products</h2>
                </div>

                <div className="relative">
                    <div className="flex flex-col gap-20">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12"
                            >
                                {/* Left Content */}
                                <div className="order-2 lg:order-1 flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {products[currentIndex].tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full text-[10px] font-mono border border-white/10 bg-white/5 text-gray-400 uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ color: products[currentIndex].color }}>
                                        {products[currentIndex].title}
                                    </h3>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                        {products[currentIndex].description}
                                    </p>

                                    <div className="flex flex-col gap-8">
                                        <Link 
                                            href={products[currentIndex].link}
                                            target="_blank"
                                            className="inline-flex items-center justify-center gap-2 bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-10 py-4 rounded-sm font-bold text-lg transition-all w-full sm:w-fit"
                                        >
                                            Explore Product
                                        </Link>

                                        {products[currentIndex].hasMobile && (
                                            <div className="flex gap-4">
                                                <div className="cursor-pointer transition-transform hover:scale-105">
                                                    <PlayStoreBadge />
                                                </div>
                                                <div className="cursor-pointer transition-transform hover:scale-105">
                                                    <AppStoreBadge />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    {products[currentIndex].isRawImage ? (
                                        <motion.div 
                                            whileHover={{ scale: 1.02 }}
                                            className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-[4/3] w-full"
                                        >
                                            <Image 
                                                src={products[currentIndex].image} 
                                                alt={products[currentIndex].title}
                                                fill
                                                className="object-contain p-4"
                                            />
                                        </motion.div>
                                    ) : (
                                        <MultiDeviceMockup 
                                            desktopImage={products[currentIndex].image}
                                            accentColor={products[currentIndex].color}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center lg:justify-start gap-4 mt-12">
                        <button onClick={prevSlide} className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextSlide} className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};