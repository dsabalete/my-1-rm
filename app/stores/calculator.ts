import { defineStore } from 'pinia'
import { calculate1RM } from '~/composables/use1RM'
import type { WeightUnit, FormulaType, HistoryEntry, WeightHistory, ExerciseProfile } from '~/types'
import { DEFAULT_FORMULA } from '~/constants/1rm'
import { useStorage } from '@vueuse/core'

export interface CalculatorState {
  rm1: number
  unit: WeightUnit
  formula: FormulaType
  exerciseId: string
  history: WeightHistory
}

export const COMMON_EXERCISES: ExerciseProfile[] = [
  { id: 'bench-press', name: 'Bench Press' },
  { id: 'bulgarian-squat', name: 'Bulgarian Split Squat' },
  { id: 'deadlift', name: 'Deadlift' },
  { id: 'dumbbell-incline-press', name: 'Dumbbell Incline Press' },
  { id: 'dumbbell-stiff-leg-deadlift', name: 'Dumbbell Stiff Leg Deadlift' },
  { id: 'leg-press', name: 'Leg Press' },
  { id: 'overhead-press', name: 'Overhead Press' },
  { id: 'seated-row', name: 'Seated Row' },
  { id: 'squat', name: 'Squat' },
  { id: 'y-pulldown', name: 'Y Pulldown' },
  { id: 'custom', name: 'Custom / Other' },
]

export const useCalculatorStore = defineStore('calculator', {
  state: (): CalculatorState => ({
    rm1: 0,
    unit: 'kg',
    formula: DEFAULT_FORMULA,
    exerciseId: useStorage('calculator-exercise-id', 'bench-press').value,
    history: useStorage<WeightHistory>('weight-history', []).value,
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
        exerciseId: this.exerciseId,
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
     * Update the selected exercise
     * @param id - The exercise profile ID
     */
    updateExercise(id: string): void {
      this.exerciseId = id
    },

    /**
     * Reset the calculator state
     */
    reset(): void {
      this.rm1 = 0
      this.unit = 'kg'
      this.formula = DEFAULT_FORMULA
      this.exerciseId = 'bench-press'
    },
  },

  getters: {
    /**
     * Get the name of the currently selected exercise
     */
    selectedExerciseName: (state): string => {
      const exercise = COMMON_EXERCISES.find(e => e.id === state.exerciseId)
      return exercise ? exercise.name : 'Custom'
    },

    /**
     * Check if a valid 1RM has been calculated
     */
    hasValidRM: (state): boolean => {
      return state.rm1 > 0
    },
  },
})

