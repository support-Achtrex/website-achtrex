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
        description: 'Automotive Platform Use Case',
        category: 'Platform Implementation',
        tags: ['Marketplace', 'Next.js', 'Data Engine'],
        images: ['/projects/carkasa-mockup.png', '/projects/carkasa_detail.png'],
        challenge: 'The automotive market suffers from information asymmetry. Buyers often lack access to verified vehicle history and accurate sales data. This use case demonstrates how Achtrex technology provides transparency and data accuracy at scale.',
        product: 'Utilizing Achtrex data infrastructure, we powered a verification platform integrating with global vehicle databases and auction APIs. The system features a high-performance interface for vehicle history reports and market valuations.',
        outcome: 'Achtrex technology maintains 99.9% data accuracy for thousands of users, successfully reducing information gaps and demonstrating the scalability of our automotive data engine.',
    },
    {
        title: 'Automotive Dataset',
        description: 'Global Data Intelligence Solution',
        category: 'Data Platform',
        tags: ['API', 'Big Data', 'Intelligence'],
        images: ['/projects/automotive-mockup.png', '/projects/automotive_detail.png'],
        challenge: 'Acquiring accurate vehicle data for insurance or retail often involves high costs and inconsistent quality. Integrating this data is a major bottleneck for innovation in the automotive tech space.',
        product: 'Achtrex provides a high-performance, developer-first API solution. It offers granular data for over 1.2 million trims and real-time market valuations, delivered through a unified, modern web platform.',
        outcome: 'The platform powers global automotive applications, achieving a 40% reduction in integration time for developers while ensuring reliable, data-driven system performance.',
    },
    {
        title: 'Yach Telemedicine',
        description: 'Digital Infrastructure Use Case',
        category: 'Health Platform',
        tags: ['Architecture', 'Infrastructure', 'Scale'],
        images: ['/projects/yach-telemedicine.png'],
        challenge: 'Healthcare access often faces geographical barriers. This use case highlights how robust digital infrastructure can support secure, remote consultations and real-time medical data management.',
        product: 'Achtrex technologies enabled a HIPAA-compliant digital health environment. The solution supports secure video connectivity, digital prescription workflows, and automated appointment scheduling.',
        outcome: 'Successfully demonstrated democratic access to services through technical efficiency, reducing physical infrastructure reliance by providing a safe, efficient digital alternative.',
    },
    {
        title: 'Global Solutions',
        description: 'Enterprise Scalability Application',
        category: 'Platform Strategy',
        tags: ['Engineering', 'Architecture', 'Transformation'],
        images: ['/projects/Rectangle 796 (3).png'],
        challenge: 'Scaling development capabilities to handle complex enterprise projects requires modular architecture and professional code standards. This use case shows Achtrex’s capacity for technical transformation.',
        product: 'We applied Achtrex engineering principles to modernize legacy systems and implement scalable architectures. Our focus was on establishing optimized lifecycles and robust technical foundations.',
        outcome: 'Achieved 30% faster project delivery and enhanced code quality, significantly increasing the capacity to handle large-scale digital initiatives.',
    },
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
                            Platform & Use Cases
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                    >
                        Achtrex in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Action</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        Explore how Achtrex technologies and platforms are applied to build real-world digital solutions across industries.
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

                {/* How Our Technology Is Applied Section */}
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">How Our Technology Is Applied</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            Achtrex platforms are designed to be flexible and scalable, enabling application across multiple industries 
                            including automotive, data services, and AI-driven solutions. Our architecture prioritizes modularity and 
                            performance, ensuring that the same core engines can power diverse digital ecosystems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
