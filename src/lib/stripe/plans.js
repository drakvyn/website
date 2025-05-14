// Define available plans for purchase
export const plans = [
  {
    id: 'plan_essential',
    name: 'Essential Plan',
    description: 'Perfect for small businesses needing occasional tech solutions.',
    features: [
      'Up to 4 hours of development work (web, apps, automation, AI integration)',
      'Technical consulting & guidance',
      'Email support (48h response)',
      'Monthly progress report'
    ],
    price: 149,
    priceId: 'price_essential', // This ID will be configured in Stripe
    popular: false,
    color: 'blue'
  },
  {
    id: 'plan_professional',
    name: 'Professional Plan',
    description: 'Ideal for businesses needing regular development and automation tasks.',
    features: [
      'Up to 10 hours of development work',
      'Technical consulting & solution design',
      'Email & chat support (24-48h response)',
      'Task prioritization queue',
      'Bi-weekly progress updates'
    ],
    price: 299,
    priceId: 'price_professional', // This ID will be configured in Stripe
    popular: true,
    color: 'purple'
  },
  {
    id: 'plan_premium',
    name: 'Premium Plan',
    description: 'For businesses seeking a reliable development partner with priority access.',
    features: [
      'Up to 20 hours of dedicated development work',
      'Full technical consulting & strategy sessions',
      'Priority support (response within 24h)',
      'Weekly progress updates',
      'Task fast-track (priority handling)'
    ],
    price: 499,
    priceId: 'price_premium', // This ID will be configured in Stripe
    popular: false,
    color: 'indigo'
  }
];

// Function to get a plan by its ID
export function getPlanById(id) {
  return plans.find(plan => plan.id === id);
} 