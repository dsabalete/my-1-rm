<template>
  <div id="app">
    <NuxtLayout>
      <NavigationBar />
      <p class="container">Calculate your 1 Repetition Maximum (1RM) for any exercise.</p>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 20px;

  &:hover {
    animation: pulse 1s infinite;
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }
}

#nav a.router-link-exact-active {
  color: #007bff;
  font-size: 20px;
}
</style>
