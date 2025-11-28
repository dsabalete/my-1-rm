/**
 * Shared type definitions for the application
 */

export type WeightUnit = 'kg' | 'lbs'

export interface CalculatorSettings {
  weight: number
  reps: number
  unit: WeightUnit
}

export interface RepRange {
  reps: number
  percentage: number
}

