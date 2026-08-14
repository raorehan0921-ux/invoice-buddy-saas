'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const ICON_PROPS = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: '#C4B5FD', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

const features = [
  {
    title: 'AI Invoice Generator',
    description: 'Describe the job in plain language and get a polished, itemized invoice in seconds.',
    icon: <svg {...ICON_PROPS}><path d="M7 3h10a1 1 0 0 1 1 1v16l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>,
  },
  {
    title: 'Expense Tracking',
    description: 'Every bill and receipt sorted into categories automatically — no manual entry.',
    icon: <svg {...ICON_PROPS}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg>,
  },
  {
    title: 'Smart Reports',
    description: 'Monthly summaries that explain what changed and why, not just what happened.',
    icon: <svg {...ICON_PROPS}><path d="M4 19V5M4 19h16"/><rect x="7" y="12" width="3" height="7"/><rect x="12" y="8" width="3" height="11"/><rect x="17" y="4" width="3" height="15"/></svg>,
  },
  {
    title: 'Tax Calculation',
    description: 'Applicable taxes calculated line by line, ready for filing without spreadsheets.',
    icon: <svg {...ICON_PROPS}><circle cx="12" cy="12" r="9"/><path d="M9 9h.01M15 15h.01M15 9l-6 6"/></svg>,
  },
  {
    title: 'Client Management',
    description: 'A living record of every customer — balances, history, and contact details.',
    icon: <svg {...ICON_PROPS}><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="8" r="2.4"/><path d="M17 12.5c2.4.3 4 2.2 4 4.7"/></svg>,
  },
  {
    title: 'Payment Tracking',
    description: 'See who has paid, who is late, and who to nudge — all updated automatically.',
    icon: <svg {...ICON_PROPS}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><circle cx="7" cy="15" r="1"/></svg>,
  },
  {
    title: 'PDF Export',
    description: 'Every invoice and report exports as a clean, print-ready PDF in one click.',
    icon: <svg {...ICON_PROPS}><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.5 13.5h1.2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3H9.5v-2.6zM9.5 16v1.5"/></svg>,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Cash flow, top customers, and monthly trends — one glance, full clarity.',
    icon: <svg {...ICON_PROPS}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-6 md:px-12 bg-void">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-violet-300/60 mb-4">Everything, automated</div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            One AI engine, <span className="text-gradient">the whole back office</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} index={i} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
