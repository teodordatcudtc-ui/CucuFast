'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  name: string
  role?: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Ion Popescu',
    role: 'Client',
    text: 'Serviciu excelent! Am ajuns cu o problemă la sistemul de răcire și în 2 ore era rezolvată. Echipa este foarte profesionistă și transparentă cu prețurile.',
    rating: 5,
  },
  {
    name: 'Maria Ionescu',
    role: 'Client',
    text: 'Am făcut geometria aici și diferența se simte imediat. Mașina merge mult mai bine, consumul a scăzut. Recomand cu încredere!',
    rating: 5,
  },
  {
    name: 'Alexandru Georgescu',
    role: 'Client',
    text: 'Cea mai rapidă revizie pe care am făcut-o vreodată. Totul a fost explicat clar, iar prețul a fost corect. Voi reveni sigur.',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const current = testimonials[currentIndex]

  return (
    <div className="relative">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.5 }}
          className="bg-gray p-8 rounded-xl"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-body text-lg mb-6 italic">&quot;{current.text}&quot;</p>
          <div>
            <p className="font-semibold text-black">{current.name}</p>
            {current.role && (
              <p className="text-sm text-gray-600">{current.role}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-dark hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

