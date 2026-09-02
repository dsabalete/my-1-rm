import { describe, it, expect } from 'vitest'
import { calculate1RM } from '../app/composables/use1RM'

describe('calculate1RM', () => {
  it('should return 0 for non-positive weight or reps', () => {
    expect(calculate1RM(0, 5)).toBe(0)
    expect(calculate1RM(100, 0)).toBe(0)
    expect(calculate1RM(-100, 5)).toBe(0)
    expect(calculate1RM(100, -5)).toBe(0)
  })

  it('should calculate Brzycki correctly (default)', () => {
    // weight: 100, reps: 1 -> 100 / (1.0278 - 0.0278*1) = 100 / 1 = 100
    expect(calculate1RM(100, 1)).toBeCloseTo(100, 1)
    // weight: 100, reps: 5 -> 100 / (1.0278 - 0.0278*5) = 100 / 0.8888 = 112.51
    expect(calculate1RM(100, 5)).toBeCloseTo(112.51, 1)
  })

  it('should calculate Epley correctly', () => {
    // weight: 100, reps: 5 -> 100 * (1 + 5/30) = 100 * 1.1666 = 116.66
    expect(calculate1RM(100, 5, 'epley')).toBeCloseTo(116.67, 1)
  })

  it('should calculate Lombardi correctly', () => {
    // weight: 100, reps: 5 -> 100 * 5^0.10 = 100 * 1.1746 = 117.46
    expect(calculate1RM(100, 5, 'lombardi')).toBeCloseTo(117.46, 1)
  })

  it('should calculate Mayhew correctly', () => {
    // weight: 100, reps: 5 -> 100 * (100 / (52.2 + 41.9 * exp(-0.055 * 5)))
    // 52.2 + 41.9 * 0.7595 = 52.2 + 31.84 = 84.04
    // 100 * (100 / 84.04) = 118.99
    expect(calculate1RM(100, 5, 'mayhew')).toBeCloseTo(118.99, 1)
  })

  it('should calculate OConner correctly', () => {
    // weight: 100, reps: 5 -> 100 * (1 + 5/40) = 100 * 1.125 = 112.5
    expect(calculate1RM(100, 5, 'oconer')).toBeCloseTo(112.5, 1)
  })

  it('should calculate Wathan correctly', () => {
    // weight: 100, reps: 5 -> 100 * (100 / (48.8 + 53.8 * exp(-0.075 * 5)))
    // 48.8 + 53.8 * 0.6872 = 48.8 + 36.97 = 85.77
    // 100 * (100 / 85.77) = 116.58
    expect(calculate1RM(100, 5, 'wathan')).toBeCloseTo(116.58, 1)
  })
})
