import React from 'react';
import Carousel from '../components/ui/Carousel';
import { CarouselItem } from '../types';
import HorizontalScroll from '../components/ui/HorizontalScroll';

const CarouselPage: React.FC = () => {
  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      title: 'Beautiful Landscapes',
      description: 'Explore stunning natural landscapes from around the world',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      url: '#'
    },
    {
      id: '2',
      title: 'Urban Architecture',
      description: 'Modern cityscapes and architectural marvels',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      url: '#'
    },
    {
      id: '3',
      title: 'Ocean Views',
      description: 'Peaceful ocean scenes and coastal beauty',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop',
      url: '#'
    },
    {
      id: '4',
      title: 'Mountain Peaks',
      description: 'Majestic mountain ranges and alpine scenery',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      url: '#'
    },
    {
      id: '5',
      title: 'Forest Paths',
      description: 'Tranquil forest walks and woodland scenes',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Interactive Carousel</h1>
          <p className="text-xl opacity-90 animate-fade-in animation-delay-200 max-w-2xl mx-auto">
            A beautiful, responsive carousel with smooth animations and touch support
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="mb-16 bg-white rounded-2xl overflow-hidden shadow-2xl">
            <Carousel
              items={carouselItems}
              autoPlay={true}
              interval={4000}
              showDots={true}
              showArrows={true}
            />
          </div>
          <HorizontalScroll items={carouselItems} />
          
          <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Features</h2>
            <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-colors duration-300 hover:text-primary-500">
                ✨ Smooth CSS transitions
              </li>
              <li className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-colors duration-300 hover:text-primary-500">
                📱 Touch and swipe support
              </li>
              <li className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-colors duration-300 hover:text-primary-500">
                🔄 Auto-play functionality
              </li>
              <li className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-colors duration-300 hover:text-primary-500">
                🎯 Navigation dots
              </li>
              <li className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-colors duration-300 hover:text-primary-500">
                ⬅️➡️ Previous/Next arrows
              </li>
              <li className="py-3 text-gray-700 text-lg transition-colors duration-300 hover:text-primary-500">
                📱 Fully responsive design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage; 