import Link from 'next/link'
import AnimatedDiv from '@/components/AnimatedDiv'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray to-white pt-20">
      <div className="section-container text-center">
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 text-6xl lg:text-8xl mb-4">404</h1>
          <h2 className="heading-2 mb-6">Pagina nu a fost găsită</h2>
          <p className="text-body text-xl mb-8 max-w-2xl mx-auto">
            Pagina pe care o cauți nu există sau a fost mutată. Te rugăm să verifici URL-ul sau să revii la pagina principală.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Acasă
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  )
}

