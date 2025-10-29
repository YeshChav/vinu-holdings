import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import CheckBadge from '@/components/ui/CheckBadge';

export default function About() {
  return (
    <>
      <StructuredData type="Organization" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-slate-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                About <span className="text-brand-blue">Vinu Holdings</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Founded with the vision of honoring legacy and creating sustainable growth, Vinu Holdings focuses on long-term value investing across multiple sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Philosophy</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our philosophy is built on <span className="font-semibold text-brand-blue">patience</span>, <span className="font-semibold text-brand-blue">discipline</span>, and <span className="font-semibold text-brand-blue">trust</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Patience</h3>
                <p className="text-slate-600">We believe in the power of patient capital, allowing investments to mature and create sustainable value over time.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Discipline</h3>
                <p className="text-slate-600">Our disciplined approach to investment analysis and risk management ensures consistent decision-making.</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-brand-gold/20 transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-6">
                  <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold group-hover:scale-105 transition-all duration-300">Trust</h3>
                <p className="text-slate-600">We build lasting relationships based on transparency, integrity, and mutual respect with all our partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Office Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Team & Office</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Meet our dedicated team and explore our professional workspace in Italy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Team Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                <div 
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/about/team-photo.jpg')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Our Dedicated Team</h3>
                  <p className="text-slate-200">Experienced professionals committed to excellence</p>
                </div>
              </div>
              
              {/* Office Interior */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                <div 
                  className="aspect-[4/3] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/about/office-interior.jpg')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">Our Italian Office</h3>
                  <p className="text-slate-200">Modern workspace in the heart of Italy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-indigo-50 opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Key Statistics</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Our track record speaks to our commitment to long-term value creation and sustainable growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">Growing Equity Portfolio</h3>
                <p className="text-slate-600 text-sm">Strategic investments in high-potential companies</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">Diversified Ventures & Real Estate</h3>
                <p className="text-slate-600 text-sm">Multiple investment channels for balanced growth</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">Based in Italy</h3>
                <p className="text-slate-600 text-sm">Strategic location in Europe for market access</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-gold transition-colors">Long-term Focused</h3>
                <p className="text-slate-600 text-sm">Patient capital for sustainable value creation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Approach */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investment Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine rigorous analysis with long-term thinking to identify and nurture exceptional investment opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fundamental Analysis</h3>
                    <p className="text-gray-600">Deep dive into company fundamentals, market position, and growth potential.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Management</h3>
                    <p className="text-gray-600">Comprehensive risk assessment and mitigation strategies for all investments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-term Value Creation</h3>
                    <p className="text-gray-600">Focus on sustainable growth and value creation over multiple market cycles.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-ink-heading mb-6 group-hover:text-brand-gold transition-colors">Why Choose Vinu Holdings?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 hover:scale-105 cursor-pointer transition-all duration-300">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Proven track record in value investing</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 hover:scale-105 cursor-pointer transition-all duration-300">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Diversified portfolio across multiple sectors</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 hover:scale-105 cursor-pointer transition-all duration-300">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Transparent communication and reporting</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 hover:scale-105 cursor-pointer transition-all duration-300">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Long-term partnership approach</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 hover:scale-105 cursor-pointer transition-all duration-300">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Strategic location in Italy</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-blue rounded-2xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discover how our patient capital and disciplined approach can help grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact" 
                  className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/#investments" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 hover:text-brand-blue hover:scale-105 transition-all duration-300"
                >
                  View Our Investments
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
