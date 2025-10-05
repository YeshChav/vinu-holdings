import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function EquityInvestments() {
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
              backgroundImage: `url('/images/investments/equity-investments-bg.jpg')`
            }}
          ></div>
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-indigo-900/60 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                <span className="text-indigo-300 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Equity Investments</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
                Focused on publicly traded companies with durable competitive advantages, long-term holding strategies, and comprehensive risk management.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Philosophy */}
        <section className="py-20 bg-white/90 backdrop-blur-sm relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Investment Philosophy</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                We focus on companies with sustainable competitive advantages, strong fundamentals, and long-term growth potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Durable Competitive Advantage</h3>
                <p className="text-slate-600">We invest in companies with strong moats, brand power, and sustainable competitive positions that protect long-term value creation.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">Long-term Holding</h3>
                <p className="text-slate-600">We practice patient capital, holding positions for multiple market cycles to capture the full value of compound growth.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Risk Management</h3>
                <p className="text-slate-600">Comprehensive risk assessment and portfolio diversification to protect capital while maximizing returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Criteria - MEDIA LEFT + TEXT RIGHT */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Investment Criteria</h2>
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
                  <source src="/videos/sections/market-analysis.mp4" type="video/mp4" />
                </video>
                
                {/* Chart Overlay Elements */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg z-20">
                  <div className="text-sm font-semibold text-slate-900">Market Analysis</div>
                  <div className="text-xs text-slate-600">Real-time Data</div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Portfolio Focus Areas</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Technology</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Healthcare</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Financial</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Consumer</span>
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
              
              {/* Text Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Strong Fundamentals</h3>
                    <p className="text-slate-600">Robust financial metrics, consistent revenue growth, and healthy balance sheets.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Market Leadership</h3>
                    <p className="text-slate-600">Companies that lead their respective markets with innovative products and services.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Experienced Management</h3>
                    <p className="text-slate-600">Leadership teams with proven track records and clear strategic vision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Results */}
        <section className="py-20 bg-white/90 backdrop-blur-sm relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Performance & Results</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our disciplined approach to equity investing has delivered consistent results across market cycles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="text-4xl font-bold text-indigo-600 mb-2">15%+</div>
                <div className="text-slate-600 mb-4 group-hover:text-indigo-600 transition-colors">Average Annual Returns</div>
                <p className="text-sm text-slate-500">Over the past 5 years</p>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <AnimatedCounter target={25} className="text-4xl font-bold text-green-600 mb-2" suffix="+" />
                <div className="text-slate-600 mb-4 group-hover:text-green-600 transition-colors">Portfolio Companies</div>
                <p className="text-sm text-slate-500">Diversified across sectors</p>
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="text-4xl font-bold text-purple-600 mb-2">€50M+</div>
                <div className="text-slate-600 mb-4 group-hover:text-purple-600 transition-colors">Assets Under Management</div>
                <p className="text-sm text-slate-500">Equity investments</p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-indigo-600 rounded-2xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Our Equity Strategy?</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Learn more about our investment approach and how we can help grow your portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#contact" 
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get in Touch
                </a>
                <a 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all duration-300"
                >
                  Learn More About Us
                </a>
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
