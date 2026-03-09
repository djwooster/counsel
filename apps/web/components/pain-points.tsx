'use client'

import { motion } from 'framer-motion'
import { DollarSign, Layers, PuzzleIcon } from 'lucide-react'

const PAINS = [
  {
    icon: DollarSign,
    title: 'Enterprise pricing for a 3-person firm',
    body: "Clio and MyCase were designed for large firms with large budgets. Small practices pay for features they'll never touch.",
  },
  {
    icon: Layers,
    title: 'Complexity that slows you down',
    body: 'If your staff needs weeks of training just to log a time entry, the software is working against you — not for you.',
  },
  {
    icon: PuzzleIcon,
    title: 'Endless nickel-and-diming',
    body: 'Client portal? Extra. E-signatures? Extra. Billing? Extra. The base price is never the real price.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

export default function PainPoints() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase text-gold text-center mb-4"
        >
          The problem
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-navy text-center leading-tight tracking-tight mb-4 max-w-3xl mx-auto"
        >
          Other CRMs weren't built for firms like yours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy-muted text-center text-lg max-w-xl mx-auto mb-16"
        >
          They're designed for 50-attorney firms. You're a 3-attorney shop. That mismatch costs you time, money, and peace of mind.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAINS.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={card}
              className="group relative bg-cream border border-stone rounded-2xl p-8 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon className="w-5 h-5 text-navy/50 group-hover:text-gold-dark transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-navy mb-3 leading-snug">{title}</h3>
              <p className="text-navy-muted text-sm leading-relaxed">{body}</p>

              {/* Subtle gold accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
