import { DEFAULT_SETTINGS, FORMULAS } from '~/constants/1rm'
import type { CalculatorSettings } from '~/types'

const STORAGE_KEY = 'defaultState'

/**
 * Composable for managing calculator settings in localStorage
 */
export function useLocalStorage() {
  const saveSettings = (settings: CalculatorSettings): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch (error) {
      console.error('Failed to save settings to localStorage:', error)
    }
  }

  const loadSettings = (): CalculatorSettings => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as CalculatorSettings
        // Validate loaded settings
        const isValidUnit = parsed.unit === 'kg' || parsed.unit === 'lbs'
        const isValidFormula = !parsed.formula || parsed.formula in FORMULAS

        if (
          typeof parsed.weight === 'number' &&
          typeof parsed.reps === 'number' &&
          parsed.weight > 0 &&
          parsed.reps > 0 &&
          isValidUnit &&
          isValidFormula
        ) {
          return {
            ...DEFAULT_SETTINGS,
            ...parsed,
            // Ensure formula is set, default if missing or invalid
            formula: (parsed.formula && parsed.formula in FORMULAS)
              ? parsed.formula
              : DEFAULT_SETTINGS.formula,
          }
        }
      }
    } catch (error) {
      console.error('Failed to load settings from localStorage:', error)
    }

    return { ...DEFAULT_SETTINGS }
  }

  return {
    saveSettings,
    loadSettings,
  }
}

