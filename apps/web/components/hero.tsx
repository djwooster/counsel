'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Users } from 'lucide-react'

const WAITLIST_COUNT = 312

// ── Dashboard Mockup ──────────────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
      className="relative w-full"
    >
      {/* Glow behind mockup */}
      <div className="absolute -inset-4 bg-gradient-to-br from-navy/5 via-gold/5 to-navy/5 rounded-3xl blur-2xl" />

      {/* Browser frame */}
      <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl shadow-navy/10">
        {/* Browser chrome */}
        <div className="bg-[#F0F2F5] border-b border-border h-9 flex items-center px-4 gap-3 flex-shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF6057]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-border rounded-md px-3 py-1 flex items-center gap-2 w-56">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
              <span className="text-[11px] text-gray-400 truncate">app.counselcrm.com</span>
            </div>
          </div>
        </div>

        {/* App window */}
        <div className="flex bg-[#F8F9FB]" style={{ height: '420px' }}>
          {/* Sidebar */}
          <div className="w-44 bg-navy flex flex-col flex-shrink-0">
            {/* Logo */}
            <div className="px-4 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gold rounded-md flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <line x1="8" y1="2" x2="8" y2="14" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="3" y1="5" x2="13" y2="5" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="3" y1="5" x2="3" y2="9" stroke="#1B2A4A" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="13" y1="5" x2="13" y2="11" stroke="#1B2A4A" strokeWidth="1.2" strokeLinecap="round"/>
                    <ellipse cx="3" cy="9.5" rx="2.5" ry="1" stroke="#1B2A4A" strokeWidth="1"/>
                    <ellipse cx="13" cy="11.5" rx="2.5" ry="1" stroke="#1B2A4A" strokeWidth="1"/>
                  </svg>
                </div>
                <span className="text-white text-sm font-semibold">Counsel</span>
              </div>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-2 py-3 space-y-0.5">
              {[
                { label: 'Overview', active: true },
                { label: 'Matters', active: false },
                { label: 'Clients', active: false },
                { label: 'Calendar', active: false },
                { label: 'Time & Billing', active: false },
                { label: 'Portal', active: false },
              ].map(item => (
                <div
                  key={item.label}
                  className={`px-3 py-2 rounded-lg text-xs font-medium ${
                    item.active
                      ? 'bg-gold/20 text-gold'
                      : 'text-white/50'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </nav>

            {/* User */}
            <div className="px-3 py-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-navy text-[10px] font-bold">S</div>
                <div>
                  <div className="text-white text-[10px] font-medium">Sarah Mitchell</div>
                  <div className="text-white/40 text-[9px]">Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <div className="bg-white border-b border-border px-5 py-3 flex items-center justify-between flex-shrink-0">
              <div>
                <div className="text-sm font-semibold text-navy">Good morning, Sarah ☀️</div>
                <div className="text-[10px] text-navy/40">Monday, March 3 · Mitchell & Associates</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-navy/40" />
                </div>
                <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy text-[10px] font-bold">S</div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-4 overflow-hidden">
              {/* KPI cards */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Active Matters', value: '14', change: '+2', up: true },
                  { label: 'Revenue MTD', value: '$48.2K', change: '+12%', up: true },
                  { label: 'Hours Billed', value: '156', change: '-3%', up: false },
                  { label: 'Win Rate', value: '73%', change: '+5%', up: true },
                ].map(kpi => (
                  <div key={kpi.label} className="bg-white rounded-lg border border-border p-3">
                    <div className="text-[9px] text-navy/50 font-medium mb-1">{kpi.label}</div>
                    <div className="text-base font-bold text-navy">{kpi.value}</div>
                    <div className={`text-[9px] font-medium mt-0.5 ${kpi.up ? 'text-green-600' : 'text-red-500'}`}>{kpi.change}</div>
                  </div>
                ))}
              </div>

              {/* Chart + list row */}
              <div className="grid grid-cols-5 gap-3 h-[230px]">
                {/* Revenue chart */}
                <div className="col-span-3 bg-white rounded-lg border border-border p-3 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold text-navy">Revenue — Last 12 Months</span>
                    <span className="text-[9px] text-navy/40 bg-surface px-2 py-0.5 rounded">2025</span>
                  </div>
                  {/* Simplified area chart SVG */}
                  <div className="flex-1">
                    <svg viewBox="0 0 280 130" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E8B84B" stopOpacity="0.25"/>
                          <stop offset="100%" stopColor="#E8B84B" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      {[0,1,2,3].map(i => (
                        <line key={i} x1="0" y1={i*32+10} x2="280" y2={i*32+10} stroke="#E5E7EB" strokeWidth="0.5"/>
                      ))}
                      {/* Area path */}
                      <path
                        d="M 0 95 C 20 90, 30 85, 46 80 C 60 75, 70 88, 93 72 C 113 58, 126 65, 140 55 C 153 45, 163 60, 186 48 C 206 38, 220 42, 233 35 C 246 28, 260 30, 280 22 L 280 130 L 0 130 Z"
                        fill="url(#chartGrad)"
                      />
                      {/* Line */}
                      <path
                        d="M 0 95 C 20 90, 30 85, 46 80 C 60 75, 70 88, 93 72 C 113 58, 126 65, 140 55 C 153 45, 163 60, 186 48 C 206 38, 220 42, 233 35 C 246 28, 260 30, 280 22"
                        fill="none" stroke="#E8B84B" strokeWidth="1.5" strokeLinecap="round"
                      />
                      {/* End dot */}
                      <circle cx="280" cy="22" r="3" fill="#E8B84B"/>
                      {/* Month labels */}
                      {['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'].map((m, i) => (
                        <text key={m} x={i*25+2} y="128" fontSize="7" fill="#9CA3AF">{m}</text>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Recent matters */}
                <div className="col-span-2 bg-white rounded-lg border border-border p-3 flex flex-col">
                  <div className="text-[10px] font-semibold text-navy mb-2">Recent Matters</div>
                  <div className="space-y-1.5 flex-1">
                    {[
                      { title: 'Chen v. Richards', area: 'Family', status: 'Active', color: 'bg-green-100 text-green-700' },
                      { title: 'Patel Estate', area: 'Estate', status: 'Active', color: 'bg-green-100 text-green-700' },
                      { title: 'Kim Immigration', area: 'Immigration', status: 'Pending', color: 'bg-amber-100 text-amber-700' },
                      { title: 'Rivera Defense', area: 'Criminal', status: 'Active', color: 'bg-green-100 text-green-700' },
                      { title: 'Webb v. Mason', area: 'PI', status: 'Intake', color: 'bg-blue-100 text-blue-700' },
                    ].map(matter => (
                      <div key={matter.title} className="flex items-center justify-between py-1 border-b border-border/50 last:border-0">
                        <div>
                          <div className="text-[9px] font-semibold text-navy leading-tight">{matter.title}</div>
                          <div className="text-[8px] text-navy/40">{matter.area}</div>
                        </div>
                        <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${matter.color}`}>{matter.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
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
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
  }

  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-0">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 to-white pointer-events-none" />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top: text content — centered */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center mb-14"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-navy/60 border border-border bg-white px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Early Access — Now Open
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.06] tracking-tight mb-6"
          >
            The CRM law firms{' '}
            <span className="relative inline-block">
              actually want
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M 0 6 Q 100 0 200 6" stroke="#E8B84B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </span>{' '}
            to use.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-navy/55 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Counsel is launching soon — modern practice management built specifically for 1–5 attorney firms.
            Join the waitlist for early access and founding member pricing.
          </motion.p>

          {/* Waitlist form */}
          <motion.div variants={item} id="hero-cta" className="mb-6">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-6 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-green-800 font-semibold text-sm">You're on the list.</p>
                    <p className="text-green-600/70 text-xs mt-0.5">We'll send early access details before launch.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white border border-border text-navy placeholder:text-navy/35 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/40 text-sm shadow-sm transition-all"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm whitespace-nowrap group shadow-sm hover:shadow-md"
                  >
                    Join the waitlist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {['#1B2A4A', '#2D3F61', '#C9992A', '#0F1A30', '#4A6280'].map((color, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm"
                  style={{ background: color, zIndex: 5 - i }}
                >
                  {['S','M','P','J','L'][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-navy/50">
              <span className="font-semibold text-navy">{WAITLIST_COUNT}+ firms</span> already on the waitlist
            </p>
          </motion.div>
        </motion.div>

        {/* Dashboard mockup — full width, bleeds down */}
        <div className="relative max-w-5xl mx-auto">
          <DashboardMockup />
          {/* Bottom fade so it bleeds into next section */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-xl" />
        </div>
      </div>
    </section>
  )
}
