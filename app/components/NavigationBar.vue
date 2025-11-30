<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="navigation-bar">
    <nav class="navbar">
      <!-- Title - always visible -->
      <NuxtLink to="/" class="navbar-title" @click="closeMenu">My1RM Calculator</NuxtLink>

      <!-- Desktop Navigation - visible on larger screens -->
      <div class="navbar-links desktop-only">
        <NuxtLink to="/about" class="navbar-item">About</NuxtLink>
        <NuxtLink to="/contact" class="navbar-item">Contact</NuxtLink>
        <NuxtLink to="/privacy" class="navbar-item">Privacy Policy</NuxtLink>
      </div>

      <!-- Burger Menu Button - visible on mobile -->
      <button class="burger-button mobile-only" @click="toggleMenu" :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu">
        <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
        <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
        <span class="burger-line" :class="{ 'open': isMenuOpen }"></span>
      </button>

      <!-- Mobile Menu - slides in from the side -->
      <div class="mobile-menu" :class="{ 'open': isMenuOpen }" @click="closeMenu">
        <div class="mobile-menu-content" @click.stop>
          <NuxtLink to="/about" class="mobile-menu-item" @click="closeMenu">About</NuxtLink>
          <NuxtLink to="/contact" class="mobile-menu-item" @click="closeMenu">Contact</NuxtLink>
          <NuxtLink to="/privacy" class="mobile-menu-item" @click="closeMenu">Privacy Policy</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
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
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
}

.navbar-title {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.25rem;
  white-space: nowrap;

  &:hover {
    animation: pulse 1s infinite;
  }

  &.router-link-active,
  &.router-link-exact-active {
    color: #007bff;
  }
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.navbar-item {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    animation: pulse 1s infinite;
  }

  &.router-link-active,
  &.router-link-exact-active {
    color: #007bff;
    font-size: 1.1rem;
  }
}

/* Burger Menu Button */
.burger-button {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.burger-line {
  width: 100%;
  height: 3px;
  background-color: #2c3e50;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;

  &:nth-child(1) {
    transform: translateY(0);
  }

  &:nth-child(2) {
    opacity: 1;
  }

  &:nth-child(3) {
    transform: translateY(0);
  }

  &.open {
    &:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  }
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.open {
    opacity: 1;
    visibility: visible;
  }
}

.mobile-menu-content {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  max-width: 80%;
  height: 100vh;
  background-color: #f8f9fa;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 4rem 2rem 2rem;
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 1001;
}

.mobile-menu.open .mobile-menu-content {
  right: 0;
}

.mobile-menu-item {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid #e9ecef;
  font-size: 1.1rem;

  &:hover {
    color: #007bff;
  }

  &.router-link-active,
  &.router-link-exact-active {
    color: #007bff;
    font-size: 1.2rem;
  }
}

/* Responsive Design */
.mobile-only {
  display: none;
}

.desktop-only {
  display: flex;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    justify-content: center;
    position: relative;
  }

  .mobile-only {
    display: flex;
  }

  .desktop-only {
    display: none;
  }

  .navbar-title {
    font-size: 1.1rem;
  }

  .burger-button {
    position: absolute;
    right: 1rem;
  }
}
</style>
