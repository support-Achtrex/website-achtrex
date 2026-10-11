'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  label?: string;
  className?: string;
  targetId?: string;
}

export function ScrollIndicator({ label = 'Scroll', className = '', targetId }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to next section"
      className={`group flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-white transition-colors duration-300 ${className}`}
    >
      <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-slate-400 group-hover:text-white transition-colors">
        {label}
      </span>
      <div className="w-[1.5px] h-12 bg-white/15 overflow-hidden relative rounded-full">
        <motion.div
          animate={{
            y: [-48, 48],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#00A9CE] to-white"
        />
      </div>
    </button>
  );
}
