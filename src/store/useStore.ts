import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  category: 'rose-water' | 'incense' | 'camphor';
  price: number;
  image: string;
  description: string;
  spiritualProperties: string[];
  usage: string[];
  purity: string;
  minQuantity: number;
  quantityIncrement: number;
  unit: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface Store {
  cart: CartItem[];
  isCartOpen: boolean;
  selectedCategory: string;
  
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: () => void;
  setSelectedCategory: (category: string) => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  getValidQuantity: (product: Product, requestedQuantity: number) => number;
}

export const useStore = create<Store>((set, get) => ({
  cart: [],
  isCartOpen: false,
  selectedCategory: 'all',
  
  getValidQuantity: (product, requestedQuantity) => {
    const { minQuantity, quantityIncrement } = product;
    
    if (requestedQuantity < minQuantity) {
      return minQuantity;
    }
    
    // Round to nearest valid increment
    const excess = (requestedQuantity - minQuantity) % quantityIncrement;
    if (excess === 0) {
      return requestedQuantity;
    }
    
    // Round up to next valid increment
    return requestedQuantity + (quantityIncrement - excess);
  },
  
  addToCart: (product) => set((state) => {
    const { getValidQuantity } = get();
    const existingItem = state.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      const newQuantity = getValidQuantity(product, existingItem.quantity + product.minQuantity);
      return {
        cart: state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        )
      };
    }
    
    return { 
      cart: [...state.cart, { ...product, quantity: product.minQuantity }] 
    };
  }),
  
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
  
  updateQuantity: (productId, quantity) => set((state) => {
    const { getValidQuantity } = get();
    const product = state.cart.find(item => item.id === productId);
    
    if (!product) return state;
    
    const validQuantity = getValidQuantity(product, quantity);
    
    return {
      cart: state.cart.map(item =>
        item.id === productId ? { ...item, quantity: validQuantity } : item
      )
    };
  }),
  
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  getCartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getCartItemsCount: () => {
    const { cart } = get();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
}));