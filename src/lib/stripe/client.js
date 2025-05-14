import { loadStripe } from '@stripe/stripe-js';

// Carga Stripe solo una vez del lado del cliente
let stripePromise;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}; 