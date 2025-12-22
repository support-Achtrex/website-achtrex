'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/buttons";

export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="about" className="py-20 px-4 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-card border-none"
                    >
                        <Image
                            src="/life-at-achtrex/Rectangle 789.png"
                            alt="Team working together"
                            fill
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">Our DNA</h2>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Driven by passion. <br /> United by purpose.</h3>
                        </div>

                        <div className="space-y-4 text-base text-muted-foreground leading-relaxed font-light">
                            <p>
                                At Achtrex, we are more than a software studio. We are a collective of visionaries,
                                engineers, and strategists dedicated to redefining what's possible in the digital realm.
                            </p>
                            <p>
                                We don't just write code; we architect solutions that propel businesses forward.
                                Our culture is built on relentless curiosity, technical excellence, and a shared
                                commitment to delivering extraordinary results.
                            </p>
                            <p>
                                From intricate backend systems to stunning user interfaces, we bring a holistic
                                approach to every project, ensuring your digital presence is not just functional,
                                but transformative.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Button
                                onClick={() => router.push('/life-at-achtrex')}
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 px-8 rounded-full shadow-lg shadow-white/10"
                            >
                                Discover Our Culture
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};