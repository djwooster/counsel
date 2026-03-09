export type OrgRole = 'owner' | 'attorney' | 'paralegal' | 'staff'
export type ContactType = 'client' | 'counsel' | 'other'
export type MatterStatus = 'intake' | 'active' | 'pending' | 'closed'
export type PracticeArea = 'family' | 'immigration' | 'pi' | 'criminal' | 'estate' | 'other'
export type BillingType = 'hourly' | 'flat_fee' | 'contingency'
export type EventType = 'hearing' | 'deadline' | 'meeting' | 'other'
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'void'
export type SenderType = 'staff' | 'client'
export type MatterContactRole = 'client' | 'opposing' | 'witness' | 'other'

export interface Org {
  id: string
  name: string
  slug: string
  subscription_status: string | null
  stripe_customer_id: string | null
  created_at: string
}

export interface User {
  id: string
  org_id: string
  auth_user_id: string
  email: string
  full_name: string
  role: OrgRole
  hourly_rate: number | null
  created_at: string
}

export interface Contact {
  id: string
  org_id: string
  type: ContactType
  first_name: string
  last_name: string
  email: string | null
  phone: string | null
  address: string | null
  company: string | null
  notes: string | null
  tags: string[]
  portal_invite_sent_at: string | null
  portal_user_id: string | null
  created_at: string
  updated_at: string
}

export interface Matter {
  id: string
  org_id: string
  title: string
  description: string | null
  status: MatterStatus
  practice_area: PracticeArea
  opened_at: string
  closed_at: string | null
  billing_type: BillingType
  flat_fee_amount: number | null
  created_at: string
  updated_at: string
}

export interface MatterContact {
  matter_id: string
  contact_id: string
  role: MatterContactRole
}

export interface Task {
  id: string
  org_id: string
  matter_id: string | null
  assigned_to: string | null
  title: string
  due_date: string | null
  completed_at: string | null
  priority: 'low' | 'medium' | 'high'
  created_at: string
}

export interface CalendarEvent {
  id: string
  org_id: string
  matter_id: string | null
  title: string
  description: string | null
  start_at: string
  end_at: string
  all_day: boolean
  type: EventType
  google_event_id: string | null
  created_by: string
  created_at: string
}

export interface Document {
  id: string
  org_id: string
  matter_id: string | null
  name: string
  storage_path: string
  size_bytes: number
  uploaded_by: string
  created_at: string
}

export interface TimeEntry {
  id: string
  org_id: string
  matter_id: string
  user_id: string
  description: string
  minutes: number
  hourly_rate: number
  billed: boolean
  date: string
  created_at: string
}

export interface Invoice {
  id: string
  org_id: string
  matter_id: string
  contact_id: string
  status: InvoiceStatus
  due_date: string | null
  sent_at: string | null
  paid_at: string | null
  subtotal: number
  tax_rate: number
  tax_amount: number
  total: number
  stripe_payment_intent_id: string | null
  notes: string | null
  created_at: string
}

export interface InvoiceLineItem {
  id: string
  invoice_id: string
  description: string
  quantity: number
  unit_amount: number
  total: number
}

export interface PortalUser {
  id: string
  org_id: string
  contact_id: string
  auth_user_id: string
  email: string
  last_login_at: string | null
  created_at: string
}

export interface PortalMessage {
  id: string
  org_id: string
  matter_id: string
  sender_type: SenderType
  sender_id: string
  body: string
  read_at: string | null
  created_at: string
}

export interface IntakeForm {
  id: string
  org_id: string
  title: string
  fields: Record<string, unknown>
  active: boolean
  created_at: string
}

export interface IntakeSubmission {
  id: string
  org_id: string
  form_id: string
  data: Record<string, unknown>
  contact_id: string | null
  matter_id: string | null
  submitted_at: string
}

export interface FirmSite {
  id: string
  org_id: string
  subdomain: string
  custom_domain: string | null
  domain_verified_at: string | null
  vercel_domain_id: string | null
  firm_name: string
  tagline: string | null
  about: string | null
  logo_url: string | null
  practice_areas: string[]
  phone: string | null
  address: string | null
  email: string | null
  primary_color: string
  meta_title: string | null
  meta_description: string | null
  created_at: string
  updated_at: string
}
