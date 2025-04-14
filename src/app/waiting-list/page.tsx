'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon, BoltIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function WaitingList() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/waiting-list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-dark-500">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-400 to-dark-500 opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-dark-300 text-primary mb-6">
              <span className="flex items-center gap-2">
                <BoltIcon className="w-5 h-5" />
                Limited Access
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Exclusive Waiting List
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Due to overwhelming demand, we're currently managing access to ensure the best experience for our users. 
              Join our waiting list to be notified when spots become available.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-lg bg-dark-400 text-white border border-dark-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-lg bg-primary text-dark-500 font-semibold hover:bg-opacity-90 transition-all duration-300"
                  >
                    Join Waiting List
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-dark-300 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Thank You for Joining!
                </h2>
                <p className="text-gray-300 mb-6">
                  We've added you to our waiting list. We'll notify you as soon as spots become available.
                </p>
                <button
                  onClick={() => router.push('/')}
                  className="px-6 py-3 rounded-lg bg-dark-400 text-white hover:bg-dark-300 transition-all duration-300"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Join the Waiting List?
            </h2>
            <p className="text-gray-300">
              Be among the first to experience our premium features and exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-300 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <StarIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Early Access</h3>
              <p className="text-gray-300">
                Be the first to try new features and provide feedback that shapes the future of our platform.
              </p>
            </div>

            <div className="bg-dark-300 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BoltIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Priority Access</h3>
              <p className="text-gray-300">
                Get priority notification when new spots open up, ensuring you don't miss out.
              </p>
            </div>

            <div className="bg-dark-300 rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <UserGroupIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Exclusive Community</h3>
              <p className="text-gray-300">
                Join a select group of early adopters and connect with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-500">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  How does the waiting list work?
                </h3>
                <p className="text-gray-300">
                  When you join our waiting list, you'll be notified as soon as spots become available. 
                  The earlier you join, the higher your priority for access.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  When will I get access?
                </h3>
                <p className="text-gray-300">
                  We're continuously working to expand our capacity. You'll receive an email as soon as 
                  we're ready to welcome new users.
                </p>
              </div>

              <div className="bg-dark-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Is there a cost to join the waiting list?
                </h3>
                <p className="text-gray-300">
                  No, joining the waiting list is completely free. You'll only be asked to subscribe 
                  when you're granted access to the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 