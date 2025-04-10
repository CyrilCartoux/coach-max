'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/dashboard');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-dark-500 py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <CheckCircleIcon className="h-24 w-24 text-primary" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Thank you for choosing CoachMax. Your journey to better fitness starts now!
          </p>

          <div className="bg-dark-300 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 mb-4">
              We&apos;re preparing your personalized dashboard...
            </p>
            <p className="text-gray-400">
              Redirecting in {countdown} seconds
            </p>
          </div>

          <button
            onClick={() => router.push('/dashboard')}
            className="bg-primary text-dark-500 font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Go to Dashboard Now
          </button>
        </div>
      </div>
    </main>
  );
} 