import { defineStore } from 'pinia'
import { calculate1RM } from '~/composables/use1RM'

export interface CalculatorState {
  rm1: number
}

export const useCalculatorStore = defineStore('calculator', {
  state: (): CalculatorState => ({
    rm1: 0,
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
     * Reset the calculator state
     */
    reset(): void {
      this.rm1 = 0
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

