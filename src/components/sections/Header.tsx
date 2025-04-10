'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('Auth state:', { user, loading });
  }, [user, loading]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/');
    }
  };

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
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {!loading && (
            <>
              {user ? (
                <>
                  <span className="text-gray-300">
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth" className="text-gray-300 hover:text-primary transition-colors">
                    Sign in
                  </Link>
                  <Link href="/auth" className="btn-primary">
                    Sign up
                  </Link>
                </>
              )}
            </>
          )}
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
            {!loading && (
              <>
                {user ? (
                  <>
                    <span className="text-gray-300 py-2">
                      {user.email}
                    </span>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-primary transition-colors py-2 text-left"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-gray-300 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                      Sign in
                    </Link>
                    <Link href="/signup" className="btn-primary self-start" onClick={() => setIsMenuOpen(false)}>
                      Sign up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 