<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useCalculatorStore } from '~/stores/calculator'
import { useLocalStorage } from '~/composables/useLocalStorage'
import { DEFAULT_SETTINGS } from '~/constants/1rm'

const store = useCalculatorStore()
const { saveSettings: saveToLocalStorage, loadSettings } = useLocalStorage()

const weight = ref<number>(DEFAULT_SETTINGS.weight)
const reps = ref<number>(DEFAULT_SETTINGS.reps)

const calculate = (): void => {
  store.update1RM(weight.value, reps.value)
}

const saveSettings = (): void => {
  saveToLocalStorage({
    weight: weight.value,
    reps: reps.value,
  })
}

// Watch for changes and recalculate
watch([weight, reps], () => {
  calculate()
}, { immediate: false })

onMounted(() => {
  const settings = loadSettings()
  weight.value = settings.weight
  reps.value = settings.reps
  calculate()
})
</script>

<template>
  <div class="calculator">
    <form class="row">
      <div class="form-group col-sm">
        <label for="weight">Weight</label>
        <input type="number" id="weight" class="form-control" v-model="weight" placeholder="Weight">
      </div>
      <div class="form-group col-sm">
        <label for="reps">Reps</label>
        <input type="number" id="reps" class="form-control" v-model="reps" placeholder="Max reps">
      </div>
    </form>
    <button class="btn btn-primary" @click.prevent="saveSettings">Save default settings</button>
  </div>
</template>

<style lang="postcss" scoped>
.calculator {
  .form-group {
    margin-bottom: 2rem;
  }
}
</style>
