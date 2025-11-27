<script setup lang="ts">
// Home page with calculator and results components
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
