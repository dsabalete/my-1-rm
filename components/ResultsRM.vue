<template>
  <div class="result" v-if="store.rm1 != 0">
    <h2>1RM: {{ twoDecimals(store.rm1) }}</h2>
    <h4>2RM: {{ twoDecimals(store.rm1 * .95) }}</h4>
    <h4>3RM: {{ twoDecimals(store.rm1 * .93) }}</h4>
    <h4>4RM: {{ twoDecimals(store.rm1 * .9) }}</h4>
    <h4>5RM: {{ twoDecimals(store.rm1 * .87) }}</h4>
    <h4>6RM: {{ twoDecimals(store.rm1 * .85) }}</h4>
    <h4>7RM: {{ twoDecimals(store.rm1 * .83) }}</h4>
    <h4>8RM: {{ twoDecimals(store.rm1 * .8) }}</h4>
    <h4>9RM: {{ twoDecimals(store.rm1 * 0.77) }}</h4>
    <h4>10RM: {{ twoDecimals(store.rm1 * 0.75) }}</h4>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../store'

const store = useMainStore()

function twoDecimals(value: number): string {
  return value.toFixed(0) + ' Kg'
}
</script>

<style scoped>
.result {
  margin: 30px;
}
</style>
