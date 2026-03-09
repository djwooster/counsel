'use client'

import { motion } from 'framer-motion'
import { Briefcase, MessageSquare, Clock } from 'lucide-react'

// ── Matter detail mockup ───────────────────────────────────────────────────
function MatterMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-xl shadow-navy/8 bg-white">
      {/* Header */}
      <div className="bg-white border-b border-border px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-navy/40 mb-1">Matter · Family Law</div>
            <div className="text-base font-bold text-navy">Chen v. Richards</div>
          </div>
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex border-b border-border bg-surface px-4 gap-1">
        {['Overview', 'Tasks', 'Documents', 'Time', 'Messages'].map((tab, i) => (
          <div key={tab} className={`px-3 py-2 text-xs font-medium border-b-2 ${i === 0 ? 'border-navy text-navy' : 'border-transparent text-navy/40'}`}>
            {tab}
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="p-4 grid grid-cols-3 gap-4">
        {/* Left: details */}
        <div className="col-span-2 space-y-3">
          <div className="bg-surface rounded-lg p-3">
            <div className="text-[10px] font-semibold text-navy/50 mb-2 uppercase tracking-wide">Linked Contacts</div>
            {[
              { name: 'Amy Chen', role: 'Client', initials: 'AC', color: '#1B2A4A' },
              { name: 'Brad Richards', role: 'Opposing', initials: 'BR', color: '#9CA3AF' },
              { name: 'Judge L. Morris', role: 'Other', initials: 'LM', color: '#6B7FA3' },
            ].map(c => (
              <div key={c.name} className="flex items-center gap-2 py-1.5 border-b border-border/50 last:border-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold" style={{ background: c.color }}>{c.initials}</div>
                <div>
                  <div className="text-[10px] font-semibold text-navy">{c.name}</div>
                  <div className="text-[9px] text-navy/40">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-surface rounded-lg p-3">
            <div className="text-[10px] font-semibold text-navy/50 mb-2 uppercase tracking-wide">Open Tasks</div>
            {[
              { task: 'File motion to compel', due: 'Mar 12', done: true },
              { task: 'Prepare deposition outline', due: 'Mar 18', done: false },
              { task: 'Review discovery docs', due: 'Mar 22', done: false },
            ].map(t => (
              <div key={t.task} className="flex items-center gap-2 py-1.5 border-b border-border/50 last:border-0">
                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border flex-shrink-0 ${t.done ? 'bg-green-500 border-green-500' : 'border-border'}`}>
                  {t.done && <svg viewBox="0 0 10 10" className="w-2 h-2"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>}
                </div>
                <span className={`text-[10px] flex-1 ${t.done ? 'line-through text-navy/30' : 'text-navy'}`}>{t.task}</span>
                <span className="text-[9px] text-navy/40">{t.due}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Right: sidebar info */}
        <div className="space-y-3">
          <div className="bg-surface rounded-lg p-3">
            <div className="text-[10px] font-semibold text-navy/50 mb-2 uppercase tracking-wide">Details</div>
            {[
              { label: 'Attorney', value: 'S. Mitchell' },
              { label: 'Billing', value: 'Hourly' },
              { label: 'Rate', value: '$350/hr' },
              { label: 'Hours', value: '42.5 hrs' },
            ].map(d => (
              <div key={d.label} className="flex justify-between py-1 border-b border-border/50 last:border-0">
                <span className="text-[9px] text-navy/40">{d.label}</span>
                <span className="text-[9px] font-semibold text-navy">{d.value}</span>
              </div>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/20 rounded-lg p-3">
            <div className="text-[10px] font-semibold text-gold-dark mb-1">Upcoming</div>
            <div className="text-[9px] text-navy/70 font-medium">Hearing — Mar 28</div>
            <div className="text-[8px] text-navy/40 mt-0.5">Dept. 12, 9:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Client portal mockup ───────────────────────────────────────────────────
function PortalMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-xl shadow-navy/8 bg-white">
      {/* Portal header */}
      <div className="bg-navy px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gold rounded flex items-center justify-center">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><line x1="6" y1="1" x2="6" y2="11" stroke="#1B2A4A" strokeWidth="1.2"/><line x1="2" y1="3.5" x2="10" y2="3.5" stroke="#1B2A4A" strokeWidth="1.2"/><line x1="2" y1="3.5" x2="2" y2="6.5" stroke="#1B2A4A" strokeWidth="1"/><line x1="10" y1="3.5" x2="10" y2="8" stroke="#1B2A4A" strokeWidth="1"/><ellipse cx="2" cy="7" rx="1.8" ry="0.8" stroke="#1B2A4A" strokeWidth="0.8"/><ellipse cx="10" cy="8.5" rx="1.8" ry="0.8" stroke="#1B2A4A" strokeWidth="0.8"/></svg>
          </div>
          <span className="text-white text-xs font-semibold">Mitchell & Associates — Client Portal</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-navy text-[9px] font-bold">A</div>
      </div>
      {/* Welcome */}
      <div className="bg-surface border-b border-border px-5 py-3">
        <div className="text-xs font-semibold text-navy">Welcome back, Amy 👋</div>
        <div className="text-[10px] text-navy/40">Your matters, documents, and messages — all in one place.</div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Matter card */}
        <div className="bg-white border border-border rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold text-navy">Chen v. Richards</div>
            <span className="text-[8px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Active</span>
          </div>
          <div className="flex gap-4">
            <div><div className="text-[9px] text-navy/40">Attorney</div><div className="text-[10px] font-medium text-navy">Sarah Mitchell</div></div>
            <div><div className="text-[9px] text-navy/40">Next hearing</div><div className="text-[10px] font-medium text-navy">Mar 28</div></div>
          </div>
        </div>
        {/* Invoice */}
        <div className="bg-white border border-border rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-navy">Invoice #INV-0041</div>
              <div className="text-[9px] text-navy/40">Due March 15, 2025</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-navy">$4,200</div>
              <button className="text-[9px] font-semibold bg-gold text-navy px-2.5 py-1 rounded-md mt-1 block">Pay now</button>
            </div>
          </div>
        </div>
        {/* Messages */}
        <div className="bg-white border border-border rounded-lg p-3">
          <div className="text-[10px] font-semibold text-navy mb-2">Messages</div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-navy flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">S</div>
              <div className="bg-surface rounded-lg px-2 py-1.5 text-[9px] text-navy/70">Your motion was filed this morning. Next steps attached.</div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="bg-navy/10 rounded-lg px-2 py-1.5 text-[9px] text-navy/70">Thank you! When is the next court date?</div>
              <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-navy text-[8px] font-bold flex-shrink-0">A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Billing mockup ─────────────────────────────────────────────────────────
function BillingMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-border shadow-xl shadow-navy/8 bg-white">
      {/* Header */}
      <div className="bg-white border-b border-border px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-navy/40 mb-1">Invoice #INV-0041</div>
            <div className="text-base font-bold text-navy">Chen v. Richards — March 2025</div>
          </div>
          <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-3 py-1 rounded-full">Draft</span>
        </div>
      </div>
      {/* Line items */}
      <div className="p-4">
        <table className="w-full text-[10px] mb-4">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left pb-2 text-navy/40 font-medium">Description</th>
              <th className="text-right pb-2 text-navy/40 font-medium">Hrs</th>
              <th className="text-right pb-2 text-navy/40 font-medium">Rate</th>
              <th className="text-right pb-2 text-navy/40 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { desc: 'Discovery review & analysis', hrs: 6.5, rate: 350, total: 2275 },
              { desc: 'Motion drafting', hrs: 3.0, rate: 350, total: 1050 },
              { desc: 'Client calls (×3)', hrs: 1.5, rate: 350, total: 525 },
              { desc: 'Court appearance', hrs: 1.0, rate: 350, total: 350 },
            ].map(row => (
              <tr key={row.desc} className="border-b border-border/50 last:border-0">
                <td className="py-2 text-navy/80">{row.desc}</td>
                <td className="py-2 text-right text-navy/60">{row.hrs}</td>
                <td className="py-2 text-right text-navy/60">${row.rate}</td>
                <td className="py-2 text-right font-semibold text-navy">${row.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Totals */}
        <div className="bg-surface rounded-lg p-3 space-y-1.5 mb-3">
          {[
            { label: 'Subtotal', value: '$4,200' },
            { label: 'Tax (0%)', value: '$0' },
          ].map(r => (
            <div key={r.label} className="flex justify-between text-[10px]">
              <span className="text-navy/50">{r.label}</span>
              <span className="text-navy/70">{r.value}</span>
            </div>
          ))}
          <div className="flex justify-between text-[11px] font-bold text-navy pt-1.5 border-t border-border">
            <span>Total</span>
            <span>$4,200</span>
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 text-[10px] font-semibold text-navy border border-border rounded-lg py-2 bg-surface">Save draft</button>
          <button className="flex-1 text-[10px] font-semibold text-white bg-navy rounded-lg py-2 flex items-center justify-center gap-1.5">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            Send to client
          </button>
          <button className="text-[10px] font-semibold bg-gold text-navy rounded-lg px-3 py-2">Stripe link</button>
        </div>
      </div>
    </div>
  )
}

// ── Feature sections ────────────────────────────────────────────────────────
const SECTIONS = [
  {
    eyebrow: 'Matter management',
    icon: Briefcase,
    title: 'Every case, perfectly organized — from intake to close.',
    body: 'Matters are the center of your practice. Counsel keeps every contact, task, document, time entry, and message linked to the right matter. No more hunting across apps.',
    bullets: [
      'Intake → Active → Closed pipeline',
      'Linked contacts with roles (client, opposing, witness)',
      'Tasks with due dates and attorney assignment',
      'Built-in deadline tracking with calendar sync',
    ],
    mockup: <MatterMockup />,
    flip: false,
  },
  {
    eyebrow: 'Client portal',
    icon: MessageSquare,
    title: "Give clients a portal they'll actually log into.",
    body: 'Clients get a branded, secure portal where they can check matter status, download documents, pay invoices, and message your team — without calling the front desk.',
    bullets: [
      'Magic-link login — no password to forget',
      'Secure messaging per matter',
      'Invoice viewing and Stripe online payments',
      'Document download with signed, expiring URLs',
    ],
    mockup: <PortalMockup />,
    flip: true,
  },
  {
    eyebrow: 'Time tracking & billing',
    icon: Clock,
    title: 'From timer to paid invoice in three clicks.',
    body: 'A floating timer follows you through the app. Stop it and a time entry is logged. Select unbilled entries, generate an invoice, and send a Stripe payment link — all without leaving Counsel.',
    bullets: [
      'Floating persistent timer across all views',
      'Pull unbilled time entries into an invoice',
      'Send invoices by email with Stripe payment link',
      'Auto-mark as paid via Stripe webhook',
    ],
    mockup: <BillingMockup />,
    flip: false,
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-28">
        {SECTIONS.map(({ eyebrow, icon: Icon, title, body, bullets, mockup, flip }) => (
          <div
            key={eyebrow}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: flip ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-navy/60" />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-navy/40">{eyebrow}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tight mb-4">
                {title}
              </h3>
              <p className="text-navy/55 text-lg leading-relaxed mb-6">{body}</p>
              <ul className="space-y-2.5">
                {bullets.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 10 10" className="w-2.5 h-2.5"><path d="M2 5l2 2 4-4" stroke="#C9992A" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                    </div>
                    <span className="text-sm text-navy/70">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: flip ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              {mockup}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
