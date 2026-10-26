import brideFull from '../assets/bride-full.webp'
import mehndi from '../assets/mehndi.webp'
import salonInterior from '../assets/salon-interior.webp'
import manicure from '../assets/manicure.webp'
import brideMakeup from '../assets/bride-makeup.webp'
import facial from '../assets/facial.webp'

const GOLD = '#d4af37'

const GALLERY = [
  { img: brideFull, alt: 'Pakistani bride in a full red lehenga with gold embroidery', caption: 'Bridal Signature' },
  { img: mehndi, alt: 'Bride’s hands with intricate mehndi and gold bangles', caption: 'Mehndi detail' },
  { img: salonInterior, alt: 'Luxury salon interior with styling chairs and gold mirrors', caption: 'The studio' },
  { img: manicure, alt: 'Manicure in progress with deep red polish', caption: 'Nails & polish' },
  { img: brideMakeup, alt: 'Bride getting makeup done at the salon vanity', caption: 'Getting ready' },
  { img: facial, alt: 'Facial spa treatment in a calm candlelit room', caption: 'Spa calm' },
]

export default function Gallery() {
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
