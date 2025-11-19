'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const isLight = variant === 'light'
  const strokeColor = isLight ? '#FFFFFF' : '#0B0B0B'
  const accentColor = '#C8102E'

  return (
    <motion.div
      className={`inline-flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
        aria-label="Cucu Fast Service Logo"
      >
        {/* Volan - contur */}
        <motion.circle
          cx="30"
          cy="30"
          r="20"
          stroke={strokeColor}
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        {/* Spoke central */}
        <motion.line
          x1="30"
          y1="10"
          x2="30"
          y2="50"
          stroke={strokeColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="10"
          y1="30"
          x2="50"
          y2="30"
          stroke={strokeColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        {/* Fulger mic */}
        <motion.path
          d="M35 15 L42 25 L38 25 L40 35 L33 25 L37 25 Z"
          fill={accentColor}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.path
          d="M35 15 L42 25 L38 25 L40 35 L33 25 L37 25 Z"
          fill="none"
          stroke={accentColor}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </svg>
      <span className={`font-display font-bold text-xl ${isLight ? 'text-white' : 'text-black'}`}>
        Cucu Fast Service
      </span>
    </motion.div>
  )
}

