import { motion } from 'framer-motion'
import BlurText from './components/BlurText'
import { ArrowUpRight } from './components/icons'
import heroBride from './assets/hero-bride.webp'
import brideMakeup from './assets/bride-makeup.webp'
import brideFull from './assets/bride-full.webp'
import mehndi from './assets/mehndi.webp'
import salonInterior from './assets/salon-interior.webp'
import hairstyling from './assets/hairstyling.webp'
import facial from './assets/facial.webp'
import manicure from './assets/manicure.webp'

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

const SERVICES = [
  {
    title: 'Hair Studio',
    img: hairstyling,
    alt: 'Hairstyling in progress in the salon',
    tags: ['Cut & Style', 'Colour', 'Hair Spa'],
    body: 'Precision cuts, soft waves and colour that suits your face — finished with a relaxing wash and style.',
  },
  {
    title: 'Skin & Facial',
    img: facial,
    alt: 'Relaxing facial treatment in the spa room',
    tags: ['Signature Facial', 'Clean-up', 'Spa Ritual'],
    body: 'Deep-cleanse facials and calm spa rituals for glow that lasts past the salon door.',
  },
  {
    title: 'Bridal & Makeup',
    img: brideMakeup,
    alt: 'Bride getting her makeup done at the salon vanity',
    tags: ['Bridal', 'Party Makeup', 'Mehndi'],
    body: 'From engagement to baraat — bridal makeup, hair setting and mehndi, planned around your day.',
  },
]

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black px-4 py-24 sm:px-8 lg:px-16">
      <p className="mb-6 font-body text-sm" style={{ color: GOLD }}>
        {'// Services'}
      </p>
      <h2 className="font-heading text-5xl italic leading-[0.9] tracking-[-2px] text-white md:text-6xl lg:text-[4.5rem]">
        Hair, skin &amp; bridal,
        <br />
        under one roof
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICES.map(({ title, img, alt, tags, body }) => (
          <article key={title} className="liquid-glass flex min-h-[480px] flex-col rounded-[1.25rem] p-4">
            <img src={img} alt={alt} className="h-56 w-full rounded-[0.9rem] object-cover" />
            <div className="mt-4 flex flex-wrap gap-1.5 px-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="liquid-glass whitespace-nowrap rounded-full px-3 py-1 font-body text-[11px] text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1" />
            <h3 className="px-2 font-heading text-3xl italic leading-none tracking-[-1px] text-white md:text-4xl">
              {title}
            </h3>
            <p className="mt-3 max-w-[36ch] px-2 pb-2 font-body text-sm font-light leading-snug text-white/90">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

const PACKAGES = [
  {
    name: 'Signature Facial',
    price: 'Rs 4,500',
    tag: 'Glow Ritual',
    features: ['Deep cleanse & massage', 'Face mask & polish', 'Head massage included'],
  },
  {
    name: 'Hair Spa + Cut',
    price: 'Rs 6,000',
    tag: 'Most Loved',
    features: ['Wash, spa & deep conditioning', 'Precision cut & blowout', 'Finishing style of your choice'],
    featured: true,
  },
  {
    name: 'Bridal Signature',
    price: 'Rs 45,000',
    tag: 'The Full Day',
    features: ['Bridal makeup & hair setting', 'Mehndi for both hands', 'Touch-up kit & dupatta setting'],
  },
]

function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-black px-4 py-24 sm:px-8 lg:px-16">
      <div className="absolute inset-0 z-0">
        <img src={salonInterior} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10">
        <p className="mb-6 font-body text-sm" style={{ color: GOLD }}>
          {'// Packages'}
        </p>
        <h2 className="font-heading text-5xl italic leading-[0.9] tracking-[-2px] text-white md:text-6xl lg:text-[4.5rem]">
          Simple prices,
          <br />
          no surprises
        </h2>
        <p className="mt-4 font-body text-sm text-white/70">Demo rates — shown for this demo website.</p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PACKAGES.map(({ name, price, tag, features, featured }) => (
            <article
              key={name}
              className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6"
              style={featured ? { boxShadow: `inset 0 0 0 1px ${GOLD}` } : undefined}
            >
              <span
                className="w-fit rounded-full px-3 py-1 font-body text-[11px] font-semibold text-black"
                style={{ background: GOLD }}
              >
                {tag}
              </span>
              <h3 className="mt-5 font-heading text-3xl italic leading-none tracking-[-1px] text-white md:text-4xl">
                {name}
              </h3>
              <div className="mt-3 font-heading text-5xl italic leading-none" style={{ color: GOLD }}>
                {price}
              </div>
              <ul className="mt-6 space-y-2">
                {features.map((f) => (
                  <li key={f} className="font-body text-sm font-light text-white/90">
                    — {f}
                  </li>
                ))}
              </ul>
              <div className="flex-1" />
              <a
                href="#booking"
                className="mt-6 flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 font-body text-sm font-medium text-black"
                style={{ background: GOLD }}
              >
                Book this package
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const GALLERY = [
  { img: brideFull, alt: 'Pakistani bride in a full red lehenga with gold embroidery', caption: 'Bridal Signature' },
  { img: mehndi, alt: 'Bride’s hands with intricate mehndi and gold bangles', caption: 'Mehndi detail' },
  { img: salonInterior, alt: 'Luxury salon interior with styling chairs and gold mirrors', caption: 'The studio' },
  { img: manicure, alt: 'Manicure in progress with deep red polish', caption: 'Nails & polish' },
  { img: brideMakeup, alt: 'Bride getting makeup done at the salon vanity', caption: 'Getting ready' },
  { img: facial, alt: 'Facial spa treatment in a calm candlelit room', caption: 'Spa calm' },
]

function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-black px-4 py-24 sm:px-8 lg:px-16">
      <p className="mb-6 font-body text-sm" style={{ color: GOLD }}>
        {'// Gallery'}
      </p>
      <h2 className="font-heading text-5xl italic leading-[0.9] tracking-[-2px] text-white md:text-6xl lg:text-[4.5rem]">
        Inside Aurelia
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map(({ img, alt, caption }) => (
          <figure key={caption} className="liquid-glass rounded-[1.25rem] p-3">
            <img src={img} alt={alt} className="h-72 w-full rounded-[0.9rem] object-cover" />
            <figcaption className="px-2 py-3 font-heading text-2xl italic text-white">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    quote: 'My bridal makeup stayed perfect from morning to the last dance. I felt like the best version of myself.',
    name: 'Ayesha K.',
    detail: 'Bridal Signature',
  },
  {
    quote: 'The salon is so calm and golden — I walked in tired and walked out glowing. The facial is worth every rupee.',
    name: 'Mahnoor S.',
    detail: 'Signature Facial',
  },
  {
    quote: 'They listened to exactly what I wanted for my hair, no rushing, no fuss. I have finally found my salon.',
    name: 'Zainab R.',
    detail: 'Hair Spa + Cut',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-black px-4 py-24 sm:px-8 lg:px-16">
      <p className="mb-6 font-body text-sm" style={{ color: GOLD }}>
        {'// Kind words'}
      </p>
      <h2 className="font-heading text-5xl italic leading-[0.9] tracking-[-2px] text-white md:text-6xl lg:text-[4.5rem]">
        Loved, in their words
      </h2>
      <p className="mt-4 font-body text-sm text-white/70">Demo testimonials for this demo website.</p>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TESTIMONIALS.map(({ quote, name, detail }) => (
          <blockquote key={name} className="liquid-glass flex min-h-[260px] flex-col rounded-[1.25rem] p-6">
            <p className="font-heading text-2xl italic leading-snug text-white">“{quote}”</p>
            <div className="flex-1" />
            <div className="mt-6 font-body text-sm font-medium text-white">{name}</div>
            <div className="font-body text-xs" style={{ color: GOLD }}>
              {detail}
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-black px-4 py-24 sm:px-8 lg:px-16">
      <div className="liquid-glass-strong mx-auto max-w-3xl rounded-[1.5rem] p-8 text-center md:p-12">
        <p className="font-body text-sm" style={{ color: GOLD }}>
          {'// Book now'}
        </p>
        <h2 className="mt-4 font-heading text-5xl italic leading-[0.9] tracking-[-2px] text-white md:text-6xl">
          Your chair is waiting
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm font-light leading-snug text-white/90 md:text-base">
          Open daily, 11 AM to 9 PM, in Karachi. Message us on WhatsApp to book your appointment —
          bridal dates fill fast, so early booking is best.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-full px-6 py-3 font-body text-sm font-medium text-black"
            style={{ background: GOLD }}
          >
            WhatsApp to Book
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <span className="liquid-glass rounded-full px-5 py-3 font-body text-sm text-white/90">
            11 AM – 9 PM · Karachi
          </span>
        </div>
        <p className="mt-6 font-body text-xs text-white/60">
          Demo website — WhatsApp number to be added by the salon owner.
        </p>
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
      <Services />
      <Packages />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  )
}
