'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    align?: 'center' | 'left';
    dark?: boolean;
}

export default function SectionHeader({
    badge,
    title,
    description,
    align = 'center',
    dark = true,
}: SectionHeaderProps) {
    const shouldReduceMotion = useReducedMotion();
    const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

    return (
        <motion.div
            className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
        >
            {badge && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold-300/10 text-gold-300 text-sm font-medium mb-4">
                    {badge}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-primary'}`}>
                {title}
            </h2>
            {description && (
                <p className={`text-lg ${dark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}
