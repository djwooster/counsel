'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const FEATURES_SOLO = [
  '1 attorney seat',
  'Unlimited clients & matters',
  'Time tracking & invoicing',
  'Client portal',
  'Document management',
  'Calendar & deadlines',
  'Firm website',
  'Email support',
]

const FEATURES_TEAM = [
  'Everything in Solo',
  'Up to 5 attorney seats',
  'Team permissions & roles',
  'Paralegal & staff seats',
  'Google Calendar sync',
  'Intake forms',
  'Priority support',
  'Custom domain for firm site',
]

const FEATURES_GROWTH = [
  'Everything in Team',
  'Unlimited seats',
  'White-label portal',
  'Advanced reporting',
  'API access',
  'Dedicated onboarding',
  'SLA guarantee',
  'Phone support',
]

const PLANS = [
  {
    name: 'Solo',
    desc: 'Perfect for solo practitioners.',
    monthlyPrice: 49,
    annualPrice: 41,
    features: FEATURES_SOLO,
    highlight: false,
    cta: 'Start free trial',
  },
  {
    name: 'Team',
    desc: 'For growing firms up to 5 attorneys.',
    monthlyPrice: 39,
    annualPrice: 33,
    perUser: true,
    features: FEATURES_TEAM,
    highlight: true,
    cta: 'Start free trial',
    badge: 'Most popular',
  },
  {
    name: 'Growth',
    desc: 'Unlimited seats, unlimited scale.',
    monthlyPrice: null,
    annualPrice: null,
    features: FEATURES_GROWTH,
    highlight: false,
    cta: 'Talk to us',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase text-gold text-center mb-4"
        >
          Pricing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-navy text-center leading-tight tracking-tight mb-4"
        >
          Honest pricing. No surprises.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy-muted text-center text-lg max-w-xl mx-auto mb-10"
        >
          Every feature included at every tier. Pay for seats, not add-ons.
        </motion.p>

        {/* Annual toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <span className={`text-sm font-medium ${!annual ? 'text-navy' : 'text-navy-muted'}`}>Monthly</span>
          <button
            onClick={() => setAnnual(a => !a)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-navy' : 'bg-stone'}`}
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 40 }}
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm ${annual ? 'left-5.5' : 'left-0.5'}`}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-navy' : 'text-navy-muted'}`}>
            Annual
            <span className="ml-1.5 text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full">Save 2 months</span>
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-navy text-white border-2 border-gold/50 shadow-2xl shadow-navy/20'
                  : 'bg-cream border border-stone'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 text-xs font-semibold text-navy bg-gold px-3 py-1 rounded-full shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-navy-muted'}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <div className="flex items-end gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={annual ? 'annual' : 'monthly'}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className={`text-4xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-navy'}`}
                      >
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className={`text-sm mb-1 ${plan.highlight ? 'text-white/50' : 'text-navy-muted'}`}>
                      /mo{plan.perUser ? ' per user' : ''}
                    </span>
                  </div>
                ) : (
                  <span className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                    Custom
                  </span>
                )}
                {plan.monthlyPrice && annual && (
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-white/40' : 'text-navy-muted'}`}>
                    Billed annually
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#hero-cta"
                className={`block text-center text-sm font-semibold py-2.5 rounded-xl mb-8 transition-colors duration-200 ${
                  plan.highlight
                    ? 'bg-gold hover:bg-gold-dark text-navy'
                    : 'bg-navy hover:bg-navy-light text-white'
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-gold' : 'text-gold-dark'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-navy/80'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
