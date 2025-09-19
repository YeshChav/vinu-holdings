# Vinu Holdings - Project Structure

This document outlines the organized folder structure for the Vinu Holdings project to ensure scalability and maintainability.

## 📁 Folder Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── strategic-investments/    # Strategic Investments page
│   ├── cafe-ventures/           # Café Ventures page
│   ├── real-estate/             # Real Estate page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   └── Navigation.tsx       # Main navigation
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # Hero section component
│   │   └── Footer.tsx           # Footer component
│   └── ui/                      # UI components
│       ├── Button.tsx           # Button component
│       ├── Card.tsx             # Card component
│       └── Section.tsx          # Section wrapper
│
├── lib/                         # Utility libraries
│   └── utils.ts                 # Utility functions
│
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Main types
│
├── constants/                   # Application constants
│   └── index.ts                 # Constants and configuration
│
├── hooks/                       # Custom React hooks
│   └── (future custom hooks)
│
└── utils/                       # Utility functions
    └── (future utility files)
```

## 🎯 Design Principles

### 1. **Separation of Concerns**

- **Pages** (`app/`): Route-specific components and layouts
- **Components** (`components/`): Reusable UI components
- **Business Logic** (`lib/`, `utils/`): Pure functions and utilities
- **Data** (`constants/`, `types/`): Static data and type definitions

### 2. **Component Organization**

- **Layout Components**: Navigation, headers, footers
- **Section Components**: Large page sections (hero, features, etc.)
- **UI Components**: Small, reusable components (buttons, cards, etc.)

### 3. **Scalability**

- Easy to add new pages in `app/`
- Easy to add new components in appropriate folders
- Clear import paths with `@/` alias
- Consistent naming conventions

## 📝 Naming Conventions

### Files and Folders

- **kebab-case** for folders: `cafe-ventures/`
- **PascalCase** for components: `Navigation.tsx`
- **camelCase** for utilities: `utils.ts`

### Components

- **PascalCase** for component names
- **Descriptive names**: `HeroSection`, `InvestmentCard`
- **Consistent exports**: Default export for main component

### Types

- **PascalCase** for interfaces: `NavItem`, `Venture`
- **Descriptive names**: `ContactForm`, `InvestmentData`

## 🔧 Import Guidelines

### Use Path Aliases

```typescript
// ✅ Good - Use @/ alias
import Navigation from "@/components/layout/Navigation";
import { VENTURES } from "@/constants";

// ❌ Bad - Relative imports
import Navigation from "../../../components/layout/Navigation";
```

### Import Order

1. React and Next.js imports
2. Third-party libraries
3. Internal components (using @/ alias)
4. Types and constants
5. Relative imports (if needed)

## 🚀 Adding New Features

### New Page

1. Create folder in `app/`
2. Add `page.tsx` file
3. Import shared components from `@/components/`

### New Component

1. Determine category (layout, sections, ui)
2. Create component in appropriate folder
3. Export from component file
4. Import using `@/components/` path

### New Utility

1. Add to `lib/utils.ts` or create new file in `lib/`
2. Export function
3. Import using `@/lib/` path

## 📋 Best Practices

1. **Keep components small and focused**
2. **Use TypeScript for all new files**
3. **Follow consistent naming conventions**
4. **Document complex components**
5. **Use path aliases for clean imports**
6. **Separate business logic from UI components**
7. **Keep constants and types organized**

## 🔄 Future Enhancements

- Add `hooks/` for custom React hooks
- Add `services/` for API calls
- Add `store/` for state management
- Add `assets/` for images and icons
- Add `styles/` for component-specific styles
