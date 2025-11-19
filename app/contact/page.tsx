import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează Cucu Fast Service în Voluntari. Telefon: +40 763 838 273, Strada Cugetării 1B. Program: Luni-Vineri 08:00-18:00, Sâmbătă 09:00-14:00.',
  openGraph: {
    title: 'Contact — Cucu Fast Service Voluntari',
    description: 'Contactează Cucu Fast Service în Voluntari. Telefon: +40 763 838 273.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-gray to-white">
      <div className="section-container">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-1">Contactează-ne</h1>
          <p className="text-body text-xl max-w-3xl mx-auto">
            Suntem aici să te ajutăm. Contactează-ne prin telefon, email sau WhatsApp, sau vizitează-ne la service.
          </p>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <AnimatedDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-3 mb-6">Trimite un mesaj</h2>
            <ContactForm />
          </AnimatedDiv>

          {/* Contact Info */}
          <AnimatedDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-3 mb-6">Informații de contact</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 2 0 0 1 22 16.92z" />
                    </svg>
                    Telefon
                  </h3>
                  <a
                    href="tel:+407637838273"
                    className="text-primary hover:underline text-lg font-medium"
                  >
                    +40 763 838 273
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Adresă
                  </h3>
                  <address className="not-italic text-body">
                    Strada Cugetării 1B<br />
                    Voluntari 077190<br />
                    România
                  </address>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Program
                  </h3>
                  <div className="text-body">
                    <p><strong>Luni - Vineri:</strong> 08:00 - 18:00</p>
                    <p><strong>Sâmbătă:</strong> 09:00 - 14:00</p>
                    <p><strong>Duminică:</strong> Închis</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/407637838273?text=Salut%20Cucu%20Fast%20Service,%20as%20dori%20o%20programare."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg font-medium"
                  >
                    Trimite mesaj pe WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* Google Maps */}
        <AnimatedDiv
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="heading-3 mb-6">Locația noastră</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.161662074176!2d26.166266399999998!3d44.491354199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f9d29d1b5ba7%3A0xff6a9e6ddb32ba8d!2sCucu%20Fast%20Service!5e0!3m2!1sen!2sro!4v1763538913658!5m2!1sen!2sro"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Cucu Fast Service"
            />
          </div>
        </AnimatedDiv>
      </div>
    </div>
  )
}

