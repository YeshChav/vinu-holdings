import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="gradient-bg pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">
              Building Great<br />
              <span className="text-yellow-400">Companies</span>
            </h1>
            <p className="text-xl text-yellow-200 mb-8 max-w-3xl mx-auto">
              Vinu Holdings combines strategic investments, innovative ventures, and real estate development to create lasting value and growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Our Investments
              </button>
              <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">5+</div>
              <div className="text-yellow-200">Years in Business</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">€50M+</div>
              <div className="text-yellow-200">Assets Under Management</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">3</div>
              <div className="text-yellow-200">Core Business Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="investments" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Our Investment Focus</h2>
            <p className="text-xl text-yellow-200 max-w-3xl mx-auto">
              We focus on high-performing, cash-flow generative businesses with excellent management and growth potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Stock Portfolio</h3>
              <ul className="space-y-3 text-yellow-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Diversified equity investments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Growth-oriented companies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Long-term value creation
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Investment Philosophy</h3>
              <ul className="space-y-3 text-yellow-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Fundamental analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Risk management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Sustainable growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Our Ventures</h2>
            <p className="text-xl text-yellow-200 max-w-3xl mx-auto">
              Beyond investments, we're building innovative businesses that create value and serve communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/cafe-ventures" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-black rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-500">Café Projects</h3>
              </div>
              <p className="text-yellow-200 mb-4">
                Expanding into the Italian café market with premium locations, exceptional coffee, and authentic experiences.
              </p>
              <div className="text-sm text-yellow-300">
                <span className="font-semibold">Status:</span> Planning Phase
              </div>
            </a>
            
            <a href="/real-estate" className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow block">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-black rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-500">Real Estate</h3>
              </div>
              <p className="text-yellow-200 mb-4">
                Developing premium real estate projects that create value for communities and provide excellent returns for investors.
              </p>
              <div className="text-sm text-yellow-300">
                <span className="font-semibold">Status:</span> Research Phase
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">About Vinu Holdings</h2>
            <p className="text-xl text-yellow-200 max-w-3xl mx-auto">
              We are an emerging investment company with a clear vision: to build great companies through strategic investments, innovative ventures, and real estate development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/strategic-investments" className="bg-gray-900 p-8 rounded-lg shadow-lg hover-scale block">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-black rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">Strategic Investments</h3>
              <p className="text-yellow-200">We identify and invest in high-potential companies with strong fundamentals and growth prospects.</p>
            </a>
            
            <a href="/cafe-ventures" className="bg-gray-900 p-8 rounded-lg shadow-lg hover-scale block">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-black rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">Café Ventures</h3>
              <p className="text-yellow-200">Expanding into the Italian café market with premium locations and exceptional customer experiences.</p>
            </a>
            
            <a href="/real-estate" className="bg-gray-900 p-8 rounded-lg shadow-lg hover-scale block">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-black rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">Real Estate</h3>
              <p className="text-yellow-200">Developing premium real estate projects that create value for communities and investors.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Get In Touch</h2>
            <p className="text-xl text-yellow-200 max-w-3xl mx-auto">
              Interested in partnering with us or learning more about our investment opportunities?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-500 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded mr-4"></div>
                  <span className="text-yellow-200">info@vinuholdings.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded mr-4"></div>
                  <span className="text-yellow-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded mr-4"></div>
                  <span className="text-yellow-200">London, United Kingdom</span>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-yellow-200 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-yellow-200 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-yellow-200 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
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
  );
}