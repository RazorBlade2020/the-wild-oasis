import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ounvyvmosqxokmwxflen.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bnZ5dm1vc3F4b2ttd3hmbGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1MTM1NTUsImV4cCI6MjAxOTA4OTU1NX0.TbbR9oJtx_9WoZovr8aiGSRu0-dEYUXVZTuq-R-vzhc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
