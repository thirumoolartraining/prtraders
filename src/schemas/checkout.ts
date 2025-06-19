import { z } from 'zod';

export const checkoutSchema = z.object({
  // Personal Information
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  
  // Company Information
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  gstin: z.string().optional(),
  
  // Shipping Address
  address: z.string().min(10, 'Address must be at least 10 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  pincode: z.string().min(6, 'Pincode must be 6 digits').max(6, 'Pincode must be 6 digits'),
  country: z.string().min(2, 'Country is required'),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;