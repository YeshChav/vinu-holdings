'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/components/ui/Logo';

export default function Navigation() {
  const [isVenturesOpen, setIsVenturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <Logo 
                width={800} 
                height={320} 
                variant="full" 
                color="gold"
                className="h-32 sm:h-40 w-auto"
                key="nav-gold-logo"
                />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {/* Home */}
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
              >
                Home
              </Link>
              
              {/* About */}
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
              >
                About
              </Link>
              
              {/* Investment Portfolio Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  setIsVenturesOpen(true);
                  if (hoverTimeout) {
                    clearTimeout(hoverTimeout);
                    setHoverTimeout(null);
                  }
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsVenturesOpen(false);
                  }, 150); // Small delay to allow cursor to move to dropdown
                  setHoverTimeout(timeout);
                }}
              >
                <button
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-50 flex items-center space-x-1"
                >
                  <span>Investment Portfolio</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isVenturesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isVenturesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                        setHoverTimeout(null);
                      }
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setIsVenturesOpen(false);
                      }, 150);
                      setHoverTimeout(timeout);
                    }}
                  >
                    <Link 
                      href="/equity-investments"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded"></div>
                      </div>
                      <div>
                        <div className="font-medium">Equity Investments</div>
                        <div className="text-xs text-gray-500">Publicly traded companies</div>
                      </div>
                    </Link>
                    
                    <div className="relative group">
                      <Link 
                        href="/ventures"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                          <div className="w-4 h-4 bg-indigo-600 rounded"></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Ventures</div>
                          <div className="text-xs text-gray-500">Emerging businesses</div>
                        </div>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      
                      {/* Sub-dropdown for Ventures */}
                      <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link 
                          href="/cafe-ventures"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        >
                          <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center mr-3">
                            <div className="w-3 h-3 bg-orange-600 rounded"></div>
                          </div>
                          <div>
                            <div className="font-medium">Café Ventures</div>
                            <div className="text-xs text-gray-500">Italian café market</div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/lifestyle-brands"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        >
                          <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center mr-3">
                            <div className="w-3 h-3 bg-purple-600 rounded"></div>
                          </div>
                          <div>
                            <div className="font-medium">Lifestyle Brands</div>
                            <div className="text-xs text-gray-500">Consumer goods</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <Link 
                      href="/real-estate"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-green-600 rounded"></div>
                      </div>
                      <div>
                        <div className="font-medium">Real Estate</div>
                        <div className="text-xs text-gray-500">Cash-flow properties</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              
              
              {/* Insights */}
              <Link 
                href="/#insights" 
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-blue-50"
              >
                Insights
              </Link>
              
              <Link 
                href="/#contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-2 fade-in duration-300"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Links */}
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Investment Portfolio Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Investment Portfolio</div>
                <div className="space-y-1 ml-4">
                  <Link 
                    href="/equity-investments"
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    </div>
                    Equity Investments
                  </Link>
                  
                  <Link 
                    href="/ventures"
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-6 h-6 bg-indigo-100 rounded flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                    </div>
                    Ventures
                  </Link>
                  
                  {/* Mobile Ventures Sub-section */}
                  <div className="px-3 py-2">
                    <div className="text-xs font-medium text-gray-400 mb-2">Venture Projects</div>
                    <div className="space-y-1 ml-4">
                      <Link 
                        href="/cafe-ventures"
                        className="flex items-center px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center mr-3">
                          <div className="w-2 h-2 bg-orange-600 rounded"></div>
                        </div>
                        Café Ventures
                      </Link>
                      <Link 
                        href="/lifestyle-brands"
                        className="flex items-center px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-5 h-5 bg-purple-100 rounded flex items-center justify-center mr-3">
                          <div className="w-2 h-2 bg-purple-600 rounded"></div>
                        </div>
                        Lifestyle Brands
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    href="/real-estate"
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center mr-3">
                      <div className="w-3 h-3 bg-green-600 rounded"></div>
                    </div>
                    Real Estate
                  </Link>
                </div>
              </div>
              
              
              <Link 
                href="/#insights" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insights
              </Link>
              
              <Link 
                href="/#contact" 
                className="block px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
