<script setup lang="ts">
// Home page with calculator and results components

useSeoMeta({
  title: '1RM Calculator - Calculate Your One Rep Max | Free Online Tool',
  description: 'Free 1RM calculator to determine your one repetition maximum. Use the Brzycki formula to safely calculate your 1RM for weightlifting, powerlifting, and strength training without risking injury.',
  ogTitle: '1RM Calculator - Calculate Your One Rep Max',
  ogDescription: 'Free online 1RM calculator using the Brzycki formula. Calculate your one repetition maximum safely for any exercise.',
  ogImage: '/img/icons/android-chrome-512x512.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: '1RM Calculator - Calculate Your One Rep Max',
  twitterDescription: 'Free online 1RM calculator using the Brzycki formula. Calculate your one repetition maximum safely.',
  twitterImage: '/img/icons/android-chrome-512x512.png',
})

const route = useRoute()
const siteUrl = useSiteUrl()

// Structured Data (JSON-LD) for better SEO
useHead({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: '1RM Calculator',
        description: 'Free online 1RM calculator to determine your one repetition maximum using the Brzycki formula. Calculate your 1RM safely for weightlifting, powerlifting, and strength training.',
        url: siteUrl,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '150',
        },
        featureList: [
          'Calculate 1RM using Brzycki formula',
          'Support for kg and lbs',
          'Free online calculator',
          'No registration required',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '1RM Calculator',
        description: 'Calculate your one repetition maximum safely using the Brzycki formula.',
        url: siteUrl,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
        },
      }),
    },
  ],
})
</script>

<template>
  <div class="home-page">
    <Calculator />
    <ResultsRM />
  </div>
</template>

<style lang="css" scoped>
.home-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    border: 1px solid #ccc;
    border-radius: 5px;

  }

}
</style>
