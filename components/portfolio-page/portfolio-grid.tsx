'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/buttons';

interface PortfolioItem {
    title: string;
    description: string;
    images: string[];
    challenge: string;
    product: string;
    outcome: string;
    category: string;
    tags: string[];
}

const portfolioItems: PortfolioItem[] = [
    {
        title: 'Carkasa',
        description: 'Trusted Car Marketplace',
        category: 'Web App',
        tags: ['Marketplace', 'Next.js', 'PostgreSQL'],
        images: ['/projects/carkasa_real.png', '/projects/carkasa_detail.png'],
        challenge: 'The automotive market suffers from information asymmetry and a lack of transparency. Buyers often lack access to verified vehicle history, auction photos, and accurate sales data, leading to mistrust and potential fraud. Existing solutions were fragmented, expensive, and difficult to navigate.',
        product: 'We engineered Carkasa as a comprehensive verification platform integrating with global vehicle databases (NMVTIS) and auction APIs. The platform features an intuitive interface for vehicle history reports, real-time market valuations, and a seamless buy/sell marketplace.',
        outcome: 'Carkasa has become a pivotal tool for transparency in local and international markets, enabling informed decisions with 99.9% data accuracy. It has streamlined the car buying process for thousands of users and reduced fraudulent listings significantly.',
    },
    {
        title: 'Automotive Dataset',
        description: 'Global Automotive Intelligence',
        category: 'API Platform',
        tags: ['API', 'Big Data', 'Cloud'],
        images: ['/projects/automotive_real.png', '/projects/automotive_detail.png'],
        challenge: 'Businesses requiring accurate vehicle data for insurance, retail, or apps faced high costs, inconsistent data quality, and complex, poorly documented APIs. Integrating this data was a major bottleneck for innovation in the automotive tech space.',
        product: 'We built a high-performance, developer-first API solution. It provides granular data for over 1.2 million trims, real-time market valuations, and decoding capabilities in a unified, modern web platform with robust SDKs and clear documentation.',
        outcome: 'The platform now powers dealerships, insurance apps, and automotive startups globally. We achieved a 40% reduction in integration time for developers, enabling faster product launches and more reliable data-driven applications.',
    },
    {
        title: 'Yach Telemedicine',
        description: 'Digital Healthcare Platform',
        category: 'Mobile & Web',
        tags: ['Healthcare', 'Telemedicine', 'Mobile App'],
        images: ['/projects/yach-telemedicine.png'],
        challenge: 'Patients often faced long wait times and geographical barriers when accessing quality healthcare for non-emergency issues. Traditional clinic visits were inefficient for routine follow-ups, and there was a need for a secure, remote alternative.',
        product: 'We collaborated to develop a HIPAA-compliant digital health platform that brings healthcare to users\' smart devices. The solution includes secure video consultations, digital prescription management, and easy appointment scheduling.',
        outcome: 'Democratized access to healthcare, allowing patients to receive timely medical advice from home. This has reduced the burden on physical clinics, improved patient engagement, and provided a safe, efficient alternative for routine health management.',
    },
    {
        title: 'Global Solutions',
        description: 'Software Development & Consulting',
        category: 'Enterprise',
        tags: ['Consulting', 'Digital Transformation'],
        images: ['/projects/Rectangle 796 (3).png'],
        challenge: 'A leading tech consulting firm needed to rapidly scale its development capabilities to handle growing client demands. They required optimization of their development workflows and code quality standards to ensure timely delivery of complex enterprise projects.',
        product: 'We engaged in a strategic collaboration to provide enterprise-level software development and consulting. Our team focused on implementing scalable architectures, modernizing legacy systems, and establishing best practices for their development lifecycle.',
        outcome: 'The partnership resulted in improved project delivery times by 30%, enhanced overall code quality, and significantly increased their capacity to handle larger, more complex projects, driving business growth and client satisfaction.',
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export const PortfolioGrid = () => {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-wide text-white/80 uppercase">
                            Case Studies
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Impact</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        Explore how we translate complex challenges into elegant, high-performance digital solutions for industry leaders.
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                >
                    {portfolioItems.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-80" />

                                {/* Top Right Arrow */}
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative p-8 -mt-20">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold border border-primary/20">
                                        {project.category}
                                    </span>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 mb-6 text-sm lg:text-base line-clamp-2 group-hover:line-clamp-none transition-all">
                                    {project.challenge}
                                </p>

                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <div>
                                        <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">Impact</p>
                                        <p className="text-white/90 text-sm">{project.outcome}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
