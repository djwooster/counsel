'use client'

import { CheckCircle, DollarSign, FileText, UserPlus, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ACTIVITIES = [
  { id: '1', user: 'SL', action: 'added a document to', target: 'Johnson Estate', time: '2m ago', icon: 'file' },
  { id: '2', user: 'MR', action: 'completed task in', target: 'Apex LLC Formation', time: '1h ago', icon: 'check' },
  { id: '3', user: 'system', action: 'New intake form submitted by', target: 'Michael Brown', time: '3h ago', icon: 'user' },
  { id: '4', user: 'SL', action: 'Invoice #1042 paid —', target: '$3,400', time: 'Yesterday', icon: 'dollar' },
]

const ICON_MAP: Record<string, React.ElementType> = {
  file: FileText,
  check: CheckCircle,
  user: UserPlus,
  dollar: DollarSign,
}

interface ActivityRowProps {
  activity: typeof ACTIVITIES[0]
  index: number
}

function ActivityRow({ activity, index }: ActivityRowProps) {
  const isSystem = activity.user === 'system'
  const Icon = ICON_MAP[activity.icon] ?? Zap

  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.04, ease: 'easeOut' as const }}
      className="flex items-center gap-3 border-b border-gray-50 py-2 last:border-0"
    >
      {isSystem ? (
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
          <Icon className="h-3.5 w-3.5 text-gray-400" />
        </div>
      ) : (
        <Avatar size="sm">
          <AvatarFallback>{activity.user}</AvatarFallback>
        </Avatar>
      )}
      <p className="min-w-0 flex-1 text-sm text-gray-700">
        {!isSystem && <span className="font-medium">{activity.user}</span>}{' '}
        {activity.action}{' '}
        <span className="font-medium">{activity.target}</span>
      </p>
      <span className="ml-auto flex-shrink-0 text-xs text-gray-400">{activity.time}</span>
    </motion.div>
  )
}

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        {ACTIVITIES.map((activity, index) => (
          <ActivityRow key={activity.id} activity={activity} index={index} />
        ))}
      </CardContent>
    </Card>
  )
}
