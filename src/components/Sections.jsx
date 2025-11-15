import { Sparkles, Gauge, Rocket, Shield, Zap, BadgeCheck, Infinity, Stars, Diamond } from 'lucide-react'

export function Services() {
  const features = [
    { icon: Rocket, title: 'Go-To-Market', desc: 'Narratives, funnels, and launch systems built for momentum.' },
    { icon: Gauge, title: 'Conversion Design', desc: 'High-clarity UX with neon accents and clean information scent.' },
    { icon: Zap, title: 'Automation', desc: 'No-code to code, ops autopilot, and scalable workflows.' },
    { icon: Shield, title: 'Trust Architecture', desc: 'Credibility frameworks, social proof, and objection handling.' },
  ]
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.10),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.10),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Services that feel <span className="bg-gradient-to-r from-sky-500 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">effortless</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Built for founders and teams who value clarity, speed, and conversion. Minimal surface area, maximum signal.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/70 border border-slate-200/60 p-6 shadow-sm backdrop-blur transition hover:shadow-lg">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-sky-400 via-violet-500 to-fuchsia-500 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Proof() {
  const stats = [
    { label: 'Pipeline influenced', value: '$12.4M' },
    { label: 'Design experiments', value: '540+' },
    { label: 'Avg. conversion lift', value: '38%' },
    { label: 'Playbooks shipped', value: '32' },
  ]
  return (
    <section id="proof" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="text-slate-600 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const tiers = [
    {
      name: 'Studio',
      price: '$2,900',
      blurb: 'Sprint-based engagement for fast outcomes.',
      points: ['1 core objective', 'Design + copy + dev support', '2-week runtime', 'Email + async comms'],
      cta: 'Start Sprint',
      badge: 'Popular',
    },
    {
      name: 'Partner',
      price: '$6,900',
      blurb: 'Deep collaboration with weekly momentum.',
      points: ['Prioritized roadmap', 'Weekly experiments', 'Analytics + CRO', 'Slack + reviews'],
      cta: 'Book Partnership',
      badge: 'Best Value',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      blurb: 'Aligned with your scale and compliance needs.',
      points: ['Multi-team enablement', 'Governance + security', 'SLAs + training', 'Custom integrations'],
      cta: 'Talk to Sales',
      badge: 'Premium',
    },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, premium pricing</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Choose the engagement that matches your ambition. Switch or scale anytime.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-sm backdrop-blur">
              <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-white shadow">
                {tier.badge}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-2 text-4xl font-extrabold text-slate-900">{tier.price}</div>
              <p className="mt-2 text-slate-600">{tier.blurb}</p>
              <ul className="mt-6 grid gap-2">
                {tier.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <BadgeCheck className="h-4 w-4 text-violet-600" /> {p}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:-translate-y-0.5 transition">
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    {
      name: 'Amara K.',
      role: 'Founder, Lumen Labs',
      quote: 'We saw a 3x lift in qualified demos within six weeks. The clarity is unmatched.',
    },
    {
      name: 'Jon S.',
      role: 'Head of Growth, Nova',
      quote: 'They blend strategy and aesthetics flawlessly. Our brand finally feels premium and effective.',
    },
    {
      name: 'Priya N.',
      role: 'COO, Orbital',
      quote: 'Execution was fast and the outcomes stuck. The playbooks keep paying dividends.',
    },
  ]
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What clients say</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Proof beats promises. A few words from teams we support.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-sm backdrop-blur">
              <Stars className="h-6 w-6 text-violet-600" />
              <blockquote className="mt-4 text-slate-700">“{q.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-slate-600">{q.name} — {q.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQs() {
  const faqs = [
    { q: 'What makes this different?', a: 'A blend of high-clarity strategy and premium execution. Minimalist surface, deep systems.' },
    { q: 'How fast can we start?', a: 'Typically within 7–10 days. Discovery call → proposal → kickoff.' },
    { q: 'Do you work with startups or enterprise?', a: 'Both. We calibrate scope and governance to your stage and needs.' },
    { q: 'What outcomes can we expect?', a: 'We align on measurable objectives—conversion lift, pipeline, activation, retention.' },
  ]
  return (
    <section id="faqs" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 md:p-12 shadow-sm backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl p-1">
                <h3 className="font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 p-10 shadow-sm backdrop-blur">
          <div className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-sky-400/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl" />
          <div className="relative grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build your advantage</h3>
              <p className="mt-3 text-slate-600">Tell us about your objectives and constraints. We’ll propose a roadmap within 48 hours.</p>
            </div>
            <form className="grid gap-3">
              <input required placeholder="Your name" className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
              <input required type="email" placeholder="Work email" className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
              <textarea placeholder="What are you trying to achieve?" rows={3} className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm outline-none focus:ring-2 focus:ring-violet-500/30" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow hover:-translate-y-0.5 transition">Request Proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
