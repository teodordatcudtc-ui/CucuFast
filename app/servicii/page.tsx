import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Servicii complete auto în Voluntari: diagnoză auto, geometrie, revizii, sisteme AC, răcire, evacuare. Prețuri transparente și programare rapidă.',
  openGraph: {
    title: 'Servicii Auto — Cucu Fast Service Voluntari',
    description: 'Servicii complete auto în Voluntari: diagnoză auto, geometrie, revizii, sisteme AC, răcire, evacuare.',
  },
}

const services = [
  {
    id: 'diagnoza',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Diagnoză Auto',
    description: 'Scanare completă cu echipament profesional OBD pentru identificarea rapidă a problemelor. Diagnosticăm toate sistemele: motor, transmisie, ABS, airbag, climatizare și multe altele.',
    details: 'Folosim scanere profesionale care accesează toate modulele electronice ale autovehiculului. Diagnosticăm erorile, le interpretăm și oferim soluții clare pentru reparație.',
    duration: '30-60 minute',
    price: 'De la 150 RON',
  },
  {
    id: 'geometrie',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
        <path d="M12 6l6 6-6 6-6-6z" />
      </svg>
    ),
    title: 'Geometrie Roți',
    description: 'Reglaj precis al unghiurilor roților (convergență, divergență, unghi de cădere) pentru siguranță maximă, uzură uniformă a anvelopelor și consum optim de combustibil.',
    details: 'Echipament 3D de ultimă generație pentru măsurători precise. Reglăm toate unghiurile conform specificațiilor producătorului pentru fiecare model de autovehicul.',
    duration: '45-60 minute',
    price: 'De la 120 RON',
  },
  {
    id: 'revizii',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Revizii și Întreținere',
    description: 'Pachete complete de întreținere: schimb ulei și filtre, verificări sistem, curățare, pentru siguranța și longevitatea autovehiculului tău.',
    details: 'Oferim pachete de revizie adaptate nevoilor tale: revizie mică (ulei + filtru ulei), revizie medie (+ filtre aer/combustibil), revizie completă (+ verificări sisteme, curățare).',
    duration: '1-2 ore',
    price: 'De la 200 RON',
  },
  {
    id: 'luminii',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
      </svg>
    ),
    title: 'Sistem Luminii',
    description: 'Reglaje faruri, înlocuire becuri, upgrade la LED, diagnostic și reparații sistem de iluminat pentru siguranță maximă pe timp de noapte.',
    details: 'Reglăm corect unghiul farurilor, înlocuim becuri arse, oferim upgrade-uri la LED pentru iluminare superioară și diagnosticăm problemele sistemului de iluminat.',
    duration: '30-90 minute',
    price: 'De la 80 RON',
  },
  {
    id: 'ac',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Aer Condiționat',
    description: 'Încărcare freon, curățare sistem, diagnostic și reparații pentru un confort optim în cabină. Servicii pentru toate tipurile de sisteme AC.',
    details: 'Verificăm presiunea sistemului, detectăm scurgeri, curățăm evaporatorul și radiatorul, încărcăm freon conform specificațiilor și testăm funcționarea completă.',
    duration: '1-2 ore',
    price: 'De la 180 RON',
  },
  {
    id: 'racire',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
        <path d="M12 6a6 6 0 0 1 0 12" />
      </svg>
    ),
    title: 'Sistem Răcire',
    description: 'Verificări complete, înlocuire lichid răcire, reparații radiator, pompa de apă, termostat și toate componentele sistemului de răcire.',
    details: 'Diagnosticăm problemele sistemului de răcire, verificăm etanșeitatea, înlocuim componente uzate (pompa de apă, termostat, furtunuri) și refacem lichidul de răcire.',
    duration: '1-3 ore',
    price: 'De la 200 RON',
  },
  {
    id: 'evacuare',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
      </svg>
    ),
    title: 'Sistem Evacuare',
    description: 'Reparații găuri, înlocuire țevi, catalizator, silențioase și toate componentele sistemului de evacuare pentru performanță optimă și conformitate ecologică.',
    details: 'Identificăm și reparăm găurile din sistem, înlocuim componente deteriorate (catalizator, silențioase, țevi), verificăm etanșeitatea și testăm funcționarea.',
    duration: '1-4 ore',
    price: 'De la 250 RON',
  },
]

export default function ServiciiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Automotive Repair Services',
            provider: {
              '@type': 'AutomotiveRepair',
              name: 'Cucu Fast Service',
              url: 'https://cucufastservice.ro',
            },
            areaServed: {
              '@type': 'City',
              name: 'Voluntari',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Servicii Auto',
              itemListElement: services.map((service, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />

      <div className="pt-32 pb-12 bg-gradient-to-b from-gray to-white">
        <div className="section-container">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1">Serviciile Noastre</h1>
            <p className="text-body text-xl max-w-3xl mx-auto">
              Oferim servicii complete de diagnostică, reparație și întreținere pentru toate mărcile de autovehicule. 
              Fiecare serviciu este realizat cu echipament profesional și garanție de calitate.
            </p>
          </AnimatedDiv>

          {/* Mobile Layout - Grid 2 columns */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mb-12">
            {services.map((service, index) => (
              <AnimatedDiv
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="bg-black-light h-24 flex items-center justify-center">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="heading-3 text-lg mb-2 text-center">{service.title}</h3>
                    <p className="text-body text-sm mb-3 text-center flex-grow">{service.description}</p>
                    <div className="space-y-2 mb-3">
                      <div className="bg-gray px-2 py-1.5 rounded text-center">
                        <span className="text-xs text-gray-600 block">Durată</span>
                        <p className="font-semibold text-sm">{service.duration}</p>
                      </div>
                      <div className="bg-gray px-2 py-1.5 rounded text-center">
                        <span className="text-xs text-gray-600 block">Preț</span>
                        <p className="font-semibold text-sm">{service.price}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary text-sm px-3 py-2 text-center block"
                    >
                      Ofertă
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>

          {/* Desktop Layout - Grid 2 columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <AnimatedDiv
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="scroll-mt-24"
              >
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                  {/* Image Section */}
                  <div className="bg-black-light h-48 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black/40"></div>
                    <div className="text-primary relative z-10">{service.icon}</div>
                  </div>
                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="heading-2 text-3xl mb-3 text-center">{service.title}</h2>
                    <p className="text-body text-base mb-4 text-center flex-grow">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray px-4 py-2.5 rounded-lg text-center">
                        <span className="text-sm text-gray-600 block">Durată</span>
                        <p className="font-semibold">{service.duration}</p>
                      </div>
                      <div className="bg-gray px-4 py-2.5 rounded-lg text-center">
                        <span className="text-sm text-gray-600 block">Preț</span>
                        <p className="font-semibold">{service.price}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary px-4 py-2.5 text-center block"
                    >
                      Solicită ofertă
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>

          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-primary text-white rounded-xl p-12"
          >
            <h2 className="heading-2 text-white mb-6">
              Ai nevoie de altceva?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contactează-ne pentru orice altă problemă sau întrebare despre autovehiculul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray transition-colors">
                Contactează-ne
              </Link>
              <a
                href="tel:+407637838273"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Sună acum
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </>
  )
}

