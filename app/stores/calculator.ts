import { defineStore } from 'pinia'
import { calculate1RM } from '~/composables/use1RM'
import type { WeightUnit, FormulaType, HistoryEntry, WeightHistory } from '~/types'
import { DEFAULT_FORMULA } from '~/constants/1rm'
import { useStorage } from '@vueuse/core'

export interface CalculatorState {
  rm1: number
  unit: WeightUnit
  formula: FormulaType
  history: WeightHistory
}

export const useCalculatorStore = defineStore('calculator', {
  state: (): CalculatorState => ({
    rm1: 0,
    unit: 'kg',
    formula: DEFAULT_FORMULA,
    history: useStorage<WeightHistory>('weight-history', []),
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
     * Save current calculation to history
     * @param weight - The weight lifted
     * @param reps - The number of repetitions performed
     * @param unit - The weight unit used
     */
    saveToHistory(weight: number, reps: number, unit: WeightUnit): void {
      if (this.rm1 <= 0) return

      const entry: HistoryEntry = {
        id: crypto.randomUUID(),
        weight,
        reps,
        unit,
        rm1: this.rm1,
        formula: this.formula,
        date: new Date().toISOString(),
      }

      this.history.unshift(entry)
    },

    /**
     * Remove a record from history
     * @param id - The ID of the entry to remove
     */
    removeFromHistory(id: string): void {
      this.history = this.history.filter(entry => entry.id !== id)
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

