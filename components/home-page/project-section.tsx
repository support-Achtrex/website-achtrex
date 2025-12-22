'use client';

import { SectionTitle } from '@/components/section-title';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    images: string[];
    logo: string;
    index: number;
}

const ProjectCard = ({ title, description, tags, link, images, logo, index }: ProjectProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group relative w-full mb-32 last:mb-0"
        >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Section - Collage Style */}
                <div className={`relative h-[400px] sm:h-[500px] lg:h-[600px] w-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* Main Image */}
                    <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 group-hover:z-20 transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image
                            src={images[0]}
                            alt={`${title} Main View`}
                            fill
                            className="object-cover object-top"
                        />
                        {/* Project Logo Overlay */}
                        <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center justify-center z-20 shadow-lg">
                            <Image
                                src={logo}
                                alt={`${title} Logo`}
                                width={48}
                                height={48}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Secondary Image (Floating) */}
                    {images[1] && (
                        <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 group-hover:z-30 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2">
                            <Image
                                src={images[1]}
                                alt={`${title} Detail View`}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    )}

                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 -z-10 rounded-full" />
                </div>

                {/* Content Section */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:text-left'}`}>
                    <div>
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                            <div className="h-[1px] w-12 bg-primary"></div>
                            <span className="text-primary text-sm font-bold tracking-widest uppercase">Featured Case Study</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                            {description}
                        </p>
                    </div>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : 'justify-start'}`}>
                        {tags.map((tag, i) => (
                            <span key={i} className="px-4 py-1.5 text-xs font-medium text-white/90 border border-white/10 rounded-full bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className={`pt-2 flex ${index % 2 === 1 ? 'lg:justify-end' : 'justify-start'}`}>
                        <Link
                            href={link}
                            className="inline-flex items-center gap-3 text-white font-semibold text-lg group/link"
                        >
                            <span className="border-b border-white/30 group-hover/link:border-primary pb-0.5 transition-colors">View Case Study</span>
                            <div className="bg-white/10 p-2 rounded-full group-hover/link:bg-primary group-hover/link:text-black transition-all">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const ProjectsSection = () => {
    const projects = [
        {
            title: 'Carkasa',
            description: 'A comprehensive vehicle history verification platform designed to bring transparency to the automotive market. We built a robust system allowing users to access detailed records, sales data, and auction photos, enabling confident buying and selling decisions.',
            tags: ['Next.js', 'Supabase', 'Stripe', 'Vehicle API'],
            link: 'https://carkasa.com',
            images: ['/projects/carkasa_real.png', '/projects/carkasa_detail.png'],
            logo: '/logos/image 9.png',
        },
        {
            title: 'Automotive Dataset',
            description: 'This platform unlocks the power of global automotive intelligence for businesses. We engineered a high-performance data solution providing accurate vehicle specifications and real-time market values, trusted by industry leaders for data-driven decision-making.',
            tags: ['React', 'Node.js', 'Big Data', 'API Integration'],
            link: 'https://automotivedataset.com',
            images: ['/projects/automotive_real.png', '/projects/automotive_detail.png'],
            logo: '/logos/image 6.png',
        },
        {
            title: 'Yach Telemedicine',
            description: 'Democratizing healthcare access with a secure telemedicine platform. The solution provides encrypted video consultations and digital prescriptions, making expert care accessible from anywhere.',
            tags: ['WebRTC', 'HealthTech', 'React Native'],
            link: '/portfolio',
            images: ['/projects/yach-telemedicine.png'],
            logo: '/logos/image 12.png',
        }
    ];

    return (
        <section id="projects" className="py-32 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionTitle className='text-3xl md:text-5xl text-white mb-6'>Selected Works</SectionTitle>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We partner with visionary companies to build products that define industries.
                            Here are a few of our success stories.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};