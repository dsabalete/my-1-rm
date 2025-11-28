<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useCalculatorStore } from '~/stores/calculator'
import { useLocalStorage } from '~/composables/useLocalStorage'
import { useAnalytics } from '~/composables/useAnalytics'
import { DEFAULT_SETTINGS } from '~/constants/1rm'

const store = useCalculatorStore()
const { saveSettings: saveToLocalStorage, loadSettings } = useLocalStorage()
const analytics = useAnalytics()

const weight = ref<number>(DEFAULT_SETTINGS.weight)
const reps = ref<number>(DEFAULT_SETTINGS.reps)
const unit = ref<'kg' | 'lbs'>(DEFAULT_SETTINGS.unit)

/**
 * Convert pounds to kilograms
 */
const lbsToKg = (lbs: number): number => {
  return lbs / 2.20462
}

/**
 * Convert weight to kg for calculation (1RM is always stored in kg internally)
 */
const getWeightInKg = (): number => {
  return unit.value === 'lbs' ? lbsToKg(weight.value) : weight.value
}

const calculate = (): void => {
  const weightInKg = getWeightInKg()
  store.update1RM(weightInKg, reps.value)

  // Track calculation event
  if (store.rm1 > 0) {
    analytics.trackCalculation(weight.value, reps.value, store.rm1)
  }
}

const saveSettings = (): void => {
  saveToLocalStorage({
    weight: weight.value,
    reps: reps.value,
    unit: unit.value,
  })

  // Track settings save event
  analytics.trackSettingsSave(weight.value, reps.value)
}

// Watch for changes and recalculate
watch([weight, reps, unit], () => {
  store.updateUnit(unit.value)
  calculate()
}, { immediate: false })

onMounted(() => {
  const settings = loadSettings()
  weight.value = settings.weight
  reps.value = settings.reps
  unit.value = settings.unit
  store.updateUnit(unit.value)
  calculate()
})
</script>

<template>
  <div class="calculator">
    <form class="row">
      <div class="form-group col-sm">
        <label for="weight">Weight ({{ unit }})</label>
        <input type="number" id="weight" class="form-control" v-model="weight" :placeholder="`Weight in ${unit}`">
      </div>
      <div class="form-group col-sm">
        <label for="reps">Reps</label>
        <input type="number" id="reps" class="form-control" v-model="reps" placeholder="Max reps">
      </div>
      <div class="form-group col-sm">
        <label for="unit">Unit</label>
        <select id="unit" class="form-control" v-model="unit">
          <option value="kg">Kilograms (kg)</option>
          <option value="lbs">Pounds (lbs)</option>
        </select>
      </div>
    </form>
    <button class="btn btn-primary" @click.prevent="saveSettings">Save default settings</button>
  </div>
</template>

<style lang="css" scoped>
.calculator {
  .form-group {
    margin-bottom: 2rem;
  }
}
</style>
