import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import CheckBadge from '@/components/ui/CheckBadge';


export default function CafeVentures() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/ventures/cafe-ventures-bg.jpg')`
          }}
        ></div>
        {/* Image Overlay removed for clean background display */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
              Café <span className="text-brand-blue">Ventures</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
              Expanding into the Italian café market with premium locations, exceptional coffee, and authentic experiences that celebrate Italian culture.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create a network of premium Italian cafés that serve as community hubs, offering authentic coffee experiences and fostering connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Authentic Italian Experience</h3>
              <p className="text-gray-600">Bringing the true essence of Italian café culture to every location with traditional recipes and warm hospitality.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Prime Locations</h3>
              <p className="text-gray-600">Strategically selecting high-traffic areas in major cities to maximize visibility and customer accessibility.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <CheckBadge className="group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Community Focus</h3>
              <p className="text-gray-600">Creating spaces where people can connect, work, and enjoy quality time in a welcoming environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu & Experience - TEXT LEFT + MEDIA RIGHT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Menu & Experience</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A carefully curated selection of Italian coffee, pastries, and light meals that transport you to the streets of Rome and Milan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Coffee Selection</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Authentic Italian espresso and cappuccino</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Specialty drinks: Affogato, Macchiato, Cortado</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Premium single-origin beans from Italy</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Cold brew and iced coffee options</h4>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <h3 className="text-2xl font-semibold text-ink-heading mb-4 group-hover:text-brand-gold transition-colors">Food & Pastries</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Fresh Italian pastries and croissants</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Panini and light lunch options</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Gelato and dessert selection</h4>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckBadge />
                    <div>
                      <h4 className="font-semibold text-ink-heading">Seasonal specials and local favorites</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Media Content */}
            <div className="relative">
              <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/ventures/cafe-interior.jpg')`
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
                <source src="/videos/sections/cafe-experience.mp4" type="video/mp4" />
              </video>
              
              {/* Café Experience Overlay */}
              <div className="absolute top-4 left-4 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 px-3 py-2 rounded-lg z-20">
                <div className="text-sm font-semibold text-ink-heading">Café Experience</div>
                <div className="text-xs text-ink-body">Italian Authenticity</div>
              </div>
              
              {/* Menu Highlights Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-ink-heading mb-2">Signature Items</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <CheckBadge className="h-6 w-6" />
                      <span className="text-ink-body font-medium">Espresso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckBadge className="h-6 w-6" />
                      <span className="text-ink-body font-medium">Pastries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckBadge className="h-6 w-6" />
                      <span className="text-ink-body font-medium">Cappuccino</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckBadge className="h-6 w-6" />
                      <span className="text-ink-body font-medium">Panini</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 right-4 z-20">
                <button className="w-12 h-12 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Strategy */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Location Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expansion plan focuses on high-traffic urban areas with strong coffee culture and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 1: Milan</h3>
              <p className="text-gray-600 mb-4">Launching our flagship location in the heart of Milan&apos;s business district.</p>
              <div className="text-sm text-blue-600 font-semibold">Status: Planning</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 2: Rome</h3>
              <p className="text-gray-600 mb-4">Expanding to Rome&apos;s historic center and tourist areas.</p>
              <div className="text-sm text-blue-600 font-semibold">Status: Research</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phase 3: Florence</h3>
              <p className="text-gray-600 mb-4">Bringing our café experience to Florence&apos;s cultural district.</p>
              <div className="text-sm text-blue-600 font-semibold">Status: Future</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Investment Opportunity</h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Join us in bringing authentic Italian café culture to new markets. We&apos;re seeking strategic partners and investors to help scale our vision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">€2M</div>
                <div className="text-blue-100">Initial Investment Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">3-5</div>
                <div className="text-blue-100">Locations in First Year</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={25} className="text-3xl font-bold text-white mb-2" suffix="%" />
                <div className="text-blue-100">Expected ROI by Year 3</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Invest With Us
              </Link>
              <Link href="/strategic-investments" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
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
