import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-white">A focused studio of three</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Based in Munich, we combine product strategy, world‑class mobile engineering, and applied AI research. Our team of three partners leads every engagement directly — no handoffs, no silos.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Time to value', value: '8–12 weeks' },
                { label: 'Model agnostic', value: 'Open & closed' },
                { label: 'Platforms', value: 'iOS • Android' },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-1 text-white font-medium">{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {['Product', 'Engineering', 'Research'].map((role, i) => (
                  <div key={role} className="rounded-xl bg-black/40 border border-white/10 p-5">
                    <div className="text-white font-medium">Partner {i + 1}</div>
                    <div className="text-xs text-white/60">{role}</div>
                    <div className="mt-4 text-sm text-white/70">
                      10+ years shipping mobile AI at scale. We stay hands‑on from architecture to pixel polish.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
