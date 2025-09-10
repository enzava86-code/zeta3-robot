// Responsive Testing Configuration
// Used for systematic validation across all device sizes

export const BREAKPOINTS = {
  'xs': '320px',   // iPhone SE - Smallest modern phone
  'sm': '375px',   // iPhone 12 - Most common phone size
  'md': '768px',   // iPad - Tablet portrait
  'lg': '1024px',  // iPad Pro - Tablet landscape
  'xl': '1200px',  // Desktop - Small laptop
  '2xl': '1536px'  // Large Desktop - External monitor
};

export const CRITICAL_SECTIONS = [
  'header-navigation',
  'hero-section', 
  'problems-section',
  'solution-section',
  'process-section',
  'about-section',
  'contact-section',
  'footer'
];

export const DEVICE_MATRIX = [
  { 
    name: 'iPhone SE', 
    width: 320, 
    height: 568, 
    category: 'mobile',
    priority: 'HIGH',
    issues: ['Header overflow', 'Text too small', 'CTA buttons too small']
  },
  { 
    name: 'iPhone 12', 
    width: 375, 
    height: 812, 
    category: 'mobile',
    priority: 'HIGH',
    issues: ['Navigation wrapping', 'Trust indicators crowded']
  },
  { 
    name: 'iPad Mini', 
    width: 768, 
    height: 1024, 
    category: 'tablet',
    priority: 'MEDIUM',
    issues: ['Grid layout problems', 'Typography scaling']
  },
  { 
    name: 'iPad Pro', 
    width: 1024, 
    height: 1366, 
    category: 'tablet',
    priority: 'MEDIUM',
    issues: ['Spacing inconsistencies']
  },
  { 
    name: 'Desktop', 
    width: 1920, 
    height: 1080, 
    category: 'desktop',
    priority: 'LOW',
    issues: ['Working well - baseline']
  }
];

export const VALIDATION_CHECKLIST = {
  mobile: [
    'Header fits without overflow',
    'Navigation is usable', 
    'Text is readable (min 16px)',
    'CTA buttons are tappable (min 44px)',
    'No horizontal scroll',
    'All sections display correctly'
  ],
  tablet: [
    'Grid layouts work properly',
    'Typography is well-proportioned', 
    'Spacing feels natural',
    'Content uses available space well'
  ],
  desktop: [
    'Max-width constraints work',
    'Content is centered properly',
    'Typography is readable',
    'All interactive elements work'
  ]
};

export const TAILWIND_RESPONSIVE_CLASSES = {
  // Typography System
  heading: {
    xl: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold',
    lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold',
    md: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold',
    sm: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium'
  },
  
  // Body Text
  body: {
    lg: 'text-lg sm:text-xl md:text-2xl',
    md: 'text-base sm:text-lg md:text-xl', 
    sm: 'text-sm sm:text-base md:text-lg'
  },
  
  // Layout Classes
  layout: {
    section: 'py-12 md:py-16 lg:py-20 xl:py-24',
    container: 'px-4 md:px-6 lg:px-8',
    card: 'p-4 md:p-6 lg:p-8',
    margin: 'mb-4 md:mb-6 lg:mb-8'
  },
  
  // Grid Systems
  grids: {
    three_col: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
    two_col: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16', 
    auto_fit: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'
  },
  
  // Interactive Elements
  buttons: {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-lg text-sm md:text-base lg:text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105',
    secondary: 'border border-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base hover:bg-white/10 transition-all duration-300'
  }
};

// Performance Targets
export const PERFORMANCE_TARGETS = {
  firstLoadJS: 200, // KB
  lighthouseMobile: 90,
  lighthouseDesktop: 95,
  coreWebVitals: {
    LCP: 2.5, // seconds
    FID: 100, // milliseconds  
    CLS: 0.1   // score
  }
};