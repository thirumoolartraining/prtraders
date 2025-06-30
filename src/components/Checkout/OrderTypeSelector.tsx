import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Users, Building } from 'lucide-react';
import { useCheckoutStore } from '../../store/useCheckoutStore';
import { OrderType } from '../../types/checkout';

const orderTypes = [
  {
    id: 'standard' as OrderType,
    name: 'Standard Order',
    description: 'Regular checkout with immediate processing',
    icon: ShoppingCart,
    features: ['Instant checkout', 'Standard pricing', 'Quick delivery']
  },
  {
    id: 'bulk-quote' as OrderType,
    name: 'Bulk Quote Request',
    description: 'Custom pricing for large quantities',
    icon: Users,
    features: ['Custom pricing', 'Volume discounts', 'Flexible terms']
  },
  {
    id: 'temple' as OrderType,
    name: 'Temple/Institution',
    description: 'Special rates for temples and institutions',
    icon: Building,
    features: ['Institutional pricing', 'Credit terms', 'Dedicated support']
  }
];

const OrderTypeSelector: React.FC = () => {
  const { orderType, setOrderType } = useCheckoutStore();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif-spiritual text-xl font-bold text-spiritual-maroon mb-2">
          Select Order Type
        </h3>
        <p className="text-spiritual-maroon/70 font-sans-spiritual">
          Choose the type of order that best fits your needs
        </p>
      </div>

      <div className="grid gap-4">
        {orderTypes.map((type) => (
          <motion.div
            key={type.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOrderType(type.id)}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              orderType === type.id
                ? 'border-spiritual-gold bg-spiritual-gold/10 shadow-lg'
                : 'border-spiritual-sandy-light bg-spiritual-pure hover:border-spiritual-sandalwood'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                orderType === type.id
                  ? 'bg-spiritual-gold text-spiritual-pure'
                  : 'bg-spiritual-sandy-light text-spiritual-maroon'
              }`}>
                <type.icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-serif-spiritual font-semibold text-spiritual-maroon">
                    {type.name}
                  </h4>
                  {orderType === type.id && (
                    <div className="w-2 h-2 bg-spiritual-gold rounded-full"></div>
                  )}
                </div>
                
                <p className="text-sm text-spiritual-maroon/70 font-sans-spiritual mb-3">
                  {type.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-spiritual-rose-light text-spiritual-maroon px-2 py-1 rounded-full font-sans-spiritual"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {orderType === 'bulk-quote' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-spiritual-sandy-light rounded-lg p-4"
        >
          <p className="text-sm text-spiritual-maroon font-sans-spiritual">
            <strong>Note:</strong> Bulk quote requests will be reviewed by our team. 
            You'll receive a custom quote within 24 hours via email or WhatsApp.
          </p>
        </motion.div>
      )}

      {orderType === 'temple' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-spiritual-sandy-light rounded-lg p-4"
        >
          <p className="text-sm text-spiritual-maroon font-sans-spiritual">
            <strong>Note:</strong> Temple and institutional orders qualify for special pricing. 
            Please provide your institution details in the customer information section.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default OrderTypeSelector;