// Define available plans for purchase
export const plans = [
  {
    id: 'plan_basic',
    name: 'Basic Plan',
    description: 'Ideal plan for small projects and basic online presence.',
    features: [
      'Responsive website',
      'Up to 5 pages',
      'Basic contact form',
      'Basic SEO',
      'Email support'
    ],
    price: 499,
    priceId: 'price_basic', // This ID will be configured in Stripe
    popular: false,
    color: 'blue'
  },
  {
    id: 'plan_standard',
    name: 'Standard Plan',
    description: 'Complete solution for businesses seeking a professional presence.',
    features: [
      'Everything in Basic Plan',
      'Up to 10 pages',
      'Integrated blog',
      'Social media integration',
      'Advanced SEO optimization',
      'Priority support',
      'Monthly maintenance'
    ],
    price: 999,
    priceId: 'price_standard', // This ID will be configured in Stripe
    popular: true,
    color: 'purple'
  },
  {
    id: 'plan_premium',
    name: 'Premium Plan',
    description: 'Complete solution with advanced features for growing businesses.',
    features: [
      'Everything in Standard Plan',
      'Unlimited pages',
      'E-commerce (up to 50 products)',
      'Booking/appointment system',
      'CRM integration',
      '24/7 support',
      'Unlimited content updates',
      'Monthly performance optimization'
    ],
    price: 1999,
    priceId: 'price_premium', // This ID will be configured in Stripe
    popular: false,
    color: 'indigo'
  }
];

// Function to get a plan by its ID
export function getPlanById(id) {
  return plans.find(plan => plan.id === id);
} 