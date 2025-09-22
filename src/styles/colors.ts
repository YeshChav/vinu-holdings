// 🎨 SINGLE SOURCE OF TRUTH FOR ALL COLORS
// Change colors here and they update everywhere!

export const COLORS = {
  // Primary Brand Colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },

  // Secondary Colors
  secondary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006'
  },

  // Accent Colors
  accent: {
    gold: '#f59e0b',
    amber: '#fbbf24',
    orange: '#f97316',
    emerald: '#10b981',
    indigo: '#6366f1',
    purple: '#8b5cf6'
  },

  // Neutral Colors
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  },

  // Semantic Colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  }
} as const;

// 🎯 VENTURE-SPECIFIC COLOR SCHEMES
export const VENTURE_COLORS = {
  strategic: {
    primary: COLORS.accent.indigo,
    secondary: COLORS.accent.purple,
    accent: COLORS.accent.indigo,
    background: 'from-slate-50 via-gray-50 to-indigo-100'
  },
  cafe: {
    primary: COLORS.secondary[600],
    secondary: COLORS.accent.amber,
    accent: COLORS.accent.gold,
    background: 'from-amber-50 via-yellow-50 to-orange-100'
  },
  realEstate: {
    primary: COLORS.primary[700],
    secondary: COLORS.accent.emerald,
    accent: COLORS.primary[600],
    background: 'from-blue-50 via-sky-50 to-emerald-100'
  }
} as const;

// 🏠 MAIN SITE COLORS
export const SITE_COLORS = {
  background: COLORS.neutral[900], // Changed to black
  foreground: COLORS.accent.gold,  // Changed to gold
  primary: COLORS.accent.gold,     // Changed to gold
  secondary: COLORS.neutral[800],  // Changed to dark gray
  accent: COLORS.accent.amber      // Keep amber as accent
} as const;
