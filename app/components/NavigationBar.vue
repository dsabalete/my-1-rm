<script setup lang="ts">
// NavigationBar component for the application
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" class="navbar-item">My1RM Calculator</NuxtLink>
    <NuxtLink to="/about" class="navbar-item">About</NuxtLink>
    <NuxtLink to="/privacy" class="navbar-item">Privacy Policy</NuxtLink>
  </nav>
</template>

<style lang="css" scoped>
@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }
}

.navbar {
  display: flex;

  justify-content: space-around;
  padding: 1rem 0;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 20px;

    &:hover {
      animation: pulse 1s infinite;
    }

    &.router-link-active,
    &.router-link-exact-active {
      color: #007bff;
      font-size: 20px;
    }
  }
}
</style>
