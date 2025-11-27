/**
 * 1RM Calculation Constants
 * Based on Brzycki formula: 1RM = weight / (1.0278 - (0.0278 * reps))
 */

export const BRZYCKI_COEFFICIENT = 1.0278
export const BRZYCKI_MULTIPLIER = 0.0278

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
} as const

