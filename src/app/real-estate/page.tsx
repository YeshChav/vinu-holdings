import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';


export default function RealEstate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/investments/real-estate-bg.jpg')`
          }}
        ></div>
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-green-900/60 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
              Real <span className="text-green-300 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Estate</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
              Cash-flow generative properties that balance stable returns with asset growth, providing consistent income and long-term appreciation.
            </p>
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-20 bg-white/90 backdrop-blur-sm relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-green-50 opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Investment Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              We focus on cash-flow generative properties that provide stable returns while maintaining potential for asset growth and appreciation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">Cash-Flow Focus</h3>
              <p className="text-slate-600">Prioritizing properties with strong rental income potential and stable tenant bases for consistent returns.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">Stable Returns</h3>
              <p className="text-slate-600">Focusing on properties with predictable income streams and low volatility for consistent investor returns.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">Asset Growth</h3>
              <p className="text-slate-600">Selecting properties in growing markets with strong fundamentals for long-term appreciation potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in diverse real estate projects that cater to different market segments and investment objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Residential Developments</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Luxury condominiums and apartments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Mixed-use residential complexes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Sustainable housing communities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Student housing and co-living spaces
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Commercial Properties</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Office buildings and business centers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Retail and shopping centers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Industrial and logistics facilities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Hospitality and tourism properties
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Projects</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Healthcare and medical facilities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Educational and research centers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Cultural and community centers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Green and sustainable buildings
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Opportunities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Real estate investment trusts (REITs)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Development partnerships
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Property management services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Value-add opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process - MEDIA LEFT + TEXT RIGHT */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic approach to real estate development that ensures quality, sustainability, and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Media Content */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/process/real-estate-development.jpg')`
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
                <source src="/videos/sections/real-estate-tour.mp4" type="video/mp4" />
              </video>
              
              {/* Process Timeline Overlay */}
              <div className="absolute top-4 left-4 space-y-2 z-20">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-slate-900">
                  1. Site Selection
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-slate-900">
                  2. Design & Planning
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-slate-900">
                  3. Construction
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-slate-900">
                  4. Management
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 right-4 z-20">
                <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Site Selection</h3>
                    <p className="text-slate-600">Strategic location analysis and market research to identify prime development opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-emerald-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Design & Planning</h3>
                    <p className="text-slate-600">Collaborative design process with architects and engineers to create innovative solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-teal-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Construction</h3>
                    <p className="text-slate-600">High-quality construction with experienced contractors and rigorous quality control.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-green-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Management</h3>
                    <p className="text-slate-600">Professional property management to maximize returns and maintain asset value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investment Highlights</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Our real estate portfolio offers attractive returns with strong fundamentals and growth potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">€100M+</div>
                <div className="text-green-100">Total Project Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">8-12%</div>
                <div className="text-green-100">Target Annual Returns</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={15} className="text-3xl font-bold text-white mb-2" suffix="+" />
                <div className="text-green-100">Completed Projects</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={95} className="text-3xl font-bold text-white mb-2" suffix="%" />
                <div className="text-green-100">Occupancy Rate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Invest With Us
              </Link>
              <Link href="/strategic-investments" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300">
                View Our Investments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
