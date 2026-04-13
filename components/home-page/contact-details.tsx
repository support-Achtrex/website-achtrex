'use client';

import React from "react";
import { motion } from "framer-motion";

const ContactDetails = () => {
    return (
        <section className="bg-background py-20 px-4 text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side - Headings */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact Info</span>
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight font-display">
                        We are here <br />
                        to help you scale.
                    </h2>
                </motion.div>

                {/* Right Side - Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Email Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3 p-6 glass-card rounded-2xl border-l-4 border-l-primary"
                    >
                        <h3 className="text-lg font-semibold text-white/90">Email Address</h3>
                        <a
                            href="mailto:support@achtrex.com"
                            className="block text-base hover:text-primary transition-colors text-muted-foreground"
                        >
                            support@achtrex.com
                        </a>
                    </motion.div>

                    {/* Number Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-3 p-6 glass-card rounded-2xl border-l-4 border-l-secondary"
                    >
                        <h3 className="text-lg font-semibold text-white/90">Phone Numbers</h3>
                        <div className="space-y-1 text-base text-muted-foreground">
                            <p className="hover:text-white transition-colors">GH +233 500 496700</p>
                            <p className="hover:text-white transition-colors">US +1 973 385 1305</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
