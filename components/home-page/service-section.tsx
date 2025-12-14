'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveLeft, MoveRight } from 'lucide-react';
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    const divRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="
                bg-[url('/Union.png')]
                bg-no-repeat
                bg-top
                bg-size-[100%_100%]
                w-full
                h-[450px] lg:h-[330px]
                pt-[100px]  
                pb-6
                px-4
                text-center
                rounded-none
                mx-auto
                relative
                group
                border-none
                flex
                flex-col
                justify-center
            "
            style={{
                maskImage: "url('/Union.png')",
                maskSize: "100% 100%",
                maskPosition: "top center",
                maskRepeat: "no-repeat",
                WebkitMaskImage: "url('/Union.png')",
                WebkitMaskSize: "100% 100%",
                WebkitMaskPosition: "top center",
                WebkitMaskRepeat: "no-repeat",
                filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.08))"
            }}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 90, 176, 0.15), transparent 40%)`,
                }}
            />
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 90, 176, 0.4), transparent 40%)`,
                    maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                    WebkitMaskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `xor`,
                }}
            />

            {/* Icon */}
            <div className="absolute top-[40px] lg:top-[28px] left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                <span className="text-5xl">{icon}</span>
            </div>

            <h3 className="w-full py-2 font-manrope font-bold text-3xl leading-tight tracking-tight text-center text-black/90 mx-auto relative z-10">
                {title}
            </h3>

            <p className="w-full font-normal text-lg leading-relaxed text-center text-black/70 mx-auto mt-2 relative z-10">
                {description}
            </p>
        </motion.div>
    );
}

export const ServicesGrid = () => {
    const services = [
        {
            icon: <img src="/service/product-development.png" alt="product development icon" />,
            title: 'Product Development',
            description: 'We transform your ideas into scalable digital products.'
        },
        {
            icon: <img src="/service/ui-ux-design.png" alt="ui ux design icon" />,
            title: 'UI/UX Design',
            description: 'We create intuitive interfaces & meaningful user journeys for a seamless experience.'
        },
        {
            icon: <img src="/service/seo-analytics.png" alt="digital marketing specialist icon" />,
            title: 'Digital Marketing',
            description: 'We help brands grow through data-driven strategies and boost visibility.'
        },
        {
            icon: <img src="/service/it-consultation.png" alt="it consultation icon" />,
            title: 'IT Consultation',
            description: 'We provide expert guidance for sustainable digital growth that helps businesses thrive.'
        },
        {
            icon: <img src="/service/videography.png" alt="visual content icon" />,
            title: 'Visual Content',
            description: 'We provide professional videography and photography services to elevate your brand.'
        },
        {
            icon: <img src="/service/print.png" alt="printing services icon" />,
            title: 'Printing Services',
            description: 'We provide high-quality and cost-effective printing services for all your business needs.'
        }
    ];

    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);
    const [barWidth, setBarWidth] = React.useState(0);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
        setScrollProgress(progress);
        
        // Calculate bar width percentage based on viewport ratio
        const widthPercentage = (clientWidth / scrollWidth) * 100;
        setBarWidth(widthPercentage);
    };

    React.useEffect(() => {
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth / 2;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section id="services" className="py-24 px-6 overflow-hidden">
            <div className="max-w-8xl mx-auto relative group/section">
                <style jsx global>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                
                {/* Scroll Indicator Gradient */}
                <div className="absolute right-0 top-0 bottom-24 w-24 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((service, index) => (
                        <div key={index} className="snap-center shrink-0 w-[85vw] md:w-[40vw] lg:w-[calc(20%-1.2rem)]">
                            <FeatureCard {...service} />
                        </div>
                    ))}
                </motion.div>

                {/* Progress Bar and Navigation */}
                <div className="mt-8 flex items-center justify-end gap-8 max-w-xs mx-auto md:max-w-none md:mx-0">
                    <div className="flex-1 flex items-center gap-4 max-w-md mx-auto md:mx-0">
                        
                        <div className="flex-1 h-[2px] bg-gray-200 rounded-full relative overflow-hidden">
                            <div 
                                className="absolute top-0 left-0 h-full bg-black transition-all duration-100 ease-out rounded-full"
                                style={{ 
                                    width: `${barWidth}%`,
                                    left: `${scrollProgress * (100 - barWidth)}%`
                                }}
                            />
                        </div>

<button 
                            onClick={() => scroll('left')}
                            disabled={scrollProgress <= 0}
                            className="p-2 rounded-full border border-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Scroll left"
                        >
                            <MoveLeft width="18" height="18" className='text-gray-400' />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            disabled={scrollProgress >= 0.99 || barWidth >= 100}
                            className="p-2 rounded-full border border-gray-500 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Scroll right"
                        >
                            <MoveRight width="18" height="18" className='text-gray-400' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;