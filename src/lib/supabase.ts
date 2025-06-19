import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create Supabase client with proper configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
    }
  }
});

// Export headers for manual fetch requests if needed
export const supabaseHeaders = {
  'apikey': supabaseAnonKey,
  'Authorization': `Bearer ${supabaseAnonKey}`,
  'Content-Type': 'application/json',
};

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          company_name: string | null;
          gstin: string | null;
          address: string | null;
          city: string | null;
          state: string | null;
          pincode: string | null;
          country: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          company_name?: string | null;
          gstin?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          pincode?: string | null;
          country?: string | null;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          company_name?: string | null;
          gstin?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          pincode?: string | null;
          country?: string | null;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          image_url: string | null;
          alt_text: string | null;
          purity: string;
          unit_price: number;
          minimum_order: number;
          maximum_order: number;
          quantity_step: number;
          featured: boolean;
          applications: string[];
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          slug: string;
          description?: string | null;
          image_url?: string | null;
          alt_text?: string | null;
          purity: string;
          unit_price: number;
          minimum_order?: number;
          maximum_order?: number;
          quantity_step?: number;
          featured?: boolean;
          applications?: string[];
          is_active?: boolean;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          image_url?: string | null;
          alt_text?: string | null;
          purity?: string;
          unit_price?: number;
          minimum_order?: number;
          maximum_order?: number;
          quantity_step?: number;
          featured?: boolean;
          applications?: string[];
          is_active?: boolean;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          order_number: string;
          status: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          company_name: string;
          gstin: string | null;
          shipping_address: string;
          shipping_city: string;
          shipping_state: string;
          shipping_pincode: string;
          shipping_country: string;
          subtotal: number;
          shipping_cost: number | null;
          tax_amount: number | null;
          total_amount: number;
          created_at: string;
          updated_at: string;
          shipped_at: string | null;
          delivered_at: string | null;
        };
        Insert: {
          user_id?: string | null;
          order_number: string;
          status?: string;
          customer_name: string;
          customer_email: string;
          customer_phone: string;
          company_name: string;
          gstin?: string | null;
          shipping_address: string;
          shipping_city: string;
          shipping_state: string;
          shipping_pincode: string;
          shipping_country?: string;
          subtotal?: number;
          shipping_cost?: number | null;
          tax_amount?: number | null;
          total_amount?: number;
        };
        Update: {
          status?: string;
          customer_name?: string;
          customer_email?: string;
          customer_phone?: string;
          company_name?: string;
          gstin?: string | null;
          shipping_address?: string;
          shipping_city?: string;
          shipping_state?: string;
          shipping_pincode?: string;
          shipping_country?: string;
          subtotal?: number;
          shipping_cost?: number | null;
          tax_amount?: number | null;
          total_amount?: number;
          shipped_at?: string | null;
          delivered_at?: string | null;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          product_name: string;
          product_slug: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          created_at: string;
        };
        Insert: {
          order_id: string;
          product_id: string;
          product_name: string;
          product_slug: string;
          quantity: number;
          unit_price: number;
          total_price: number;
        };
        Update: {
          quantity?: number;
          unit_price?: number;
          total_price?: number;
        };
      };
      quotes: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          email: string;
          phone: string;
          company: string;
          industry: string | null;
          product_type: string;
          quantity_range: string;
          order_frequency: string;
          timeline: string;
          message: string | null;
          status: string;
          admin_notes: string | null;
          quoted_price: number | null;
          quoted_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id?: string | null;
          name: string;
          email: string;
          phone: string;
          company: string;
          industry?: string | null;
          product_type: string;
          quantity_range: string;
          order_frequency: string;
          timeline: string;
          message?: string | null;
          status?: string;
          admin_notes?: string | null;
          quoted_price?: number | null;
          quoted_at?: string | null;
        };
        Update: {
          name?: string;
          email?: string;
          phone?: string;
          company?: string;
          industry?: string | null;
          product_type?: string;
          quantity_range?: string;
          order_frequency?: string;
          timeline?: string;
          message?: string | null;
          status?: string;
          admin_notes?: string | null;
          quoted_price?: number | null;
          quoted_at?: string | null;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          email: string;
          subject: string;
          message: string;
          status: string;
          admin_notes: string | null;
          replied_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id?: string | null;
          name: string;
          email: string;
          subject: string;
          message: string;
          status?: string;
          admin_notes?: string | null;
          replied_at?: string | null;
        };
        Update: {
          name?: string;
          email?: string;
          subject?: string;
          message?: string;
          status?: string;
          admin_notes?: string | null;
          replied_at?: string | null;
        };
      };
    };
  };
}