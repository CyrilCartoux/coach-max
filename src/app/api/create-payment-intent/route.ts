import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const PRICE_IDS = {
  premium_monthly: process.env.STRIPE_PREMIUM_MONTHLY_PRICE_ID!,
  lifetime_access: process.env.STRIPE_LIFETIME_PRICE_ID!,
};

export async function POST(request: Request) {
  try {
    const { priceId, email, name } = await request.json();

    if (!priceId || !PRICE_IDS[priceId as keyof typeof PRICE_IDS]) {
      return NextResponse.json(
        { error: 'Invalid price ID' },
        { status: 400 }
      );
    }

    // Create a customer
    const customer = await stripe.customers.create({
      email,
      name,
    });

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: priceId === 'lifetime_access' ? 49900 : 1799, // Amount in cents
      currency: 'usd',
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        priceId,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
} 