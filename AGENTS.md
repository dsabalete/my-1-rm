# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is a Nuxt 4 Vue.js application for calculating 1RM (One Rep Max) in weightlifting. The app uses TypeScript, Pinia for state management, and Bootstrap for styling.

## Build & Development Commands

### Core Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run generate` - Generate static site
- `bun run preview` - Preview production build
- `bun run cleanup` - Clean Nuxt cache
- `bun run clean:all` - Full cleanup including node_modules

### Testing
This project does not currently have a test suite configured. When adding tests, use Vitest with Vue Test Utils.

### Linting & Type Checking
- ESLint is configured with Vue 3 and Standard rules
- Run `bun run lint` (if available) or use IDE integration
- TypeScript checking is handled by Nuxt/Vue

## Code Style Guidelines

### File Structure
- Use the `app/` directory structure for Nuxt 4
- Components in `app/components/`
- Pages in `app/pages/`
- Composables in `app/composables/`
- Stores in `app/stores/`
- Types in `app/types/`
- Constants in `app/constants/`

### Import Conventions
```typescript
// Vue/Nuxt imports first
import { ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'

// Internal imports with ~ alias
import { calculate1RM } from '~/composables/use1RM'
import type { FormulaType } from '~/types'
import { DEFAULT_FORMULA } from '~/constants/1rm'

// External libraries last
import { SomeLibrary } from 'some-library'
```

### TypeScript Guidelines
- Use strict typing everywhere
- Define interfaces for all objects
- Use type aliases for simple types
- Export types from `app/types/index.ts`
- Use JSDoc comments for functions with parameters

```typescript
// Good
export interface CalculatorState {
  rm1: number
  unit: WeightUnit
  formula: FormulaType
}

// Function with JSDoc
/**
 * Calculate 1RM using the specified formula
 * @param weight - The weight lifted
 * @param reps - The number of repetitions performed
 * @param formula - The formula type to use
 * @returns The calculated 1RM value
 */
export function calculate1RM(weight: number, reps: number, formula: FormulaType): number
```

### Vue Component Guidelines
- Use Composition API with `<script setup lang="ts">`
- Define props and emits interfaces
- Use reactive refs for primitive values
- Use computed for derived values
- Use watch for side effects

```vue
<script setup lang="ts">
import type { FormulaType } from '~/types'

interface Props {
  initialFormula: FormulaType
}

const props = defineProps<Props>()
const emit = defineEmits<{
  formulaChange: [formula: FormulaType]
}>()

const formula = ref<FormulaType>(props.initialFormula)
</script>
```

### Pinia Store Guidelines
- Use defineStore with TypeScript
- Define state interface
- Use actions for mutations
- Use getters for derived state
- Export store from `app/stores/`

```typescript
export interface CalculatorState {
  rm1: number
  unit: WeightUnit
  formula: FormulaType
}

export const useCalculatorStore = defineStore('calculator', {
  state: (): CalculatorState => ({
    rm1: 0,
    unit: 'kg',
    formula: DEFAULT_FORMULA,
  }),
  // ...
})
```

### Naming Conventions
- Components: PascalCase (e.g., `Calculator.vue`)
- Files: kebab-case for utilities, camelCase for composables
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Functions: camelCase with descriptive names
- Types: PascalCase for interfaces, camelCase for type aliases

### CSS/SCSS Guidelines
- Use scoped styles in components
- Follow Bootstrap conventions
- Use CSS custom properties for theming
- Keep styles minimal and component-focused

```vue
<style lang="css" scoped>
.calculator {
  .form-group {
    margin-bottom: 2rem;
  }
}
</style>
```

### Error Handling
- Return early from functions on invalid input
- Use try-catch for async operations
- Validate user inputs
- Provide fallback values

```typescript
export function calculate1RM(weight: number, reps: number, formula: FormulaType): number {
  if (reps <= 0 || weight <= 0) {
    return 0
  }
  
  // ... calculation logic
}
```

### Constants & Configuration
- Define constants in `app/constants/`
- Use DEFAULT_ prefix for default values
- Export constants individually and in groups

```typescript
// app/constants/1rm.ts
export const DEFAULT_FORMULA: FormulaType = 'brzycki'
export const DEFAULT_SETTINGS = {
  weight: 100,
  reps: 5,
  unit: 'kg' as WeightUnit,
  formula: DEFAULT_FORMULA,
}
```

## Environment & Runtime
- Uses Bun as package manager
- Nuxt 4 with SSR enabled
- Netlify deployment preset
- Runtime config for environment variables

## Analytics & Tracking
- Google Tag Manager integration
- Custom analytics composable
- Track calculation and settings events

## Development Notes
- The app uses the `~` alias for the app directory
- Bootstrap is integrated via usebootstrap module
- Local storage for user preferences
- Responsive design required
- SEO optimization with meta tags