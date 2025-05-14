import { useState } from 'react';
import { motion } from 'framer-motion';
import { plans } from '../lib/stripe/plans';
import { getStripe } from '../lib/stripe/client';
import './directlinks-overlay.css';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  // Function to handle Stripe checkout
  const handleCheckout = async (priceId) => {
    try {
      setLoadingCheckout(true);
      
      // In a real environment, we would call an API to create the session
      // Example:
      // const response = await fetch('/api/create-checkout-session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ priceId }),
      // });
      // const { sessionId } = await response.json();
      // const stripe = await getStripe();
      // stripe.redirectToCheckout({ sessionId });
      
      // For this example, we simulate the process
      setTimeout(() => {
        setLoadingCheckout(false);
        alert('In a production environment, this would redirect to Stripe for payment');
      }, 1500);
      
    } catch (error) {
      console.error('Error starting checkout:', error);
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
    <section className="py-24 w-full relative bg-[#0e0e16]">
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(110, 123, 255, 0.05) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(110, 123, 255, 0.05) 0%, transparent 40%)',
          pointerEvents: 'none'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-squada text-white relative text-6xl md:text-8xl tracking-wide">
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
            className="text-lg text-zinc-400 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your project and start building your online presence.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? 'transform md:-translate-y-4' : ''
              }`}
              variants={itemVariants}
              onMouseEnter={() => setSelectedPlan(plan.id)}
              onMouseLeave={() => setSelectedPlan(null)}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#6e7bff] text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 h-full flex flex-col ${
                plan.popular 
                  ? 'bg-gradient-to-b from-[#1f2033] to-[#181924]' 
                  : 'bg-[#181924]'
              }`}>
                <div className="mb-6">
                  <h3 className="font-squada text-3xl text-white mb-2">{plan.name}</h3>
                  <p className="text-zinc-400">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <p className="text-5xl font-squada text-white flex items-start">
                    <span className="text-lg mt-2 mr-1">$</span>
                    {plan.price}
                    <span className="text-zinc-400 text-xl ml-2 mt-3">USD / month</span>
                  </p>
                </div>
                
                <div className="flex-grow mb-8">
                  <p className="text-sm text-zinc-400 mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-zinc-300">
                        <svg className="w-5 h-5 text-[#6e7bff] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className={`w-full py-4 rounded-lg text-white font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#6e7bff] hover:bg-[#5664ff]'
                      : 'bg-[#2d2e3d] hover:bg-[#3d3e4d]'
                  }`}
                  onClick={() => handleCheckout(plan.priceId)}
                  disabled={loadingCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loadingCheckout ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></span>
                      Processing...
                    </span>
                  ) : (
                    'SELECT PLAN'
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-20 p-8 bg-[#181924] rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-squada text-white mb-2">Need a custom plan?</h3>
              <p className="text-zinc-400">If you're looking for a tailored solution for your project, contact me.</p>
            </div>
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-[#6e7bff] text-white rounded-lg font-semibold hover:bg-[#6e7bff] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              REQUEST QUOTE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 