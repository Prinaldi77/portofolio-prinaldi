import { createClient } from '@supabase/supabase-js';

// Environment variables configuration (Vite prefix VITE_)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sopmpgyeukgnrnwewgqo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvcG1wZ3lldWtnbnJud2V3Z3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNzQ4NjAsImV4cCI6MjEwNzY1MDg2MH0.OxHoJHlT6Ivc352l-3nGI7g4Kk2oaSCA89zCgpn5AXM';

// Check if actual credentials are provided
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project') &&
  supabaseAnonKey !== 'your-anon-key'
);

// Initialize Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export default supabase;
