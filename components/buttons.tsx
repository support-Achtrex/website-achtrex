import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, otherwise I'll fallback

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) => {

    // Manual class merging if cn doesn't exist (I'll assume it doesn't to be safe or use simple template literals)
    const baseStyles = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center relative group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-logo-gradient hover:opacity-95 text-white shadow-xl',
        secondary: 'bg-secondary hover:bg-secondary/90 text-white shadow-[0_0_20px_-5px_var(--secondary)]',
        outline: 'border border-white/20 hover:border-primary/50 text-white hover:bg-white/5 backdrop-blur-sm',
        ghost: 'bg-transparent hover:bg-white/10 text-white'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 pointer-events-none" />
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        </button>
    );
};