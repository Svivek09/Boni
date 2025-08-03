import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
export const isSupabaseConfigured = supabaseUrl !== 'https://your-project.supabase.co' && supabaseKey !== 'your-service-role-key'; 