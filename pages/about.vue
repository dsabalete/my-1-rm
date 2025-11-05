<script setup lang="ts">
// About page explaining the 1RM calculator and Brzycki formula
</script>

<template>
  <div class="about-page">
    <h1>1RM Calculator</h1>
    <p>The 1RM is the maximum weight with which a single repetition of a particular exercise can be done.</p>
    <p>Since often testing what that amount is very risky and very expensive for the central nervous system,
      you can get to know it by applying the Brzycki formula (as long as the number of repetitions is greater
      than 10).</p>
    <p>The purpose of this application is to help calculate the 1RM of any training session.</p>
  </div>
</template>

<style lang="postcss" scoped>
.about-page {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    font-size: 32px;
    color: #007bff;
    margin-bottom: 10px;
  }
}
</style>
