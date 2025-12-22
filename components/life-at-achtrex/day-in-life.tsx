'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function DayInLife() {
  const activities = [
    {
      image: "/life-at-achtrex/collaborative.png",
      title: "Collaborative Syncs",
      description: "Where ideas collide and evolve. Our team meetings are dynamic forums for open communication and rapid problem-solving."
    },
    {
      image: "/life-at-achtrex/Rectangle 789.png",
      title: "Deep Work Sessions",
      description: "We respect the flow state. Our environment is designed to support focused, uninterrupted work on complex challenges."
    },
    {
      image: "/life-at-achtrex/focused.png",
      title: "Focused Project Work",
      description: "Our project work is focused and efficient, ensuring we deliver high-quality results on time."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[image:var(--bg-dark-purple)] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-white opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-display text-white">A Day in the Life</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white font-display group-hover:text-primary transition-colors">{activity.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
