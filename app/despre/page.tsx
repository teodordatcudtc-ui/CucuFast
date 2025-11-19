import type { Metadata } from 'next'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Cucu Fast Service — service auto în Voluntari cu experiență și profesionalism. Echipa noastră oferă servicii complete de diagnostică și reparație auto.',
  openGraph: {
    title: 'Despre Cucu Fast Service — Service Auto Voluntari',
    description: 'Cucu Fast Service — service auto în Voluntari cu experiență și profesionalism.',
  },
}

const values = [
  {
    title: 'Rapiditate',
    description: 'Rezolvăm problemele rapid, fără a compromite calitatea. Timpul tău este valoros.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Transparență',
    description: 'Prețuri clare, fără surprize. Ți explicăm exact ce trebuie făcut și de ce.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Calitate',
    description: 'Folosim doar piese și materiale de calitate, iar munca este garantată.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Profesionalism',
    description: 'Echipa noastră are experiență și certificări în domeniul auto.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Ion Cucu',
    role: 'Mecanic Șef',
    description: 'Peste 15 ani de experiență în reparații auto, specializat în diagnostică și sisteme electronice.',
    image: '/images/team/mechanic-1.jpg',
  },
  {
    name: 'Mihai Popescu',
    role: 'Electrician Auto',
    description: 'Specialist în sisteme electrice și electronice auto, diagnostică avansată.',
    image: '/images/team/electrician-1.jpg',
  },
  {
    name: 'Alexandru Georgescu',
    role: 'Specialist Geometrie',
    description: 'Expert în reglaje geometrie cu echipament 3D de ultimă generație.',
    image: '/images/team/geometry-1.jpg',
  },
]

export default function DesprePage() {
  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-gray to-white">
      <div className="section-container">
        {/* Hero Section */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-1">Despre Cucu Fast Service</h1>
          <p className="text-body text-xl max-w-3xl mx-auto">
            Suntem un service auto profesionist din Voluntari, dedicat oferirii de soluții rapide și eficiente 
            pentru întreținerea și reparația autovehiculelor.
          </p>
        </AnimatedDiv>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Povestea Noastră</h2>
              <div className="space-y-6 text-body">
                <p className="text-lg leading-relaxed">
                  Cucu Fast Service a fost înființat cu o viziune clară: să oferim servicii auto de calitate 
                  într-un mod rapid, transparent și profesional.
                </p>
                <p className="leading-relaxed">
                  Cu ani de experiență în domeniu, echipa noastră combină cunoștințele tehnice avansate cu 
                  un serviciu orientat către client. Folosim doar echipamente și piese de calitate, iar 
                  fiecare reparație este testată și garantată.
                </p>
                <p className="leading-relaxed">
                  Misiunea noastră este simplă: <strong className="text-black">diagnostică precisă, reparații de calitate, pleci în siguranță.</strong>
                </p>
              </div>
            </AnimatedDiv>
            <AnimatedDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black-light rounded-xl p-12 h-full flex items-center justify-center"
            >
              <div className="text-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                  <polygon points="12 15 17 21 7 21 12 15" />
                </svg>
                <p className="text-gray-400 mt-4 text-sm">Ilustrație service</p>
              </div>
            </AnimatedDiv>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2">Valorile Noastre</h2>
            <p className="text-body max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi.
            </p>
          </AnimatedDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedDiv
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary transition-colors"
              >
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                <p className="text-body text-sm text-gray-600">{value.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2">Echipa Noastră</h2>
            <p className="text-body max-w-2xl mx-auto">
              Profesioniști dedicați cu experiență în domeniul auto.
            </p>
          </AnimatedDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedDiv
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors"
              >
                <div className="aspect-square bg-black-light flex items-center justify-center">
                  <div className="text-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <p className="text-sm text-gray-400 mt-2">Foto echipă</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-3 text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-body text-sm text-gray-600">{member.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </section>

        {/* Guarantee Section */}
        <section>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-white rounded-xl p-12 text-center"
          >
            <h2 className="heading-2 text-white mb-6">Garanție și Standarde</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-white mb-4 flex justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Garanție Servicii</h3>
                <p className="text-white/90 text-sm">
                  Toate reparațiile sunt garantate. Testăm fiecare serviciu înainte de predare.
                </p>
              </div>
              <div>
                <div className="text-white mb-4 flex justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Echipament Profesional</h3>
                <p className="text-white/90 text-sm">
                  Folosim doar echipamente și unelte de ultimă generație pentru rezultate optime.
                </p>
              </div>
              <div>
                <div className="text-white mb-4 flex justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Standarde Calitate</h3>
                <p className="text-white/90 text-sm">
                  Respectăm standardele producătorilor și oferim servicii conforme specificațiilor.
                </p>
              </div>
            </div>
          </AnimatedDiv>
        </section>
      </div>
    </div>
  )
}

