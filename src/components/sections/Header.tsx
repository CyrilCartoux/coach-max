'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-400 bg-opacity-90 backdrop-blur-sm">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="font-bold text-dark-500 text-lg">CM</span>
          </div>
          <span className="font-bold text-xl text-white">CoachMax</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-primary transition-colors">
            Pricing
          </Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="#" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-300 absolute w-full py-4 shadow-lg animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <Link href="#features" className="text-gray-300 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link href="#" className="btn-primary self-start" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 