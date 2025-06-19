import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
  id: string;    // slug e.g. 'premium-camphor-pouches'
  name: string;
  price: number; // ₹ per kg
  qty: number;   // in kg
};

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  getTotalItems: () => number;
  getTotalAmount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem: CartItem) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
          
          if (existingItemIndex >= 0) {
            // Merge quantities if item already exists
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              qty: updatedItems[existingItemIndex].qty + newItem.qty
            };
            return { items: updatedItems };
          } else {
            // Add new item
            return { items: [...state.items, newItem] };
          }
        });
      },
      
      updateQty: (id: string, qty: number) => {
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, qty } : item
          ).filter(item => item.qty > 0)
        }));
      },
      
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },
      
      clear: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.length;
      },
      
      getTotalAmount: () => {
        return get().items.reduce((total, item) => total + (item.price * item.qty), 0);
      }
    }),
    {
      name: 'prtraders-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);