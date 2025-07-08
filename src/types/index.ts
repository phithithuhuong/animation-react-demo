// Route types
export interface RouteConfig {
  path: string;
  label: string;
  component: React.ComponentType;
  exact?: boolean;
}

// Navigation types
export interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

// Carousel types
export interface CarouselItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

// Schedule types
export interface ScheduleEvent {
  id: string;
  title: string;
  type: 'course' | 'event' | 'dayoff';
  startTime: string;
  endTime: string;
  day: number; // 0 = Monday, 6 = Sunday
  color?: string;
  description?: string;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  label: string;
}

export interface ScheduleProps {
  events: ScheduleEvent[];
  onAddEvent: (event: Omit<ScheduleEvent, 'id'>) => void;
  onUpdateEvent: (id: string, event: Partial<ScheduleEvent>) => void;
  onDeleteEvent: (id: string) => void;
} 
