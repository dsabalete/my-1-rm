import { defineStore } from 'pinia'
import { calculate1RM } from '~/composables/use1RM'
import type { WeightUnit, FormulaType } from '~/types'
import { DEFAULT_FORMULA } from '~/constants/1rm'

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

  actions: {
    /**
     * Update the 1RM value based on weight and reps
     * @param weight - The weight lifted
     * @param reps - The number of repetitions performed
     * @param formula - The formula to use for calculation
     */
    update1RM(weight: number, reps: number, formula?: FormulaType): void {
      const formulaToUse = formula || this.formula
      this.rm1 = calculate1RM(weight, reps, formulaToUse)
    },

    /**
     * Update the unit preference
     * @param unit - The weight unit to use (kg or lbs)
     */
    updateUnit(unit: WeightUnit): void {
      this.unit = unit
    },

    /**
     * Update the formula preference
     * @param formula - The formula type to use
     */
    updateFormula(formula: FormulaType): void {
      this.formula = formula
    },

    /**
     * Reset the calculator state
     */
    reset(): void {
      this.rm1 = 0
      this.unit = 'kg'
      this.formula = DEFAULT_FORMULA
    },
  },

  getters: {
    /**
     * Check if a valid 1RM has been calculated
     */
    hasValidRM: (state): boolean => {
      return state.rm1 > 0
    },
  },
})

