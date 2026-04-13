import React from 'react';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/16133664271"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-[70px] w-[70px] items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 active:scale-90"
            aria-label="Connect via LUMI"
        >
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-xl"
            >
                <defs>
                    <linearGradient id="lumiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00c6ff" />
                        <stop offset="100%" stopColor="#8a2be2" />
                    </linearGradient>
                    <mask id="bubbleMask">
                        <path 
                            d="M50 23 
                               C70 23 83 35 83 49 
                               C83 63 70 75 50 75 
                               C45 75 40 74 36 72 
                               L23 79 
                               L27 67 
                               C21 62 17 56 17 49 
                               C17 35 30 23 50 23 Z" 
                            fill="white" 
                        />
                        <circle cx="34" cy="49" r="4.5" fill="black" />
                        <circle cx="50" cy="49" r="4.5" fill="black" />
                        <circle cx="66" cy="49" r="4.5" fill="black" />
                    </mask>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#lumiGrad)" />
                <rect x="0" y="0" width="100" height="100" fill="white" mask="url(#bubbleMask)" />
            </svg>
        </a>
    );
};

export default FloatingWhatsApp;
