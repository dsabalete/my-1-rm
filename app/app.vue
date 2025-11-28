<script setup lang="ts">
// Default SEO settings for the entire app
useSeoMeta({
  // These can be overridden by individual pages
  titleTemplate: '%s | My 1RM Calculator',
  description: 'Free online 1RM calculator to determine your one repetition maximum using the Brzycki formula. Calculate your 1RM safely for weightlifting and strength training.',
  ogType: 'website',
  ogSiteName: 'My 1RM Calculator',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
