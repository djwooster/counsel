export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar + header — coming next */}
      <main>{children}</main>
    </div>
  )
}
