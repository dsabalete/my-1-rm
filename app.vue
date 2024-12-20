<template>
  <div id="app" class="container">
    <NuxtLayout>
      <div id="nav">
        <router-link to="/">1RM</router-link> |
        <router-link to="/about">About</router-link>
      </div>
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
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
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
