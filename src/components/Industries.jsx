import { motion } from 'framer-motion';
import { Brain, Smartphone, Shield, Rocket } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'Healthcare & Bio',
    desc: 'Privacy‑first patient assistants, clinical data capture, and on‑device inference for real‑time decision support.',
  },
  {
    icon: Shield,
    title: 'Fintech & Compliance',
    desc: 'Fraud detection, autonomous reconciliation, and secure identity flows built for regulated environments.',
  },
  {
    icon: Smartphone,
    title: 'Consumer & Creator',
    desc: 'Generative media, personal AI agents, and delightful mobile UX that feels magical yet familiar.',
  },
  {
    icon: Rocket,
    title: 'Industrial & Ops',
    desc: 'Field automation, vision‑based QA, and predictive maintenance wrapped in robust offline‑first mobile apps.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-black py-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          We build across industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          End‑to‑end product teams shipping production AI on mobile — from prototypes to enterprise deployments.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
