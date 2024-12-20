<template>
  <div id="app">
    <NuxtLayout>
      <NavigationBar />
      <p class="app-hint">Calculate your 1 Repetition Maximum (1RM) for any exercise.</p>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;

  .app-hint {
    text-align: center;
    margin: 2rem 0 0;
  }
}
</style>
