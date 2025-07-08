export const ROUTES = {
  HOME: '/',
  CAROUSEL: '/carousel',
  ANIMATIONS: '/animations',
  GALLERY: '/gallery',
  ABOUT: '/about',
  CONTACT: '/contact',
  SCHEDULE: '/schedule',
} as const;

export const NAVIGATION_ITEMS = [
  { path: ROUTES.HOME, label: 'Home', icon: '🏠' },
  { path: ROUTES.CAROUSEL, label: 'Carousel', icon: '🎠' },
  { path: ROUTES.ANIMATIONS, label: 'Animations', icon: '✨' },
  { path: ROUTES.GALLERY, label: 'Gallery', icon: '🖼️' },
  { path: ROUTES.SCHEDULE, label: 'Schedule', icon: '📅' },
  { path: ROUTES.ABOUT, label: 'About', icon: 'ℹ️' },
  { path: ROUTES.CONTACT, label: 'Contact', icon: '📧' },
];

export const ANIMATION_CONSTANTS = {
  DEFAULT_DURATION: 300,
  DEFAULT_EASING: 'ease-in-out',
  CAROUSEL_INTERVAL: 3000,
} as const; 