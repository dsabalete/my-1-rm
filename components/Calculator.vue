<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMainStore } from '../store'

const store = useMainStore()
const weight = ref(80)
const reps = ref(0)

function calculate() {
  store.updateValue(weight.value, reps.value)
}

function saveSettings() {
  const settings = JSON.stringify({ weight: weight.value, reps: reps.value })
  localStorage.setItem('defaultState', settings)
}

onMounted(() => {
  const defaultState = JSON.parse(localStorage.getItem('defaultState') || '{"weight": 80, "reps": 10}')
  weight.value = defaultState.weight
  reps.value = defaultState.reps
  calculate()
})
</script>

<template>
  <div class="calculator">
    <form class="row">
      <div class="form-group col-sm">
        <label for="weight">Weight</label>
        <input type="number" id="weight" class="form-control" v-model="weight" @input="calculate" placeholder="Weight">
      </div>
      <div class="form-group col-sm">
        <label for="reps">Reps</label>
        <input type="number" id="reps" class="form-control" v-model="reps" @input="calculate" placeholder="Max reps">
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
