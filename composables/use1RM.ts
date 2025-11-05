import { BRZYCKI_COEFFICIENT, BRZYCKI_MULTIPLIER } from '~/constants/1rm'

/**
 * Calculate 1RM using the Brzycki formula
 * Formula: 1RM = weight / (1.0278 - (0.0278 * reps))
 * 
 * @param weight - The weight lifted
 * @param reps - The number of repetitions performed
 * @returns The calculated 1RM value
 */
export function calculate1RM(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) {
    return 0
  }
  
  // Prevent division by zero or negative values
  const denominator = BRZYCKI_COEFFICIENT - (BRZYCKI_MULTIPLIER * reps)
  if (denominator <= 0) {
    return 0
  }
  
  return weight / denominator
}

