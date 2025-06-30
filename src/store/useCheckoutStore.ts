import { create } from 'zustand';
import { CustomerInfo, CheckoutState, OrderType, PaymentMethod } from '../types/checkout';

const initialCustomerInfo: CustomerInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  billingAddress: {
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  },
  shippingAddress: {
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    sameAsBilling: true
  },
  specialInstructions: ''
};

interface CheckoutStore extends CheckoutState {
  // Actions
  updateCustomerInfo: (info: Partial<CustomerInfo>) => void;
  updateBillingAddress: (address: Partial<CustomerInfo['billingAddress']>) => void;
  updateShippingAddress: (address: Partial<CustomerInfo['shippingAddress']>) => void;
  setOrderType: (type: OrderType) => void;
  setPaymentMethod: (method: PaymentMethod) => void;
  setTermsAccepted: (accepted: boolean) => void;
  setCurrentStep: (step: number) => void;
  setProcessing: (processing: boolean) => void;
  setError: (field: string, error: string) => void;
  clearErrors: () => void;
  validateStep: (step: number, cartTotal?: number) => boolean;
  resetCheckout: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  // Initial State
  customerInfo: initialCustomerInfo,
  orderType: 'standard',
  paymentMethod: 'razorpay',
  termsAccepted: false,
  currentStep: 1,
  isProcessing: false,
  errors: {},

  // Actions
  updateCustomerInfo: (info) => set((state) => ({
    customerInfo: { ...state.customerInfo, ...info }
  })),

  updateBillingAddress: (address) => set((state) => ({
    customerInfo: {
      ...state.customerInfo,
      billingAddress: { ...state.customerInfo.billingAddress, ...address }
    }
  })),

  updateShippingAddress: (address) => set((state) => {
    const updatedShipping = { ...state.customerInfo.shippingAddress, ...address };
    
    // If sameAsBilling is true, copy billing address
    if (updatedShipping.sameAsBilling) {
      const { sameAsBilling, ...billingFields } = state.customerInfo.billingAddress;
      Object.assign(updatedShipping, billingFields, { sameAsBilling: true });
    }

    return {
      customerInfo: {
        ...state.customerInfo,
        shippingAddress: updatedShipping
      }
    };
  }),

  setOrderType: (type) => set({ orderType: type }),

  setPaymentMethod: (method) => set({ paymentMethod: method }),

  setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),

  setCurrentStep: (step) => set({ currentStep: step }),

  setProcessing: (processing) => set({ isProcessing: processing }),

  setError: (field, error) => set((state) => ({
    errors: { ...state.errors, [field]: error }
  })),

  clearErrors: () => set({ errors: {} }),

  validateStep: (step, cartTotal = 0) => {
    const state = get();
    const errors: Record<string, string> = {};

    switch (step) {
      case 1: // Order Review - no validation needed
        break;
      
      case 2: // Customer Information
        const { customerInfo } = state;
        
        if (!customerInfo.firstName.trim()) {
          errors.firstName = 'First name is required';
        }
        if (!customerInfo.lastName.trim()) {
          errors.lastName = 'Last name is required';
        }
        if (!customerInfo.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
          errors.email = 'Please enter a valid email';
        }
        if (!customerInfo.phone.trim()) {
          errors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-()]{10,}$/.test(customerInfo.phone)) {
          errors.phone = 'Please enter a valid phone number';
        }
        
        // Billing Address
        if (!customerInfo.billingAddress.street.trim()) {
          errors.billingStreet = 'Billing address is required';
        }
        if (!customerInfo.billingAddress.city.trim()) {
          errors.billingCity = 'City is required';
        }
        if (!customerInfo.billingAddress.state.trim()) {
          errors.billingState = 'State is required';
        }
        if (!customerInfo.billingAddress.pincode.trim()) {
          errors.billingPincode = 'Pincode is required';
        } else if (!/^\d{6}$/.test(customerInfo.billingAddress.pincode)) {
          errors.billingPincode = 'Please enter a valid 6-digit pincode';
        }
        
        // Shipping Address (if different from billing)
        if (!customerInfo.shippingAddress.sameAsBilling) {
          if (!customerInfo.shippingAddress.street.trim()) {
            errors.shippingStreet = 'Shipping address is required';
          }
          if (!customerInfo.shippingAddress.city.trim()) {
            errors.shippingCity = 'City is required';
          }
          if (!customerInfo.shippingAddress.state.trim()) {
            errors.shippingState = 'State is required';
          }
          if (!customerInfo.shippingAddress.pincode.trim()) {
            errors.shippingPincode = 'Pincode is required';
          } else if (!/^\d{6}$/.test(customerInfo.shippingAddress.pincode)) {
            errors.shippingPincode = 'Please enter a valid 6-digit pincode';
          }
        }
        break;
      
      case 3: // Payment
        if (!state.paymentMethod) {
          errors.paymentMethod = 'Please select a payment method';
        }
        
        // COD validation based on cart total
        if (state.paymentMethod === 'cod' && cartTotal > 5000) {
          errors.paymentMethod = 'Cash on Delivery is not available for orders above ₹5,000. Please choose another payment method.';
        }
        
        // Terms acceptance validation
        if (!state.termsAccepted) {
          errors.termsAccepted = 'You must accept the Terms & Conditions and Privacy Policy to proceed';
        }
        break;
    }

    set({ errors });
    return Object.keys(errors).length === 0;
  },

  resetCheckout: () => set({
    customerInfo: initialCustomerInfo,
    orderType: 'standard',
    paymentMethod: 'razorpay',
    termsAccepted: false,
    currentStep: 1,
    isProcessing: false,
    errors: {}
  })
}));