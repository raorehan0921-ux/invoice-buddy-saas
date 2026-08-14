'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* ambient gradient backdrop */}
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-azure-500/15 blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-violet-200/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
            AI-native invoicing
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-white mb-6">
            Invoices that
            <span className="text-gradient"> write themselves</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-md mb-9">
            Invoice Buddy AI turns your sales, expenses, and receivables into
            invoices, reports, and answers — instantly, with an AI engine
            built for how small businesses actually work.
          </p>
          <div className="flex items-center gap-4">
            <MagneticButton variant="primary" onClick={() => { window.location.href = '/app.html'; }}>Start free</MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() => { document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Watch demo
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          className="relative h-[560px] md:h-[640px]"
        >
          <Hero3D />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase flex flex-col items-center gap-2"
      >
        Scroll
        <span className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
