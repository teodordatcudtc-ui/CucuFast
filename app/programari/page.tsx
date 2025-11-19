import type { Metadata } from 'next'
import AppointmentForm from '@/components/AppointmentForm'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Programări',
  description: 'Programează o vizită la Cucu Fast Service Voluntari. Formular rapid pentru programări. Telefon: +40 763 838 273.',
  openGraph: {
    title: 'Programări — Cucu Fast Service Voluntari',
    description: 'Programează o vizită la Cucu Fast Service Voluntari.',
  },
}

export default function ProgramariPage() {
  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-gray to-white">
      <div className="section-container">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-1">Programează o vizită</h1>
          <p className="text-body text-xl max-w-3xl mx-auto">
            Completează formularul de mai jos pentru a programa o vizită la service-ul nostru. 
            Te vom contacta în cel mai scurt timp pentru confirmare.
          </p>
        </AnimatedDiv>

        <div className="max-w-3xl mx-auto">
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-xl p-8 lg:p-12"
          >
            <AppointmentForm />
          </AnimatedDiv>

          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-body mb-4">
              Preferi să ne suni direct? Suntem disponibili:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+407637838273"
                className="btn-primary"
              >
                Sună: +40 763 838 273
              </a>
              <a
                href="https://wa.me/407637838273?text=Salut%20Cucu%20Fast%20Service,%20as%20dori%20o%20programare."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  )
}

