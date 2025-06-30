import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Temple Committee Member',
    location: 'Chennai, Tamil Nadu',
    content: 'P R Traders has been our trusted partner for temple ceremonies. Their pure camphor and rose water maintain the sacred atmosphere we require for our daily rituals.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Dr. Rajesh Kumar',
    role: 'Ayurvedic Practitioner',
    location: 'Bangalore, Karnataka',
    content: 'The quality and purity of their rose water is exceptional. I recommend it to my patients for both spiritual practice and skincare. Truly temple-grade quality.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Meera Patel',
    role: 'Meditation Center Owner',
    location: 'Mumbai, Maharashtra',
    content: 'Their incense collection creates the perfect ambiance for meditation sessions. The sandalwood and lavender varieties are particularly loved by our community.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const TestimonialSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-spiritual-sandalwood">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-spiritual-maroon mb-4">
            Voices of Sacred Trust
          </h2>
          <p className="text-lg text-spiritual-maroon/80 font-sans-spiritual max-w-2xl mx-auto leading-relaxed">
            Hear from our spiritual community - temples, practitioners, and devoted customers who trust 
            P R Traders for their sacred rituals and wellness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(139, 38, 53, 0.15)" }}
              className="bg-spiritual-pure rounded-2xl p-8 shadow-lg relative"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-spiritual-gold text-spiritual-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-spiritual-maroon font-sans-spiritual leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-spiritual-maroon/70 font-sans-spiritual">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-spiritual-gold font-sans-spiritual">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-spiritual-gold text-spiritual-pure px-8 py-4 rounded-full font-sans-spiritual font-semibold text-lg hover:bg-spiritual-gold-light transition-colors duration-300"
          >
            Join Our Spiritual Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;