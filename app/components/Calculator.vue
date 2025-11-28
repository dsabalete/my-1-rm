<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useCalculatorStore } from '~/stores/calculator'
import { useLocalStorage } from '~/composables/useLocalStorage'
import { useAnalytics } from '~/composables/useAnalytics'
import { DEFAULT_SETTINGS, getAllFormulas } from '~/constants/1rm'
import type { FormulaType } from '~/types'

const store = useCalculatorStore()
const { saveSettings: saveToLocalStorage, loadSettings } = useLocalStorage()
const analytics = useAnalytics()

const weight = ref<number>(DEFAULT_SETTINGS.weight)
const reps = ref<number>(DEFAULT_SETTINGS.reps)
const unit = ref<'kg' | 'lbs'>(DEFAULT_SETTINGS.unit)
const formula = ref<FormulaType>(DEFAULT_SETTINGS.formula)

const formulas = getAllFormulas()

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
  store.updateFormula(formula.value)
  store.update1RM(weightInKg, reps.value, formula.value)

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
    formula: formula.value,
  })

  // Track settings save event
  analytics.trackSettingsSave(weight.value, reps.value)
}

// Watch for changes and recalculate
watch([weight, reps, unit, formula], () => {
  store.updateUnit(unit.value)
  store.updateFormula(formula.value)
  calculate()
}, { immediate: false })

onMounted(() => {
  const settings = loadSettings()
  weight.value = settings.weight
  reps.value = settings.reps
  unit.value = settings.unit
  formula.value = settings.formula || DEFAULT_SETTINGS.formula
  store.updateUnit(unit.value)
  store.updateFormula(formula.value)
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
    <div class="form-group">
      <label for="formula">Formula</label>
      <select id="formula" class="form-control" v-model="formula">
        <option v-for="formulaOption in formulas" :key="formulaOption.id" :value="formulaOption.id">
          {{ formulaOption.name }}
        </option>
      </select>
      <small class="form-text text-muted" v-if="formulas.find((f: { id: FormulaType }) => f.id === formula)">
        {{formulas.find((f: { id: FormulaType }) => f.id === formula)?.description}}
      </small>
    </div>
    <button class="btn btn-primary" @click.prevent="saveSettings">Save default settings</button>
  </div>
</template>

<style lang="css" scoped>
.calculator {
  .form-group {
    margin-bottom: 2rem;
  }

  .form-text {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #6c757d;
  }
}
</style>
