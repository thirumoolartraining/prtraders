import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, User, CreditCard, CheckCircle } from 'lucide-react';

interface CheckoutStepsProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { id: 1, name: 'Review Order', icon: ShoppingCart },
  { id: 2, name: 'Customer Info', icon: User },
  { id: 3, name: 'Payment', icon: CreditCard },
  { id: 4, name: 'Confirmation', icon: CheckCircle }
];

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep, onStepClick }) => {
  return (
    <div className="bg-spiritual-pure rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              onClick={() => step.id < currentStep && onStepClick(step.id)}
              className={`flex items-center space-x-3 cursor-pointer ${
                step.id < currentStep ? 'cursor-pointer' : step.id === currentStep ? '' : 'cursor-not-allowed'
              }`}
              whileHover={step.id <= currentStep ? { scale: 1.05 } : {}}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                step.id < currentStep
                  ? 'bg-spiritual-gold text-spiritual-pure'
                  : step.id === currentStep
                  ? 'bg-spiritual-maroon text-spiritual-pure'
                  : 'bg-spiritual-sandy-light text-spiritual-maroon/50'
              }`}>
                {step.id < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              
              <div className="hidden md:block">
                <div className={`font-serif-spiritual font-semibold text-sm ${
                  step.id <= currentStep ? 'text-spiritual-maroon' : 'text-spiritual-maroon/50'
                }`}>
                  {step.name}
                </div>
                <div className={`text-xs font-sans-spiritual ${
                  step.id === currentStep ? 'text-spiritual-gold' : 'text-spiritual-maroon/40'
                }`}>
                  {step.id < currentStep ? 'Completed' : step.id === currentStep ? 'Current' : 'Pending'}
                </div>
              </div>
            </motion.div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
                step.id < currentStep ? 'bg-spiritual-gold' : 'bg-spiritual-sandy-light'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;