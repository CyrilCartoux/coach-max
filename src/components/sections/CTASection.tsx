'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-dark-500 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-dark-400 to-transparent"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div 
          className={`max-w-4xl mx-auto bg-gradient-to-r from-dark-300 to-dark-400 rounded-2xl border border-dark-200 p-10 md:p-16 text-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-primary">Transform</span> Your Fitness Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have changed their lives with CoachMax. Start your journey today with our 7-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#" 
              className="btn-primary text-center inline-block"
            >
              Get Started Free
            </Link>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center py-3 px-8 rounded-lg bg-dark-300 text-white border border-dark-200 hover:border-accent transition-all duration-300"
            >
              <span>Watch Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 