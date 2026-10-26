import { ArrowUpRight } from '../components/icons'
import salonInterior from '../assets/salon-interior.webp'

const GOLD = '#d4af37'

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

export default function Packages() {
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
