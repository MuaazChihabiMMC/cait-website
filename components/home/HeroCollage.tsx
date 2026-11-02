'use client';

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { AdMock, BrowserFrame, NotifyMock, PhoneFrame, SiteMock, SocialPostMock } from '@/components/site/Mockups';

// Collage aus Arbeitsbeispielen: Website, Smartphone, Anzeige, Chat, Diagramm.
// Ebenen bewegen sich beim Scrollen und mit dem Mauszeiger unterschiedlich schnell (Parallaxe).
export default function HeroCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -140]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -230]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const rotY = useTransform(sx, [-1, 1], [-6, 6]);
  const rotX = useTransform(sy, [-1, 1], [5, -5]);
  const xFront = useTransform(sx, [-1, 1], [-14, 14]);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [px, py, reduce]);

  const enter = (delay: number, from = 40) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: from, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div ref={ref} className="relative mx-auto aspect-[1/1] w-full max-w-[640px] [perspective:1400px]" role="img" aria-label="Beispielhafte Darstellung: Website, Social-Media-Beitrag und Google-Anzeige">
      {/* Leuchten hinter der Collage */}
      <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)] blur-2xl" />

      <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="absolute inset-0 [transform-style:preserve-3d]">
        {/* Website */}
        <motion.div style={{ y: yBack }} className="absolute left-0 top-[12%] w-[80%]">
          <motion.div {...enter(0.15, 60)}>
            <BrowserFrame>
              <SiteMock />
            </BrowserFrame>
          </motion.div>
        </motion.div>

        {/* Smartphone mit Beitrag */}
        <motion.div style={{ y: yMid }} className="absolute right-0 top-[24%] w-[33%]">
          <motion.div {...enter(0.35, 80)}>
            <PhoneFrame>
              <SocialPostMock />
            </PhoneFrame>
          </motion.div>
        </motion.div>

        {/* Anzeige */}
        <motion.div style={{ y: yFront, x: xFront }} className="absolute bottom-[6%] left-[-3%] w-[54%]">
          <motion.div {...enter(0.55, 60)}>
            <AdMock />
          </motion.div>
        </motion.div>

        {/* Benachrichtigung */}
        <motion.div style={{ y: yFront, x: xFront }} className="absolute right-[18%] top-[0%] w-[50%]">
          <motion.div {...enter(0.8, 20)}>
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <NotifyMock />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
