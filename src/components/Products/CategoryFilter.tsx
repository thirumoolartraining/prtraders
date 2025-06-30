import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'rose-water', name: 'Rose Water' },
  { id: 'incense', name: 'Incense Sticks' },
  { id: 'camphor', name: 'Pure Camphor' }
];

const CategoryFilter: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full font-sans-spiritual font-semibold transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-spiritual-maroon text-spiritual-pure shadow-lg'
              : 'bg-spiritual-pure text-spiritual-maroon border-2 border-spiritual-sandalwood hover:border-spiritual-gold hover:bg-spiritual-sandy-light'
          }`}
        >
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;