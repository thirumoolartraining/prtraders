import { Product } from '../types/product';
import pouchHero from '../assets/20250617_1813_Temple-Grade Camphor Elegance_simple_compose_01jxyyk2hxfavrabzfpwscshtb.png';
import jarSku from '../assets/20250617_1707_Premium Camphor Jar_simple_compose_01jxyts50nfebv4tpbeyen9vf0.png';
import bulkPackaging from '../assets/20250617_1900_Temple-Grade Camphor Packaging_simple_compose_01jxz18vgte608bckybp88hr12.png';
import camphorBlocks from '../assets/20250617_1912_Camphor Block Elegance_simple_compose_01jxz1z7qyfzas2r0hb6fxxcn1.png';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Camphor Pouches",
    slug: "premium-camphor-pouches",
    image: pouchHero,
    alt: "PR Traders 1 kg camphor stand-up pouch with goddess icon",
    purity: "99.9%",
    unitPrice: 1000,
    minimumOrder: 10,
    maximumOrder: 100,
    quantityStep: 10,
    description: "Temple-grade camphor in convenient stand-up pouches",
    featured: true,
    applications: ["Temple Rituals", "Aromatherapy", "Religious Ceremonies"]
  },
  {
    id: 2,
    name: "Camphor Tablets Jar",
    slug: "camphor-tablets-jar",
    image: jarSku,
    alt: "Premium camphor tablets in transparent jar with red lid – PR Traders label",
    purity: "99.8%",
    unitPrice: 1199,
    minimumOrder: 10,
    maximumOrder: 100,
    quantityStep: 5,
    description: "Premium camphor tablets in sealed jars",
    featured: false,
    applications: ["Home Use", "Small Temples", "Personal Rituals"]
  },
  {
    id: 3,
    name: "Bulk Camphor Crystals",
    slug: "bulk-camphor-crystals",
    image: bulkPackaging,
    alt: "PR Traders bulk camphor packaging boxes - temple-grade export ready",
    purity: "99.9%",
    unitPrice: 1299,
    minimumOrder: 10,
    maximumOrder: 100,
    quantityStep: 25,
    description: "Industrial-grade camphor crystals for manufacturing",
    featured: true,
    applications: ["Manufacturing", "Export", "Industrial Use"]
  },
  {
    id: 4,
    name: "Refined Camphor Blocks",
    slug: "refined-camphor-blocks",
    image: camphorBlocks,
    alt: "PR Traders refined camphor blocks in clear packaging with red label",
    purity: "99.7%",
    unitPrice: 1099,
    minimumOrder: 10,
    maximumOrder: 100,
    quantityStep: 20,
    description: "Solid camphor blocks for aromatics industry",
    featured: false,
    applications: ["Aromatics", "Perfumery", "Traditional Medicine"]
  }
];