'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

interface HeroProps {
    badge?: string;
    headline: string;
    highlightedWord?: string;
    subheadline: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA?: { text: string; href: string };
    trustBadges?: string[];
}

export default function Hero({
    badge = '#1 Marketing Agentur Berlin',
    headline = 'CAIT Social Media',
    highlightedWord = 'Agentur',
    subheadline,
    primaryCTA,
    secondaryCTA,
    trustBadges = ['Berlin', '10+ Jahre Erfahrung', '100% Transparenz', 'Performance-Fokus'],
}: HeroProps) {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-mesh-dark" />

            {/* Floating Orbs */}
            {!shouldReduceMotion && (
                <>
                    <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gold-300/10 blur-[100px] animate-float1" />
                    <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-primary-light/50 blur-[80px] animate-float2" />
                </>
            )}

            {/* Noise Overlay */}
            <div className="absolute inset-0 noise-overlay opacity-50" />

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants}>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-gold-300 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-gold-300 animate-pulse" />
                        {badge}
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    {headline}{' '}
                    <span className="text-gradient-gold">{highlightedWord}</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {subheadline}
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href={primaryCTA.href}
                        className="btn-shine btn-glow inline-flex items-center justify-center gap-2 bg-gold-300 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-200 transition-colors"
                    >
                        {primaryCTA.text}
                        <FaArrowRight className="text-sm" />
                    </Link>

                    {secondaryCTA && (
                        <Link
                            href={secondaryCTA.href}
                            className="inline-flex items-center justify-center gap-2 glass-panel border border-gold-300/30 text-gold-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300/10 transition-colors"
                        >
                            {secondaryCTA.text}
                        </Link>
                    )}
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    {trustBadges.map((badge, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-300/50" />
                            {badge}
                        </div>
                    ))}
                </motion.div>

                {/* Location */}
                <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center gap-2 text-gray-500 text-sm">
                    <FaMapMarkerAlt className="text-gold-300" />
                    <span>Berlin Zehlendorf</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
