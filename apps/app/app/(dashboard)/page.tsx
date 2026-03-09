import { DashboardWidgetGrid } from './_components/widget-grid'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-0.5 text-sm text-gray-400">
            Good morning, Sarah — here&apos;s what&apos;s happening today.
          </p>
        </div>
      </div>
      <DashboardWidgetGrid />
    </div>
  )
}
