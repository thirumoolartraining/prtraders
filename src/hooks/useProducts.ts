import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/supabase';

type Product = Database['public']['Tables']['products']['Row'];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: true });

      if (error) throw error;

      setProducts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getProductBySlug = (slug: string) => {
    return products.find(product => product.slug === slug);
  };

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
    getProductBySlug,
  };
};