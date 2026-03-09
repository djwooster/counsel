'use client'

import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const EVENTS = [
  { id: '1', title: 'Deposition — Johnson Estate', date: 'Mar 10', time: '10:00 AM', type: 'hearing' },
  { id: '2', title: 'Client Meeting — Apex LLC', date: 'Mar 12', time: '2:00 PM', type: 'meeting' },
  { id: '3', title: 'Court Hearing — Martinez', date: 'Mar 15', time: '9:00 AM', type: 'hearing' },
]

const TYPE_BADGE: Record<string, { bg: string; text: string; label: string }> = {
  hearing: { bg: 'bg-orange-50', text: 'text-orange-600', label: 'Hearing' },
  meeting: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'Meeting' },
}

function parseDateParts(date: string) {
  const parts = date.split(' ')
  return { month: parts[0], day: parts[1] }
}

export function EventsWidget() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Upcoming Events</CardTitle>
          <Calendar className="h-4 w-4 text-gray-300" />
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {EVENTS.map((event, index) => {
          const { month, day } = parseDateParts(event.date)
          const badge = TYPE_BADGE[event.type] ?? TYPE_BADGE.meeting

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.04, ease: 'easeOut' as const }}
              className="flex items-start gap-3 border-b border-gray-50 py-2 last:border-0"
            >
              <div className="flex h-9 w-9 flex-shrink-0 flex-col items-center justify-center rounded-md bg-gray-50 text-center">
                <span className="text-[9px] uppercase leading-none text-gray-400">{month}</span>
                <span className="text-sm font-semibold leading-tight text-gray-800">{day}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-800">{event.title}</p>
                <p className="text-xs text-gray-400">{event.time}</p>
              </div>
              <span
                className={[
                  'flex-shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium',
                  badge.bg,
                  badge.text,
                ].join(' ')}
              >
                {badge.label}
              </span>
            </motion.div>
          )
        })}
      </CardContent>
    </Card>
  )
}
