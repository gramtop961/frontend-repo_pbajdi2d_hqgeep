import { useEffect, useState } from 'react'
import { Shield, Ship, BadgeCheck } from 'lucide-react'

const slides = [
  {
    type: 'image',
    src:
      'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Tanker at sea',
  },
  {
    type: 'image',
    src:
      'https://images.unsplash.com/photo-1551135049-8a33b5883816?q=80&w=1600&auto=format&fit=crop',
    alt: 'Safety inspection in progress',
  },
  {
    type: 'image',
    src:
      'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1600&auto=format&fit=crop',
    alt: 'Port operations at dusk',
  },
]

export default function HeroBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] w-full rounded-3xl bg-gray-900">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === i ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20" />
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 sm:px-10 lg:px-16 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Shield size={14} />
            Trusted marine safety partner
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Safety. Trust. Operational Excellence.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            SMS delivers end‑to‑end marine inspections, audits, and training with
            global coverage and rapid turnaround — elevating safety standards
            across fleets worldwide.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500"
            >
              <BadgeCheck size={18} /> Contact Our Team
            </a>
            <a
              href="#insights"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20"
            >
              <Ship size={18} /> Subscribe to Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
