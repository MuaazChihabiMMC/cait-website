'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index?: number;
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className="glass-panel card-hover p-6 md:p-8 rounded-2xl group"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gold-300/10 flex items-center justify-center text-gold-300 text-2xl mb-5 group-hover:bg-gold-300/20 transition-colors">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </motion.div>
    );
}
