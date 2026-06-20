"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { CaretLeft, CaretRight, PencilSimple } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const offerings = [
    {
        id: 'software',
        title: 'Custom Software Development',
        tabTitle: 'CUSTOM SOFTWARE',
        iconImage: '/images/software_icon.png',
        subtitle: 'Enterprise-grade software that gets results',
        description: 'Renowned to be the best technology partner for automotive businesses, our team of engineers and developers are privileged to work with some of the best brands. From startup companies to award-winning clients, our custom software company helps businesses with professional responsive platforms that are designed with usability and performance in mind, guaranteed to affect the bottom line. We build Websites, Mobile apps, Marketplaces, Dealer platforms, Auto parts stores, and Enterprise systems.',
        buttonText: 'More on Custom Software',
        image: '/images/slide1_foreground.png',
        color: '#0ea5e9' // sky-500
    },
    {
        id: 'data',
        title: 'Data & APIs',
        tabTitle: 'DATA & APIS',
        iconImage: '/images/data_icon.png',
        subtitle: 'Automotive intelligence for the connected era',
        description: 'Power your applications with the most robust automotive datasets available. We provide highly accurate, lightning-fast APIs for VIN decoding, comprehensive vehicle specifications, real-time market values, and detailed vehicle history. Our data infrastructure is built for scale, allowing you to seamlessly integrate automotive intelligence into your existing workflows and products.',
        buttonText: 'Explore Data APIs',
        image: '/images/slide2_foreground.png',
        color: '#f97316' // orange-500
    },
    {
        id: 'ai',
        title: 'AI Solutions',
        tabTitle: 'AI SOLUTIONS',
        iconImage: '/images/ai_icon.png',
        subtitle: 'Next-generation AI for automotive teams',
        description: 'Leverage the power of artificial intelligence to automate and optimize your automotive business. We implement state-of-the-art AI solutions including LUMI AI, intelligent customer support agents, internal knowledge assistants, and complex workflow automation. Our AI systems are trained specifically on automotive domains to deliver unprecedented accuracy and efficiency.',
        buttonText: 'Discover AI Solutions',
        image: '/images/slide3_foreground.png',
        color: '#8b5cf6' // violet-500
    }
];

const TypewriterWithPencil = ({ text, className, speed = 40, delay = 0, onComplete, pencilSize = 32, asBlock = false, active = false }: any) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (active) {
            setDisplayedText('');
            setIsTyping(true);
            setHasStarted(false);
            
            const delayTimeout = setTimeout(() => {
                setHasStarted(true);
                let i = 0;
                const interval = setInterval(() => {
                    setDisplayedText(text.slice(0, i + 1));
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                        setIsTyping(false);
                        if (onComplete) onComplete();
                    }
                }, speed);

                return () => clearInterval(interval);
            }, delay);

            return () => clearTimeout(delayTimeout);
        } else {
            setDisplayedText('');
            setIsTyping(false);
            setHasStarted(false);
        }
    }, [active, text, speed, delay]);

    if (asBlock) {
        const lines = displayedText.split('\n');
        return (
            <span className={className}>
                {lines.map((line, idx) => (
                    <span key={idx} className="block whitespace-pre-wrap">
                        {line}
                        {idx === lines.length - 1 && isTyping && hasStarted && (
                            <span className="inline-block text-[#00a9ce] ml-2 align-middle -mt-2">
                                <PencilSimple size={pencilSize} weight="duotone" className="animate-pulse drop-shadow-md" style={{ transform: 'scaleX(-1) rotate(45deg)' }} />
                            </span>
                        )}
                    </span>
                ))}
            </span>
        );
    }

    return (
        <span className={className}>
            {displayedText}
            {isTyping && hasStarted && (
                <span className="inline-block text-[#00a9ce] ml-2 align-middle -mt-2">
                    <PencilSimple size={pencilSize} weight="duotone" className="animate-pulse drop-shadow-md" style={{ transform: 'scaleX(-1) rotate(45deg)' }} />
                </span>
            )}
        </span>
    );
};

export const OfferingsTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { amount: 0.5 });
    const [isH2Done, setIsH2Done] = useState(false);

    const handleNext = () => {
        setActiveTab((prev) => (prev + 1) % offerings.length);
    };

    const handlePrev = () => {
        setActiveTab((prev) => (prev - 1 + offerings.length) % offerings.length);
    };

    useEffect(() => {
        if (!isHeaderInView) {
            setIsH2Done(false);
        }
    }, [isHeaderInView]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % offerings.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const activeData = offerings[activeTab];

    return (
        <section className="w-full py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                
                {/* Header Section */}
                <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-16 min-h-[300px]">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
                        THE TECHNOLOGY PARTNER FOR AUTOMOTIVE BUSINESSES
                    </motion.p>
                    
                    <TypewriterWithPencil 
                        text="World-class Automotive Software &
Data Intelligence Company"
                        className="text-4xl md:text-5xl font-bold text-gradient mb-6 tracking-tight py-2 leading-tight md:leading-[1.2] inline-block"
                        asBlock={true}
                        speed={35}
                        pencilSize={40}
                        active={isHeaderInView}
                        onComplete={() => setIsH2Done(true)}
                    />

                    <div className="mt-6 min-h-[100px]">
                        <TypewriterWithPencil 
                            text="As a top-rated automotive technology partner, our team continues to assist companies to boost their businesses by providing customized software, powerful data APIs, and AI solutions tailored to meet client objectives effectively and increase revenue."
                            className="text-lg text-slate-600 leading-relaxed px-4 inline-block"
                            speed={20}
                            pencilSize={24}
                            active={isH2Done}
                        />
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="relative mb-16">
                    <div className="grid grid-cols-3 relative z-10 w-full mb-6">
                        {offerings.map((offering, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={offering.id}
                                    onClick={() => setActiveTab(index)}
                                    className="flex flex-col items-center justify-center gap-4 group transition-all duration-300 outline-none w-full"
                                >
                                    <div className={cn(
                                        "relative w-20 h-20 md:w-24 md:h-24 transition-all duration-300 mix-blend-multiply",
                                        isActive ? "opacity-100 scale-110" : "opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0"
                                    )}>
                                        <Image
                                            src={offering.iconImage}
                                            alt={offering.tabTitle}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                    <span 
                                        className={cn(
                                            "text-xs md:text-sm font-bold tracking-wider uppercase transition-colors duration-300",
                                            isActive ? "" : "text-slate-400 group-hover:text-slate-600"
                                        )}
                                        style={{ color: isActive ? offering.color : undefined }}
                                    >
                                        {offering.tabTitle}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Track & Progress Line */}
                    <div className="absolute bottom-[-16px] left-0 w-full h-[3px] bg-slate-100 rounded-full">
                        <motion.div
                            className="absolute top-0 h-full rounded-full"
                            style={{ backgroundColor: activeData.color }}
                            initial={false}
                            animate={{
                                left: `${(activeTab / offerings.length) * 100}%`,
                                width: `${100 / offerings.length}%`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        {/* Little triangle pointer (like Kava Ghana) */}
                        <motion.div 
                            className="absolute top-[3px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent"
                            style={{ borderTopColor: activeData.color }}
                            initial={false}
                            animate={{
                                left: `calc(${(activeTab / offerings.length) * 100 + (100 / offerings.length) / 2}% - 8px)`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[500px] flex items-center">
                    
                    {/* Left/Right Arrows for Mobile/Desktop cycling */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-[-40px] top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-colors bg-white/50 backdrop-blur-sm hidden lg:block"
                        aria-label="Previous offering"
                    >
                        <CaretLeft weight="bold" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="absolute right-[-40px] top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full border border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-400 transition-colors bg-white/50 backdrop-blur-sm hidden lg:block"
                        aria-label="Next offering"
                    >
                        <CaretRight weight="bold" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
                        >
                            {/* Text Content */}
                            <div className="flex-1 pr-0 lg:pr-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-3">
                                    {activeData.title}
                                </h3>
                                <h4 
                                    className="text-lg md:text-xl font-medium mb-6"
                                    style={{ color: activeData.color }}
                                >
                                    {activeData.subtitle}
                                </h4>
                                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                    {activeData.description}
                                </p>
                                <button 
                                    className="px-8 py-3 bg-white text-sm font-semibold tracking-wide transition-all hover:shadow-lg rounded-sm border"
                                    style={{ 
                                        color: activeData.color,
                                        borderColor: activeData.color 
                                    }}
                                >
                                    {activeData.buttonText}
                                </button>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full relative aspect-square lg:aspect-[4/3] flex items-center justify-center">
                                {/* Decorative elements behind image similar to Kava */}
                                <div className="absolute w-[80%] h-[80%] border-[2px] border-slate-100 rounded-3xl -rotate-6 z-0"></div>
                                <div className="absolute w-[80%] h-[80%] border-[2px] border-slate-100 rounded-3xl rotate-3 z-0"></div>
                                
                                <Image
                                    src={activeData.image}
                                    alt={activeData.title}
                                    fill
                                    className="object-contain z-10 drop-shadow-2xl scale-110"
                                    unoptimized
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
