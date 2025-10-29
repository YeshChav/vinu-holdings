import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import CheckBadge from '@/components/ui/CheckBadge';

export default function Ventures() {
  return (
    <>
      <StructuredData type="Organization" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/investments/ventures-bg.jpg')`
            }}
          ></div>
          {/* Image Overlay removed for clean background display */}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                <span className="text-brand-blue">Ventures</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
                Emerging businesses with growth potential, including café & lifestyle ventures that create value and serve communities.
              </p>
            </div>
          </div>
        </section>

        {/* Venture Philosophy */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Venture Approach</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                We identify and nurture emerging businesses with strong growth potential, focusing on innovative concepts and market opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Growth Potential</h3>
                <p className="text-slate-600">We focus on businesses with scalable models and significant market opportunities for expansion.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Innovation Focus</h3>
                <p className="text-slate-600">We seek businesses that bring fresh ideas, innovative approaches, and unique value propositions to their markets.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Community Impact</h3>
                <p className="text-slate-600">Our ventures create positive impact in communities while building sustainable, profitable businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Ventures */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Current Ventures</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our active portfolio of emerging businesses across different sectors and markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="/cafe-ventures" className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 block group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-blue transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-black group-hover:text-brand-blue transition-colors">Café Ventures</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Expanding into the Italian café market with premium locations, exceptional coffee, and authentic experiences. We&apos;re building a network of high-quality coffee shops that serve as community gathering spaces.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-brand-blue">
                    <span className="font-semibold">Status:</span> Planning Phase
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-semibold">Focus:</span> Lifestyle & Hospitality
                  </div>
                </div>
              </a>
              
              <a href="/lifestyle-brands" className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 block group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-blue transition-colors">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-black group-hover:text-brand-blue transition-colors">Lifestyle Brands</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Developing lifestyle brands that resonate with modern consumers, focusing on sustainability, quality, and authentic experiences across various consumer categories.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-brand-blue">
                    <span className="font-semibold">Status:</span> Research Phase
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-semibold">Focus:</span> Consumer Goods
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Investment Criteria - TEXT LEFT + MEDIA RIGHT */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Venture Investment Criteria</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We look for specific characteristics that indicate strong potential for growth and success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Scalable Business Model</h3>
                    <p className="text-slate-600">Clear path to scale with proven unit economics and growth potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Strong Management Team</h3>
                    <p className="text-slate-600">Experienced leadership with relevant industry expertise and execution capability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Market Opportunity</h3>
                    <p className="text-slate-600">Large addressable market with clear customer demand and growth trends.</p>
                  </div>
                </div>
              </div>
              
              {/* Media Content - Venture Growth Chart */}
              <div className="relative">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/charts/portfolio-performance.jpg')`
                    }}
                  ></div>
                  {/* Overlay removed for clean media display */}
                </div>
                
                {/* Video Element */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10 rounded-2xl"
                >
                  <source src="/videos/sections/portfolio-performance.mp4" type="video/mp4" />
                </video>
                
                {/* Growth Metrics Overlay */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 px-3 py-2 rounded-lg z-20">
                  <div className="text-sm font-semibold text-slate-900">Growth Metrics</div>
                  <div className="text-xs text-slate-600">Venture Performance</div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Focus Sectors</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Food & Beverage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Lifestyle</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Technology</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Hospitality</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button className="w-12 h-12 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Venture Performance</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our track record in identifying and nurturing high-potential emerging businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-2xl font-bold text-brand-blue mb-2">To be disclosed</div>
                <div className="text-slate-600 mb-4 group-hover:text-brand-blue transition-colors">Active Ventures</div>
                <p className="text-sm text-slate-500">Across multiple sectors</p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-2xl font-bold text-brand-blue mb-2">To be disclosed</div>
                <div className="text-slate-600 mb-4 group-hover:text-brand-blue transition-colors">Venture Capital Deployed</div>
                <p className="text-sm text-slate-500">Growth investments</p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-2xl font-bold text-brand-blue mb-2">To be disclosed</div>
                <div className="text-slate-600 mb-4 group-hover:text-brand-blue transition-colors">Average ROI</div>
                <p className="text-sm text-slate-500">On exited ventures</p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue rounded-2xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Venture Idea?</h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for innovative businesses with growth potential. Let&apos;s discuss how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact" 
                  className="bg-brand-gold text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Pitch Your Idea
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-blue hover:scale-105 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
