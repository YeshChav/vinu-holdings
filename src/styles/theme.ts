// 🎨 SINGLE SOURCE OF TRUTH FOR THEME CONFIGURATION
// Update theme settings here and they change everywhere!

import { COLORS, VENTURE_COLORS, SITE_COLORS } from './colors';

export const THEME = {
  // Color Schemes
  colors: {
    site: SITE_COLORS,
    ventures: VENTURE_COLORS,
    palette: COLORS
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Times New Roman', 'serif'],
      mono: ['Fira Code', 'monospace']
    },
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
      '6xl': '3.75rem'
    }
  },

  // Spacing
  spacing: {
    section: {
      py: 'py-16 sm:py-20 md:py-24',
      px: 'px-4 sm:px-6 lg:px-8'
    },
    container: {
      maxWidth: 'max-w-7xl mx-auto'
    }
  },

  // Shadows
  shadows: {
    card: 'shadow-lg hover:shadow-xl',
    button: 'shadow-md hover:shadow-lg',
    navigation: 'shadow-sm'
  },

  // Border Radius
  borderRadius: {
    card: 'rounded-xl',
    button: 'rounded-lg',
    input: 'rounded-md'
  },

  // Transitions
  transitions: {
    default: 'transition-all duration-300 ease-in-out',
    fast: 'transition-all duration-150 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out'
  }
} as const;
