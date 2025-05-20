import { MercadoPagoConfig, Preference } from 'mercadopago';
import { MERCADOPAGO_ACCESS_TOKEN } from '../../lib/mercadopago/config';

const client = new MercadoPagoConfig({ 
  accessToken: MERCADOPAGO_ACCESS_TOKEN 
});

export async function POST({ request }) {
  try {
    const { title, price, quantity, currency_id } = await request.json();

    const preference = new Preference(client);
    const result = await preference.create({
      items: [
        {
          title,
          unit_price: price,
          quantity,
          currency_id
        }
      ],
      back_urls: {
        success: `${import.meta.env.PUBLIC_SITE_URL}/success`,
        failure: `${import.meta.env.PUBLIC_SITE_URL}/failure`,
        pending: `${import.meta.env.PUBLIC_SITE_URL}/pending`
      },
      auto_return: "approved"
    });

    return new Response(JSON.stringify({ preferenceId: result.id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error creating preference:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 