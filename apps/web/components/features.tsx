'use client'

import { motion } from 'framer-motion'
import {
  Users, Briefcase, Clock, MessageSquare, CalendarDays, FileText,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Users,
    title: 'Contact & Client Management',
    body: 'A single record for every client, contact, and opposing counsel. Full history, notes, and portal status at a glance.',
  },
  {
    icon: Briefcase,
    title: 'Matter Tracking',
    body: 'From intake to close, every matter is organized. Status pipelines, practice area filters, and linked contacts in one view.',
  },
  {
    icon: Clock,
    title: 'Time Tracking & Billing',
    body: 'A floating timer that follows you through the app. One click to log, one click to invoice. Stripe-powered online payments.',
  },
  {
    icon: MessageSquare,
    title: 'Secure Client Portal',
    body: 'Give clients a branded portal to view matters, download documents, pay invoices, and message your team directly.',
  },
  {
    icon: CalendarDays,
    title: 'Calendar & Deadlines',
    body: 'Court dates, hearings, and deadlines synced with Google Calendar. Deadline events highlighted in red so nothing slips.',
  },
  {
    icon: FileText,
    title: 'Document Management',
    body: 'Upload, organize, and share documents per matter. Clients access them securely through the portal with signed URLs.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const tile = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Features() {
  return (
    <section id="features" className="bg-cream py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase text-gold text-center mb-4"
        >
          Features
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-navy text-center leading-tight tracking-tight mb-4 max-w-2xl mx-auto"
        >
          Everything you need. Nothing you don't.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy-muted text-center text-lg max-w-xl mx-auto mb-16"
        >
          Every feature in Counsel is included in every plan. No add-ons, no surprises.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={tile}
              className="group bg-white border border-stone rounded-2xl p-7 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold group-hover:scale-105 transition-all duration-300">
                <Icon className="w-4.5 h-4.5 text-white group-hover:text-navy transition-colors duration-300" />
              </div>

              <h3 className="text-base font-semibold text-navy mb-2">{title}</h3>
              <p className="text-navy-muted text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
