import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

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

    const baseStyles = 'font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center relative disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[#111112] text-white hover:bg-gray-800',
        secondary: 'bg-transparent text-white border border-white/10 hover:bg-transparent hover:border-gray-300',
        outline: 'border border-white/10 text-white hover:bg-transparent',
        ghost: 'bg-transparent text-white hover:bg-transparent'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-[17px]'
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        </button>
    );
};