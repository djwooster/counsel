'use client'

import { motion } from 'framer-motion'
import { DollarSign, Layers, PuzzleIcon } from 'lucide-react'

const PAINS = [
  {
    icon: DollarSign,
    title: 'Enterprise pricing for a 3-person firm',
    body: "Clio and MyCase were designed for large firms with large budgets. Small practices end up paying for features they'll never use.",
    stat: '$300+',
    statLabel: 'avg. monthly cost at Clio',
  },
  {
    icon: Layers,
    title: 'So complex it needs its own onboarding team',
    body: 'If your paralegal needs weeks of training just to log a time entry, the software is working against you — not for you.',
    stat: '90 days',
    statLabel: 'typical implementation time',
  },
  {
    icon: PuzzleIcon,
    title: 'Endless add-ons for basic functionality',
    body: 'Client portal? Extra. E-signatures? Extra. Intake forms? Extra. The advertised price is never the real price.',
    stat: '6–8',
    statLabel: 'paid add-ons for full functionality',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function PainPoints() {
  return (
    <section className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-navy/40 mb-3">The problem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight tracking-tight mb-4 max-w-2xl mx-auto">
            Other CRMs weren't built for firms like yours.
          </h2>
          <p className="text-navy/50 text-lg max-w-xl mx-auto">
            They're designed for 50-attorney firms with IT departments. You're a lean practice that needs tools that just work.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAINS.map(({ icon: Icon, title, body, stat, statLabel }) => (
            <motion.div
              key={title}
              variants={card}
              className="group bg-white border border-border rounded-2xl p-8 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-navy/50" />
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-navy">{stat}</div>
                <div className="text-xs text-navy/40 mt-0.5">{statLabel}</div>
              </div>
              <h3 className="text-base font-semibold text-navy mb-2 leading-snug">{title}</h3>
              <p className="text-navy/50 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
