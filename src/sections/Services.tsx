import hairstyling from '../assets/hairstyling.webp'
import facial from '../assets/facial.webp'
import brideMakeup from '../assets/bride-makeup.webp'

const GOLD = '#d4af37'

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

export default function Services() {
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
