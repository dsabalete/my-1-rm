<script setup lang="ts">
import { REP_PERCENTAGES } from '~/constants/1rm'
import { useTransition } from '@vueuse/core'

const store = useCalculatorStore()

/**
 * Animated value for 1RM
 */
const animatedRM1 = useTransition(computed(() => store.rm1), {
  duration: 500,
  easing: 'easeOutExpo',
})

/**
 * Convert kilograms to pounds
 */
const kgToLb = (kg: number): number => {
  return kg * 2.20462
}

/**
 * Format weight value with no decimals in the selected unit
 * Note: value is always in kg internally, we convert for display
 */
const formatWeight = (valueInKg: number): string => {
  if (store.unit === 'lbs') {
    const lbs = kgToLb(valueInKg).toFixed(0)
    return `${lbs} lbs`
  } else {
    const kg = valueInKg.toFixed(0)
    return `${kg} kg`
  }
}

/**
 * Get sorted rep percentages for display (excluding 1RM which is shown separately)
 */
const repRanges = computed(() => {
  return Object.entries(REP_PERCENTAGES)
    .map(([reps, percentage]) => ({
      reps: Number.parseInt(reps, 10),
      percentage,
    }))
    .filter((range) => range.reps > 1) // Exclude 1RM as it's shown separately
    .sort((a, b) => a.reps - b.reps)
})

/**
 * Calculate weight for a specific rep range
 */
const calculateRepWeight = (percentage: number): number => {
  return animatedRM1.value * percentage
}
</script>

<template>
  <div v-if="store.hasValidRM" class="result">
    <h2 class="text-center">{{ store.selectedExerciseName }} 1RM: {{ formatWeight(animatedRM1) }}</h2>
    <div class="rep-grid">
      <div v-for="range in repRanges" :key="range.reps" class="rep-card">
        <span class="rep-label">{{ range.reps }}RM</span>
        <span class="rep-value">{{ formatWeight(calculateRepWeight(range.percentage)) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.result {
  margin: 30px 0;

  h2 {
    color: #007bff;
    margin-bottom: 2rem;
  }

  .rep-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .rep-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .rep-label {
      display: block;
      font-size: 0.875rem;
      color: #6c757d;
      margin-bottom: 0.25rem;
      text-transform: uppercase;
      font-weight: 600;
    }

    .rep-value {
      display: block;
      font-size: 1.25rem;
      font-weight: 700;
      color: #212529;
    }
  }
}
</style>
