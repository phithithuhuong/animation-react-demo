import React, { useState, useEffect, useCallback } from 'react';
import { CarouselProps } from '../../types';

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [items.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [items.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  // Touch/Swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (!items || items.length === 0) {
    return <div className="flex items-center justify-center h-80 bg-gray-50 text-gray-600 text-xl rounded-lg">No items to display</div>;
  }

  return (
    <div className="relative w-full max-w-full overflow-hidden">
      <div 
        className="relative w-full h-[500px] overflow-hidden bg-gray-50"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex w-full h-full will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full h-full relative">
              <div className="flex w-full h-full bg-white ">
                {item.image && (
                  <div className="flex-1 relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300" />
                  </div>
                )}
                <div className="flex-1 p-16 flex flex-col justify-center bg-gradient-to-br from-primary-500 to-secondary-500 text-white relative">
                  <div className="absolute inset-0 bg-black/10 z-10"></div>
                  <div className="relative z-20">
                    <h3 className="text-5xl font-bold mb-4 leading-tight">{item.title}</h3>
                    {item.description && (
                      <p className="text-xl leading-relaxed mb-8 opacity-90">{item.description}</p>
                    )}
                    {item.url && (
                      <a 
                        href={item.url} 
                        className="inline-block bg-white/20 text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:transform hover:-translate-y-1 hover:shadow-xl"
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showArrows && items.length > 1 && (
          <>
            <button 
              className="absolute top-1/2 left-5 transform -translate-y-1/2 w-14 h-14 bg-white/90 border-none text-gray-800 text-2xl font-bold cursor-pointer rounded-full transition-all duration-300 z-10 backdrop-blur-sm shadow-lg hover:bg-white hover:transform hover:-translate-y-1/2 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform disabled:-translate-y-1/2 flex items-center justify-center"
              onClick={prevSlide}
              disabled={isTransitioning}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
            <button 
              className="absolute top-1/2 right-5 transform -translate-y-1/2 w-14 h-14 bg-white/90 border-none text-gray-800 text-2xl font-bold cursor-pointer rounded-full transition-all duration-300 z-10 backdrop-blur-sm shadow-lg hover:bg-white hover:transform hover:-translate-y-1/2 hover:scale-110 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform disabled:-translate-y-1/2 flex items-center justify-center"
              onClick={nextSlide}
              disabled={isTransitioning}
              aria-label="Next slide"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 p-5 bg-white">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 relative ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:transform hover:scale-110'
              } disabled:cursor-not-allowed`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel; 