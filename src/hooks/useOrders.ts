import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import type { Database } from '../lib/supabase';
import type { CheckoutFormData } from '../schemas/checkout';

type Order = Database['public']['Tables']['orders']['Row'];
type OrderItem = Database['public']['Tables']['order_items']['Row'];
type OrderWithItems = Order & { order_items: OrderItem[] };

export const useOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setOrders(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (
    orderData: CheckoutFormData,
    cartItems: Array<{ id: string; name: string; price: number; qty: number }>
  ) => {
    try {
      setLoading(true);

      // Generate order number
      const { data: orderNumberData, error: orderNumberError } = await supabase
        .rpc('generate_order_number');

      if (orderNumberError) throw orderNumberError;

      const orderNumber = orderNumberData;

      // Calculate totals
      const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: user?.id || null,
          order_number: orderNumber,
          customer_name: orderData.name,
          customer_email: orderData.email,
          customer_phone: orderData.phone,
          company_name: orderData.company,
          gstin: orderData.gstin || null,
          shipping_address: orderData.address,
          shipping_city: orderData.city,
          shipping_state: orderData.state,
          shipping_pincode: orderData.pincode,
          shipping_country: orderData.country,
          subtotal,
          total_amount: subtotal,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        product_id: item.id, // This should be the actual product UUID from database
        product_name: item.name,
        product_slug: item.id, // Using slug as fallback
        quantity: item.qty,
        unit_price: item.price,
        total_price: item.price * item.qty,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Refresh orders
      await fetchOrders();

      return { success: true, order };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    orders,
    loading,
    error,
    createOrder,
    refetch: fetchOrders,
  };
};