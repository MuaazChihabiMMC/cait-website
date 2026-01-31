'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface StatItem {
    value: string;
    label: string;
}

interface StatsProps {
    stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    className="text-center p-6 glass-panel rounded-xl"
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: shouldReduceMotion ? 0 : i * 0.1, duration: 0.5 }}
                >
                    <div className="text-3xl md:text-4xl font-bold text-gold-300 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
}
