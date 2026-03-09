'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const TRUST_ITEMS = ['No credit card required', '14-day free trial', 'Cancel anytime']

// Subtle animated legal scales SVG motif
function ScalesMotif() {
  return (
    <motion.svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8 }}
    >
      {/* Central pillar */}
      <motion.line
        x1="240" y1="60" x2="240" y2="280"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
      />
      {/* Horizontal beam */}
      <motion.line
        x1="100" y1="100" x2="380" y2="100"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
      />
      {/* Left chain */}
      <motion.line
        x1="100" y1="100" x2="100" y2="180"
        stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
      {/* Right chain */}
      <motion.line
        x1="380" y1="100" x2="380" y2="200"
        stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
      {/* Left pan */}
      <motion.ellipse
        cx="100" cy="185" rx="45" ry="8"
        stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.35" fill="none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      />
      {/* Right pan (slightly lower for balance effect) */}
      <motion.ellipse
        cx="380" cy="205" rx="45" ry="8"
        stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.35" fill="none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      />
      {/* Top ornament */}
      <motion.circle
        cx="240" cy="58" r="5"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.5" fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />
      {/* Decorative grid lines */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.line
          key={i}
          x1={60 + i * 90} y1="40" x2={60 + i * 90} y2="290"
          stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.04"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
        />
      ))}
      {[0, 1, 2, 3].map(i => (
        <motion.line
          key={i}
          x1="40" y1={60 + i * 70} x2="440" y2={60 + i * 70}
          stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.04"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
        />
      ))}
    </motion.svg>
  )
}

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  }

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-90" />

      {/* Scales motif — decorative */}
      <div className="absolute right-0 top-0 w-[600px] h-[400px] opacity-60 pointer-events-none">
        <ScalesMotif />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-navy-light/30 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 bg-gold/10 px-4 py-1.5 rounded-full">
              Purpose-built for small law firms
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Run your firm.
            <br />
            <span className="text-gold">Not your software.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Counsel CRM gives small law firms the tools of an enterprise practice —
            without the enterprise price tag or six-month onboarding.
          </motion.p>

          {/* Email capture */}
          <motion.div variants={item} id="hero-cta" className="max-w-md mx-auto mb-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 text-gold font-medium py-4"
              >
                <CheckCircle2 className="w-5 h-5" />
                You're on the list — we'll be in touch soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 text-sm transition-all"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-5 py-3 rounded-lg transition-colors duration-200 text-sm whitespace-nowrap group"
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Trust items */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {TRUST_ITEMS.map(t => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-white/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold/60" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
