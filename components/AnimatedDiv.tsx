'use client'

import { motion } from 'framer-motion'
import { ComponentProps, ReactNode } from 'react'

type MotionDivProps = ComponentProps<typeof motion.div>

interface AnimatedDivProps extends MotionDivProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  whileInView?: any
  viewport?: any
  transition?: any
  delay?: number
}

export default function AnimatedDiv({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  whileInView,
  viewport,
  transition = { duration: 0.6 },
  delay = 0,
  ...rest
}: AnimatedDivProps) {
  const finalTransition = { ...transition, delay }

  if (whileInView) {
    return (
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport || { once: true }}
        transition={finalTransition}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={finalTransition}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

