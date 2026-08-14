'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function FeatureCard({ icon, title, description, index }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 12);
    rotateY.set((px - 0.5) * 12);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const background = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(220px circle at ${gx}% ${gy}%, rgba(167,139,250,0.16), transparent 70%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="glass glow-border rounded-2xl p-6 relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background }} />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/25 to-azure-500/20 flex items-center justify-center mb-5 border border-white/10">
          {icon}
        </div>
        <h3 className="font-display text-lg text-white mb-2">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
