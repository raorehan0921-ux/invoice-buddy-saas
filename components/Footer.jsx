'use client';

import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer className="relative py-28 px-6 md:px-12 bg-void border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
          Let the AI run your <span className="text-gradient">back office</span>
        </h2>
        <p className="text-white/50 mb-10 max-w-lg mx-auto">
          Free to start. No credit card. Your first invoice is ready in under a minute.
        </p>
        <div className="flex items-center justify-center gap-4">
          <MagneticButton variant="primary" onClick={() => { window.location.href = '/app.html'; }}>Start free</MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => {
              navigator.clipboard?.writeText('hello@invoicebuddyai.com');
              alert('Email copied: hello@invoicebuddyai.com\nSend us a message anytime.');
            }}
          >
            Talk to us
          </MagneticButton>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 relative z-10">
        <span>© 2026 Invoice Buddy AI. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white/60 transition-colors">Terms</a>
          <a
            href="mailto:hello@invoicebuddyai.com"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard?.writeText('hello@invoicebuddyai.com');
              alert('Email copied: hello@invoicebuddyai.com');
            }}
            className="hover:text-white/60 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
