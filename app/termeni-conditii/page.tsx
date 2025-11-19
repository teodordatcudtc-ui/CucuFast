import type { Metadata } from 'next'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Termeni și condiții de utilizare pentru serviciile Cucu Fast Service.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermeniConditiiPage() {
  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-gray to-white">
      <div className="section-container max-w-4xl">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-8">Termeni și Condiții</h1>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 lg:p-12 space-y-6 text-body">
            <section>
              <h2 className="heading-3 text-xl mb-4">1. Acceptarea Termenilor</h2>
              <p>
                Prin accesarea și utilizarea site-ului Cucu Fast Service, accepti acești termeni și condiții. 
                Dacă nu ești de acord, te rugăm să nu utilizezi site-ul.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">2. Servicii Oferite</h2>
              <p>
                Cucu Fast Service oferă servicii de diagnostică, reparație și întreținere auto. 
                Prețurile și disponibilitatea serviciilor pot varia și sunt supuse modificărilor.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">3. Programări</h2>
              <p>
                Programările făcute prin site sunt supuse confirmării. Ne rezervăm dreptul de a modifica 
                sau anula programări în funcție de disponibilitate.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">4. Garanții</h2>
              <p>
                Toate serviciile sunt garantate conform standardelor industriei. Detaliile garanției 
                vor fi comunicate la momentul predării autovehiculului.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">5. Responsabilitate</h2>
              <p>
                Cucu Fast Service nu este responsabil pentru daune indirecte sau consecințiale rezultate 
                din utilizarea serviciilor, cu excepția cazurilor prevăzute de lege.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">6. Proprietate Intelectuală</h2>
              <p>
                Conținutul site-ului (texte, imagini, logo-uri) este proprietatea Cucu Fast Service 
                și este protejat de legile drepturilor de autor.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">7. Modificări</h2>
              <p>
                Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                Modificările vor fi publicate pe această pagină.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">8. Contact</h2>
              <p>
                Pentru întrebări despre acești termeni, ne poți contacta la:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> contact@cucufastservice.ro<br />
                <strong>Telefon:</strong> +40 763 838 273<br />
                <strong>Adresă:</strong> Strada Cugetării 1B, Voluntari 077190
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-600 mt-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  )
}

