import { motion } from 'framer-motion';

const items = [
  'Port State Control',
  'Pre-vetting',
  'ISM / ISPS Audits',
  'Condition Assessment',
  'Bulk / Tanker Expertise',
  'Class & Flag Liaison',
  'Crew Training',
  'Safety Bulletins',
];

export default function FeatureMarquee() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-indigo-50/50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">What we specialize in</h2>
          <span className="text-sm text-gray-600">Always-on expertise</span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
          <MarqueeRow />
          <MarqueeRow reverse delay={8} />
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ reverse = false, delay = 0 }) {
  const direction = reverse ? -1 : 1;
  return (
    <div className="relative flex w-full items-center py-2">
      <motion.div
        className="flex min-w-max gap-4 pr-4"
        animate={{ x: [0, direction * -1000] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 18, delay }}
      >
        {[...items, ...items].map((label, idx) => (
          <span
            key={`${label}-${idx}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
