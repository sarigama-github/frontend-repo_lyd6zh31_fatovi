import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs font-medium text-violet-700 shadow-sm backdrop-blur">
            Premium Consulting for Ambitious Brands
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-sky-500 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Sidiously Consulting
            </span>
            <span className="block text-slate-900 mt-2">Neon-grade growth, crafted.</span>
          </h1>
          <p className="mt-6 text-slate-700 text-lg leading-relaxed">
            We design and scale category-defining experiences. Clean strategy, magnetic design, and systems that convert. Minimalist by default. Holographic when needed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 transition">
              Book a Discovery Call
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-6 py-3 font-semibold text-slate-900 shadow-sm hover:shadow-md transition">
              Explore Services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Projects Delivered', value: '210+' },
              { label: 'Avg. ROI', value: '4.7x' },
              { label: 'Client NPS', value: '72' },
              { label: 'Countries', value: '15' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/70 border border-slate-200/60 p-4 shadow-sm backdrop-blur">
                <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                <div className="text-slate-600 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
