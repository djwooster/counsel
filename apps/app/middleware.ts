// Auth middleware — will protect dashboard routes once auth is wired up
// Placeholder until Supabase Auth + next-auth are configured

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/auth|login|register).*)',
  ],
}
