'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { ReactNode } from 'react';

interface TrustItem {
    icon: ReactNode;
    label: string;
}

const defaultTrustItems: TrustItem[] = [
    { icon: <FaMapMarkerAlt />, label: 'Standort Berlin' },
    { icon: <FaClock />, label: '10+ Jahre Erfahrung' },
    { icon: <FaShieldAlt />, label: '100% Transparenz' },
    { icon: <FaChartLine />, label: 'Performance-Fokus' },
];

interface LogoCloudProps {
    items?: TrustItem[];
    title?: string;
}

export default function LogoCloud({ items = defaultTrustItems, title }: LogoCloudProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="py-12 border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                {title && (
                    <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">{title}</p>
                )}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 md:gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-3 text-gray-400"
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: shouldReduceMotion ? 0 : i * 0.1 }}
                        >
                            <span className="text-gold-300 text-lg">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
