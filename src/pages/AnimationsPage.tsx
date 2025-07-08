import React from 'react';

const AnimationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">CSS Animations</h1>
          <p className="text-xl opacity-90 animate-fade-in animation-delay-200">
            Explore various animation effects and transitions
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-red-400 relative overflow-hidden">
                <div className="bg-white text-gray-800 px-8 py-5 rounded-lg font-semibold text-lg shadow-lg opacity-30 animate-pulse">Fade In</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Fade In</h3>
              <p className="text-gray-600 leading-relaxed">Smooth opacity transition</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-red-400 relative overflow-hidden">
                <div className="bg-white text-gray-800 px-8 py-5 rounded-lg font-semibold text-lg shadow-lg animate-slide-in">Slide In</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Slide In</h3>
              <p className="text-gray-600 leading-relaxed">Transform with translate</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-red-400 relative overflow-hidden">
                <div className="bg-white text-gray-800 px-8 py-5 rounded-lg font-semibold text-lg shadow-lg animate-bounce-custom">Bounce</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Bounce</h3>
              <p className="text-gray-600 leading-relaxed">Spring-like animation</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-red-400 relative overflow-hidden">
                <div className="bg-white text-gray-800 px-8 py-5 rounded-lg font-semibold text-lg shadow-lg animate-rotate-360">Rotate</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Rotate</h3>
              <p className="text-gray-600 leading-relaxed">360° rotation animation</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-red-400 relative overflow-hidden">
                <div className="bg-white text-gray-800 px-8 py-5 rounded-lg font-semibold text-lg shadow-lg animate-scale-pulse">Scale</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Scale</h3>
              <p className="text-gray-600 leading-relaxed">Size transformation</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-40 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-pink-400 to-red-400 relative overflow-hidden">
                <div className="bg-white text-gray-800 px-8 py-5 rounded-lg font-semibold text-lg shadow-lg animate-pulse-custom">Pulse</div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Pulse</h3>
              <p className="text-gray-600 leading-relaxed">Rhythmic scaling effect</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationsPage; 