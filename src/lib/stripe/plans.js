// Define available plans for purchase
export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small projects and personal websites',
    price: 99,
    features: [
      'Responsive Design',
      'Basic SEO Optimization',
      'Contact Form',
      'Social Media Integration',
      '1 Month of Support'
    ],
    popular: false
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Ideal for growing businesses and startups',
    price: 199,
    features: [
      'Everything in Basic',
      'Advanced SEO Optimization',
      'Blog Integration',
      'Analytics Setup',
      '3 Months of Support',
      'Performance Optimization'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete solution for large businesses',
    price: 299,
    features: [
      'Everything in Professional',
      'Custom Features Development',
      'Priority Support',
      'Advanced Security',
      '6 Months of Support',
      'Performance Monitoring',
      'Custom Integrations'
    ],
    popular: false
  }
];

// Function to get a plan by its ID
export function getPlanById(id) {
  return plans.find(plan => plan.id === id);
} 