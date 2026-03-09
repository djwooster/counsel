'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  LayoutDashboard,
  Scale,
  Settings,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tooltip } from '@/components/ui/tooltip'
import { useSidebar } from '@/contexts/sidebar-context'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { id: 'contacts', label: 'Contacts', href: '/contacts', icon: Users },
  { id: 'matters', label: 'Matters', href: '/matters', icon: Briefcase },
  { id: 'calendar', label: 'Calendar', href: '/calendar', icon: Calendar },
  { id: 'billing', label: 'Time & Billing', href: '/billing', icon: Clock },
  { id: 'documents', label: 'Documents', href: '/documents', icon: FileText },
  { id: 'portal', label: 'Client Portal', href: '/portal', icon: Globe },
]

export function Sidebar() {
  const { collapsed, toggle } = useSidebar()
  const pathname = usePathname()

  return (
    <motion.div
      animate={{ width: collapsed ? 56 : 220 }}
      transition={{ duration: 0.2, ease: 'easeOut' as const }}
      className="relative flex h-screen flex-shrink-0 flex-col overflow-hidden bg-navy-900"
    >
      {/* Logo area */}
      <div className="relative flex h-14 flex-shrink-0 items-center p-3">
        <div className="flex items-center gap-1 overflow-hidden">
          <Scale className="h-4 w-4 flex-shrink-0 text-gold" />
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.span
                key="logo-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-baseline gap-0.5 overflow-hidden whitespace-nowrap"
              >
                <span className="text-sm font-semibold text-white">Counsel</span>
                <span className="text-xs font-medium text-gold">CRM</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle button */}
        <button
          onClick={toggle}
          className="absolute -right-0 top-1/2 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-navy-800 text-white/60 hover:bg-navy-700 hover:text-white transition-colors z-10"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-hidden px-2 py-2">
        <div className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            const navLink = (
              <Link
                key={item.id}
                href={item.href}
                className={[
                  'flex items-center gap-3 rounded-md text-sm font-medium transition-colors',
                  collapsed ? 'justify-center px-2 py-2' : 'px-2 py-2',
                  isActive
                    ? 'bg-white/10 text-white border-l-2 border-gold -ml-2 pl-[calc(0.5rem-2px)]'
                    : 'text-white/60 hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <AnimatePresence initial={false}>
                  {!collapsed && (
                    <motion.span
                      key={`label-${item.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            )

            if (collapsed) {
              return (
                <Tooltip key={item.id} content={item.label} side="right">
                  {navLink}
                </Tooltip>
              )
            }

            return navLink
          })}
        </div>
      </nav>

      {/* Bottom user section */}
      <div className="flex-shrink-0 border-t border-white/10 p-3">
        <div className={['flex items-center', collapsed ? 'justify-center' : 'gap-2'].join(' ')}>
          <Avatar size="sm">
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                key="user-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="min-w-0 overflow-hidden"
              >
                <p className="truncate text-xs font-medium text-white">Sarah Lee</p>
                <p className="truncate text-[10px] text-white/40">Owner</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              key="settings-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="mt-2"
            >
              <Link
                href="/settings"
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-white/40 transition-colors hover:bg-white/5 hover:text-white/70"
              >
                <Settings className="h-3.5 w-3.5" />
                Settings
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
