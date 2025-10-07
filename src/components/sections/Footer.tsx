import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/constants';
import Logo from '@/components/ui/Logo';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info - Left Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo 
                  width={1600} 
                  height={640} 
                  variant="full" 
                  color="gold"
                  className="h-40 sm:h-56 w-auto"
                  key="footer-gold-logo"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                {COMPANY_INFO.description}
              </p>
            </div>

            {/* Investment Portfolio - Middle Column */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-semibold text-slate-900 mb-6">Investment Portfolio</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/equity-investments" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center group">
                    <span>Equity Investments</span>
                    <svg className="w-3 h-3 ml-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/ventures" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center group">
                    <span>Ventures</span>
                    <svg className="w-3 h-3 ml-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center group">
                    <span>Real Estate</span>
                    <svg className="w-3 h-3 ml-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company - Right Column */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-semibold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center group">
                    <span>Home</span>
                    <svg className="w-3 h-3 ml-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center group">
                    <span>About Us</span>
                    <svg className="w-3 h-3 ml-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 text-sm flex items-center group">
                    <span>Contact</span>
                    <svg className="w-3 h-3 ml-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Left - Copyright */}
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">VH</span>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; 2024 {COMPANY_INFO.name}. All rights reserved.
              </p>
            </div>

            {/* Middle - Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="hidden lg:block w-px h-4 bg-gray-300"></div>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <div className="w-px h-4 bg-gray-300"></div>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200">
                Terms of Service
              </a>
              <div className="w-px h-4 bg-gray-300"></div>
              <a href="#" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200">
                Sitemap
              </a>
            </div>

            {/* Right - Social Media */}
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 transition-colors duration-200"
                >
                  <span className="text-xs font-semibold">
                    {social.name === 'LinkedIn' ? 'in' : social.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
