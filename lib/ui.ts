import type { CSSProperties } from 'react';

// Verzögerung für gestaffelte Scroll-Einblendungen ([data-reveal])
export const revealDelay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

// Verzögerung für die Lade-Choreografie des Heros
export const heroDelay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;
