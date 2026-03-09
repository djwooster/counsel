# Counsel CRM

Multi-tenant SaaS CRM for small law firms (1–5 attorneys).

## Monorepo
```
apps/web        Marketing site (counselcrm.com) — landing page only, mostly done
apps/app        CRM product (app.counselcrm.com) — primary build target
packages/db     Supabase client + all shared TypeScript types
packages/ui     Shared component library (grows over time)
packages/config Shared tsconfig + Tailwind config
```

## Stack — apps/app
| | |
|---|---|
| Framework | Next.js 16.1.6, App Router, TypeScript strict |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Auth | Supabase Auth — staff: email/password + Google OAuth; clients: magic link |
| Database | Supabase Postgres — RLS on every table |
| Storage | Supabase Storage |
| Payments | Stripe — stubbed, no keys yet |
| Email | Resend — stubbed, no keys yet |
| Calendar | Google Calendar API — stubbed, no keys yet |

## Design — apps/app
- Navy `#1B2A4A` primary, Gold `#E8B84B` accent (CTAs + highlights only)
- Inter font, Tailwind v4 custom tokens in `globals.css`
- Mobile-first — every view must work at 375px
- Every list needs a designed empty state with a CTA
- No raw error states — wrap major sections in error boundaries

## Multi-tenancy & RLS
Every table has `org_id uuid`. All queries must be scoped — never query without org context.

JWT claims set on signup via `raw_app_meta_data` (service role, server-side only):
```ts
// Staff: { role: 'owner'|'attorney'|'paralegal'|'staff', org_id }
// Portal: { role: 'portal', org_id, contact_id }
```

RLS policies use `(auth.jwt() ->> 'org_id')::uuid = org_id` for isolation.
Portal policies additionally check `contact_id` to restrict to the client's own data.

**Never expose the service role key to the client.** Use it only in Server Actions or Route Handlers.

## Key patterns
- **Mutations → Server Actions** — no API routes for data writes
- **Reads → Supabase client in Server Components** — pass data as props to client components
- **Optimistic UI** — update state before the server responds; roll back on error
- **Framer Motion** — use `'easeOut' as const` inside `Variants` (not bare strings or arrays — TypeScript will reject them in v12)
- **Auth flow** — middleware protects all dashboard routes; `auth()` in layouts only when session data is needed downstream

## Data model (key tables)
```
orgs              Multi-tenancy root (slug, stripe_customer_id)
users             Staff (role, hourly_rate, auth_user_id)
contacts          Clients + other parties (type: client|counsel|other)
matters           Cases (status: intake|active|pending|closed, billing_type)
matter_contacts   Many-to-many contacts ↔ matters with role
tasks             Per matter, assigned to user, priority
events            Calendar (type: hearing|deadline|meeting, google_event_id)
documents         Supabase Storage, per matter
time_entries      Billable time (minutes, hourly_rate, billed flag)
invoices          (status: draft|sent|paid|overdue|void, stripe_payment_intent_id)
invoice_line_items
portal_users      Client auth (magic link, maps auth.users → contacts)
portal_messages   Staff ↔ client messaging per matter
intake_forms      Configurable fields (jsonb)
intake_submissions Auto-creates contact + matter on submit
firm_sites        Per-org public website config + custom domain
```

## Build order
- [x] Monorepo scaffold
- [x] Landing page (apps/web)
- [ ] **Auth + org onboarding** ← next
- [ ] Contacts
- [ ] Matters
- [ ] Calendar
- [ ] Time tracking + billing
- [ ] Client portal
- [ ] Firm website (dynamic route)
- [ ] Settings

## Commands
```bash
npm run dev                    # all apps
turbo dev --filter=app         # CRM only (port 3001)
turbo dev --filter=web         # marketing only (port 3000)
npm run build && npm run lint
```

## Third-party status
Stripe, Resend, Google OAuth/Calendar — all stubbed. Build UI and Server Action shells with clear `// TODO: wire up [service]` comments. Don't block features on missing keys.
