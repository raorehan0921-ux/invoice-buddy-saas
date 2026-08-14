'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const chartData = [
  { m: 'Feb', v: 180000 },
  { m: 'Mar', v: 210000 },
  { m: 'Apr', v: 195000 },
  { m: 'May', v: 260000 },
  { m: 'Jun', v: 300000 },
  { m: 'Jul', v: 348000 },
];

const invoices = [
  { client: 'Ahmed Traders', amount: 'Rs. 18,000', status: 'Paid' },
  { client: 'Bilal Store', amount: 'Rs. 22,000', status: 'Overdue' },
  { client: 'Fatima Distributors', amount: 'Rs. 12,000', status: 'Paid' },
  { client: 'Hamza Enterprises', amount: 'Rs. 9,500', status: 'Pending' },
];

const activity = [
  'AI generated invoice #0417 for Ahmed Traders',
  'Payment received from Fatima Distributors',
  'Monthly report ready for review',
  'Reminder sent to Bilal Store',
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

function statusColor(status) {
  if (status === 'Paid') return 'text-emerald-300 bg-emerald-400/10 border-emerald-400/30';
  if (status === 'Overdue') return 'text-orange-300 bg-orange-400/10 border-orange-400/30';
  return 'text-violet-300 bg-violet-400/10 border-violet-400/30';
}

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-32 px-6 md:px-12 bg-void overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-violet-300/60 mb-4">See it in action</div>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Your business, <span className="text-gradient">at a glance</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1 }}
          className="glass glow-border rounded-3xl p-6 md:p-8"
        >
          {/* Revenue cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Total revenue', value: 'Rs. 3,48,000', trend: '+16%' },
              { label: 'Outstanding', value: 'Rs. 40,000', trend: '-8%' },
              { label: 'Active clients', value: '27', trend: '+3' },
            ].map((card) => (
              <motion.div key={card.label} variants={fadeUp} className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                <div className="text-[11px] uppercase tracking-widest text-white/40 mb-2">{card.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl text-white">{card.value}</span>
                  <span className="text-xs text-emerald-300">{card.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Chart */}
            <motion.div variants={fadeUp} className="md:col-span-3 rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-white/70 font-medium">Revenue trend</span>
                <span className="text-[11px] text-violet-300/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-glow" /> AI insight: up 16% vs last quarter
                </span>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#A78BFA" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#A78BFA" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="m" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ background: '#141426', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, fontSize: 12 }}
                      labelStyle={{ color: '#fff' }}
                      formatter={(v) => [`Rs. ${v.toLocaleString('en-IN')}`, 'Revenue']}
                    />
                    <Area type="monotone" dataKey="v" stroke="#A78BFA" strokeWidth={2} fill="url(#rev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Invoice list */}
            <motion.div variants={fadeUp} className="md:col-span-2 rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <div className="text-sm text-white/70 font-medium mb-4">Recent invoices</div>
              <div className="space-y-3">
                {invoices.map((inv) => (
                  <div key={inv.client} className="flex items-center justify-between text-sm">
                    <span className="text-white/70">{inv.client}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-white/90 text-xs">{inv.amount}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${statusColor(inv.status)}`}>{inv.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent activity */}
          <motion.div variants={fadeUp} className="mt-6 rounded-2xl bg-white/[0.03] border border-white/10 p-5">
            <div className="text-sm text-white/70 font-medium mb-4">Recent activity</div>
            <div className="space-y-3">
              {activity.map((a, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70 flex-shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
