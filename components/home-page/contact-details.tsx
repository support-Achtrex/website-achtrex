'use client';

import React from "react";
import { motion } from "framer-motion";

const ContactDetails = () => {
    return (
        <section className="bg-secondary py-24 px-4 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start">
                {/* Left Side - Headings */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <span className="text-base font-medium opacity-90">Contact Info</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-red-hat-display">
                        We are always happy <br className="hidden md:block" />
                        to assist you
                    </h2>
                </motion.div>

                {/* Right Side - Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 pt-4">
                    {/* Email Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold">Email Address</h3>
                        <div className="w-8 h-0.5 bg-white/80"></div>
                        <a
                            href="mailto:support@achtrex.com"
                            className="block text-lg hover:opacity-80 transition-opacity"
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
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-semibold">Number</h3>
                        <div className="w-8 h-0.5 bg-white/80"></div>
                        <div className="space-y-1 text-lg">
                            <p>Ghana +233 500 496700</p>
                            <p>USA +1 973 385 1305</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
