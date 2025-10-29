'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';

export default function Navigation() {
  const [isVenturesOpen, setIsVenturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <header className="relative z-40">
      {/* Dark navigation bar with subtle glow */}
      <div className="fixed w-full top-0 left-0 z-50 bg-black shadow-lg pointer-events-auto">
        {/* Unified top glowing bar that flows behind the logo */}
        <div 
          className="absolute top-0 left-0 w-full h-6 bg-white/80 blur-sm"
        ></div>
        <div 
          className="absolute top-0 left-0 w-full h-4 bg-white"
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20 px-4">
          {/* Left Navigation Links */}
               <div className="hidden md:block -ml-16">
                 <div className="flex items-center space-x-12">
              {/* Home */}
              <Link 
                href="/" 
                className={`text-sm font-medium transition-colors duration-200 ${
                       pathname === '/' 
                         ? 'text-brand-gold' 
                         : 'text-white hover:text-brand-gold'
                }`}
              >
                HOME
              </Link>
              
              {/* Services Dropdown */}
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
                       className="text-white hover:text-brand-gold text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>SERVICES</span>
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
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors duration-200"
                    >
                      <div>
                        <div className="font-medium">Equity Investments</div>
                        <div className="text-xs text-gray-500">Publicly traded companies</div>
                      </div>
                    </Link>
                    
                    <div className="relative group">
                      <Link 
                        href="/ventures"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors duration-200"
                      >
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
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors duration-200"
                    >
                      <div>
                        <div className="font-medium">Café Ventures</div>
                        <div className="text-xs text-gray-500">Italian café market</div>
                      </div>
                    </Link>
                        
                        <Link 
                          href="/lifestyle-brands"
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors duration-200"
                        >
                          <div>
                            <div className="font-medium">Lifestyle Brands</div>
                            <div className="text-xs text-gray-500">Consumer goods</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <Link 
                      href="/real-estate"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold transition-colors duration-200"
                    >
                      <div>
                        <div className="font-medium">Real Estate</div>
                        <div className="text-xs text-gray-500">Cash-flow properties</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Central Logo Section - Empty space for white polygon logo */}
          <div className="flex items-center justify-center flex-1 md:pointer-events-none md:absolute md:left-1/2 md:-translate-x-1/2 md:inset-y-0">
            {/* Logo removed - only white polygon logo will show */}
          </div>

          {/* Right Navigation Links */}
               <div className="hidden md:block -mr-16">
                 <div className="flex items-center space-x-12">
              {/* About Us */}
              <Link 
                     href="/about" 
                     className="text-sm font-medium text-white hover:text-brand-gold transition-colors duration-200"
              >
                ABOUT US
              </Link>
              
              {/* Contact */}
              <Link 
                     href="/contact" 
                     className="text-sm font-medium text-white hover:text-brand-gold transition-colors duration-200"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-gold p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
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
            className="md:hidden bg-gradient-to-b from-slate-900 to-slate-800 border-t border-slate-700/30 animate-in slide-in-from-top-2 fade-in duration-300"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Links */}
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-brand-gold mb-2">Services</div>
                <div className="space-y-1 ml-4">
                  <Link 
                    href="/equity-investments"
                    className="flex items-center px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Equity Investments
                  </Link>
                  
                  <Link 
                    href="/ventures"
                    className="flex items-center px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ventures
                  </Link>
                  
                  {/* Mobile Ventures Sub-section */}
                  <div className="px-3 py-2">
                    <div className="text-xs font-medium text-blue-400 mb-2">Venture Projects</div>
                    <div className="space-y-1 ml-4">
                      <Link 
                        href="/cafe-ventures"
                        className="flex items-center px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Café Ventures
                      </Link>
                      <Link 
                        href="/lifestyle-brands"
                        className="flex items-center px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Lifestyle Brands
                      </Link>
                    </div>
                  </div>
                  
                  <Link 
                    href="/real-estate"
                    className="flex items-center px-3 py-2 text-white hover:text-brand-gold hover:bg-white/10 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Real Estate
                  </Link>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* White polygon notch (centered) - positioned above the glowing bar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-4 md:-top-6
                   bg-white shadow-[0_8px_24px_rgba(0,0,0,.15)]
                   flex items-center justify-center
                   z-[70]"
        style={{
          clipPath: "polygon(12% 0%, 88% 0%, 100% 42%, 88% 100%, 12% 100%, 0% 42%)",
          width: "min(48vw, 420px)",
          height: "85px",
        }}
      >
        <Link href="/" className="hover:opacity-90 transition-opacity duration-200 flex items-center justify-center w-full h-full">
            <Logo 
              width={3200} 
              height={1280} 
              variant="full" 
              color="gold"
              className="h-20 md:h-27 w-auto mt-5.5 ml-15"
              key="nav-white-logo"
            />
        </Link>
      </div>

      {/* Left glowing line extending from behind the logo to screen edge */}
      <div 
        className="absolute top-0 left-0 z-40"
        style={{
          right: `calc(50% + min(54vw, 480px) * 0.42)`,
          height: '18px',
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-r from-white via-white to-white/80 shadow-lg shadow-white/50"
          style={{
            borderRadius: '0 18px 18px 0',
          }}
        ></div>
      </div>

      {/* Right glowing line extending from behind the logo to screen edge */}
      <div 
        className="absolute top-0 right-0 z-40"
        style={{
          left: `calc(50% - min(54vw, 480px) * 0.42)`,
          height: '18px',
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-l from-white via-white to-white/80 shadow-lg shadow-white/50"
          style={{
            borderRadius: '18px 0 0 18px',
          }}
        ></div>
      </div>
    </header>
  );
}
