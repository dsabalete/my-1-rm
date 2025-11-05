<script setup lang="ts">
import { computed } from 'vue'
import { useCalculatorStore } from '~/stores/calculator'
import { REP_PERCENTAGES } from '~/constants/1rm'

const store = useCalculatorStore()

/**
 * Format weight value with no decimals and unit
 */
const formatWeight = (value: number): string => {
  return `${value.toFixed(0)} Kg`
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

<style lang="postcss" scoped>
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
