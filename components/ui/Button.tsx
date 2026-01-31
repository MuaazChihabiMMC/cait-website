'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: ReactNode;
    fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-gold-300 text-primary hover:bg-gold-200 btn-shine btn-glow',
    secondary: 'bg-primary-light text-white hover:bg-primary-light/80',
    outline: 'border-2 border-gold-300/50 text-gold-300 hover:bg-gold-300/10',
    ghost: 'text-gold-300 hover:bg-gold-300/10',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    icon,
    fullWidth = false,
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2 rounded-full font-semibold
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-300/50 focus:ring-offset-2 focus:ring-offset-primary
    ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

    if (href) {
        return (
            <Link href={href} className={baseStyles}>
                {children}
                {icon}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseStyles}>
            {children}
            {icon}
        </button>
    );
}
