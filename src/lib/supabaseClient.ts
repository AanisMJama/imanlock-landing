import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Public (anon) Supabase client for the ImanFocus waitlist.
// Backed by the dedicated `imanfocus-waitlist` Supabase project.
//
// These are NEXT_PUBLIC_ variables, so they are safe to expose in the browser.
// Writes are restricted by Row Level Security: anonymous visitors may only
// INSERT into `waitlist_signups` (see supabase/migrations/0001_waitlist_signups.sql).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let client: SupabaseClient | null = null;

/**
 * Returns a singleton Supabase client, or `null` when the environment
 * variables are not configured (e.g. local dev without a `.env.local`). The
 * caller is expected to handle the null case gracefully.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }
  return client;
}
