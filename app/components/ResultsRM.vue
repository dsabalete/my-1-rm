<script setup lang="ts">
import { computed } from 'vue'
import { useCalculatorStore } from '~/stores/calculator'
import { REP_PERCENTAGES } from '~/constants/1rm'

const store = useCalculatorStore()

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
  return store.rm1 * percentage
}
</script>

<template>
  <div v-if="store.hasValidRM" class="result">
    <h2>1RM: {{ formatWeight(store.rm1) }}</h2>
    <div v-for="range in repRanges" :key="range.reps" class="rep-result">
      <h4>{{ range.reps }}RM: {{ formatWeight(calculateRepWeight(range.percentage)) }}</h4>
    </div>
  </div>
</template>

<style lang="css" scoped>
.result {
  margin: 30px 0;

  h2 {
    color: #007bff;
    margin-bottom: 1.5rem;
  }

  .rep-result {
    margin-bottom: 0.75rem;

    h4 {
      margin: 0.5rem 0;
      font-weight: 500;
    }
  }
}
</style>
