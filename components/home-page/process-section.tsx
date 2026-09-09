'use client';

import { motion } from "framer-motion";
import { Folder, Zoom, Computer, Rocket } from "@nobertdev/react-3d-icons/fc";

const processes = [
  {
    title: "Domain Scoping",
    description: "Deep consultation to map shop floor workflows, dealership operations, and technical specifications.",
    icon: Folder
  },
  {
    title: "Cognitive Intelligence",
    description: "Integrating domain-trained AI models to automate diagnostics, acoustic analysis, and predictive maintenance.",
    icon: Zoom
  },
  {
    title: "Bespoke Engineering",
    description: "Developing robust, scalable web and mobile software tailored to your automotive operations with full IP ownership.",
    icon: Computer
  },
  {
    title: "Operational Rollout",
    description: "Deploying enterprise systems with hands-on staff training, workflow modernizations, and continuous support.",
    icon: Rocket
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden text-left border-y border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-gradient text-sm font-bold tracking-widest uppercase block">Delivery Framework</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">How We Build &amp; Advise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-200 p-8 rounded-2xl relative group hover:bg-slate-800 transition-all hover:border-logo-gradient border-b-2"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 text-4xl font-bold text-slate-900 group-hover:opacity-10 transition-opacity">
                0{index + 1}
              </div>
              <div className="w-12 h-12 bg-logo-gradient rounded-xl flex items-center justify-center text-slate-900 mb-5 group-hover:scale-110 transition-transform duration-300">
                <process.icon className="w-6 h-6 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-gradient transition-colors">{process.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
