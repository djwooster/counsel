'use client'

import { motion } from 'framer-motion'
import { Scale, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const LINKS = {
  Product: ['Features', 'Pricing', 'Compare', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookies'],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <footer className="bg-navy-dark border-t border-white/5">
      {/* CTA band */}
      <div className="border-b border-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
          >
            Ready to simplify your practice?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.07 }}
            className="text-white/50 mb-8 text-lg"
          >
            14 days free. No credit card. Cancel anytime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="max-w-sm mx-auto"
          >
            {submitted ? (
              <p className="text-gold font-medium py-3">You're on the list — talk soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Work email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/40 text-sm"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-navy font-semibold px-4 py-2.5 rounded-lg transition-colors text-sm group"
                >
                  Get started
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-navy" />
              </div>
              <span className="text-white font-semibold text-lg">Counsel</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Modern practice management for small law firms.
            </p>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Counsel CRM. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Powered by{' '}
            <a href="/" className="text-white/35 hover:text-white/60 transition-colors">
              Counsel CRM
            </a>
            {' '}— your firm's website could be here too.
          </p>
        </div>
      </div>
    </footer>
  )
}
