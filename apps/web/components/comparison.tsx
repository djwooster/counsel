'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

type CellValue = true | false | null | string

const ROWS: { label: string; counsel: CellValue; clio: CellValue; mycase: CellValue }[] = [
  { label: 'Starting price', counsel: '$41/mo', clio: '$49/user/mo', mycase: '$49/user/mo' },
  { label: 'Client portal included', counsel: true, clio: false, mycase: false },
  { label: 'Intake forms included', counsel: true, clio: false, mycase: false },
  { label: 'Firm website included', counsel: true, clio: false, mycase: false },
  { label: 'Google Calendar sync', counsel: true, clio: true, mycase: true },
  { label: 'Online invoice payments', counsel: true, clio: true, mycase: true },
  { label: 'Document management', counsel: true, clio: true, mycase: true },
  { label: 'Mobile-friendly', counsel: true, clio: null, mycase: null },
  { label: 'Setup time', counsel: '< 1 hour', clio: 'Days–weeks', mycase: 'Days' },
  { label: 'Built for small firms', counsel: true, clio: false, mycase: null },
]

function Cell({ value, highlight = false }: { value: CellValue; highlight?: boolean }) {
  if (value === true) return <Check className={`w-5 h-5 mx-auto ${highlight ? 'text-gold' : 'text-green-600'}`} />
  if (value === false) return <X className="w-4 h-4 mx-auto text-red-400" />
  if (value === null) return <Minus className="w-4 h-4 mx-auto text-navy-muted/40" />
  return (
    <span className={`text-sm font-medium ${highlight ? 'text-gold' : 'text-navy'}`}>
      {value}
    </span>
  )
}

export default function Comparison() {
  return (
    <section id="compare" className="bg-cream py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold tracking-widest uppercase text-gold text-center mb-4"
        >
          Compare
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-navy text-center leading-tight tracking-tight mb-4"
        >
          See how we stack up.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-navy-muted text-center text-lg max-w-xl mx-auto mb-14"
        >
          Counsel was built to be the obvious choice for small firms — on price, simplicity, and coverage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden rounded-2xl border border-stone bg-white shadow-sm"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone">
                <th className="text-left px-6 py-4 text-navy font-semibold w-1/2">Feature</th>
                <th className="px-4 py-4 text-center bg-navy text-white font-semibold w-[16.6%]">
                  <div className="flex flex-col items-center gap-0.5">
                    <span>Counsel</span>
                    <span className="text-[10px] font-normal text-gold/80">recommended</span>
                  </div>
                </th>
                <th className="px-4 py-4 text-center text-navy/50 font-medium w-[16.6%]">Clio</th>
                <th className="px-4 py-4 text-center text-navy/50 font-medium w-[16.6%]">MyCase</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="border-b border-stone/60 last:border-0 hover:bg-stone/30 transition-colors"
                >
                  <td className="px-6 py-3.5 text-navy/80 font-medium">{row.label}</td>
                  <td className="px-4 py-3.5 text-center bg-navy/[0.03]">
                    <Cell value={row.counsel} highlight />
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <Cell value={row.clio} />
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <Cell value={row.mycase} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-navy-muted/50 mt-4"
        >
          Pricing and features based on publicly available information as of early 2025. Subject to change.
        </motion.p>
      </div>
    </section>
  )
}
