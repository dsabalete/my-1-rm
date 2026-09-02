<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

usePageSeo({
  title: '1RM Calculator - Calculate Your One Repetition Maximum',
  description: 'Free 1RM calculator with multiple formulas (Brzycki, Epley, Lombardi, Mayhew, O\'Conner, Wathan). Calculate your one repetition maximum (1RM) for any exercise safely. Supports kg and lbs. No registration required.',
  path: '/',
  keywords: '1RM calculator, one rep max calculator, Brzycki formula, Epley formula, Lombardi formula, max weight calculator, strength training calculator, 1RM test, weightlifting calculator, multiple 1RM formulas',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: '1RM Calculator',
        description: 'Free 1RM calculator with multiple formulas (Brzycki, Epley, Lombardi, Mayhew, O\'Conner, Wathan). Calculate your one repetition maximum for any exercise safely.',
        url: siteUrl,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: [
          'Calculate 1RM using multiple formulas (Brzycki, Epley, Lombardi, Mayhew, O\'Conner, Wathan)',
          'Support for kg and lbs units',
          'Calculate rep maxes for multiple rep ranges',
          'Save default settings locally',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '1RM Calculator',
        description: 'Free 1RM calculator with multiple formulas (Brzycki, Epley, Lombardi, Mayhew, O\'Conner, Wathan). Calculate your one repetition maximum for any exercise safely.',
        url: siteUrl,
        mainEntity: {
          '@type': 'SoftwareApplication',
          name: '1RM Calculator',
          applicationCategory: 'HealthApplication',
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
