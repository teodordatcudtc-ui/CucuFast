'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Note: În producție, înlocuiește cu imagini reale
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/repair-1.jpg',
    alt: 'Reparație motor',
    category: 'Reparații',
  },
  {
    id: 2,
    src: '/images/gallery/diagnostic-1.jpg',
    alt: 'Diagnostic auto',
    category: 'Diagnostică',
  },
  {
    id: 3,
    src: '/images/gallery/geometry-1.jpg',
    alt: 'Geometrie roți',
    category: 'Geometrie',
  },
  {
    id: 4,
    src: '/images/gallery/service-1.jpg',
    alt: 'Service auto',
    category: 'Service',
  },
  {
    id: 5,
    src: '/images/gallery/repair-2.jpg',
    alt: 'Reparație sistem',
    category: 'Reparații',
  },
  {
    id: 6,
    src: '/images/gallery/diagnostic-2.jpg',
    alt: 'Scanare OBD',
    category: 'Diagnostică',
  },
]

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="pt-20 pb-12 bg-gradient-to-b from-gray to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1">Galerie</h1>
            <p className="text-body text-xl max-w-3xl mx-auto">
              Vezi lucrările noastre și echipamentul profesional folosit în service-ul nostru.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square bg-gray rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
                <div className="w-full h-full bg-gray-dark flex items-center justify-center">
                  <p className="text-gray-600 text-sm">Imagine {image.id}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-body mb-6">
              Vrei să vezi mai multe? Vizitează-ne la service sau contactează-ne pentru mai multe informații.
            </p>
            <a href="/contact" className="btn-primary">
              Contactează-ne
            </a>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
                aria-label="Închide"
              >
                ×
              </button>
              <div className="bg-gray-dark rounded-lg p-4">
                <p className="text-white text-center mb-2">
                  {galleryImages.find((img) => img.id === selectedImage)?.alt}
                </p>
                <div className="w-full h-96 bg-gray flex items-center justify-center rounded">
                  <p className="text-gray-600">Imagine {selectedImage}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

