'use client';

import { CheckIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation';

const tiers = [
  {
    name: "Free",
    price: "0",
    priceId: "free",
    description: "Perfect for trying out our platform",
    features: [
      "1 week program",
      "Basic nutrition plan",
      "3 AI coach questions per week",
      "Basic progress tracking",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "17.99",
    priceId: "premium_monthly",
    description: "Everything you need for your fitness journey",
    features: [
      "Unlimited personalized programs",
      "Unlimited AI coach chat",
      "Complete progress tracking",
      "Monthly challenges & rewards",
      "Advanced nutrition planning",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "499",
    priceId: "lifetime_access",
    description: "One-time payment, lifetime access",
    features: [
      "All Premium features",
      "Lifetime access",
      "Exclusive masterclasses",
      "Pro training programs",
      "Lifetime user badge",
      "VIP support",
    ],
    cta: "Get Lifetime Access",
    popular: false,
  },
];

export default function Pricing() {
  const router = useRouter();

  const handleSelectPlan = (priceId: string) => {
    router.push(`/payment?plan=${priceId}`);
  };

  return (
    <section id="pricing" className="section-padding bg-dark-400 scroll-mt-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? "bg-dark-300 ring-2 ring-primary"
                  : "bg-dark-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-dark-500 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                {tier.price !== "0" && tier.name !== "Lifetime" && (
                  <span className="text-gray-400">/month</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(tier.priceId)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-primary text-dark-500 hover:bg-opacity-90"
                    : "bg-dark-300 text-white hover:bg-dark-400"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Try Premium free for 7 days • No credit card required
          </p>
          <p className="text-gray-400 text-sm">
            Refer a friend and get 1 month free • 10% commission on referrals
          </p>
        </div>
      </div>
    </section>
  );
} 