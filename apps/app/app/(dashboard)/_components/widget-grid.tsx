'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ActivityFeed } from './widgets/activity-feed'
import { EventsWidget } from './widgets/events-widget'
import { MattersList } from './widgets/matters-list'
import { StatCards } from './widgets/stat-cards'
import { TasksWidget } from './widgets/tasks-widget'

export type WidgetId =
  | 'stat-cards'
  | 'matters'
  | 'tasks'
  | 'events'
  | 'activity'

export type WidgetConfig = {
  id: WidgetId
  label: string
  description: string
  defaultEnabled: boolean
  size: 'full' | 'half'
}

export const WIDGET_REGISTRY: WidgetConfig[] = [
  { id: 'stat-cards', label: 'Firm Stats', description: 'Key metrics at a glance', defaultEnabled: true, size: 'full' },
  { id: 'matters', label: 'Open Matters', description: 'Recent active matters', defaultEnabled: true, size: 'half' },
  { id: 'tasks', label: 'Tasks', description: 'Upcoming tasks and deadlines', defaultEnabled: true, size: 'half' },
  { id: 'events', label: 'Upcoming Events', description: 'Calendar events this week', defaultEnabled: true, size: 'half' },
  { id: 'activity', label: 'Recent Activity', description: 'Latest firm activity', defaultEnabled: true, size: 'half' },
]

const STORAGE_KEY = 'dashboard-widgets'

function renderWidget(id: WidgetId) {
  switch (id) {
    case 'stat-cards': return <StatCards />
    case 'matters': return <MattersList />
    case 'tasks': return <TasksWidget />
    case 'events': return <EventsWidget />
    case 'activity': return <ActivityFeed />
  }
}

export function DashboardWidgetGrid() {
  const [enabledWidgets, setEnabledWidgets] = useState<Set<WidgetId>>(() => {
    return new Set(WIDGET_REGISTRY.filter(w => w.defaultEnabled).map(w => w.id))
  })
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed: WidgetId[] = JSON.parse(stored)
        setEnabledWidgets(new Set(['stat-cards', ...parsed] as WidgetId[]))
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  function toggleWidget(id: WidgetId) {
    setEnabledWidgets(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      const toStore = [...next].filter(w => w !== 'stat-cards')
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
      } catch {
        // ignore
      }
      return next
    })
  }

  if (!hydrated) return null

  const configurableWidgets = WIDGET_REGISTRY.filter(w => w.id !== 'stat-cards')

  return (
    <div>
      <div className="mb-3 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-1.5 text-xs h-7 px-2.5">
              <Settings2 className="h-3.5 w-3.5" />
              Customize
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Widgets</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {configurableWidgets.map(widget => (
              <DropdownMenuCheckboxItem
                key={widget.id}
                checked={enabledWidgets.has(widget.id)}
                onCheckedChange={() => toggleWidget(widget.id)}
              >
                {widget.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {WIDGET_REGISTRY.filter(w => enabledWidgets.has(w.id)).map(widget => (
            <motion.div
              key={widget.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: 'easeOut' as const }}
              className={widget.size === 'full' ? 'col-span-1 md:col-span-2' : 'col-span-1'}
            >
              {renderWidget(widget.id)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
