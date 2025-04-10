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
    const { priceId } = await request.json();

    if (!priceId || !PRICE_IDS[priceId as keyof typeof PRICE_IDS]) {
      return NextResponse.json(
        { error: 'Invalid price ID' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: PRICE_IDS[priceId as keyof typeof PRICE_IDS],
          quantity: 1,
        },
      ],
      mode: priceId === 'lifetime_access' ? 'payment' : 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?plan=${priceId}`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 