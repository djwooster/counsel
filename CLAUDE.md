# Counsel CRM — Developer Guide

## Project overview
Multi-tenant SaaS CRM for small law firms (1–5 attorneys). Two Next.js apps in a Turborepo monorepo.

- `apps/web` — marketing landing page (counselcrm.com)
- `apps/app` — the CRM product (app.counselcrm.com)
- Firm public sites at `[slug].counselcrm.com` served as dynamic routes in `apps/app`

## Monorepo structure
```
apps/web       Marketing site
apps/app       CRM product
packages/ui    Shared component library (shadcn/ui base)
packages/db    Supabase client + shared TypeScript types
packages/config  Shared Tailwind, TS, ESLint configs
```

## Tech stack
| Layer | Choice |
|---|---|
| Framework | Next.js 16.1.6 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Auth | Supabase Auth (staff: email/password + Google OAuth; clients: magic link) |
| Database | Supabase (Postgres) with Row Level Security |
| File storage | Supabase Storage |
| Payments | Stripe (stubbed until keys available) |
| Email | Resend (stubbed until keys available) |
| Calendar sync | Google Calendar API (stubbed until keys available) |
| Monorepo | Turborepo |
| Hosting | Vercel |
| Analytics | PostHog |

## Design tokens
**apps/web (marketing)**
- Primary: Navy `#1B2A4A`
- Accent: Gold `#E8B84B`
- Font: Inter (Geist as fallback)
- Style: Clean, professional, trustworthy. No stock photos.

**apps/app (CRM)**
- TBD — design system to be established in early build phase.
- Use shadcn/ui defaults as baseline until design direction is locked.

## Data model summary
All tables have `org_id uuid` + RLS. Key tables:
- `orgs` — multi-tenancy root (name, slug, stripe_customer_id)
- `users` — staff members (role: owner | attorney | paralegal | staff)
- `contacts` — clients + other parties (type: client | counsel | other)
- `matters` — cases (status: intake | active | pending | closed)
- `matter_contacts` — many-to-many contacts ↔ matters
- `tasks` — per matter, assigned to user
- `events` — calendar events, linked to matters, Google Calendar sync
- `documents` — Supabase Storage, per matter
- `time_entries` — billable time, per matter per user
- `invoices` + `invoice_line_items` — billing
- `portal_users` — client portal auth (magic link)
- `portal_messages` — secure staff ↔ client messaging per matter
- `intake_forms` + `intake_submissions` — public intake
- `firm_sites` — per-org website config + custom domain

## RLS pattern
Every query is scoped via JWT claims. Never query without org context.
```sql
-- Staff access
(auth.jwt() ->> 'org_id')::uuid = org_id
AND (auth.jwt() ->> 'role') IN ('owner', 'attorney', 'paralegal', 'staff')

-- Portal (client) access
(auth.jwt() ->> 'org_id')::uuid = org_id
AND (auth.jwt() ->> 'role') = 'portal'
AND (auth.jwt() ->> 'contact_id')::uuid = contact_id
```
JWT metadata set on signup/invite via `raw_app_meta_data` using Supabase service role (server-side only).

## Key patterns
- **Server Actions for all mutations** — no API routes for data writes
- **Optimistic UI** — use SWR or React Query; mutations update UI before server confirms
- **Error boundaries** — wrap every major section; no raw error states shown to users
- **Mobile-first** — every view must work at 375px (paralegals on phones)
- **Empty states** — every list needs a designed empty state with CTA
- **Never expose service role key to client** — only use in Server Actions / Route Handlers

## Third-party integrations (status)
- Stripe — stubbed (no keys yet)
- Resend — stubbed (no keys yet)
- Google OAuth / Calendar — stubbed (no keys yet)

## Build order
1. Monorepo scaffold ✓
2. Landing page (`apps/web`)
3. Auth + org onboarding (`apps/app`)
4. Contacts
5. Matters
6. Calendar
7. Time tracking + billing
8. Client portal
9. Firm website (dynamic route)
10. Settings

## Commands
```bash
npm run dev          # run all apps
npm run dev --filter=web    # marketing site only
npm run dev --filter=app    # CRM only
npm run build        # build all
npm run lint         # lint all
```
