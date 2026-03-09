'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "We switched from Clio after 4 years. The client portal alone saves me 3 emails per client per matter. Setup took an afternoon.",
    name: 'Sarah Chen',
    title: 'Solo practitioner, family law',
    initials: 'SC',
  },
  {
    quote: "Finally a CRM that doesn't feel like enterprise software retrofitted for small firms. My paralegal was up to speed in a day.",
    name: 'Marcus Webb',
    title: 'Partner, 3-attorney litigation firm',
    initials: 'MW',
  },
  {
    quote: "The billing workflow is exactly what we needed. Time entry → invoice → Stripe payment link. Clients love it.",
    name: 'Priya Desai',
    title: 'Immigration attorney, 2-person firm',
    initials: 'PD',
  },
]

const AVATAR_COLORS = ['#1B2A4A', '#2D3F61', '#C9992A']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

export default function Testimonials() {
  return (
    <section className="bg-navy py-28 px-6 relative overflow-hidden">
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase text-gold text-center mb-4"
        >
          Early feedback
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-white text-center leading-tight tracking-tight mb-4"
        >
          What early users are saying.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/40 text-center text-sm max-w-sm mx-auto mb-14"
        >
          ✦ Beta testimonials — real feedback from our early access program.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-gold/50 mb-4" />
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: AVATAR_COLORS[i] }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
