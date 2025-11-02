import { useState } from 'react';
import { Rocket, Menu, Mail, Phone } from 'lucide-react';
import HeroCover from './components/HeroCover';
import FeatureMarquee from './components/FeatureMarquee';
import ServicesShowcase from './components/ServicesShowcase';
import TestimonialsCarousel from './components/TestimonialsCarousel';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/30 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="group flex items-center gap-2 font-extrabold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            <span className="tracking-tight">SMS Shipping</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-700 md:flex">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#insights" className="hover:text-indigo-600">Insights</a>
            <a href="#contact" className="rounded-lg bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-500">Contact</a>
          </nav>
          <button className="md:hidden" aria-label="menu" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mx-4 mb-3 rounded-xl border border-black/10 bg-white p-4 text-sm font-semibold shadow-sm md:hidden">
            <div className="grid gap-3">
              <a href="#home" className="hover:text-indigo-600">Home</a>
              <a href="#services" className="hover:text-indigo-600">Services</a>
              <a href="#insights" className="hover:text-indigo-600">Insights</a>
              <a href="#contact" className="rounded-lg bg-indigo-600 px-3 py-2 text-center text-white">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main id="home" className="space-y-0">
        <HeroCover />
        <FeatureMarquee />
        <ServicesShowcase />
        <section id="insights" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Safety Bulletins</h3>
              <p className="mt-2 text-sm text-gray-600">A selection of recent advisories and best practices to keep your teams aligned.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>Hot Work protocols: updated checklists</li>
                <li>Cargo handling near-miss patterns</li>
                <li>Bridge Resource Management highlights</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">News & Events</h3>
              <p className="mt-2 text-sm text-gray-600">Where we are speaking, publishing, and collaborating with industry partners.</p>
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>• Vetting Summit: panel on digital inspections</p>
                <p>• Port Tech Expo: crew training demos</p>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Knowledge Hub</h3>
              <p className="mt-2 text-sm text-gray-600">Guides, templates, and frameworks curated by our inspectors for day-to-day ops.</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600">Browse resources →</div>
            </div>
          </div>
        </section>
        <TestimonialsCarousel />

        {/* CTA */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 sm:pb-20">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-sm sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">Ready to elevate safety standards?</h3>
                <p className="mt-2 text-white/90">Get in touch for inspections, audits, training, and bespoke consultancy. We reply within 24 hours.</p>
                <div className="mt-5 flex flex-wrap gap-4 text-indigo-50/90">
                  <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@smsshipping.com</span>
                  <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</span>
                </div>
              </div>
              <div className="flex gap-3 md:justify-end">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50">Contact Our Team</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/40 hover:bg-white/20">Subscribe</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} SMS Shipping. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#insights" className="hover:text-indigo-600">Insights</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
