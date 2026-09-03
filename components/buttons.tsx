import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'navbarCta' | 'vibrantPill' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {

  const baseStyles = 'font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center relative disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wide';

  const variants = {
    // Vibrant Orange-to-Amber Pill (matching Quick Digital reference & navbar accent)
    primary: 'bg-gradient-to-r from-[#E8592A] via-[#F37021] to-[#FB923C] text-white shadow-[0_4px_16px_rgba(243,112,33,0.35)] hover:shadow-[0_6px_24px_rgba(243,112,33,0.55)] hover:scale-105 border border-white/20',
    vibrantPill: 'bg-gradient-to-r from-[#E8592A] via-[#F37021] to-[#FB923C] text-white shadow-[0_4px_16px_rgba(243,112,33,0.35)] hover:shadow-[0_6px_24px_rgba(243,112,33,0.55)] hover:scale-105 border border-white/20',
    // Navbar Glowing Two-Tone Pill
    navbarCta: 'relative group/btn overflow-hidden p-[1.5px] bg-gradient-to-r from-[#F37021] via-[#FB923C] to-[#00A9CE] hover:shadow-[0_0_24px_rgba(243,112,33,0.45)] hover:scale-105 text-white',
    secondary: 'bg-[#1E2226] text-white hover:bg-black border border-white/10 shadow-sm',
    outline: 'border-2 border-[#F37021] text-[#F37021] hover:bg-[#F37021] hover:text-white',
    ghost: 'bg-transparent text-slate-800 hover:bg-slate-100 hover:text-slate-900'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base'
  };

  if (variant === 'navbarCta') {
    return (
      <button
        className={cn(
          'relative group/btn overflow-hidden rounded-full p-[1.5px] bg-gradient-to-r from-[#F37021] via-[#FB923C] to-[#00A9CE] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(243,112,33,0.45)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        <span className={cn(
          'relative flex items-center justify-center gap-2 bg-[#0C1118] group-hover/btn:bg-[#141B26] text-white font-bold rounded-full transition-all',
          sizes[size]
        )}>
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};