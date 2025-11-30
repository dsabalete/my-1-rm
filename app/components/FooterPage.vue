<script setup lang="ts">
const config = useRuntimeConfig()
const version = config.public.version
</script>

<template>
  <footer class="footer-page">
    <BuyMeACoffeeButton />
    <div class="version-hint">Version: {{ version }}</div>
  </footer>
</template>

<style lang="css" scoped>
.footer-page {
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;

  .version-hint {
    text-align: center;
    align-self: center;
    margin: 0;
    font-size: 0.875rem;
    color: #6c757d;
  }
}
</style>
