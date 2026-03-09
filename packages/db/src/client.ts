import { createClient } from '@supabase/supabase-js'

// Browser client — uses anon key, respects RLS
export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Missing Supabase env vars')
  return createClient(url, key)
}

// Server client — uses service role, bypasses RLS (use only in Server Actions / Route Handlers)
export function createServerAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Missing Supabase service role env vars')
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
