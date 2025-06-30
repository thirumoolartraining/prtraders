import { Product } from '../store/useStore';

export const products: Product[] = [
  {
    id: 'rose-water-1',
    name: 'Premium Rose Water',
    category: 'rose-water',
    price: 399,
    image: 'premium-rose-water.png',
    description: 'Pure, temple-quality rose water for spiritual ceremonies and natural skincare',
    spiritualProperties: ['Purification', 'Love & Devotion', 'Inner Peace'],
    usage: ['Puja ceremonies', 'Skincare routine', 'Aromatherapy'],
    purity: '100% Natural',
    minQuantity: 50,
    quantityIncrement: 10,
    unit: 'box'
  },
  {
    id: 'incense-sandalwood',
    name: 'Sandalwood Incense',
    category: 'incense',
    price: 149,
    image: 'sandalwood-incense.png',
    description: 'Premium sandalwood incense for spiritual ceremonies and meditation',
    spiritualProperties: ['Spiritual Cleansing', 'Mental Clarity', 'Divine Connection'],
    usage: ['Daily prayers', 'Meditation', 'Temple ceremonies'],
    purity: 'Temple Grade',
    minQuantity: 50,
    quantityIncrement: 10,
    unit: 'box'
  },
  {
    id: 'incense-jasmine',
    name: 'Jasmine Incense',
    category: 'incense',
    price: 129,
    image: 'jasmine-incense.png',
    description: 'Fragrant jasmine incense for evening prayers and relaxation',
    spiritualProperties: ['Tranquility', 'Spiritual Protection', 'Emotional Balance'],
    usage: ['Evening prayers', 'Relaxation', 'Spiritual protection'],
    purity: 'Natural Essence',
    minQuantity: 50,
    quantityIncrement: 10,
    unit: 'box'
  },
  {
    id: 'incense-rose',
    name: 'Rose Incense',
    category: 'incense',
    price: 139,
    image: '/Products/rose-incense.png',
    description: 'Sacred rose incense for love rituals and devotional practices',
    spiritualProperties: ['Love & Compassion', 'Heart Chakra', 'Divine Grace'],
    usage: ['Love rituals', 'Heart healing', 'Devotional prayers'],
    purity: 'Pure Rose Extract',
    minQuantity: 50,
    quantityIncrement: 10,
    unit: 'box'
  },
  {
    id: 'incense-lavender',
    name: 'Lavender Incense',
    category: 'incense',
    price: 149,
    image: '/Products/lavender-incense.png',
    description: 'Calming lavender incense for meditation and peaceful sleep',
    spiritualProperties: ['Deep Peace', 'Stress Relief', 'Spiritual Calm'],
    usage: ['Meditation', 'Sleep ritual', 'Stress relief'],
    purity: 'Organic Lavender',
    minQuantity: 50,
    quantityIncrement: 10,
    unit: 'box'
  },
  {
    id: 'incense-mogra',
    name: 'Mogra Incense',
    category: 'incense',
    price: 129,
    image: '/Products/mogra-incense.png',
    description: 'Exquisite mogra incense for temple offerings and special occasions',
    spiritualProperties: ['Divine Offering', 'Spiritual Elevation', 'Sacred Atmosphere'],
    usage: ['Temple offerings', 'Special ceremonies', 'Divine worship'],
    purity: 'Premium Mogra',
    minQuantity: 50,
    quantityIncrement: 10,
    unit: 'box'
  },
  {
    id: 'camphor-pure',
    name: 'Pure Camphor',
    category: 'camphor',
    price: 999,
    image: '/Products/pure-camphor.png',
    description: 'Premium pure camphor for traditional puja and spiritual ceremonies',
    spiritualProperties: ['Ultimate Purification', 'Divine Light', 'Spiritual Protection'],
    usage: ['Puja ceremonies', 'Aarti ritual', 'Temple worship'],
    purity: '100% Pure',
    minQuantity: 5,
    quantityIncrement: 1,
    unit: 'kg'
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getIncenseVarieties = () => {
  return products.filter(product => product.category === 'incense');
};