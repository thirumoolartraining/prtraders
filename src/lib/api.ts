// Helper function to get quotes with proper headers
export const getQuotes = async () => {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/quotes?select=*`, {
    method: 'GET',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch quotes: ${response.status} ${response.statusText}`);
  }

  return response.json();
};