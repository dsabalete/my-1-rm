<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Calculator = defineAsyncComponent(() => import('../components/Calculator.vue'))
const ResultsRM = defineAsyncComponent(() => import('../components/ResultsRM.vue'))
</script>

<template>
  <div class="home-page">
    <Calculator />
    <ResultsRM />
  </div>
</template>

<style lang="postcss" scoped>
.home-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    border: 1px solid #ccc;
    border-radius: 5px;

  }

}
</style>
