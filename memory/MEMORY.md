# Counsel CRM — Claude Memory

## Status
- Dashboard shell complete: sidebar, header, widget grid, all 5 widgets, login page
- Auth: stubbed (no real Supabase wiring yet)
- Next build targets: Contacts, Matters, Calendar

## Key file paths
- `apps/app/lib/utils.ts` — cn() utility
- `apps/app/components/ui/` — shadcn-style UI primitives (button, card, badge, avatar, dropdown-menu, tooltip, separator)
- `apps/app/contexts/sidebar-context.tsx` — collapsed state
- `apps/app/app/(dashboard)/_components/sidebar.tsx` — collapsible Framer Motion sidebar
- `apps/app/app/(dashboard)/_components/header.tsx` — top bar
- `apps/app/app/(dashboard)/_components/widget-grid.tsx` — configurable widget grid (localStorage, WIDGET_REGISTRY)
- `apps/app/app/(dashboard)/_components/widgets/` — stat-cards, matters-list, tasks-widget, events-widget, activity-feed

## Design conventions
- Sidebar: navy-900 bg, gold accent on active item (border-l-2 border-gold), icons + labels
- Main bg: surface (#F8F9FB), cards: white border-gray-100 shadow-sm
- Padding: slightly smaller than default — prefer p-3, px-3 py-2, gap-3
- Minimal color: monochrome + navy + gold only where it adds meaning
- Framer Motion: always `'easeOut' as const` in transition objects

## Widget system
- `WIDGET_REGISTRY` in widget-grid.tsx — array of WidgetConfig objects
- stat-cards always shown; others togglable via "Customize" dropdown
- Persisted to localStorage key `dashboard-widgets`
- To add a widget: add to WIDGET_REGISTRY + add case in renderWidget()

## Placeholder data
- All widgets use hardcoded placeholder data — replace with real Supabase queries as features are built
- Auth user: "Sarah Lee" / "SL" / Owner (hardcoded placeholder throughout)

## User preferences
- Nimble/flexible: config-driven where feasible, easy to adapt to user feedback
- Spacing: slightly smaller paddings than typical shadcn defaults
- Color: minimal, only where necessary
