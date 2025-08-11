import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://hwlpsuhmwpgnvagwrdea.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bHBzdWhtd3BnbnZhZ3dyZGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjQwMDcsImV4cCI6MjA3MDM0MDAwN30.QZlS2j4aPl1UkFqZOgaqkjM80qYJOIhPX7i5UbbsebA'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
