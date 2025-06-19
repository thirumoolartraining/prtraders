import { useState, useEffect } from 'react';
import { Product, CartItem, Cart } from '../types/product';

const CART_STORAGE_KEY = 'prtraders_cart';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalAmount: 0
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = (items: CartItem[]): { totalItems: number; totalAmount: number } => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.product.unitPrice * item.quantity), 0);
    return { totalItems, totalAmount };
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.id === product.id);
      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item
        newItems = [...prevCart.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity
        };
      } else {
        // Add new item
        newItems = [...prevCart.items, { product, quantity }];
      }

      const { totalItems, totalAmount } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalAmount };
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0);

      const { totalItems, totalAmount } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalAmount };
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.id !== productId);
      const { totalItems, totalAmount } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalAmount };
    });
  };

  const clearCart = () => {
    setCart({ items: [], totalItems: 0, totalAmount: 0 });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    formatCurrency
  };
};