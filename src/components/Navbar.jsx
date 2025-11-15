import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Proof', href: '#proof' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-400 shadow-lg"></div>
            <span className="text-lg font-semibold tracking-tight">Sidiously Consulting</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-slate-900 text-white text-sm font-medium px-4 py-2 shadow-sm hover:shadow-md transition-all">
              Start a Project
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 grid gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 bg-white/70 border border-slate-200/60 shadow-sm">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 bg-slate-900 text-white shadow">
              Start a Project
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
