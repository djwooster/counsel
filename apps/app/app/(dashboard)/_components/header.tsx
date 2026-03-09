'use client'

import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { useSidebar } from '@/contexts/sidebar-context'

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  const { toggle } = useSidebar()

  return (
    <header className="flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-100 bg-white px-4">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="md:hidden h-8 w-8 p-0"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <Menu className="h-4 w-4" />
        </Button>
        {title && (
          <span className="text-base font-semibold text-gray-900">{title}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Search">
          <Search className="h-4 w-4" />
        </Button>

        <div className="relative">
          <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          {/* Notification dot — placeholder */}
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
        </div>

        <Separator orientation="vertical" className="h-5" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm text-gray-700 transition-colors hover:text-gray-900 outline-none">
              <Avatar size="sm">
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block">Sarah Lee</span>
              <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 data-[highlighted]:text-red-600">
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
