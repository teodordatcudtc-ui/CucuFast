import type { Metadata } from 'next'
import AnimatedDiv from '@/components/AnimatedDiv'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate',
  description: 'Politica de confidențialitate Cucu Fast Service. Informații despre prelucrarea datelor personale conform GDPR.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="pt-20 pb-12 bg-gradient-to-b from-gray to-white">
      <div className="section-container max-w-4xl">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-8">Politică de Confidențialitate</h1>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 lg:p-12 space-y-6 text-body">
            <section>
              <h2 className="heading-3 text-xl mb-4">1. Introducere</h2>
              <p>
                Cucu Fast Service (&quot;noi&quot;, &quot;service-ul nostru&quot;) respectă confidențialitatea datelor tale personale 
                și se angajează să le protejeze conform Regulamentului General privind Protecția Datelor (GDPR) 
                și legislației române în vigoare.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">2. Datele pe care le colectăm</h2>
              <p>Colectăm următoarele tipuri de date personale:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nume complet</li>
                <li>Adresă de email</li>
                <li>Număr de telefon</li>
                <li>Informații despre autovehicul (model, an, etc.)</li>
                <li>Mesaje și comunicări prin formulare</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">3. Scopul prelucrării</h2>
              <p>Prelucrăm datele tale personale pentru:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Procesarea cererilor de contact și programări</li>
                <li>Comunicarea cu tine despre serviciile noastre</li>
                <li>Îmbunătățirea serviciilor oferite</li>
                <li>Conformarea cu obligațiile legale</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">4. Baza legală</h2>
              <p>
                Prelucrăm datele tale pe baza consimțământului tău explicit, oferit prin completarea 
                formularelor și bifarea căsuței de acord GDPR.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">5. Drepturile tale</h2>
              <p>Conform GDPR, ai următoarele drepturi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Dreptul de acces la datele tale personale</li>
                <li>Dreptul de rectificare a datelor incorecte</li>
                <li>Dreptul de ștergere (&quot;dreptul de a fi uitat&quot;)</li>
                <li>Dreptul de restricționare a prelucrării</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de opoziție</li>
                <li>Dreptul de a retrage consimțământul</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">6. Păstrarea datelor</h2>
              <p>
                Păstrăm datele tale personale doar pentru perioada necesară îndeplinirii scopurilor 
                pentru care au fost colectate, sau conform cerințelor legale.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">7. Securitate</h2>
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor tale 
                personale împotriva accesului neautorizat, pierderii sau distrugerii.
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">8. Contact</h2>
              <p>
                Pentru exercitarea drepturilor tale sau pentru întrebări despre prelucrarea datelor, 
                ne poți contacta la:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> contact@cucufastservice.ro<br />
                <strong>Telefon:</strong> +40 763 838 273<br />
                <strong>Adresă:</strong> Strada Cugetării 1B, Voluntari 077190
              </p>
            </section>

            <section>
              <h2 className="heading-3 text-xl mb-4">9. Modificări</h2>
              <p>
                Ne rezervăm dreptul de a modifica această politică de confidențialitate. 
                Modificările vor fi publicate pe această pagină.
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

