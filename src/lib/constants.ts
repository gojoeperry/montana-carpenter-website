// WCAG 2.1 AA Compliant Color Palette
export const colors = {
  // Background Colors
  pureWhite: '#FFFFFF',
  offWhite: '#FAFAF8',
  darkCharcoal: '#1A1A1A',
  deepForestGreen: '#0A3A2E',
  
  // Text Colors
  almostBlack: '#0F0F0F',  // 19.5:1 contrast on white
  pureWhiteText: '#FFFFFF',
  darkGrayText: '#333333', // 12.6:1 contrast on white
  
  // Brand Colors (only for backgrounds with white text)
  primary: '#0A3A2E',      // Deep forest green
  secondary: '#3E2723',    // Rich walnut brown
  accent: '#F57C00',       // Warm amber - only for UI elements, never text
  success: '#2E7D32',      // Forest green with white text
  error: '#C62828',        // Deep red with white text
  
  // Legacy color mappings for backward compatibility
  deepForest: '#0A3A2E',
  darkEmerald: '#0A3A2E',
  pineGreen: '#0A3A2E',
  mossGreen: '#0A3A2E',
  walnut: '#3E2723',
  espresso: '#3E2723',
  darkBrown: '#1A1A1A',
  richBrown: '#3E2723',
  
  // Light Colors
  cream: '#FAFAF8',
  warmWhite: '#FFFFFF',
  lightBeige: '#FAFAF8',
  softBeige: '#FAFAF8',
  
  // Accent Colors
  copper: '#F57C00',
  bronze: '#F57C00',
  gold: '#F57C00',
  
  // Neutral Colors
  charcoal: '#1A1A1A',
  darkGray: '#0F0F0F',
  mediumGray: '#333333',
  lightGray: '#333333',
  
  // Primary Color System
  primaryLight: '#0A3A2E',
  primaryDark: '#0A3A2E',
  secondaryLight: '#3E2723',
  secondaryDark: '#3E2723',
  accentLight: '#F57C00',
  accentDark: '#F57C00',
  
  // Background Colors
  background: '#FFFFFF',
  surface: '#FAFAF8',
  surfaceElevated: '#FFFFFF',
  surfaceDark: '#1A1A1A',
  foreground: '#0F0F0F',
  foregroundLight: '#333333',
  muted: '#333333',
  
  // High Contrast Text Colors
  textOnDark: '#FFFFFF',
  textOnLight: '#0F0F0F',
  textMutedOnDark: '#FFFFFF',
  textMutedOnLight: '#333333',
  
  // Borders
  border: '#333333',       // High contrast borders
  borderDark: '#0F0F0F',
} as const;

// Typography Scale
export const typography = {
  fontHeading: 'var(--font-playfair)',
  fontBody: 'var(--font-inter)',
  
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    tight: '1.2',
    normal: '1.6',
    relaxed: '1.8',
  },
} as const;

// Spacing Scale
export const spacing = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
} as const;

// Border Radius
export const borderRadius = {
  sm: '0.125rem',
  default: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
} as const;

// Shadows with rich forest tones
export const shadows = {
  sm: '0 1px 2px 0 rgba(15, 76, 58, 0.1)',
  default: '0 4px 6px -1px rgba(15, 76, 58, 0.15), 0 2px 4px -1px rgba(15, 76, 58, 0.1)',
  lg: '0 10px 15px -3px rgba(15, 76, 58, 0.15), 0 4px 6px -2px rgba(15, 76, 58, 0.1)',
  xl: '0 20px 25px -5px rgba(15, 76, 58, 0.15), 0 10px 10px -5px rgba(15, 76, 58, 0.1)',
} as const;

// Transitions
export const transitions = {
  fast: '150ms ease-in-out',
  default: '200ms ease-in-out',
  slow: '300ms ease-in-out',
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Component-specific constants
export const button = {
  height: {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
  },
  padding: {
    sm: '0.5rem 1rem',
    md: '0.75rem 1.5rem',
    lg: '1rem 2rem',
  },
} as const;

export const input = {
  height: {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
  },
} as const;

// Site-specific constants
export const site = {
  name: 'Montana Finish Carpenter',
  location: 'Somers, Montana',
  phone: '(406) 555-0123',
  email: 'info@montanafinishcarpenter.com',
  businessHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
} as const;