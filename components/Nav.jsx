'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 bg-void/60 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-azure-400 shadow-glow" />
        <span className="font-display text-lg tracking-tight text-white">Invoice Buddy AI</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <MagneticButton
        variant="secondary"
        className="!py-2.5 !px-5 text-xs"
        onClick={() => { window.location.href = '/app.html'; }}
      >
        Get started
      </MagneticButton>
    </motion.nav>
  );
}
