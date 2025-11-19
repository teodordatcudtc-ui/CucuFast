import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Acasă',
  description: 'Cucu Fast Service — service auto profesionist în Voluntari. Diagnoză, geometrie, revizii, sisteme AC și evacuare. Programează rapid la +40 763 838 273.',
  openGraph: {
    title: 'Cucu Fast Service — Service Auto Profesionist în Voluntari',
    description: 'Cucu Fast Service — service auto profesionist în Voluntari. Diagnoză, geometrie, revizii, sisteme AC și evacuare.',
  },
}

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Diagnoză Auto',
    description: 'Scanare completă cu echipament profesional OBD pentru identificarea rapidă a problemelor.',
    badge: 'Rapid',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    title: 'Geometrie',
    description: 'Reglaj precis al unghiurilor roților pentru siguranță maximă și uzură uniformă a anvelopelor.',
    badge: 'Precis',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Revizii',
    description: 'Pachete complete de întreținere: schimb ulei, filtre, verificări sistem, pentru siguranța ta.',
    badge: 'Complet',
  },
]

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutomotiveRepair',
            name: 'Cucu Fast Service',
            image: 'https://cucufastservice.ro/og-image.jpg',
            '@id': 'https://cucufastservice.ro',
            url: 'https://cucufastservice.ro',
            telephone: '+407637838273',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Strada Cugetării 1B',
              addressLocality: 'Voluntari',
              postalCode: '077190',
              addressCountry: 'RO',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 44.4913542,
              longitude: 26.1662664,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            sameAs: [],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="section-container py-12 lg:py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-1 text-balance text-white mb-4">
                Cucu Fast Service — Diagnostică. Reparăm. Pleci în siguranță.
              </h1>
              <p className="text-body text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Service auto profesionist în Voluntari. Servicii complete pentru toate mărcile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programari" className="btn-primary text-center bg-primary hover:bg-primary-dark">
                  Programează acum
                </Link>
                <Link href="/servicii" className="btn-secondary text-center border-white text-white hover:bg-white/10">
                  Vezi serviciile
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {[
                  { value: '15+', label: 'Ani experiență' },
                  { value: '24/7', label: 'Asistență rapidă' },
                  { value: '1000+', label: 'Clienți mulțumiți' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-sm rounded-lg py-2 px-4 border border-white/20"
                  >
                    <p className="text-xl font-bold text-primary mb-0.5">{item.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="section-container py-20 bg-gray">
        <AnimatedDiv
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Serviciile Noastre</h2>
          <p className="text-body max-w-2xl mx-auto">
            Oferim soluții complete pentru întreținerea și reparația autovehiculelor tale.
          </p>
        </AnimatedDiv>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/servicii" className="btn-secondary">
            Vezi toate serviciile
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container py-20 bg-white">
        <AnimatedDiv
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">De Ce Să Ne Alegi?</h2>
          <p className="text-body max-w-2xl mx-auto">
            Avantajele care ne diferențiază de alți service-uri auto.
          </p>
        </AnimatedDiv>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedDiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="heading-3 text-xl mb-3">Rapiditate</h3>
            <p className="text-body text-gray-600">
              Rezolvăm majoritatea problemelor în aceeași zi. Timpul tău este valoros.
            </p>
          </AnimatedDiv>

          <AnimatedDiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="heading-3 text-xl mb-3">Garanție</h3>
            <p className="text-body text-gray-600">
              Toate reparațiile sunt garantate. Testăm fiecare serviciu înainte de predare.
            </p>
          </AnimatedDiv>

          <AnimatedDiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="heading-3 text-xl mb-3">Prețuri Transparente</h3>
            <p className="text-body text-gray-600">
              Fără surprize. Ți explicăm exact ce trebuie făcut și cât costă, înainte de a începe.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container py-20 bg-black-light">
        <AnimatedDiv
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white">Ce Spun Clienții Noștri</h2>
          <p className="text-body max-w-2xl mx-auto text-white/80">
            Mii de clienți mulțumiți ne-au ales pentru serviciile noastre profesioniste.
          </p>
        </AnimatedDiv>

        <div className="max-w-3xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-20 bg-primary text-white">
        <AnimatedDiv
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-2 text-white mb-6">
            Gata să îți rezolvăm problema?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Programează o vizită la service-ul nostru sau sună-ne pentru o consultație rapidă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programari"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray transition-colors"
            >
              Programează acum
            </Link>
            <a
              href="tel:+407637838273"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Sună: +40 763 838 273
            </a>
          </div>
        </AnimatedDiv>
      </section>

      {/* Process Section */}
      <section className="section-container py-20 bg-white">
        <AnimatedDiv
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2">Cum Funcționează?</h2>
          <p className="text-body max-w-2xl mx-auto">
            Procesul nostru simplu în 4 pași.
          </p>
        </AnimatedDiv>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: '1', title: 'Programare', desc: 'Sună sau completează formularul online' },
            { step: '2', title: 'Diagnostică', desc: 'Analizăm problema cu echipament profesional' },
            { step: '3', title: 'Reparație', desc: 'Rezolvăm problema rapid și eficient' },
            { step: '4', title: 'Testare', desc: 'Testăm și garantăm calitatea serviciului' },
          ].map((item, index) => (
            <AnimatedDiv
              key={item.step}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="heading-3 text-lg mb-2">{item.title}</h3>
              <p className="text-body text-sm text-gray-600">{item.desc}</p>
            </AnimatedDiv>
          ))}
        </div>
      </section>
    </>
  )
}

