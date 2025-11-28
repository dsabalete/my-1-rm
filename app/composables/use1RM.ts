import { FORMULAS } from '~/constants/1rm'
import type { FormulaType } from '~/types'

/**
 * Calculate 1RM using the specified formula
 * 
 * @param weight - The weight lifted
 * @param reps - The number of repetitions performed
 * @param formula - The formula type to use (default: 'brzycki')
 * @returns The calculated 1RM value
 */
export function calculate1RM(weight: number, reps: number, formula: FormulaType = 'brzycki'): number {
  if (reps <= 0 || weight <= 0) {
    return 0
  }

  switch (formula) {
    case 'brzycki':
      // Formula: 1RM = weight / (1.0278 - (0.0278 * reps))
      const denominator = 1.0278 - (0.0278 * reps)
      if (denominator <= 0) {
        return 0
      }
      return weight / denominator

    case 'epley':
      // Formula: 1RM = weight × (1 + reps / 30)
      return weight * (1 + reps / 30)

    case 'lombardi':
      // Formula: 1RM = weight × reps^0.10
      return weight * Math.pow(reps, 0.10)

    case 'mayhew':
      // Formula: 1RM = weight × (100 / (52.2 + 41.9 × e^(-0.055 × reps)))
      const mayhewDenominator = 52.2 + 41.9 * Math.exp(-0.055 * reps)
      if (mayhewDenominator <= 0) {
        return 0
      }
      return weight * (100 / mayhewDenominator)

    case 'oconer':
      // Formula: 1RM = weight × (1 + reps / 40)
      return weight * (1 + reps / 40)

    case 'wathan':
      // Formula: 1RM = weight × (100 / (48.8 + 53.8 × e^(-0.075 × reps)))
      const wathanDenominator = 48.8 + 53.8 * Math.exp(-0.075 * reps)
      if (wathanDenominator <= 0) {
        return 0
      }
      return weight * (100 / wathanDenominator)

    default:
      // Fallback to Brzycki
      const defaultDenominator = 1.0278 - (0.0278 * reps)
      if (defaultDenominator <= 0) {
        return 0
      }
      return weight / defaultDenominator
  }
}

/**
 * Get formula information
 */
export function getFormula(formula: FormulaType) {
  return FORMULAS[formula]
}

/**
 * Get all available formulas
 */
export function getAllFormulas() {
  return Object.values(FORMULAS)
}

