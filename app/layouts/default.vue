<script setup lang="ts">
const config = useRuntimeConfig()
const version = config.public.version

useHead({
  script: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4974553432355085',
      async: true,
      crossorigin: 'anonymous'
    },
  ],
})
</script>

<template>
  <div class="layout-default">
    <header>
      <NavigationBar />
    </header>
    <main>
      <p class="app-hint">Calculate your 1 Repetition Maximum (1RM) for any exercise.</p>
      <slot />
    </main>
    <footer>
      <div class="footer-content">
        <BuyMeACoffeeButton />
        <div class="version-hint">Version: {{ version }}</div>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
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

  footer {
    margin-top: 3rem;
    padding: 2rem 0;
    border-top: 1px solid #e9ecef;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .buy-me-coffee {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .version-hint {
    text-align: center;
    margin: 0;
    font-size: 0.875rem;
    color: #6c757d;
  }
}
</style>
