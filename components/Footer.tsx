import Link from 'next/link'
import Logo from './Logo'

const footerLinks = {
  servicii: [
    { href: '/servicii#diagnoza', label: 'Diagnoză Auto' },
    { href: '/servicii#geometrie', label: 'Geometrie' },
    { href: '/servicii#revizii', label: 'Revizii' },
    { href: '/servicii#ac', label: 'Aer Condiționat' },
  ],
  companie: [
    { href: '/despre', label: 'Despre Noi' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white mt-20">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Service auto profesionist în Voluntari. Diagnostică, reparăm, pleci în siguranță.
            </p>
          </div>

          {/* Servicii Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Servicii</h3>
            <ul className="space-y-2">
              {footerLinks.servicii.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companie Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Companie</h3>
            <ul className="space-y-2">
              {footerLinks.companie.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+407637838273"
                  className="hover:text-white transition-colors duration-200"
                >
                  +40 763 838 273
                </a>
              </li>
              <li>
                <address className="not-italic">
                  Strada Cugetării 1B<br />
                  Voluntari 077190
                </address>
              </li>
              <li>
                <p className="text-xs text-gray-500 mt-2">
                  Luni - Vineri: 08:00 - 18:00<br />
                  Sâmbătă: 09:00 - 14:00
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Cucu Fast Service. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/politica-confidentialitate" className="text-gray-500 hover:text-white transition-colors">
              Politică Confidențialitate
            </Link>
            <Link href="/termeni-conditii" className="text-gray-500 hover:text-white transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

