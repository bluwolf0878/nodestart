// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bqnbzltopalsqvfttpor.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbmJ6bHRvcGFsc3F2ZnR0cG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNzcxMzcsImV4cCI6MjA0NTg1MzEzN30.elDuq5aniu5iObXQBNhlUn0p3rdvMH-gyVW694X24xo';
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
