import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 shadow-lg shadow-fuchsia-500/20"
          >
            <Rocket className="h-5 w-5 text-white" />
          </motion.div>
          <div>
            <span className="block text-white font-semibold tracking-tight">Vanta Labs</span>
            <span className="block text-xs text-white/60 -mt-1">AI‑Native Mobile Studio</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#industries" className="text-white/70 hover:text-white transition">Industries</a>
          <a href="#about" className="text-white/70 hover:text-white transition">Studio</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
        </nav>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition"
        >
          <Sparkles className="h-4 w-4" /> Start a project
        </motion.a>
      </div>
    </header>
  );
}
