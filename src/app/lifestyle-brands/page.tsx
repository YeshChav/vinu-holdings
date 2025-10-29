import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

export default function LifestyleBrands() {
  return (
    <>
        <Navigation />

      {/* Luxury Coming Soon Section */}
      <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-brand-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-brand-gold/5 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute bottom-32 left-40 w-16 h-16 border border-red-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-brand-gold/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245,158,11,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Main Coming Soon Text */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wider animate-fade-in">
              <span className="inline-block">COMING</span>
              <br />
              <span className="inline-block text-brand-gold">SOON</span>
              </h1>
            </div>
            
          {/* Elegant Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent"></div>
            <div className="w-2 h-2 bg-blue-700 rounded-full mx-4 animate-pulse"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light tracking-wide">
            We&apos;re crafting something extraordinary for your lifestyle
          </p>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="text-sm text-slate-400 mb-4 tracking-widest uppercase">Development Progress</div>
            <div className="w-full max-w-md mx-auto h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-700 to-red-500 rounded-full w-3/4 animate-pulse"></div>
            </div>
            <div className="text-xs text-slate-500 mt-2">75% Complete</div>
            </div>
            
          {/* CTA Button */}
                  <div>
            <button className="group relative px-8 py-4 border border-brand-gold/50 text-brand-gold hover:text-white transition-all duration-500 overflow-hidden">
              <span className="relative z-10 font-medium tracking-wider uppercase">Notify Me</span>
              <div className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
            </div>
            
          {/* Elegant Footer Text */}
          <div className="mt-16 text-sm text-slate-500 tracking-widest">
            VINU HOLDINGS • LIFESTYLE BRANDS
            </div>
          </div>
        </section>

        <Footer />
    </>
  );
}