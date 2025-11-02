import HeroBanner from './components/HeroBanner'
import QuickOverview from './components/QuickOverview'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import { Ship, Menu } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-2 font-extrabold">
            <Ship className="text-blue-600" />
            <span>SMS Shipping</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-700 md:flex">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#insights" className="hover:text-blue-600">Insights</a>
            <a href="#contact" className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-500">Log In</a>
          </nav>
          <button className="md:hidden" aria-label="menu" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mx-6 mb-3 rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold md:hidden">
            <div className="grid gap-3">
              <a href="#home" className="hover:text-blue-600">Home</a>
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#services" className="hover:text-blue-600">Services</a>
              <a href="#insights" className="hover:text-blue-600">Insights</a>
              <a href="#contact" className="rounded-lg bg-blue-600 px-3 py-2 text-white text-center">Log In</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main id="home" className="mx-auto max-w-7xl space-y-12 pb-20 pt-6">
        <HeroBanner />
        <QuickOverview />
        <Highlights />
        <Testimonials />

        {/* CTA + Contact teaser */}
        <section id="contact" className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">Ready to elevate safety standards?</h3>
                <p className="mt-2 text-white/80">
                  Get in touch for inspections, audits, training, and bespoke consultancy. Subscribe to receive monthly safety bulletins.
                </p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500">Contact Our Team</a>
                <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/20">Subscribe</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} SMS Shipping. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#bulletins" className="hover:text-blue-600">Bulletins</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
