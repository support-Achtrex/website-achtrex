'use client';

import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative pt-24 md:pt-32 pb-24 px-6 overflow-hidden ${isVisible ? 'hero-visible' : ''}`}
        >
            {/* Background Columns */}
            <div className="absolute inset-0 -z-10 flex pointer-events-none" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 h-full bg-gray-50 dark:bg-neutral-900/50 column-animate"
                        style={{
                            animationDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto text-center">

                {/* Item 1: The Badge */}
                <div
                    className="hero-animate inline-flex items-center justify-center bg-white px-4 py-2 rounded-full mb-8 w-auto h-[42px]"
                    style={{ animationDelay: '0.1s' }}
                >
                    <span className="font-manrope font-medium text-lg md:text-2xl leading-[150%] text-center tracking-[-0.025em] bg-gradient-to-r from-[#EE982D] to-[#00A58F] bg-clip-text text-transparent">
                        Bold Ideas. Global Impact.
                    </span>
                </div>

                {/* Item 2: The Headline */}
                <h1
                    className="hero-animate text-4xl md:text-head1 font-manrope font-bold text-black leading-[120%] text-center tracking-[-0.05em] mb-6 max-w-[1277px] mx-auto"
                    style={{ animationDelay: '0.3s' }}
                >
                    Empowering Digital Transformation<br />
                    Let's Go The{' '}
                    <span className="inline-block overflow-hidden h-[1.2em] align-bottom text-primary">
                        {"Extra Mile".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                initial={{ y: "-100%" }}
                                whileInView={{ y: "0%" }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.8 + index * 0.05,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                {/* Item 3: The Description */}
                <p
                    className="hero-animate text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                    style={{ animationDelay: '0.5s' }}
                >
                    We are a software development company specializing in custom software development,
                    web and mobile app development, and IT consulting services to help businesses thrive
                    in the digital age.
                </p>

                {/* Item 4: The Button */}
                <div
                    className="hero-animate"
                    style={{ animationDelay: '0.7s' }}
                >
                    <Button onClick={() => router.push('/contact-us')} size="lg" className="shadow-2xl w-full md:w-auto">
                        Get Started Today
                    </Button>
                </div>

            </div>
        </section>
    );
};