import React from 'react';

const AboutPage: React.FC = () => {
  const technologies = [
    'React 19 with TypeScript',
    'React Router for navigation',
    'Tailwind CSS for styling',
    'Responsive design principles',
    'Modern ES6+ JavaScript'
  ];

  const features = [
    'Professional folder structure',
    'Type-safe TypeScript components',
    'Responsive carousel component',
    'Tailwind CSS styling',
    'Image gallery with hover effects',
    'Clean, maintainable code'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">About This Project</h1>
          <p className="text-xl opacity-90 animate-fade-in animation-delay-200">
            Learn more about this React animation demonstration
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl opacity-100 animate-fade-in animation-delay-100">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                🚀 Technologies Used
              </h2>
              <ul className="list-none p-0 m-0">
                {technologies.map((tech, index) => (
                  <li 
                    key={index}
                    className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-all duration-300 hover:pl-6 relative pl-5 hover:text-primary-500  before:content-['✓'] before:absolute before:left-0 before:text-primary-500 before:font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl opacity-100 animate-fade-in animation-delay-200">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                ✨ Features
              </h2>
              <ul className="list-none p-0 m-0">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="py-3 text-gray-700 text-lg border-b border-gray-100 transition-all duration-300 relative pl-5 hover:text-primary-500 hover:pl-6 before:content-['✓'] before:absolute before:left-0 before:text-primary-500 before:font-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl opacity-100 animate-fade-in animation-delay-300">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                📁 Project Structure
              </h2>
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bg-gray-800 text-gray-300 px-5 py-3 text-sm font-semibold rounded-t-xl border-b border-gray-700">
                  Project Structure
                </div>
                <div className="bg-gray-900 text-red-400 rounded-xl pt-12 p-8 overflow-x-auto">
                  <pre className="font-mono text-sm leading-relaxed">
{`src/
├── components/
│   ├── common/          # Shared components
│   └── ui/              # UI components (Carousel, etc.)
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── constants/           # Application constants
├── utils/               # Utility functions
├── services/            # API and service layers
└── styles/              # Global styles`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 