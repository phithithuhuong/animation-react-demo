import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center min-h-[70vh] bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-center relative">
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        
        <div className="relative z-20 max-w-4xl px-5">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
            Welcome to Animation Demo
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-200">
            Explore beautiful animations and interactive components built with React
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in animation-delay-400">
            <Link to={ROUTES.CAROUSEL} className="btn btn-primary bg-white/20 border-2 border-white/30 backdrop-blur-sm hover:bg-white/30 hover:transform hover:-translate-y-1 hover:shadow-xl">
              View Carousel
            </Link>
            <Link to={ROUTES.ANIMATIONS} className="btn btn-secondary bg-transparent border-2 border-white/50 hover:bg-white/10 hover:transform hover:-translate-y-1">
              See Animations
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-center text-5xl font-bold mb-12 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-4">🎠</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Interactive Carousel</h3>
              <p className="text-gray-600 line-height-relaxed mb-6">Smooth and responsive carousel with touch support and auto-play functionality.</p>
              <Link to={ROUTES.CAROUSEL} className="text-primary-500 font-semibold hover:text-secondary-500 transition-colors duration-300">
                Explore →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">CSS Animations</h3>
              <p className="text-gray-600 line-height-relaxed mb-6">Beautiful CSS animations and transitions with customizable timing and effects.</p>
              <Link to={ROUTES.ANIMATIONS} className="text-primary-500 font-semibold hover:text-secondary-500 transition-colors duration-300">
                View Demo →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-4">🖼️</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Image Gallery</h3>
              <p className="text-gray-600 line-height-relaxed mb-6">Responsive image gallery with lightbox effect and smooth transitions.</p>
              <Link to={ROUTES.GALLERY} className="text-primary-500 font-semibold hover:text-secondary-500 transition-colors duration-300">
                Browse →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 