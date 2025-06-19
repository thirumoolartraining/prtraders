import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import type { Database } from '../lib/supabase';

type ContactMessage = Database['public']['Tables']['contact_messages']['Row'];

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactMessages = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContactMessage = async (messageData: ContactFormData) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('contact_messages')
        .insert({
          user_id: user?.id || null,
          name: messageData.name,
          email: messageData.email,
          subject: messageData.subject,
          message: messageData.message,
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

  const getUserMessages = async () => {
    if (!user) return { success: false, error: 'User not authenticated' };

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_messages')
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

  return {
    loading,
    error,
    submitContactMessage,
    getUserMessages,
  };
};