'use client';

import { ArrowUp, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const ScrollController = () => {
    const [scrollY, setScrollY] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial calculation
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    // Only show arrows if the page is scrollable
    if (maxScroll <= 0) return null;

    const showUp = scrollY > 300;
    const showDown = scrollY < maxScroll - 300;

    return (
        <div className="fixed bottom-[220px] right-6 z-[999] flex flex-col gap-2">
            {showUp && (
                <button
                    onClick={scrollToTop}
                    className="w-9 h-9 bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-[#00a9ce] hover:bg-white transition-all rounded-full hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </button>
            )}
            
            {showDown && (
                <button
                    onClick={scrollToBottom}
                    className="w-9 h-9 bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-[#00a9ce] hover:bg-white transition-all rounded-full hover:scale-110"
                    aria-label="Scroll to bottom"
                >
                    <ArrowDown size={18} />
                </button>
            )}
        </div>
    );
};
