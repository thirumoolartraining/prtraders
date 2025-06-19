import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { getQuotes } from '../lib/api';
import { useAuth } from './useAuth';
import type { Database } from '../lib/supabase';

type Quote = Database['public']['Tables']['quotes']['Row'];

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry?: string;
  product: string;
  quantity: string;
  frequency: string;
  timeline: string;
  message?: string;
}

export const useQuotes = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitQuote = async (quoteData: QuoteFormData) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('quotes')
        .insert({
          user_id: user?.id || null,
          name: quoteData.name,
          email: quoteData.email,
          phone: quoteData.phone,
          company: quoteData.company,
          industry: quoteData.industry || null,
          product_type: quoteData.product,
          quantity_range: quoteData.quantity,
          order_frequency: quoteData.frequency,
          timeline: quoteData.timeline,
          message: quoteData.message || null,
        })
        .select()
        .single();

      if (error) throw error;

      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const getUserQuotes = async () => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const getAllQuotes = async () => {
    try {
      setLoading(true);
      // Use the helper function that guarantees proper headers and GET method
      const data = await getQuotes();
      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    submitQuote,
    getUserQuotes,
    getAllQuotes,
  };
};