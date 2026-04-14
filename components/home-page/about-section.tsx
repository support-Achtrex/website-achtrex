'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/buttons";

export const AboutSection = () => {
    const router = useRouter();
    return (
        <section id="why-achtrex" className="py-24 px-6 relative overflow-hidden bg-black text-white border-y border-white/5">
            {/* Background: Horizontal Black to Purple with Perforated Texture */}
            <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
                <div className="w-full lg:w-[60%] bg-black h-1/2 lg:h-full" />
                <div className="w-full lg:w-[40%] h-1/2 lg:h-full relative" 
                     style={{ 
                        background: 'linear-gradient(to bottom, #000 0%, #2e1065 100%)'
                     }}>
                    <div className="lg:hidden absolute inset-0" style={{ background: 'linear-gradient(to right, #000 0%, #2e1065 100%)' }} />
                    <div className="absolute inset-0 opacity-[0.2]" 
                         style={{ 
                            backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
                            backgroundSize: '24px 24px'
                         }} 
                    />
                </div>
                <div className="absolute top-0 left-[50%] bottom-0 w-[20%] bg-gradient-to-r from-black to-transparent z-1 hidden lg:block" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1c]"
                    >
                        <Image
                            src="/server_infrastructure.png" 
                            alt="Scalable Architecture Server Infrastructure"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40 mix-blend-multiply" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-secondary text-sm font-bold tracking-widest uppercase mb-2">Why Achtrex</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Scale.<br /> Engineered for Authority.</h3>
                        </div>

                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                            <p>
                                Achtrex is not an agency. We are an enterprise SaaS venture builder focused exclusively on deploying scalable data architectures and AI-driven platforms.
                            </p>
                            <p>
                                By owning our proprietary tech stack globally, we eliminate integration bottlenecks, allowing businesses to plug directly into high-fidelity data engines and cognitive automation frameworks without touching legacy infrastructure.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button
                                onClick={() => router.push('/why-achtrex')}
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 px-8 rounded-sm font-bold"
                            >
                                Explore Our Advantage
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};