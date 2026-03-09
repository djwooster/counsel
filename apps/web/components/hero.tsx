'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Users } from 'lucide-react'

const WAITLIST_COUNT = 312

// ─── Scales of Justice SVG ────────────────────────────────────────────────────

function ScalesOfJustice() {
  // Chain link positions for left and right sides
  const leftLinks = Array.from({ length: 9 }, (_, i) => i)
  const rightLinks = Array.from({ length: 11 }, (_, i) => i)

  return (
    <motion.svg
      viewBox="0 0 280 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* ── Ambient glow behind scales ── */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E8B84B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="panGlowL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E8B84B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="panGlowR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E8B84B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="140" cy="210" rx="120" ry="140" fill="url(#glow)" />

      {/* ── Column base system ── */}
      {/* Wide base plinth */}
      <motion.rect
        x="88" y="468" width="104" height="14" rx="2"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.55" fill="#E8B84B" fillOpacity="0.04"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        style={{ transformOrigin: '140px 475px' }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      />
      {/* Middle plinth */}
      <motion.rect
        x="102" y="454" width="76" height="14" rx="2"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.45" fill="#E8B84B" fillOpacity="0.03"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        style={{ transformOrigin: '140px 461px' }}
        transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
      />
      {/* Top plinth */}
      <motion.rect
        x="116" y="440" width="48" height="14" rx="2"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.35" fill="#E8B84B" fillOpacity="0.02"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        style={{ transformOrigin: '140px 447px' }}
        transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
      />

      {/* ── Column shaft ── */}
      <motion.rect
        x="133" y="200" width="14" height="240" rx="1"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.4" fill="#E8B84B" fillOpacity="0.03"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        style={{ transformOrigin: '140px 320px' }}
        transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
      />
      {/* Shaft highlight line */}
      <motion.line
        x1="138" y1="202" x2="138" y2="438"
        stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 1.0, ease: 'easeOut' }}
      />

      {/* ── Column capital ── */}
      {/* Wide capital band */}
      <motion.path
        d="M 92 200 L 188 200 L 172 218 L 108 218 Z"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.55"
        fill="#E8B84B" fillOpacity="0.05"
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4, ease: 'easeOut' }}
      />
      {/* Capital detail line */}
      <motion.line
        x1="96" y1="208" x2="184" y2="208"
        stroke="#E8B84B" strokeWidth="0.75" strokeOpacity="0.3"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 1.55 }}
      />

      {/* ── Finial orb ── */}
      <motion.circle
        cx="140" cy="187" r="12"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.65"
        fill="#E8B84B" fillOpacity="0.06"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        style={{ transformOrigin: '140px 187px' }}
        transition={{ duration: 0.5, delay: 1.6, ease: 'easeOut' }}
      />
      {/* Inner orb ring */}
      <motion.circle
        cx="140" cy="187" r="6"
        stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.4"
        fill="#E8B84B" fillOpacity="0.08"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        style={{ transformOrigin: '140px 187px' }}
        transition={{ duration: 0.4, delay: 1.75 }}
      />

      {/* Spike above orb */}
      <motion.line
        x1="140" y1="175" x2="140" y2="158"
        stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.5"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.35, delay: 1.85 }}
      />
      <motion.polygon
        points="140,148 145,162 135,162"
        fill="#E8B84B" fillOpacity="0.5"
        stroke="#E8B84B" strokeWidth="0.5" strokeOpacity="0.6"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: '140px 155px' }}
        transition={{ duration: 0.3, delay: 1.95 }}
      />

      {/* ── Decorative stars / dots ── */}
      {[
        { cx: 52, cy: 148, r: 1.5, delay: 2.1 },
        { cx: 228, cy: 132, r: 1.5, delay: 2.15 },
        { cx: 38, cy: 300, r: 1, delay: 2.2 },
        { cx: 242, cy: 288, r: 1, delay: 2.2 },
        { cx: 68, cy: 230, r: 1, delay: 2.25 },
        { cx: 212, cy: 380, r: 1, delay: 2.25 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r={dot.r}
          fill="#E8B84B" fillOpacity="0.4"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
          transition={{ duration: 0.3, delay: dot.delay }}
        />
      ))}

      {/* ══════════════════════════════════════════════════
          ANIMATED BALANCE ASSEMBLY — pivots at (140, 200)
          ══════════════════════════════════════════════════ */}
      <motion.g
        style={{ transformOrigin: '140px 200px' }}
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          delay: 2.2,
        }}
      >
        {/* ── Beam ── */}
        <line
          x1="22" y1="200" x2="258" y2="200"
          stroke="#E8B84B" strokeWidth="2.5" strokeOpacity="0.85"
          strokeLinecap="round"
        />
        {/* Beam end caps */}
        <circle cx="22" cy="200" r="3.5" fill="#E8B84B" fillOpacity="0.5" />
        <circle cx="258" cy="200" r="3.5" fill="#E8B84B" fillOpacity="0.5" />
        {/* Pivot circle */}
        <circle cx="140" cy="200" r="6"
          stroke="#E8B84B" strokeWidth="2" strokeOpacity="0.8"
          fill="#1B2A4A"
        />
        <circle cx="140" cy="200" r="2.5" fill="#E8B84B" fillOpacity="0.7" />

        {/* ── Left chain ── */}
        {leftLinks.map(i => (
          <ellipse
            key={`lc-${i}`}
            cx="22"
            cy={210 + i * 14}
            rx="3" ry="5"
            stroke="#E8B84B" strokeWidth="1" strokeOpacity={0.5 - i * 0.02}
            fill="none"
          />
        ))}
        {/* Left chain top ring */}
        <circle cx="22" cy="207" r="3.5"
          stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.55" fill="none"
        />

        {/* ── Left pan ── */}
        {/* Pan glow */}
        <ellipse cx="22" cy="342" rx="52" ry="20" fill="url(#panGlowL)" />
        {/* Pan rim */}
        <ellipse
          cx="22" cy="338" rx="46" ry="8"
          stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.7"
          fill="#E8B84B" fillOpacity="0.05"
        />
        {/* Pan bowl depth */}
        <path
          d="M -24 338 Q 22 352 68 338"
          stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.25" fill="none"
        />
        {/* Pan inner ellipse */}
        <ellipse
          cx="22" cy="337" rx="32" ry="5"
          stroke="#E8B84B" strokeWidth="0.75" strokeOpacity="0.3"
          fill="none"
        />

        {/* ── Right chain ── */}
        {rightLinks.map(i => (
          <ellipse
            key={`rc-${i}`}
            cx="258"
            cy={210 + i * 14}
            rx="3" ry="5"
            stroke="#E8B84B" strokeWidth="1" strokeOpacity={0.5 - i * 0.02}
            fill="none"
          />
        ))}
        {/* Right chain top ring */}
        <circle cx="258" cy="207" r="3.5"
          stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.55" fill="none"
        />

        {/* ── Right pan (slightly lower — scales in motion) ── */}
        {/* Pan glow */}
        <ellipse cx="258" cy="376" rx="52" ry="20" fill="url(#panGlowR)" />
        {/* Pan rim */}
        <ellipse
          cx="258" cy="372" rx="46" ry="8"
          stroke="#E8B84B" strokeWidth="1.5" strokeOpacity="0.7"
          fill="#E8B84B" fillOpacity="0.05"
        />
        {/* Pan bowl depth */}
        <path
          d="M 212 372 Q 258 386 304 372"
          stroke="#E8B84B" strokeWidth="1" strokeOpacity="0.25" fill="none"
        />
        {/* Pan inner ellipse */}
        <ellipse
          cx="258" cy="371" rx="32" ry="5"
          stroke="#E8B84B" strokeWidth="0.75" strokeOpacity="0.3"
          fill="none"
        />
      </motion.g>
    </motion.svg>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

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
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
  }
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
  }

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E8B84B 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Left side glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex items-center px-6 lg:px-16 pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* ── Left: text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={item} className="inline-flex mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 bg-gold/10 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                Early Access — Now Open
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Run your firm.
              <br />
              <span className="text-gold">Not your software.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className="text-lg text-white/55 max-w-lg mb-10 leading-relaxed"
            >
              Counsel CRM is launching soon — a modern practice management platform
              built specifically for small law firms. Join the waitlist for early access
              and founding member pricing.
            </motion.p>

            {/* Waitlist form */}
            <motion.div variants={item} id="hero-cta" className="mb-5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 bg-gold/10 border border-gold/30 rounded-xl px-5 py-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">You're on the list.</p>
                      <p className="text-white/50 text-xs mt-0.5">We'll be in touch with early access details soon.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-md"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      required
                      className="flex-1 px-4 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/40 text-sm transition-all"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm whitespace-nowrap group shadow-lg shadow-gold/20 hover:shadow-gold/30"
                    >
                      Join the waitlist
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Social proof counter */}
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {['#1B2A4A', '#2D3F61', '#C9992A', '#0F1A30'].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-navy flex items-center justify-center text-[9px] font-bold text-white"
                    style={{ background: color, zIndex: 4 - i }}
                  >
                    {['S', 'M', 'P', 'J'][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Users className="w-3.5 h-3.5 text-gold/50" />
                <span>
                  <span className="text-white/70 font-semibold">{WAITLIST_COUNT} firms</span>
                  {' '}already on the waitlist
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Scales of Justice ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow behind scales */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
            </div>

            <div className="relative w-64 h-[420px] md:w-80 md:h-[520px]">
              <ScalesOfJustice />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
