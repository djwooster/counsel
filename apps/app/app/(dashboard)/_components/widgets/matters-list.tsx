'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BadgeProps } from '@/components/ui/badge'

const MATTERS = [
  { id: '1', title: 'Johnson Estate', type: 'Estate Planning', status: 'active', dueDate: 'Mar 15', attorney: 'SL' },
  { id: '2', title: 'Apex LLC Formation', type: 'Business', status: 'active', dueDate: 'Mar 20', attorney: 'MR' },
  { id: '3', title: '420 Oak Street', type: 'Real Estate', status: 'intake', dueDate: 'Mar 12', attorney: 'SL' },
  { id: '4', title: 'Smith Divorce', type: 'Family Law', status: 'active', dueDate: 'Apr 1', attorney: 'MR' },
  { id: '5', title: 'Martinez Defense', type: 'Criminal', status: 'pending', dueDate: 'Mar 25', attorney: 'SL' },
]

type MatterStatus = 'active' | 'pending' | 'intake' | 'closed'

const STATUS_VARIANT: Record<MatterStatus, BadgeProps['variant']> = {
  active: 'active',
  pending: 'pending',
  intake: 'intake',
  closed: 'closed',
}

export function MattersList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Open Matters</CardTitle>
          <Link href="/matters" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            View all
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {MATTERS.map((matter, index) => (
          <motion.div
            key={matter.id}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04, ease: 'easeOut' as const }}
            className="flex items-center gap-3 border-b border-gray-50 py-2 last:border-0"
          >
            <Avatar size="sm">
              <AvatarFallback>{matter.attorney}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">{matter.title}</p>
              <p className="text-xs text-gray-400">{matter.type}</p>
            </div>
            <div className="flex flex-shrink-0 flex-col items-end gap-1">
              <Badge variant={STATUS_VARIANT[matter.status as MatterStatus]}>
                {matter.status}
              </Badge>
              <span className="text-xs text-gray-400">{matter.dueDate}</span>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
