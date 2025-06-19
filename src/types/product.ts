export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  alt: string;
  purity: string;
  unitPrice: number;
  minimumOrder: number;
  maximumOrder: number;
  quantityStep: number;
  description: string;
  featured: boolean;
  applications: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}