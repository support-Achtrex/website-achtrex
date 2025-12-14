'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";


export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="about" className="py-24 px-4 bg-[#2496B3] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden"
                    >
                        <Image
                            src="/life-at-achtrex/Rectangle 789.png"
                            alt="Team working together"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">Life At Achtrex</h2>
                        <h3 className="text-xl md:text-2xl font-bold mb-6">Driven by passion. United by purpose.</h3>

                        <div className="space-y-4 md:space-y-6 text-base leading-relaxed opacity-90 font-light">
                            <p>
                                At Achtrex, we're a family of thinkers, builders, and dreamers who believe in
                                doing ordinary things extraordinarily well. We combine dedication, creativity,
                                and technical expertise to craft digital experiences that help brands thrive
                                across the world.
                            </p>
                            <p>
                                Our team is made up of bold innovators who embrace modern tools and
                                forward-thinking strategies — from designing and developing user-focused
                                websites, to crafting SEO-optimized content and creating visuals that tell
                                your story with clarity and impact.
                            </p>
                            <p>
                                What makes us different is how we work together. We value collaboration,
                                curiosity, and constant learning. Every project at Achtrex is a shared journey,
                                and every success, a celebration of teamwork.
                            </p>
                            <p>
                                When we work with you, your goals become our mission. We go beyond
                                delivery, we build lasting relationships, offer continued support, and ensure
                                your digital presence doesn't just exist, but evolves.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button onClick={() => router.push('/life-at-achtrex')} className="bg-white text-[#2496B3] hover:bg-gray-100 transition-colors font-bold py-3 px-8 rounded-full text-lg shadow-md w-full md:w-auto">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};