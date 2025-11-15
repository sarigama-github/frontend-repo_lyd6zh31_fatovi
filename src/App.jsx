import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Services, Proof, Pricing, Testimonials, FAQs, CTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <main>
        <Services />
        <Proof />
        <Pricing />
        <Testimonials />
        <FAQs />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Sidiously Consulting. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#cta" className="hover:text-slate-900">Start a Project</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
