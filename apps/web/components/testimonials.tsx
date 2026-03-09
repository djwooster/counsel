'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "We switched from Clio after 4 years. The client portal alone saves me 3 emails per client per matter. Setup took an afternoon.",
    name: 'Sarah Chen',
    title: 'Solo practitioner',
    practice: 'Family law · San Francisco, CA',
    initials: 'SC',
    color: '#1B2A4A',
  },
  {
    quote: "Finally a CRM that doesn't feel like enterprise software retrofitted for small firms. My paralegal was up and running in a day.",
    name: 'Marcus Webb',
    title: 'Partner',
    practice: '3-attorney litigation firm · Austin, TX',
    initials: 'MW',
    color: '#2D3F61',
  },
  {
    quote: "The billing workflow is exactly what we needed. Time entry → invoice → Stripe payment link. Clients love paying online.",
    name: 'Priya Desai',
    title: 'Immigration attorney',
    practice: '2-person firm · New York, NY',
    initials: 'PD',
    color: '#C9992A',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Testimonials() {
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
          <p className="text-xs font-semibold tracking-widest uppercase text-navy/40 mb-3">Early feedback</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tight mb-2">
            What early access users are saying.
          </h2>
          <p className="text-navy/40 text-sm">✦ Beta testimonials from our early access program.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map(t => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-white border border-border rounded-2xl p-7 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 12 12" className="w-3.5 h-3.5 fill-gold"><path d="M6 1l1.2 3.6H11L8.4 6.8l1 3.2L6 8.2 2.6 10l1-3.2L1 4.6h3.8L6 1z"/></svg>
                ))}
              </div>
              <p className="text-navy/70 text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-navy text-sm font-semibold leading-tight">{t.name}</p>
                  <p className="text-navy/40 text-xs mt-0.5">{t.practice}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
