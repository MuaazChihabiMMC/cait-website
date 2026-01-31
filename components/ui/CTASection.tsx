'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface CTASectionProps {
    headline: string;
    description?: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
}

export default function CTASection({ headline, description, primaryCTA, secondaryCTA }: CTASectionProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-300/10 via-primary to-primary" />
            <div className="absolute inset-0 noise-overlay opacity-30" />

            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{headline}</h2>

                {description && (
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">{description}</p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={primaryCTA.href}
                        className="btn-shine btn-glow inline-flex items-center justify-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-200 transition-colors"
                    >
                        {primaryCTA.text}
                        <FaArrowRight />
                    </Link>

                    {secondaryCTA && (
                        <Link
                            href={secondaryCTA.href}
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                        >
                            {secondaryCTA.text}
                        </Link>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
