import React from 'react';

const GalleryPage: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Mountain Landscape',
      title: 'Mountain Peak'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      alt: 'City Architecture',
      title: 'Urban View'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
      alt: 'Ocean View',
      title: 'Ocean Waves'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Mountain Range',
      title: 'Alpine Scene'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      alt: 'Forest Path',
      title: 'Woodland Trail'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Sunset View',
      title: 'Golden Hour'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Image Gallery</h1>
          <p className="text-xl opacity-90 animate-fade-in animation-delay-200">
            Beautiful responsive gallery with hover effects
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 bg-white hover:transform hover:-translate-y-3 hover:shadow-2xl group">
                <div className={`relative w-full overflow-hidden ${
                  index % 3 === 0 ? 'h-64' : index % 3 === 1 ? 'h-80' : 'h-72'
                }`}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className=" absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center p-8">
                    <h3 className="text-2xl font-semibold mb-4 transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {image.title}
                    </h3>
                    <button className="bg-white/20 text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:transform hover:-translate-y-1 hover:shadow-xl transform translate-y-5 group-hover:translate-y-0 delay-200">
                      View Full
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage; 