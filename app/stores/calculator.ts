import { defineStore } from 'pinia'
import { calculate1RM } from '~/composables/use1RM'
import type { WeightUnit } from '~/types'

export interface CalculatorState {
  rm1: number
  unit: WeightUnit
}

export const useCalculatorStore = defineStore('calculator', {
  state: (): CalculatorState => ({
    rm1: 0,
    unit: 'kg',
  }),

  actions: {
    /**
     * Update the 1RM value based on weight and reps
     * @param weight - The weight lifted
     * @param reps - The number of repetitions performed
     */
    update1RM(weight: number, reps: number): void {
      this.rm1 = calculate1RM(weight, reps)
    },

    /**
     * Update the unit preference
     * @param unit - The weight unit to use (kg or lbs)
     */
    updateUnit(unit: WeightUnit): void {
      this.unit = unit
    },

    /**
     * Reset the calculator state
     */
    reset(): void {
      this.rm1 = 0
      this.unit = 'kg'
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

