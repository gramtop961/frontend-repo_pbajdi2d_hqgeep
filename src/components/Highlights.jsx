import { BarChart3, Newspaper, Bell, ArrowRight, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Highlights() {
  return (
    <section id="insights" className="mx-auto mt-12 max-w-7xl px-6 sm:px-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Monthly Inspection Tracker</h3>
            <a href="#dashboard" className="text-sm font-semibold text-blue-600 hover:underline">
              View dashboard →
            </a>
          </div>
          <MiniChart />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <h3 className="text-xl font-semibold">Latest Updates</h3>
          <ul className="mt-4 space-y-3">
            <UpdateItem icon={<Newspaper size={16} />} title="Industry Insights" subtitle="SIRE 2.0, TMSA 3 best practices, MEPC updates" />
            <UpdateItem icon={<Bell size={16} />} title="Safety Bulletins" subtitle="Download monthly bulletins and checklists" />
            <UpdateItem icon={<BarChart3 size={16} />} title="News & Events" subtitle="Seminars, partnerships, and campaigns" />
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">
              <Mail size={16} /> Subscribe
            </a>
            <a href="#bulletins" className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-200">
              Explore <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function UpdateItem({ icon, title, subtitle }) {
  return (
    <li className="flex items-start gap-3 rounded-xl p-2 hover:bg-gray-50">
      <div className="mt-1 text-blue-600">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-gray-600">{subtitle}</div>
      </div>
    </li>
  )
}

function MiniChart() {
  // Simple animated bars to suggest activity
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500)
    return () => clearInterval(id)
  }, [])

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  const base = [8, 12, 10, 15, 9, 14, 18, 16]

  return (
    <div className="mt-6">
      <div className="flex items-end gap-3 overflow-x-auto pb-2">
        {months.map((m, i) => {
          const val = base[i] + ((tick + i) % 3) - 1 // small oscillation
          return (
            <div key={m} className="flex w-12 flex-col items-center">
              <div
                className="w-full rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 transition-all"
                style={{ height: `${val * 6}px` }}
              />
              <span className="mt-2 text-xs text-gray-500">{m}</span>
            </div>
          )
        })}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
        <Legend color="bg-blue-600" label="Oil" />
        <Legend color="bg-cyan-400" label="Chemical" />
        <Legend color="bg-indigo-400" label="Gas" />
      </div>
    </div>
  )
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`}></span>
      {label}
    </div>
  )
}
