'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Scale } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Compare', href: '#compare' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', v => setScrolled(v > 40))
  }, [scrollY])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-dark transition-colors duration-200">
            <Scale className="w-4 h-4 text-navy" />
          </div>
          <span className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}>
            Counsel
          </span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-navy/70 hover:text-navy'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#hero-cta"
            className="flex items-center gap-1.5 bg-gold hover:bg-gold-dark text-navy text-sm font-bold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-pulse" />
            Join the waitlist
          </a>
        </div>
      </div>
    </motion.header>
  )
}
