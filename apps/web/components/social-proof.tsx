'use client'

import { motion } from 'framer-motion'

const PRACTICE_TYPES = [
  'Family Law',
  'Immigration',
  'Personal Injury',
  'Criminal Defense',
  'Estate Planning',
  'Real Estate',
  'Business Law',
]

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-border py-10 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-navy/30 mb-6">
          Built for practices across every area of law
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PRACTICE_TYPES.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-sm font-medium text-navy/35 hover:text-navy/60 transition-colors cursor-default"
            >
              {type}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
