/**
 * Shared type definitions for the application
 */

export type WeightUnit = 'kg' | 'lbs'

export type FormulaType = 'brzycki' | 'epley' | 'lombardi' | 'mayhew' | 'oconer' | 'wathan'

export interface CalculatorSettings {
  weight: number
  reps: number
  unit: WeightUnit
  formula?: FormulaType
}

export interface RepRange {
  reps: number
  percentage: number
}

export interface Formula {
  id: FormulaType
  name: string
  description: string
  formula: string
}

