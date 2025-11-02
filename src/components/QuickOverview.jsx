import { Globe, Timer, ShieldCheck, Users } from 'lucide-react'

export default function QuickOverview() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 sm:px-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold">Who We Are</h3>
          <p className="mt-3 text-gray-600">
            SMS is a global marine safety partner specializing in vetting,
            inspections, training, and operational excellence. We help ship
            operators and charterers meet the highest safety benchmarks.
          </p>
          <a
            href="#about"
            className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
          >
            Learn more about us →
          </a>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold">Key Numbers</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <Stat icon={<ShieldCheck className="text-blue-600" size={18} />} label="Inspections" value="1,250+" />
            <Stat icon={<Timer className="text-blue-600" size={18} />} label="Avg. TAT" value="48 hrs" />
            <Stat icon={<Users className="text-blue-600" size={18} />} label="Audits" value="600+" />
            <Stat icon={<Globe className="text-blue-600" size={18} />} label="Countries" value="45+" />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold">Global Coverage</h3>
          <p className="mt-3 text-gray-600">
            Inspectors available across Asia, Middle East, and Europe with 24/7
            coordination support for port calls and offshore operations.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
            <span className="rounded-full bg-blue-50 px-3 py-1">Asia</span>
            <span className="rounded-full bg-blue-50 px-3 py-1">Middle East</span>
            <span className="rounded-full bg-blue-50 px-3 py-1">Europe</span>
            <span className="rounded-full bg-blue-50 px-3 py-1">Global Remote</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-gray-200">
        {icon}
      </div>
      <div>
        <div className="text-lg font-bold">{value}</div>
        <div className="text-xs text-gray-500">{label}</div>
      </div>
    </div>
  )
}
