import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import HeroVideo from '@/components/sections/HeroVideo';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import CheckBadge from '@/components/ui/CheckBadge';


// Trigger new deployment

export default function Home() {
  return (
    <>
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Background Video Sequence */}
        <HeroVideo />
        
        {/* Video Overlay - Removed all tints for clean video background */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-gold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
              Building Enduring Value Through<br />
                <span className="text-white bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">Investments & Innovation</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
              Vinu Holdings is a diversified investment company focused on public markets, private ventures, and real estate opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <button className="bg-brand-blue text-white hover:bg-blue-900 focus-ring rounded-lg px-6 py-3 font-medium shadow-md hover:shadow-lg">
                Explore Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-base relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-30"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-brand-blue mb-2">6</div>
              <div className="text-ink-heading group-hover:text-brand-gold transition-colors">Months in Business</div>
              <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-brand-blue mb-2">To be declared</div>
              <div className="text-ink-heading group-hover:text-brand-gold transition-colors">Assets Under Management</div>
              <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 group hover:scale-105 transition-transform duration-300">
              <AnimatedCounter target={3} className="text-4xl font-bold text-brand-blue mb-2" />
              <div className="text-ink-heading group-hover:text-brand-gold transition-colors">Core Business Areas</div>
              <div className="w-16 h-1 bg-brand-blue mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="investments" className="py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,58,138,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-heading mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Our Investment Focus</h2>
            <p className="text-xl text-ink-body max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              We focus on high-performing, cash-flow generative businesses with excellent management and growth potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/equity-investments" className="block">
              <div className="relative rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/investments/equity-investments-bg.jpg')`
                }}
              ></div>
                {/* Image Overlay removed for clean media display */}
              
              <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-gold transition-colors">Equity Investment</h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 hover:scale-105 hover:text-brand-gold cursor-pointer">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 group-hover:bg-brand-gold hover:bg-brand-gold hover:scale-125 transition-all"></div>
                    Diversified equity investments
                  </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100 hover:scale-105 hover:text-brand-gold cursor-pointer">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 group-hover:bg-brand-gold hover:bg-brand-gold hover:scale-125 transition-all"></div>
                    Growth-oriented companies
                  </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200 hover:scale-105 hover:text-brand-gold cursor-pointer">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 group-hover:bg-brand-gold hover:bg-brand-gold hover:scale-125 transition-all"></div>
                    Long-term value creation
                  </li>
                </ul>
              </div>
            </div>
            </Link>
            
            <Link href="/cafe-ventures" className="block">
              <div className="relative rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/ventures/cafe-interior.jpg')`
                }}
              ></div>
                {/* Image Overlay removed for clean media display */}
              
              <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-brand-gold transition-colors">Café</h3>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 hover:scale-105 hover:text-brand-gold cursor-pointer">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 group-hover:bg-brand-gold hover:bg-brand-gold hover:scale-125 transition-all"></div>
                    Italian café culture
                  </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-100 hover:scale-105 hover:text-brand-gold cursor-pointer">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 group-hover:bg-brand-gold hover:bg-brand-gold hover:scale-125 transition-all"></div>
                    Premium coffee experience
                  </li>
                    <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-200 hover:scale-105 hover:text-brand-gold cursor-pointer">
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3 group-hover:bg-brand-gold hover:bg-brand-gold hover:scale-125 transition-all"></div>
                    Community gathering spaces
                  </li>
                </ul>
              </div>
            </div>
            </Link>
            
            {/* Lifestyle Brand card hidden */}
            
            {/* Real Estate card hidden */}
          </div>
        </div>
      </section>


      {/* Investment Philosophy Section - TEXT LEFT + MEDIA RIGHT */}
      <section className="py-20 bg-surface-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink-heading mb-4">Our Investment Philosophy</h2>
                <p className="text-xl text-ink-body mb-6">
                  We believe in the power of patient capital, disciplined investing, and building businesses that create lasting value.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckBadge className="mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink-heading mb-2">Long-term Value Creation</h3>
                    <p className="text-ink-body">We focus on investments that generate sustainable returns over multiple market cycles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckBadge className="mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink-heading mb-2">Risk Management</h3>
                    <p className="text-ink-body">Comprehensive due diligence and portfolio diversification protect investor capital.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckBadge className="mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-ink-heading mb-2">Community Impact</h3>
                    <p className="text-ink-body">Our investments contribute positively to communities and stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Media Content */}
            <div className="relative">
              <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/sections/investment-philosophy.jpg')`
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
                className="absolute inset-0 w-full h-full object-cover z-10"
              >
                <source src="/videos/sections/company-overview.mp4" type="video/mp4" />
              </video>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 right-4 z-20">
                <button className="w-12 h-12 bg-surface-base backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section - MEDIA LEFT + TEXT RIGHT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Media Content */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/process/equity-analysis.jpg')`
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
                <source src="/videos/sections/investment-process.mp4" type="video/mp4" />
              </video>
              
              {/* Process Steps Overlay */}
              <div className="absolute top-4 left-4 space-y-2 z-20">
                <div className="bg-surface-base backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-black">
                  Step 1: Research
                </div>
                <div className="bg-surface-base backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-black">
                  Step 2: Analysis
                </div>
                <div className="bg-surface-base backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-semibold text-black">
                  Step 3: Investment
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 right-4 z-20">
                <button className="w-12 h-12 bg-surface-base backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink-heading mb-4">Our Investment Process</h2>
                <p className="text-xl text-ink-body mb-6">
                  A systematic approach to identifying and executing high-potential investment opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-heading mb-2">Market Research & Analysis</h3>
                    <p className="text-ink-body">Comprehensive market analysis to identify trends, opportunities, and potential risks.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-heading mb-2">Due Diligence</h3>
                    <p className="text-ink-body">Thorough evaluation of financials, management, and business fundamentals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-heading mb-2">Portfolio Integration</h3>
                    <p className="text-ink-body">Strategic integration into our diversified portfolio with ongoing monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Notes Section - TEXT CENTER + MEDIA GRID */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-ink-heading mb-4">Founder Notes</h2>
            <p className="text-xl text-ink-body max-w-3xl mx-auto">
              The vision and mission that drives our commitment to creating lasting value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/team/founder.jpg')`
                  }}
                ></div>
                {/* Overlay removed for clean media display */}
              </div>
            </div>
            
            {/* Founder Notes Content */}
            <div className="space-y-6">
              <div className="bg-surface-base p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Our Founding Vision</h3>
                <p className="text-ink-body mb-4">
                  Vinu Holdings was founded with a clear vision: to honor legacy while creating sustainable growth for future generations. 
                  We believe in the power of patient capital, disciplined investing, and building businesses that matter.
                </p>
                <p className="text-ink-body">
                  Our approach combines traditional investment wisdom with modern market opportunities, focusing on companies and 
                  assets that generate real value for stakeholders and communities.
                </p>
              </div>
              
              <div className="bg-surface-base p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Our Mission</h3>
                <p className="text-ink-body mb-4">
                  To build a diversified portfolio of high-quality investments that deliver consistent returns while contributing 
                  positively to the communities we serve.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-ink-body">Long-term value creation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-ink-body">Ethical business practices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-ink-body">Sustainable growth focus</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-ink-body">Community impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/contact/contact-background.jpg')`
          }}
        ></div>
        {/* Background Overlay removed for clean media display */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Interested in partnering with us or learning more about our investment opportunities?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-brand-blue rounded mr-4"></div>
                  <span className="text-slate-200">info@vinuholdings.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-brand-blue rounded mr-4"></div>
                  <span className="text-slate-200">+39 327 822 6535</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-brand-blue rounded mr-4"></div>
                  <span className="text-slate-200">Italy, Europe</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 hover:scale-105 transition-all duration-300 shadow-lg">
                  Send Message
                </button>
              </form>
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
