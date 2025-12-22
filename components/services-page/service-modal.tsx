'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Code2 } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: any;
}

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring" as const, duration: 0.5, bounce: 0.3 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
};

export const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!service) return null;
    const Icon = service.icon;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Image/Gradient */}
                        <div className="h-32 bg-gradient-to-r from-primary/20 via-background to-secondary/10 relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                            <div className="absolute top-1/2 left-8 -translate-y-1/2 flex items-center gap-4">
                                <div className="p-4 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 text-primary">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold font-display text-white">{service.title}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary rounded-full" /> Overview
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {service.details?.overview || service.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {service.details?.features?.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                        <Code2 className="w-4 h-4 text-secondary" /> Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.details?.technologies?.map((tech: string, idx: number) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end shrink-0">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
