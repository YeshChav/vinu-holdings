import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Ventures() {
  return (
    <>
      <StructuredData type="Organization" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
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
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-indigo-900/60 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                <span className="text-indigo-300 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Ventures</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
                Emerging businesses with growth potential, including café & lifestyle ventures that create value and serve communities.
              </p>
            </div>
          </div>
        </section>

        {/* Venture Philosophy */}
        <section className="py-20 bg-white/90 backdrop-blur-sm relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Venture Approach</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                We identify and nurture emerging businesses with strong growth potential, focusing on innovative concepts and market opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Growth Potential</h3>
                <p className="text-slate-600">We focus on businesses with scalable models and significant market opportunities for expansion.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">Innovation Focus</h3>
                <p className="text-slate-600">We seek businesses that bring fresh ideas, innovative approaches, and unique value propositions to their markets.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Community Impact</h3>
                <p className="text-slate-600">Our ventures create positive impact in communities while building sustainable, profitable businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Ventures */}
        <section className="py-20 bg-white/90 backdrop-blur-sm relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Current Ventures</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our active portfolio of emerging businesses across different sectors and markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="/cafe-ventures" className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 block group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">Café Ventures</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Expanding into the Italian café market with premium locations, exceptional coffee, and authentic experiences. We&apos;re building a network of high-quality coffee shops that serve as community gathering spaces.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-orange-600">
                    <span className="font-semibold">Status:</span> Planning Phase
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-semibold">Focus:</span> Lifestyle & Hospitality
                  </div>
                </div>
              </a>
              
              <a href="/lifestyle-brands" className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 block group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">Lifestyle Brands</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Developing lifestyle brands that resonate with modern consumers, focusing on sustainability, quality, and authentic experiences across various consumer categories.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-purple-600">
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
        <section className="py-20 bg-white/90 backdrop-blur-sm">
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
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Scalable Business Model</h3>
                    <p className="text-slate-600">Clear path to scale with proven unit economics and growth potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Strong Management Team</h3>
                    <p className="text-slate-600">Experienced leadership with relevant industry expertise and execution capability.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Market Opportunity</h3>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg z-20">
                  <div className="text-sm font-semibold text-slate-900">Growth Metrics</div>
                  <div className="text-xs text-slate-600">Venture Performance</div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Focus Sectors</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Food & Beverage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Lifestyle</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Technology</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Hospitality</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-white/90 backdrop-blur-sm relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Venture Performance</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our track record in identifying and nurturing high-potential emerging businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <AnimatedCounter target={5} className="text-4xl font-bold text-indigo-600 mb-2" suffix="+" />
                <div className="text-slate-600 mb-4 group-hover:text-indigo-600 transition-colors">Active Ventures</div>
                <p className="text-sm text-slate-500">Across multiple sectors</p>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="text-4xl font-bold text-green-600 mb-2">€10M+</div>
                <div className="text-slate-600 mb-4 group-hover:text-green-600 transition-colors">Venture Capital Deployed</div>
                <p className="text-sm text-slate-500">Growth investments</p>
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <AnimatedCounter target={3} className="text-4xl font-bold text-purple-600 mb-2" suffix="x" />
                <div className="text-slate-600 mb-4 group-hover:text-purple-600 transition-colors">Average ROI</div>
                <p className="text-sm text-slate-500">On exited ventures</p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-2xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Venture Idea?</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for innovative businesses with growth potential. Let&apos;s discuss how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Pitch Your Idea
                </Link>
                <Link 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all duration-300"
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
