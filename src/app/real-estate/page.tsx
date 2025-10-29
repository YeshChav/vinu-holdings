import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

export default function RealEstate() {
  return (
    <>
      <Navigation />
      
      {/* Construction Site Coming Soon Section */}
      <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Construction Background Elements */}
        <div className="absolute inset-0">
          {/* Construction Tape */}
          <div className="absolute top-0 left-0 w-full h-4 bg-red-500 animate-tape-move"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-red-500 animate-tape-move-reverse"></div>
          
          {/* Construction Icons */}
          <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute top-32 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}>
            <div className="w-12 h-12 bg-red-500 transform rotate-45 shadow-lg"></div>
          </div>
          
          <div className="absolute bottom-32 left-40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.2s' }}>
            <div className="w-10 h-16 bg-blue-700 rounded-t-full shadow-lg"></div>
          </div>
          
          <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.8s' }}>
            <div className="w-14 h-8 bg-yellow-600 rounded-full shadow-lg"></div>
          </div>
          
          {/* Construction Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Construction Sign Style Coming Soon */}
          <div className="mb-8 relative">
            <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 border-4 border-black p-8 transform rotate-3 shadow-2xl animate-bounce">
              <h1 className="text-5xl md:text-7xl font-black text-black mb-2 tracking-wider">
                <span className="inline-block">COMING</span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-black text-black tracking-wider">
                <span className="inline-block">SOON</span>
              </h1>
            </div>
            
            {/* Construction Warning Sign */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 border-4 border-black rounded-full flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="text-black font-black text-lg">!</div>
              </div>
            </div>
          </div>

          {/* Construction Progress */}
                <div className="mb-8 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <div className="text-lg font-bold text-black mb-4">🚧 Construction in Progress 🚧</div>
            <div className="text-sm text-gray-700 mb-4">
              We&apos;re building something amazing for your real estate needs
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-4 mb-2">
                  <div className="bg-gradient-to-r from-blue-700 to-red-500 h-4 rounded-full w-3/5 animate-pulse"></div>
            </div>
            <div className="text-xs text-gray-600">Foundation: 60% Complete</div>
          </div>

          {/* Construction Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/80 p-4 rounded-lg shadow-md">
              <div className="text-2xl mb-2">🏗️</div>
              <div className="font-bold text-black">Planning</div>
              <div className="text-sm text-gray-600">✅ Complete</div>
            </div>
                  <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/80 p-4 rounded-lg shadow-md">
              <div className="text-2xl mb-2">🔨</div>
              <div className="font-bold text-black">Building</div>
              <div className="text-sm text-gray-600">🔄 In Progress</div>
            </div>
                  <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/80 p-4 rounded-lg shadow-md">
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-bold text-black">Launch</div>
              <div className="text-sm text-gray-600">⏳ Coming Soon</div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
                  <button className="group relative px-8 py-4 bg-blue-700 border-4 border-black text-white hover:bg-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="font-black tracking-wider uppercase">Get Construction Updates</span>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-2 border-black rounded-full animate-ping"></div>
            </button>
          </div>

          {/* Construction Footer */}
                <div className="mt-16 text-sm text-white tracking-widest">
            🚧 VINU HOLDINGS • REAL ESTATE DEVELOPMENT 🚧
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}