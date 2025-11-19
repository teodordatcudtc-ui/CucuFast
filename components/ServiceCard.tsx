'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  badge?: string
  delay?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  badge,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full perspective-1000 transform-3d hover:border-primary transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.03,
        rotateY: 5,
        rotateX: 5,
        boxShadow: '0 20px 40px rgba(200, 16, 46, 0.15)',
      }}
    >
      {badge && (
        <motion.span
          className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, type: 'spring' }}
        >
          {badge}
        </motion.span>
      )}
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="heading-3 text-xl mb-3">{title}</h3>
      <p className="text-body text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}

