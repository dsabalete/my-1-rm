<template>
  <div class="home">
    <app-calculator></app-calculator>
    <app-results></app-results>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'
import ResultsRM from '@/components/ResultsRM.vue'

export default {
  name: 'home',
  components: {
    appCalculator: Calculator,
    appResults: ResultsRM
  }
}
</script>
