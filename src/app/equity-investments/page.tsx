import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import CheckBadge from '@/components/ui/CheckBadge';

export default function EquityInvestments() {
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
              backgroundImage: `url('/images/investments/equity-investments-bg.jpg')`
            }}
          ></div>
          {/* Image Overlay removed for clean background display */}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                <span className="text-white">Equity Investments</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
                Focused on publicly traded companies with durable competitive advantages, long-term holding strategies, and comprehensive risk management.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Philosophy */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Investment Philosophy</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                We focus on companies with sustainable competitive advantages, strong fundamentals, and long-term growth potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Durable Competitive Advantage</h3>
                <p className="text-slate-600">We invest in companies with strong moats, brand power, and sustainable competitive positions that protect long-term value creation.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Long-term Holding</h3>
                <p className="text-slate-600">We practice patient capital, holding positions for multiple market cycles to capture the full value of compound growth.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Risk Management</h3>
                <p className="text-slate-600">Comprehensive risk assessment and portfolio diversification to protect capital while maximizing returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Criteria - MEDIA LEFT + TEXT RIGHT */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Investment Criteria</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our rigorous selection process ensures we invest only in companies that meet our high standards for quality and growth potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Media Content - Market Analysis Chart */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/charts/market-analysis.jpg')`
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
                  <source src="/videos/sections/market-analysis.mp4" type="video/mp4" />
                </video>
                
                {/* Chart Overlay Elements */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 px-3 py-2 rounded-lg z-20">
                  <div className="text-sm font-semibold text-slate-900">Market Analysis</div>
                  <div className="text-xs text-slate-600">Real-time Data</div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Portfolio Focus Areas</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Technology</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Healthcare</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Financial</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-brand-blue rounded-full mr-2"></div>
                        <span className="text-slate-600">Consumer</span>
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
              
              {/* Text Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Strong Fundamentals</h3>
                    <p className="text-slate-600">Robust financial metrics, consistent revenue growth, and healthy balance sheets.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Market Leadership</h3>
                    <p className="text-slate-600">Companies that lead their respective markets with innovative products and services.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-brand-blue rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Experienced Management</h3>
                    <p className="text-slate-600">Leadership teams with proven track records and clear strategic vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Results */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Performance & Results</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our disciplined approach to equity investing has delivered consistent results across market cycles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-2xl font-bold text-brand-blue mb-2">To be disclosed</div>
                <div className="text-black mb-4 group-hover:text-brand-gold transition-colors">Average Annual Returns</div>
                <p className="text-sm text-black">Over the past 5 years</p>
                <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-2xl font-bold text-brand-blue mb-2">To be disclosed</div>
                <div className="text-black mb-4 group-hover:text-brand-gold transition-colors">Portfolio Companies</div>
                <p className="text-sm text-black">Diversified across sectors</p>
                <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-2xl font-bold text-brand-blue mb-2">To be disclosed</div>
                <div className="text-black mb-4 group-hover:text-brand-gold transition-colors">Assets Under Management</div>
                <p className="text-sm text-black">Equity investments</p>
                <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue rounded-2xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Our Equity Strategy?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Learn more about our investment approach and how we can help grow your portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact" 
                  className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get in Touch
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
