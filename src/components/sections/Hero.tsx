'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-dark-500 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container-custom min-h-[90vh] flex flex-col justify-center relative z-10 pt-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Transform</span> Your Body<br />
                <span className="text-secondary">Maximize</span> Your Potential
              </h1>
              <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-lg">
                Personalized AI-powered workouts, real-time feedback, and nutrition plans tailored to your goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="btn-primary text-center">
                Get Started Free
              </Link>
              <Link 
                href="#features" 
                className="inline-flex items-center justify-center py-3 px-8 rounded-lg bg-dark-300 text-white border border-dark-200 hover:border-accent transition-all duration-300"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-dark-300 border-2 border-dark-500 flex items-center justify-center text-xs font-bold text-primary">JS</div>
                <div className="w-10 h-10 rounded-full bg-dark-300 border-2 border-dark-500 flex items-center justify-center text-xs font-bold text-secondary">AK</div>
                <div className="w-10 h-10 rounded-full bg-dark-300 border-2 border-dark-500 flex items-center justify-center text-xs font-bold text-accent">TM</div>
                <div className="w-10 h-10 rounded-full bg-dark-300 border-2 border-dark-500 flex items-center justify-center text-xs font-bold">+</div>
              </div>
              <p className="text-sm text-gray-400">Join <span className="text-white font-bold">10,000+</span> fitness enthusiasts</p>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'} animation-delay-300`}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-dark-300 bg-dark-400">
              {/* App preview mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-500 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-12 bg-dark-400 flex items-center px-4 z-20">
                <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                <div className="ml-4 h-6 w-40 bg-dark-300 rounded-md"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-dark-300 rounded-lg flex flex-col p-4">
                  <div className="flex-1 flex flex-col space-y-2">
                    <div className="h-8 w-full bg-dark-200 rounded-md"></div>
                    <div className="flex-1 grid grid-cols-2 gap-2">
                      <div className="bg-dark-200 rounded-md"></div>
                      <div className="bg-dark-200 rounded-md"></div>
                      <div className="bg-dark-200 rounded-md"></div>
                      <div className="bg-dark-200 rounded-md"></div>
                    </div>
                  </div>
                  <div className="h-10 mt-2 bg-primary rounded-md"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 