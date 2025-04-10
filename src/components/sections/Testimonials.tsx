'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Marathon Runner",
    image: "/images/testimonial-1.png", // Will be a placeholder
    quote: "CoachMax has transformed my training routine. The personalized workouts and real-time feedback have helped me improve my marathon time by 15 minutes!",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Fitness Enthusiast",
    image: "/images/testimonial-2.png", // Will be a placeholder
    quote: "I've tried many fitness apps, but none compare to CoachMax. The AI coach feels like having a personal trainer with me 24/7. My strength has improved dramatically.",
    rating: 5,
  },
  {
    name: "Mark Rodriguez",
    role: "Bodybuilder",
    image: "/images/testimonial-3.png", // Will be a placeholder
    quote: "The nutrition guidance and workout plans are perfectly balanced. I've gained 10lbs of muscle while maintaining my body fat percentage. Highly recommended!",
    rating: 4,
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Intersection Observer for animations
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="testimonials" className="section-padding bg-dark-500 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-secondary">Fitness Enthusiasts</span>
          </h2>
          <p className="text-gray-300">
            Hear what our users have to say about their experience with CoachMax.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full p-4">
                  <div className="bg-dark-400 rounded-2xl p-8 border border-dark-300">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-dark-300 flex items-center justify-center text-2xl font-bold text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      <div className="md:w-3/4">
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24" 
                              fill={i < testimonial.rating ? "currentColor" : "none"} 
                              stroke="currentColor"
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-secondary' : 'text-gray-600'}`}
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={i < testimonial.rating ? 0 : 1.5}
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                              />
                            </svg>
                          ))}
                        </div>
                        
                        <blockquote className="text-lg md:text-xl italic text-gray-200 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="mt-4">
                          <p className="font-bold text-primary">{testimonial.name}</p>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-dark-300'
                } transition-colors duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-10">
            <button
              onClick={prevSlide}
              className="bg-dark-300 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-10">
            <button
              onClick={nextSlide}
              className="bg-dark-300 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 