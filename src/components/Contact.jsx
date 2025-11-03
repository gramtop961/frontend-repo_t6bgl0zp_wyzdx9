import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-indigo-600/10 to-transparent">
          <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(800px_circle_at_20%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(600px_circle_at_80%_60%,rgba(99,102,241,0.25),transparent_40%)] pointer-events-none" />
          <div className="relative p-8 md:p-12">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-semibold text-white"
            >
              Let’s build your AI‑native app
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-3 max-w-2xl text-white/70"
            >
              Tell us about your product vision and constraints. We’ll respond within 24 hours with a plan and timeline.
            </motion.p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg bg-black/50 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-lg bg-black/50 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-lg bg-black/50 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <textarea
                placeholder="What are you building?"
                rows={4}
                className="md:col-span-3 w-full rounded-lg bg-black/50 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <div className="md:col-span-3 flex items-center justify-between">
                <div className="text-xs text-white/60">Munich • Operating worldwide</div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Send inquiry
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Vanta Labs — AI‑Native Mobile Studio from Munich
        </div>
      </div>
    </section>
  );
}
