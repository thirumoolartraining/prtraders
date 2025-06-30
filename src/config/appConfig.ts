/**
 * Centralized application configuration
 * Contains all contact information, business details, and app constants
 */

export const APP_CONFIG = {
  // Business Information
  business: {
    name: "P R Traders",
    tagline: "Sacred Spiritual Products",
    description: "Temple-quality spiritual products with generations of devotion from Palani's sacred traditions",
    established: "1980s",
    location: "Palani, Tamil Nadu"
  },

  // Contact Information
  contact: {
    phone: {
      primary: "+91 81228 00658",
      display: "+91 81228 00658",
      whatsapp: "918122800658"
    },
    email: {
      primary: "info@prtraders.shop",
      support: "info@prtraders.shop",
      orders: "info@prtraders.shop"
    },
    address: {
      street: "100B, East Car Street",
      city: "Palani",
      state: "Tamil Nadu",
      pincode: "624 601",
      country: "India",
      full: "100B, East Car Street, Palani 624 601, Tamil Nadu, India"
    }
  },

  // Social & Communication
  social: {
    whatsapp: {
      url: "https://wa.me/918122800658",
      display: "WhatsApp Us"
    }
  },

  // Business Hours
  businessHours: {
    weekdays: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 6:00 PM", 
    sunday: "10:00 AM - 4:00 PM",
    festivals: "Special Hours"
  },

  // SEO & Meta
  seo: {
    title: "P R Traders - Sacred Spiritual Products | Temple Quality Rose Water, Incense & Camphor",
    description: "Discover premium spiritual products from P R Traders. Temple-quality rose water, handcrafted incense sticks, and pure camphor for your sacred rituals and wellness journey.",
    keywords: "spiritual products, temple quality, rose water, incense sticks, camphor, Palani, Tamil Nadu"
  }
} as const;

// Helper functions for easy access
export const getWhatsAppUrl = (message?: string) => {
  const baseUrl = APP_CONFIG.social.whatsapp.url;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const getPhoneUrl = () => `tel:${APP_CONFIG.contact.phone.primary}`;

export const getEmailUrl = (subject?: string) => {
  const baseUrl = `mailto:${APP_CONFIG.contact.email.primary}`;
  return subject ? `${baseUrl}?subject=${encodeURIComponent(subject)}` : baseUrl;
};

export const getFullAddress = () => APP_CONFIG.contact.address.full;