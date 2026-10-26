import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import BlurText from './components/BlurText'
import { ArrowUpRight } from './components/icons'
import heroBride from './assets/hero-bride.webp'

// Sections are lazy-loaded so each section's images land in its own small
// bundle chunk (the push path rejects one very large file).
const Services = lazy(() => import('./sections/Services'))
const Packages = lazy(() => import('./sections/Packages'))
const Gallery = lazy(() => import('./sections/Gallery'))
const Testimonials = lazy(() =>
  import('./sections/Closing').then((m) => ({ default: m.Testimonials })),
)
const Booking = lazy(() =>
  import('./sections/Closing').then((m) => ({ default: m.Booking })),
)

const GOLD = '#d4af37'

const fadeUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#booking' },
]

function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16">
      <a href="#top" className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
        <span className="font-heading text-2xl italic" style={{ color: GOLD }}>
          A
        </span>
      </a>
      <div className="liquid-glass hidden items-center rounded-full px-1.5 py-1.5 md:flex">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="px-3 py-2 font-body text-sm font-medium text-white/90">
            {label}
          </a>
        ))}
        <a
          href="#booking"
          className="ml-1 flex items-center gap-1 rounded-full px-4 py-2 font-body text-sm font-medium text-black"
          style={{ background: GOLD }}
        >
          Book Appointment
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <a
        href="#booking"
        className="liquid-glass-strong rounded-full px-4 py-2 font-body text-sm font-medium text-white md:hidden"
      >
        Book
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBride}
          alt="Pakistani bride in a red lehenga with gold jewellery"
          className="kenburns h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-10 pt-28 text-center">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="liquid-glass flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4"
          >
            <span
              className="rounded-full px-2.5 py-0.5 font-body text-xs font-semibold text-black"
              style={{ background: GOLD }}
            >
              Karachi
            </span>
            <span className="font-body text-sm text-white/90">
              Luxury salon &amp; spa — bridal specialists
            </span>
          </motion.div>

          <BlurText
            text="Where every bride becomes unforgettable"
            className="mt-6 max-w-3xl text-6xl font-heading italic leading-[0.9] tracking-[-2px] text-white md:text-7xl lg:text-[5.5rem]"
          />

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.8 }}
            className="mt-4 max-w-2xl font-body text-sm font-light leading-snug text-white/90 md:text-base"
          >
            Aurelia Salon &amp; Spa — hair, skin and bridal artistry in a calm, golden studio.
            Red-lehenga mornings, mehndi evenings, and a chair that feels like your own.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.1 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#booking"
              className="liquid-glass-strong flex items-center gap-1.5 rounded-full px-5 py-2.5 font-body text-sm font-medium text-white"
            >
              Book Appointment
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium text-white"
              style={{ border: `1px solid ${GOLD}` }}
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <div className="liquid-glass w-[220px] max-w-[44vw] rounded-[1.25rem] p-5 text-left">
              <div className="font-heading text-4xl italic leading-none tracking-[-1px]" style={{ color: GOLD }}>
                Bridal
              </div>
              <p className="mt-2 font-body text-sm font-light text-white/80">
                Signature bridal makeup, hair &amp; mehndi — one studio, one look
              </p>
            </div>
            <div className="liquid-glass w-[220px] max-w-[44vw] rounded-[1.25rem] p-5 text-left">
              <div className="font-heading text-4xl italic leading-none tracking-[-1px]" style={{ color: GOLD }}>
                11–9
              </div>
              <p className="mt-2 font-body text-sm font-light text-white/80">
                Open daily, 11 AM to 9 PM — walk-ins &amp; appointments
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-center sm:px-8 lg:px-16">
      <div className="font-heading text-3xl italic" style={{ color: GOLD }}>
        Aurelia Salon &amp; Spa
      </div>
      <p className="mt-2 font-body text-sm font-light text-white/70">
        Luxury hair, skin &amp; bridal studio · Karachi · Open 11 AM – 9 PM
      </p>
      <p className="mt-4 font-body text-xs text-white/50">
        Demo website — rates, testimonials and imagery shown for demonstration.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <main className="bg-black font-body text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Services />
        <Packages />
        <Gallery />
        <Testimonials />
        <Booking />
      </Suspense>
      <Footer />
    </main>
  )
}
