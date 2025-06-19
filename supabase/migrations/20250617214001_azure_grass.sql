/*
  # Seed Products Data

  1. Insert sample camphor products
  2. Match the existing product data from the frontend
  3. Set proper pricing and specifications
*/

-- Insert camphor products
INSERT INTO products (
  name, slug, description, image_url, alt_text, purity, unit_price, 
  minimum_order, maximum_order, quantity_step, featured, applications
) VALUES 
(
  'Premium Camphor Pouches',
  'premium-camphor-pouches',
  'Temple-grade camphor in convenient stand-up pouches',
  '/src/assets/20250617_1813_Temple-Grade Camphor Elegance_simple_compose_01jxyyk2hxfavrabzfpwscshtb.png',
  'PR Traders 1 kg camphor stand-up pouch with goddess icon',
  '99.9%',
  1000.00,
  10,
  100,
  10,
  true,
  ARRAY['Temple Rituals', 'Aromatherapy', 'Religious Ceremonies']
),
(
  'Camphor Tablets Jar',
  'camphor-tablets-jar',
  'Premium camphor tablets in sealed jars',
  '/src/assets/20250617_1707_Premium Camphor Jar_simple_compose_01jxyts50nfebv4tpbeyen9vf0.png',
  'Premium camphor tablets in transparent jar with red lid – PR Traders label',
  '99.8%',
  1199.00,
  10,
  100,
  5,
  false,
  ARRAY['Home Use', 'Small Temples', 'Personal Rituals']
),
(
  'Bulk Camphor Crystals',
  'bulk-camphor-crystals',
  'Industrial-grade camphor crystals for manufacturing',
  '/src/assets/20250617_1900_Temple-Grade Camphor Packaging_simple_compose_01jxz18vgte608bckybp88hr12.png',
  'PR Traders bulk camphor packaging boxes - temple-grade export ready',
  '99.9%',
  1299.00,
  10,
  100,
  25,
  true,
  ARRAY['Manufacturing', 'Export', 'Industrial Use']
),
(
  'Refined Camphor Blocks',
  'refined-camphor-blocks',
  'Solid camphor blocks for aromatics industry',
  '/src/assets/20250617_1912_Camphor Block Elegance_simple_compose_01jxz1z7qyfzas2r0hb6fxxcn1.png',
  'PR Traders refined camphor blocks in clear packaging with red label',
  '99.7%',
  1099.00,
  10,
  100,
  20,
  false,
  ARRAY['Aromatics', 'Perfumery', 'Traditional Medicine']
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  alt_text = EXCLUDED.alt_text,
  purity = EXCLUDED.purity,
  unit_price = EXCLUDED.unit_price,
  minimum_order = EXCLUDED.minimum_order,
  maximum_order = EXCLUDED.maximum_order,
  quantity_step = EXCLUDED.quantity_step,
  featured = EXCLUDED.featured,
  applications = EXCLUDED.applications,
  updated_at = now();