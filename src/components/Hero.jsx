import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.25),_transparent_50%),_radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.15),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl"
        >
          AI‑native mobile apps from Munich — crafted for the next decade
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-white/70"
        >
          We are a team of three building high‑impact iOS and Android experiences powered by cutting‑edge AI. From healthcare to fintech, we turn complex workflows into delightful, autonomous products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition"
          >
            Start a project
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:border-white/40 hover:text-white transition"
          >
            Meet the studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
