/**
 * 1RM Calculation Constants
 */

import type { Formula, FormulaType } from '~/types'

/**
 * Available 1RM calculation formulas
 */
export const FORMULAS: Record<FormulaType, Formula> = {
  brzycki: {
    id: 'brzycki',
    name: 'Brzycki',
    description: 'Most accurate for reps ≤ 10. Formula: weight / (1.0278 - 0.0278 × reps)',
    formula: 'weight / (1.0278 - 0.0278 × reps)',
  },
  epley: {
    id: 'epley',
    name: 'Epley',
    description: 'Popular and widely used. Formula: weight × (1 + reps / 30)',
    formula: 'weight × (1 + reps / 30)',
  },
  lombardi: {
    id: 'lombardi',
    name: 'Lombardi',
    description: 'Good for powerlifting. Formula: weight × reps^0.10',
    formula: 'weight × reps^0.10',
  },
  mayhew: {
    id: 'mayhew',
    name: 'Mayhew et al.',
    description: 'Accurate for higher rep ranges. Formula: weight × (100 / (52.2 + 41.9 × e^(-0.055 × reps)))',
    formula: 'weight × (100 / (52.2 + 41.9 × e^(-0.055 × reps)))',
  },
  oconer: {
    id: 'oconer',
    name: "O'Conner et al.",
    description: 'Good for general strength training. Formula: weight × (1 + reps / 40)',
    formula: 'weight × (1 + reps / 40)',
  },
  wathan: {
    id: 'wathan',
    name: 'Wathan',
    description: 'Accurate across various rep ranges. Formula: weight × (100 / (48.8 + 53.8 × e^(-0.075 × reps)))',
    formula: 'weight × (100 / (48.8 + 53.8 × e^(-0.075 × reps)))',
  },
}

/**
 * Default formula
 */
export const DEFAULT_FORMULA: FormulaType = 'brzycki'

/**
 * Percentage multipliers for different rep maxes
 * These represent the percentage of 1RM that can be lifted for each rep range
 */
export const REP_PERCENTAGES: Record<number, number> = {
  1: 1.0,    // 100% of 1RM
  2: 0.95,   // 95% of 1RM
  3: 0.93,   // 93% of 1RM
  4: 0.9,    // 90% of 1RM
  5: 0.87,   // 87% of 1RM
  6: 0.85,   // 85% of 1RM
  7: 0.83,   // 83% of 1RM
  8: 0.8,    // 80% of 1RM
  9: 0.77,   // 77% of 1RM
  10: 0.75,  // 75% of 1RM
}

/**
 * Default settings for the calculator
 */
export const DEFAULT_SETTINGS = {
  weight: 80,
  reps: 10,
  unit: 'kg' as const,
  formula: DEFAULT_FORMULA,
} as const

/**
 * Get all available formulas as an array
 */
export function getAllFormulas(): Formula[] {
  return Object.values(FORMULAS)
}

