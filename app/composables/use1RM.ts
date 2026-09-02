import { FORMULAS } from '~/constants/1rm'
import type { FormulaType } from '~/types'

type FormulaFn = (weight: number, reps: number) => number

const FORMULA_IMPLEMENTATIONS: Record<FormulaType, FormulaFn> = {
  brzycki: (weight, reps) => {
    const denominator = 1.0278 - (0.0278 * reps)
    return denominator <= 0 ? 0 : weight / denominator
  },
  epley: (weight, reps) => weight * (1 + reps / 30),
  lombardi: (weight, reps) => weight * Math.pow(reps, 0.10),
  mayhew: (weight, reps) => {
    const denominator = 52.2 + 41.9 * Math.exp(-0.055 * reps)
    return denominator <= 0 ? 0 : weight * (100 / denominator)
  },
  oconer: (weight, reps) => weight * (1 + reps / 40),
  wathan: (weight, reps) => {
    const denominator = 48.8 + 53.8 * Math.exp(-0.075 * reps)
    return denominator <= 0 ? 0 : weight * (100 / denominator)
  },
}

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

  const implementation = FORMULA_IMPLEMENTATIONS[formula] || FORMULA_IMPLEMENTATIONS.brzycki
  return implementation(weight, reps)
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

