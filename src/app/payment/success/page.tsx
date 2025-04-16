'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const plan = searchParams?.get('plan') || 'Premium';

  return (
    <main className="min-h-screen bg-dark-500 py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500/10 text-green-400 p-8 rounded-2xl mb-8">
            <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl">
              Thank you for subscribing to {plan} plan. Your account has been activated.
            </p>
          </div>
          
          <Link 
            href="/dashboard" 
            className="btn-primary"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
} 