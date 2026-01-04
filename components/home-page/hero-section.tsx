'use client';

import React, { useState } from 'react';
import { Button } from '@/components/buttons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { submitContactForm } from '@/app/actions/contact';
import { useToast } from '@/components/ui/toast';

export const Hero = () => {
    const router = useRouter();
    const { addToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        try {
            const result = await submitContactForm(formData);
            if (result.success) {
                addToast('Message sent successfully! We check our emails constantly.', 'success');
                // Optional: Reset form via ref or just let it be
                const form = document.querySelector('form') as HTMLFormElement;
                if (form) form.reset();
            } else {
                addToast(result.error || 'Something went wrong.', 'error');
            }
        } catch (error) {
            addToast('Failed to send message.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden bg-slate-900">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-team.png" // Team collaboration image
                    alt="Background"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/75 to-slate-900/20" />
            </div>

            <div className="container relative mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content - Text */}
                <div className="lg:col-span-7 text-left pt-10 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 flex items-center gap-2"
                    >
                        <span className="bg-primary/10 text-primary border border-primary/50 px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(14,165,233,0.3)] backdrop-blur-md animate-pulse-slow">
                            Let's Go The Extra Mile
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Empowering Digital <br />
                        <span className="text-primary relative">
                            Transformation.
                            <span className="absolute -inset-1 blur-2xl bg-primary/20 -z-10"></span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-10"
                    >
                        We convert your complex challenges into revenue-generating digital assets. Specializing in high-performance <span className="text-white font-semibold">Custom Software</span>, scalable <span className="text-white font-semibold">Web & Mobile Apps</span>, and strategic <span className="text-white font-semibold">IT Consulting</span>.
                    </motion.p>

                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            <span>Top 1% Talent</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            <span>Timezone Aligned</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            <span>Enterprise Grade Security</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Lead Form */}
                <div className="lg:col-span-5 relative z-30">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-4 relative mx-auto max-w-sm lg:max-w-full"
                    >
                        <div className="text-center mb-3">
                            <h3 className="text-lg font-bold text-white">Let's connect.</h3>
                        </div>

                        <form className="space-y-2" action={handleSubmit}>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="hero-name" className="block text-[9px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wide">Name</label>
                                    <input id="hero-name" name="name" type="text" autoComplete="name" className="w-full px-2 py-1.5 rounded-md border border-white/10 bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder-zinc-500 text-xs" placeholder="John Doe" required />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="hero-phone" className="block text-[9px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wide">Phone</label>
                                    <input id="hero-phone" name="phone" type="tel" autoComplete="tel" className="w-full px-2 py-1.5 rounded-md border border-white/10 bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder-zinc-500 text-xs" placeholder="+1 234..." />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="hero-email" className="block text-[9px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wide">Work Email</label>
                                <input id="hero-email" name="email" type="email" autoComplete="email" className="w-full px-2 py-1.5 rounded-md border border-white/10 bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder-zinc-500 text-xs" placeholder="john@company.com" required />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="hero-company" className="block text-[9px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wide">Company</label>
                                    <input id="hero-company" name="company" type="text" autoComplete="organization" className="w-full px-2 py-1.5 rounded-md border border-white/10 bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white placeholder-zinc-500 text-xs" placeholder="Acme Inc" />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="hero-service" className="block text-[9px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wide">Service</label>
                                    <select id="hero-service" name="service" autoComplete="off" className="w-full px-2 py-1.5 rounded-md border border-white/10 bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-white text-xs appearance-none">
                                        <option value="" className="bg-slate-900 text-zinc-500">Select...</option>
                                        <option value="Software" className="bg-slate-900">Software</option>
                                        <option value="Mobile" className="bg-slate-900">Mobile</option>
                                        <option value="Web" className="bg-slate-900">Web</option>
                                        <option value="Consulting" className="bg-slate-900">Consulting</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="hero-message" className="block text-[9px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wide">Datails</label>
                                <textarea id="hero-message" name="message" autoComplete="off" className="w-full px-2 py-1.5 rounded-md border border-white/10 bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none h-12 text-white placeholder-zinc-500 text-xs" placeholder="Project info..." required />
                            </div>

                            <Button disabled={isSubmitting} className="w-full bg-primary hover:bg-cyan-600 text-white py-2 rounded-md font-bold text-sm shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : 'Get Started'}
                            </Button>

                            <p className="text-center text-[10px] text-zinc-500 mt-2">
                                Term & Privacy apply.
                            </p>
                        </form>
                    </motion.div>

                    {/* Decorative Elements around form */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
                </div>
            </div>

            {/* Bottom Curve Wave */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-20">
                <svg className="w-full h-12 md:h-24 text-background" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,0 C480,120 960,120 1440,0 L1440,100 L0,100 Z" />
                </svg>
            </div>
        </section>
    );
};