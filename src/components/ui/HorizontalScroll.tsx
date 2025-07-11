import { useEffect, useRef, useState } from "react";
import { CarouselItem } from "../../types";

interface HorizontalScrollProps {
  items: CarouselItem[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleWheel = (e: WheelEvent) => {
    if (!isHovered) return;
    
    e.preventDefault();
    
    const deltaY = e.deltaY;
    const scrollSpeed = 2; // Điều chỉnh tốc độ scroll
    const maxTranslate = Math.max(0, (items.length - 1) * 300);
    
    setScrollX(prev => {
      const newScrollX = prev + (deltaY * scrollSpeed);
      return Math.max(0, Math.min(maxTranslate, newScrollX));
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isHovered, items.length]);

  return (
    <div
      ref={containerRef}
      className="relative h-[50vh] bg-gradient-to-br  overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Horizontal Scroll Gallery
            </h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${scrollX}px)`,
                width: `${items.length * 300}px`
              }}
            >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-96 mx-4 bg-white rounded-2xl  overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white/30 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="flex space-x-2">
                {items.map((_, index) => {
                  const isActive = scrollX >= index * 300 && scrollX < (index + 1) * 300;
                  return (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-gray-400'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Hover indicator */}
          {isHovered && (
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm animate-fade-in">
              🖱️ Scroll để xem thêm
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
