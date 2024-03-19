import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rymhpwmifkaqfcurzrxw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bWhwd21pZmthcWZjdXJ6cnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODEwMjUsImV4cCI6MjAyMjQ1NzAyNX0.SA2c6-b0qD_9P8ghb63gRYH0zeqku7SEKesDBg_Aoqc'
export const supabase = createClient(supabaseUrl, supabaseKey)