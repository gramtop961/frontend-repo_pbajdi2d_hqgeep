import { Quote, Star, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

const QUOTES = [
  {
    text:
      'SMS brought clarity and rigor to our vetting process. Their turnaround and professionalism are unmatched.',
    author: 'Chartering Manager, Global Oil Major',
  },
  {
    text:
      'Their inspectors are seasoned mariners. The insights we receive translate directly into safer operations.',
    author: 'HSSE Lead, Tanker Operator',
  },
  {
    text:
      'Reliable, responsive, and focused on continuous improvement — exactly what the industry needs.',
    author: 'Fleet Director, Chemical Carrier',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % QUOTES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="mx-auto my-16 max-w-7xl px-6 sm:px-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-6 text-white shadow-sm">
          <div className="flex items-center gap-2 text-white/90">
            <Award size={18} /> Our Achievements
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li>ISO-aligned safety management practices</li>
            <li>OCIMF-aligned inspection readiness</li>
            <li>Global client portfolio across 45+ countries</li>
          </ul>
          <div className="mt-6 rounded-xl bg-white/10 p-4">
            <div className="text-sm font-semibold">Certifications</div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/90">
              <span className="rounded-full bg-white/10 px-3 py-1">ISO 9001</span>
              <span className="rounded-full bg-white/10 px-3 py-1">ISO 14001</span>
              <span className="rounded-full bg-white/10 px-3 py-1">OCIMF</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-2 text-blue-600">
              <Quote size={18} /> Testimonials
            </div>
            <div className="relative mt-4 min-h-[140px]">
              {QUOTES.map((q, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
                >
                  <p className="text-lg leading-relaxed text-gray-800">“{q.text}”</p>
                  <p className="mt-3 text-sm font-medium text-gray-600">— {q.author}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-1">
              {QUOTES.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 w-2 rounded-full ${i === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Badge label="Client List" />
              <Badge label="Case Studies" />
              <Badge label="Company Brochure" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Badge({ label }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
      <span>{label}</span>
      <div className="flex items-center gap-0.5 text-yellow-500">
        <Star size={14} />
        <Star size={14} />
        <Star size={14} />
      </div>
    </div>
  )
}
