-- ATELIÊ CLUB — install ONLY in a NEW, dedicated Supabase project.
-- Do not execute against the user's existing LDR or Human Room databases.
create extension if not exists pgcrypto;
create table if not exists public.atelier_orders (
  id uuid primary key default gen_random_uuid(),
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text,
  country text not null check (country in ('BR','PT')),
  currency text not null check (currency in ('BRL','EUR')),
  status text not null default 'awaiting_payment'
    check (status in ('awaiting_payment','paid','in_production','shipped','delivered','cancelled','refunded')),
  customer_email text not null,
  customer_name text,
  shipping_address jsonb,
  items jsonb not null default '[]'::jsonb,
  total_minor bigint not null check (total_minor >= 0),
  operator_user_id uuid references auth.users(id),
  carrier text,
  tracking_code text,
  production_cost_minor bigint,
  shipping_cost_minor bigint,
  paid_at timestamptz,
  shipped_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists atelier_orders_country_created_idx on public.atelier_orders(country,created_at desc);
create index if not exists atelier_orders_operator_idx on public.atelier_orders(operator_user_id);
alter table public.atelier_orders enable row level security;
-- app_metadata is controlled by server/admin, NEVER user_metadata.
-- Operators may read only their country; admin can read all.
create policy "atelier_orders_read_by_country_or_admin"
on public.atelier_orders for select to authenticated
using (
  (auth.jwt()->'app_metadata'->>'atelier_role' = 'admin')
  or (
    auth.jwt()->'app_metadata'->>'atelier_role' = 'operator'
    and country = auth.jwt()->'app_metadata'->>'atelier_country'
  )
);
-- No direct authenticated INSERT/UPDATE/DELETE. A trusted backend validates
-- Stripe webhooks and performs all writes with its secret server-side key.
revoke all on public.atelier_orders from anon, authenticated;
grant select on public.atelier_orders to authenticated;
-- Do NOT store card details or clinical patient data.
-- Operator assignment and status transitions MUST be checked server-side.
