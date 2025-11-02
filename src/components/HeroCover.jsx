import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Globe, Rocket } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 backdrop-blur">
            <Rocket className="h-4 w-4 text-indigo-600" />
            <span className="text-xs font-medium text-gray-700">Modern Safety & Marine Services</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl"
          >
            World-class Ship Inspections with a Playful, Modern Edge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-2xl text-lg text-gray-700 sm:text-xl"
          >
            We blend rigorous compliance with delightful digital experiences—from rapid inspections to transparent reporting, backed by a global network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#insights"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              Explore Services
            </a>
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <FloatingBadge icon={<Shield className="h-4 w-4" />} label="Class-approved" />
            <FloatingBadge icon={<Globe className="h-4 w-4" />} label="Global coverage" delay={0.2} />
            <FloatingBadge icon={<Rocket className="h-4 w-4" />} label="Rapid turnaround" delay={0.4} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBadge({ icon, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -3 }}
      className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-sm text-gray-700 backdrop-blur"
    >
      <span className="text-indigo-600">{icon}</span>
      <span className="font-medium">{label}</span>
    </motion.div>
  );
}
