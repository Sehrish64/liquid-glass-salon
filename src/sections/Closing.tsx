import { ArrowUpRight } from '../components/icons'

const GOLD = '#d4af37'

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

export function Testimonials() {
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

export function Booking() {
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
