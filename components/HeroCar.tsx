'use client'

import { motion } from 'framer-motion'

export default function HeroCar() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        className="max-w-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Car Silhouette */}
        <motion.path
          d="M100 250 L120 200 L150 180 L200 170 L250 160 L300 155 L400 155 L500 160 L550 170 L600 180 L630 200 L650 250 L650 280 L640 300 L620 310 L600 320 L550 330 L450 335 L350 335 L250 330 L200 320 L180 310 L160 300 L150 280 Z"
          fill="none"
          stroke="#0B0B0B"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Headlights */}
        <motion.circle
          cx="150"
          cy="190"
          r="8"
          fill="#C8102E"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="200"
          cy="185"
          r="8"
          fill="#C8102E"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        {/* Lightning bolt accent */}
        <motion.path
          d="M400 200 L420 180 L415 185 L430 185 L425 200 L440 200 L420 220 L425 215 L410 215 Z"
          fill="#C8102E"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: -45 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        />
      </svg>
    </div>
  )
}

