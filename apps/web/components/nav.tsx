'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Compare', href: '#compare' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-navy-light transition-colors duration-200">
            <Scale className="w-4 h-4 text-gold" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-navy">Counsel</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-navy/60 hover:text-navy transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#hero-cta"
          className="flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          Join the waitlist
        </a>
      </div>
    </motion.header>
  )
}
