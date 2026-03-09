'use client'

import { Briefcase, Clock, DollarSign, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCardData {
  label: string
  value: string
  trend: string
  trendUp?: boolean
  trendNeutral?: boolean
  icon: React.ElementType
}

const STATS: StatCardData[] = [
  {
    label: 'Open Matters',
    value: '24',
    trend: '+3 this month',
    trendUp: true,
    icon: Briefcase,
  },
  {
    label: 'Active Clients',
    value: '47',
    trend: '+5 this month',
    trendUp: true,
    icon: Users,
  },
  {
    label: 'Monthly Revenue',
    value: '$48,230',
    trend: '+12% vs last month',
    trendUp: true,
    icon: DollarSign,
  },
  {
    label: 'Billable Hours',
    value: '312h',
    trend: 'this month',
    trendNeutral: true,
    icon: Clock,
  },
]

interface StatCardProps extends StatCardData {
  index: number
}

function StatCard({ label, value, trend, trendUp, trendNeutral, icon: Icon, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05, ease: 'easeOut' as const }}
      className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-gray-500">{label}</span>
        <Icon className="h-4 w-4 text-gray-300" />
      </div>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
      <div className="mt-1 flex items-center gap-1">
        {trendUp && (
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
        )}
        {trendNeutral && (
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
        )}
        <span className={cn('text-xs text-gray-400')}>{trend}</span>
      </div>
    </motion.div>
  )
}

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {STATS.map((stat, index) => (
        <StatCard key={stat.label} {...stat} index={index} />
      ))}
    </div>
  )
}
