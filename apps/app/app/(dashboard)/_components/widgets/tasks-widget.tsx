'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const TASKS = [
  { id: '1', title: 'Review Johnson Estate draft', matter: 'Johnson Estate', priority: 'high', due: 'Today' },
  { id: '2', title: 'File Martinez motion', matter: 'Martinez Defense', priority: 'high', due: 'Today' },
  { id: '3', title: 'Send invoice to Apex LLC', matter: 'Apex LLC Formation', priority: 'medium', due: 'Tomorrow' },
  { id: '4', title: 'Update client notes', matter: 'Smith Divorce', priority: 'low', due: 'Mar 10' },
]

const PRIORITY_DOT: Record<string, string> = {
  high: 'bg-red-400',
  medium: 'bg-yellow-400',
  low: 'bg-gray-300',
}

export function TasksWidget() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Tasks</CardTitle>
          <Badge variant="default">8 due today</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {TASKS.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04, ease: 'easeOut' as const }}
            className="flex items-start gap-3 border-b border-gray-50 py-2 last:border-0"
          >
            <div className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border-2 border-gray-200" />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-800">{task.title}</p>
              <p className="text-xs text-gray-400">{task.matter}</p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-1.5">
              <span className="text-xs text-gray-400">{task.due}</span>
              <span className={cn('h-1.5 w-1.5 rounded-full flex-shrink-0', PRIORITY_DOT[task.priority])} />
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
