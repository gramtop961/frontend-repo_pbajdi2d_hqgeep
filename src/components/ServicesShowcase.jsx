import { motion } from 'framer-motion';
import { Shield, Globe, Clock, Users } from 'lucide-react';

const services = [
  {
    title: 'Vessel Inspections',
    desc: 'Thorough port and at-sea inspections with crystal-clear reporting and photographic evidence.',
    icon: Shield,
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Global Coverage',
    desc: 'Rapid dispatch through our international network to minimize off-hire and delays.',
    icon: Globe,
    color: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'Rapid Turnaround',
    desc: 'Actionable findings within hours, structured for operators, owners, and charterers.',
    icon: Clock,
    color: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Crew Training',
    desc: 'Onboard workshops and remote refreshers focused on safety culture and best practices.',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Services built for reliability</h2>
            <p className="mt-2 max-w-2xl text-gray-600">A focused suite of offerings that help you operate safely, efficiently, and with confidence.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50">
          <Icon className="h-5 w-5 text-gray-800" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600">
          Learn more
          <span className="ml-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}
