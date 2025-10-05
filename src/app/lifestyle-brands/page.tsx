import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import StructuredData from '@/components/seo/StructuredData';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function LifestyleBrands() {
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
              backgroundImage: `url('/images/lifestyle/lifestyle-brands-bg.jpg')`
            }}
          ></div>
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                <span className="text-purple-300 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Lifestyle Brands</span>
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 drop-shadow-md">
                Developing lifestyle brands that resonate with modern consumers, focusing on sustainability, quality, and authentic experiences across various consumer categories.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Brand Philosophy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We create lifestyle brands that connect with consumers on an emotional level, offering products and experiences that enhance their daily lives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic Experiences</h3>
                <p className="text-gray-600">We focus on creating genuine connections between brands and consumers through meaningful experiences and storytelling.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability Focus</h3>
                <p className="text-gray-600">Our brands prioritize environmental responsibility and sustainable practices, appealing to conscious consumers.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality & Innovation</h3>
                <p className="text-gray-600">We combine traditional craftsmanship with modern innovation to create products that exceed consumer expectations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Brand Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our lifestyle brands span across multiple consumer categories, each designed to enhance different aspects of modern living.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fashion & Apparel</h3>
                <p className="text-gray-600 text-sm">Sustainable fashion brands that combine style with environmental consciousness.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Beauty & Wellness</h3>
                <p className="text-gray-600 text-sm">Natural beauty and wellness products that promote self-care and sustainability.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Home & Living</h3>
                <p className="text-gray-600 text-sm">Curated home goods and lifestyle products that create beautiful living spaces.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Food & Beverage</h3>
                <p className="text-gray-600 text-sm">Premium food and beverage brands that celebrate authentic flavors and quality ingredients.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology & Gadgets</h3>
                <p className="text-gray-600 text-sm">Innovative tech products that seamlessly integrate into modern lifestyle routines.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel & Lifestyle</h3>
                <p className="text-gray-600 text-sm">Travel accessories and lifestyle products that enhance experiences and adventures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Development Process - TEXT LEFT + MEDIA RIGHT */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Brand Development Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our systematic approach to building lifestyle brands ensures authenticity, market fit, and long-term success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Market Research & Analysis</h3>
                    <p className="text-slate-600">Deep dive into consumer behavior, market trends, and competitive landscape to identify opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Brand Identity & Positioning</h3>
                    <p className="text-slate-600">Creating compelling brand stories, visual identities, and positioning strategies that resonate with target audiences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Product Development</h3>
                    <p className="text-slate-600">Collaborating with designers and manufacturers to create high-quality products that align with brand values.</p>
                  </div>
                </div>
              </div>
              
              {/* Media Content */}
              <div className="relative">
                <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('/images/lifestyle/lifestyle-brands-bg.jpg')`
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
                  <source src="/videos/sections/brand-development.mp4" type="video/mp4" />
                </video>
                
                {/* Brand Development Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg z-20">
                  <div className="text-sm font-semibold text-slate-900">Brand Development</div>
                  <div className="text-xs text-slate-600">Creative Process</div>
                </div>
                
                {/* Brand Values Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Our Brand Values</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Authenticity</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Sustainability</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Quality</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-slate-600">Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Projects</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our active lifestyle brand development projects across different categories and markets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Sustainable Fashion Line</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Developing an eco-friendly fashion brand that combines Italian craftsmanship with sustainable materials and ethical production practices.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-purple-600">
                    <span className="font-semibold">Status:</span> Development Phase
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Launch:</span> Q2 2025
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Wellness & Beauty Brand</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Creating a natural beauty and wellness brand focused on self-care, sustainability, and authentic Italian ingredients.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-pink-600">
                    <span className="font-semibold">Status:</span> Research Phase
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Launch:</span> Q3 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner with Our Brand Development</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Interested in collaborating on lifestyle brand development or have a brand concept to discuss?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#contact" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start a Partnership
                </a>
                <a 
                  href="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
