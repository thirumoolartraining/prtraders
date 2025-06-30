export interface CustomerInfo {
  // Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Billing Address
  billingAddress: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  
  // Shipping Address
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    sameAsBilling: boolean;
  };
  
  // Order Notes
  specialInstructions?: string;
}

export interface CheckoutState {
  // Customer Information
  customerInfo: CustomerInfo;
  
  // Order Details
  orderType: 'standard' | 'bulk-quote' | 'temple';
  paymentMethod: string;
  
  // Terms & Conditions
  termsAccepted: boolean;
  
  // UI State
  currentStep: number;
  isProcessing: boolean;
  errors: Record<string, string>;
}

export type OrderType = 'standard' | 'bulk-quote' | 'temple';
export type PaymentMethod = 'razorpay' | 'cod' | 'bank-transfer';