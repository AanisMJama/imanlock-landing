-- ImanFocus waitlist — run this in the `imanfocus-waitlist` Supabase project
-- (Supabase Dashboard → SQL Editor → New query → paste → Run).
--
-- Safe / idempotent: uses IF NOT EXISTS and only creates additive objects.

create table if not exists public.waitlist_signups (
  id          uuid primary key default gen_random_uuid(),
  name        text,
  email       text not null unique,
  source      text,
  platform    text,
  created_at  timestamptz not null default now()
);

-- Enable Row Level Security so the public anon key cannot read or modify rows.
alter table public.waitlist_signups enable row level security;

-- Allow anyone (anonymous landing-page visitors) to JOIN the waitlist, i.e.
-- INSERT only. There is intentionally NO select/update/delete policy, so the
-- public anon key cannot read the email list — only the service role (server
-- side / dashboard) can read it.
drop policy if exists "Waitlist: public insert" on public.waitlist_signups;
create policy "Waitlist: public insert"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (true);

-- Helpful index for ordering signups by recency in the dashboard.
create index if not exists idx_waitlist_signups_created_at
  on public.waitlist_signups (created_at desc);
