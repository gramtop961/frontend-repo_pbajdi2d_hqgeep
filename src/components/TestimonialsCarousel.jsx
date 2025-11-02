import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'SMS delivered one of the most actionable inspection reports we have seen. Clear, timely, and professional throughout.',
    name: 'Operations Lead',
    org: 'Global Tankers Co.',
    rating: 5,
  },
  {
    quote:
      'Their pre-vetting support helped us pass on the first attempt. The crew sessions were particularly valuable.',
    name: 'Fleet Manager',
    org: 'BlueWave Shipping',
    rating: 5,
  },
  {
    quote:
      'Fast turnaround with zero compromise on depth. Exactly what we need during busy port calls.',
    name: 'Chartering Dept.',
    org: 'Oceanic Traders',
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-indigo-50/60 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">What clients say</h2>
            <p className="mt-2 max-w-2xl text-gray-600">Trusted by owners, operators, and charterers across major routes.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid items-center gap-6 sm:grid-cols-3"
            >
              <div className="sm:col-span-2">
                <Quote className="mb-3 h-6 w-6 text-indigo-600" />
                <p className="text-lg leading-relaxed text-gray-800">“{testimonials[index].quote}”</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <strong className="font-semibold text-gray-900">{testimonials[index].name}</strong>
                  <span>•</span>
                  <span>{testimonials[index].org}</span>
                </div>
              </div>
              <div className="flex items-center justify-start sm:justify-center">
                <div className="rounded-2xl border border-black/10 bg-gray-50 p-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Average client rating</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
