/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
        },
        secondary: {
          500: '#764ba2',
          600: '#6b46c1',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-custom': 'bounceCustom 2s ease-in-out infinite',
        'rotate-360': 'rotate360 2s linear infinite',
        'scale-pulse': 'scalePulse 2s ease-in-out infinite',
        'pulse-custom': 'pulseCustom 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceCustom: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-10px)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        pulseCustom: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)'
          },
        },
      },
    },
  },
  plugins: [],
  
} 