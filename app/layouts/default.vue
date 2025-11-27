<script setup lang="ts">
const config = useRuntimeConfig()
const version = config.public.version
</script>

<template>
  <div class="layout-default">
    <NavigationBar />
    <p class="app-hint">Calculate your 1 Repetition Maximum (1RM) for any exercise.</p>
    <slot />
    <p class="version-hint">Version: {{ version }}</p>
  </div>
</template>

<style lang="postcss" scoped>
.layout-default {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;

  .app-hint {
    text-align: center;
    margin: 2rem 0 0;
  }

  .version-hint {
    text-align: center;
    margin: 2rem 0;
    font-size: 0.875rem;
    color: #6c757d;
  }
}
</style>
