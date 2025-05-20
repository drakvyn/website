import { useState } from 'react';
import { motion } from 'framer-motion';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { MERCADOPAGO_PUBLIC_KEY, plans } from '../lib/mercadopago/config';
import './directlinks-overlay.css';

// Initialize MercadoPago
initMercadoPago(MERCADOPAGO_PUBLIC_KEY);

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);

  // Function to handle MercadoPago payment
  const handleMercadoPagoPayment = async (plan) => {
    try {
      setLoadingCheckout(true);
      
      // Create payment preference
      const response = await fetch('/api/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `${plan.name} Plan`,
          price: plan.price,
          quantity: 1,
          currency_id: 'CLP' // Chilean Peso
        }),
      });

      const data = await response.json();
      
      if (data.preferenceId) {
        setPreferenceId(data.preferenceId);
      } else {
        throw new Error(data.error || 'Failed to create payment preference');
      }
      
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setLoadingCheckout(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 md:py-24 w-full relative bg-[#0e0e16]">
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 40%)',
          pointerEvents: 'none'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-squada text-white relative text-5xl sm:text-6xl md:text-8xl tracking-wide uppercase">
            <motion.span 
              className="text-overlay inline-block"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              PLANS
            </motion.span>
          </h2>
          <motion.p
            className="text-base md:text-lg text-zinc-400 mt-3 md:mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your project and start building your online presence.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden ${
                plan.popular ? 'md:transform md:-translate-y-4 border-2 border-white' : ''
              }`}
              variants={itemVariants}
              onMouseEnter={() => setSelectedPlan(plan.id)}
              onMouseLeave={() => setSelectedPlan(null)}
            >
              <div className={`p-5 md:p-8 h-full flex flex-col ${
                plan.popular 
                  ? 'bg-gradient-to-b from-[#1f2033] to-[#181924]' 
                  : 'bg-[#181924]'
              }`}>
                <div className="mb-3 md:mb-6">
                  <h3 className="font-squada text-2xl md:text-3xl text-white mb-1 md:mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-zinc-400">{plan.description}</p>
                </div>
                
                <div className="mb-4 md:mb-8">
                  <p className="text-3xl md:text-5xl font-squada text-white flex items-start">
                    <span className="text-sm md:text-lg mt-1 md:mt-2 mr-1">$</span>
                    {plan.price}
                    <span className="text-zinc-400 text-sm md:text-xl ml-1 md:ml-2 mt-1 md:mt-3">USD / month</span>
                  </p>
                </div>
                
                <div className="flex-grow mb-4 md:mb-8">
                  <p className="text-xs md:text-sm text-zinc-400 mb-2 md:mb-4">Includes:</p>
                  <ul className="space-y-2 md:space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm md:text-base text-zinc-300">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white mt-0.5 mr-1 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className={`w-full py-3 md:py-4 rounded-lg text-[#1F1B24] font-semibold transition-all relative overflow-hidden ${
                    plan.popular
                      ? 'bg-white hover:bg-white/90'
                      : 'bg-white hover:bg-white/90'
                  }`}
                  onClick={() => handleMercadoPagoPayment(plan)}
                  disabled={loadingCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loadingCheckout ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-t-2 border-b-2 border-white mr-2"></span>
                      Processing...
                    </span>
                  ) : (
                    <span className="relative z-10 text-sm md:text-base">SELECT PLAN</span>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* MercadoPago Checkout */}
        {preferenceId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#181924] rounded-xl p-6 max-w-lg w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-squada text-white">Complete Your Payment</h3>
                <button
                  onClick={() => setPreferenceId(null)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="bg-[#1f2033] p-4 rounded-lg">
                <Wallet initialization={{ preferenceId }} />
              </div>
            </motion.div>
          </div>
        )}
        
        <motion.div
          className="mt-10 md:mt-20 p-5 md:p-8 bg-[#181924] rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-squada text-white mb-1 md:mb-2">Need a custom solution?</h3>
              <p className="text-sm md:text-base text-zinc-400">If you're looking for a tailored solution for your project, contact me.</p>
            </div>
            <motion.a 
              href="#contact" 
              className="px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-white/90 text-[#1F1B24] rounded-lg font-semibold transition-all duration-300 relative overflow-hidden w-full md:w-auto text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">REQUEST QUOTE</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 