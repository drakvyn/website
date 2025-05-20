export const MERCADOPAGO_PUBLIC_KEY = import.meta.env.PUBLIC_MERCADOPAGO_PUBLIC_KEY;
export const MERCADOPAGO_ACCESS_TOKEN = import.meta.env.PRIVATE_MERCADOPAGO_ACCESS_TOKEN;

export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small projects',
    price: 99,
    features: [
      '1 Page Website',
      'Basic SEO Setup',
      'Contact Form',
      'Mobile Responsive',
      '1 Month Support'
    ],
    popular: false
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 199,
    features: [
      '3-5 Page Website',
      'Advanced SEO Setup',
      'Contact Form & Newsletter',
      'Mobile Responsive',
      'Social Media Integration',
      '3 Months Support'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large scale projects',
    price: 399,
    features: [
      '5+ Page Website',
      'Premium SEO Setup',
      'Custom Features',
      'E-commerce Integration',
      'API Integration',
      '6 Months Support'
    ],
    popular: false
  }
]; 