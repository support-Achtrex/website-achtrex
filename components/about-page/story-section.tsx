'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Globe, Smartphone, Rocket, BrainCircuit, ShieldCheck } from 'lucide-react';

const techSolutions = [
    { icon: Globe, title: "Web Solutions", desc: "High-performance web applications built for scale." },
    { icon: Cloud, title: "Cloud Native", desc: "Serverless architectures ensuring 99.9% uptime." },
    { icon: Code2, title: "Custom Software", desc: "Tailored algorithms solving complex business needs." },
    { icon: Smartphone, title: "Mobile Apps", desc: "Native-quality experiences across all devices." },
    { icon: BrainCircuit, title: "AI & Machine Learning", desc: "Intelligent systems that learn and adapt." },
    { icon: ShieldCheck, title: "DevOps & Security", desc: "Fortified infrastructure with automated pipelines." }
];

const techStack = [
    "Next.js", "React", "TypeScript", "Node.js", "Supabase", "AWS", "Google Cloud", "Framer Motion", "Tailwind CSS",
    "Python", "Docker", "Kubernetes", "GraphQL", "PostgreSQL", "Redis", "Vercel", "Flutter",
    "OpenAI", "Stripe", "MongoDB", "Go", "Rust", "Terraform", "Solidity",
    "Vue.js", "Angular", "Svelte", "Swift", "Kotlin", "Azure", "DigitalOcean", "Firebase",
    "Prisma", "Trpc", "Bun", "Deno", "C++", "C#", "Unity", "Unreal Engine"
];

export const StorySection = () => {
    return (
        <section className="py-32 bg-[image:var(--bg-dark-teal)] relative overflow-hidden">
            {/* Background Textures */}
            <div className="absolute inset-0 bg-dot-white opacity-10 pointer-events-none" />
            {/* Background Decorations - Tech Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute top-1/4 -left-20 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our DNA</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            Forged in <span className="text-gradient">code</span>. <br /> Driven by design.
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Achtrex was born from a simple belief: that technology should be as beautiful as it is powerful. We bridge the gap between complex engineering and intuitive design.
                            </p>
                            <p>
                                We don't just write code; we architect digital ecosystems that propel businesses into the future.
                            </p>
                        </div>
                    </motion.div>

                    {/* Tech Solutions Grid - Visuals from User Request */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {techSolutions.map((item, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-white font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Extra Mile & Tech Stack Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                            We go the <motion.span
                                animate={{ opacity: [0.6, 1, 0.6], textShadow: ["0px 0px 10px rgba(0,194,203,0.3)", "0px 0px 30px rgba(0,194,203,0.9)", "0px 0px 10px rgba(0,194,203,0.3)"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="text-secondary"
                            >Extra Mile</motion.span>.
                        </h2>
                    </motion.div>

                    {/* Tech Stack Marquee - Left to Right, No Filter, Bright */}
                    <div className="w-full py-10 overflow-hidden">
                        <motion.div
                            className="flex whitespace-nowrap"
                            // Moving Left to Right: Start at -50% (scrolled) and move to 0% (start)
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        >
                            {[...techStack, ...techStack].map((tech, idx) => (
                                <div key={idx} className="inline-flex items-center justify-center mx-8">
                                    <span className="text-xl md:text-3xl font-bold text-white tracking-tight cursor-default">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Vision Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-30" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-12 md:p-16 flex flex-col justify-center md:col-span-2">
                            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                                <Rocket className="w-4 h-4" /> The Mission
                            </span>
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                To engineer the <span className="italic text-white/80">operating system</span> for the future of business.
                            </h3>
                            <p className="text-xl text-muted-foreground">
                                We're not just building apps; we're constructing the digital infrastructure that will power the next decade of industry leaders.
                            </p>
                        </div>
                        <div className="p-12 md:p-16 flex flex-col justify-center space-y-8 bg-white/5">
                            <div>
                                <h4 className="text-5xl font-bold text-white mb-1">50+</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider">Systems Deployed</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-bold text-white mb-1">99%</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider">Uptime Reliability</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-bold text-white mb-1">4yr</h4>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider">Tech Mastery</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
