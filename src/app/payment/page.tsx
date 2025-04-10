'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const tiers = {
  free: {
    name: "Free",
    price: "0",
    description: "Perfect for trying out our platform",
  },
  premium_monthly: {
    name: "Premium",
    price: "17.99",
    description: "Everything you need for your fitness journey",
  },
  lifetime_access: {
    name: "Lifetime",
    price: "499",
    description: "One-time payment, lifetime access",
  },
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({ selectedPlan }: { selectedPlan: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateName = (name: string) => {
    return name.length >= 2;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEmailError('');
    setNameError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!validateName(name)) {
      setNameError('Name must be at least 2 characters long');
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: selectedPlan,
          email,
          name,
        }),
      });

      const { clientSecret } = await response.json();

      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            email,
            name,
          },
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'An error occurred');
      } else {
        window.location.href = '/payment/success';
      }
    } catch (err) {
      setError('An error occurred while processing your payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-dark-400 text-white border border-dark-200 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="John Doe"
        />
        {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-dark-400 text-white border border-dark-200 focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="john@example.com"
        />
        {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Card Details
        </label>
        <div className="p-4 rounded-lg bg-dark-400 border border-dark-200">
          <CardElement
            options={{
              style: {
                base: {
                  color: '#fff',
                  '::placeholder': {
                    color: '#9ca3af',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || selectedPlan === 'free'}
        className={`w-full py-4 px-8 rounded-lg font-semibold transition-all duration-300 
          ${loading 
            ? 'bg-gray-500 cursor-not-allowed' 
            : selectedPlan === 'free'
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-primary text-dark-500 hover:bg-opacity-90'
          }`}
      >
        {loading 
          ? 'Processing...' 
          : selectedPlan === 'free'
          ? 'Free Plan Selected'
          : `Pay $${tiers[selectedPlan as keyof typeof tiers].price}`}
      </button>
    </form>
  );
};

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(searchParams.get('plan') || 'premium_monthly');

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <main className="min-h-screen bg-dark-500 py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Complete Your Purchase</h1>
          
          <div className="bg-dark-300 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Selected Plan</h2>
            
            <div className="space-y-4 mb-8">
              {Object.entries(tiers).map(([id, tier]) => (
                <label
                  key={id}
                  className={`block relative rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    selectedPlan === id
                      ? 'bg-dark-200 ring-2 ring-primary'
                      : 'bg-dark-400 hover:bg-dark-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={id}
                    checked={selectedPlan === id}
                    onChange={() => handlePlanChange(id)}
                    className="sr-only"
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                      <p className="text-gray-300">{tier.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">${tier.price}</span>
                      {id === 'premium_monthly' && (
                        <span className="text-gray-400 block">/month</span>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <Elements stripe={stripePromise}>
              <CheckoutForm selectedPlan={selectedPlan} />
            </Elements>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Secure payment powered by Stripe
            </p>
            <p className="text-gray-400 text-sm">
              By proceeding with the payment, you agree to our terms of service
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 