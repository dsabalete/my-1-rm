<script setup lang="ts">
// About page explaining the 1RM calculator and Brzycki formula
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: 'About 1RM Calculator - Brzycki Formula Explained | My1RM',
  meta: [
    {
      name: 'description',
      content: 'Learn about the 1RM (One Repetition Maximum) calculator and the Brzycki formula. Understand how to safely calculate your maximum strength without risking injury.',
    },
    {
      name: 'keywords',
      content: '1RM calculator, Brzycki formula, one rep max, strength training, maximum weight, rep max calculation',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'About 1RM Calculator - Brzycki Formula Explained',
    },
    {
      property: 'og:description',
      content: 'Learn about the 1RM calculator and the Brzycki formula. Understand how to safely calculate your maximum strength.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${siteUrl}/about`,
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: 'About 1RM Calculator - Brzycki Formula Explained',
    },
    {
      name: 'twitter:description',
      content: 'Learn about the 1RM calculator and the Brzycki formula. Understand how to safely calculate your maximum strength.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}/about`,
    },
  ],
})

// Structured data (JSON-LD)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'About 1RM Calculator',
        description: 'Learn about the 1RM calculator and the Brzycki formula. Understand how to safely calculate your maximum strength.',
        url: `${siteUrl}/about`,
        mainEntity: {
          '@type': 'Article',
          headline: 'About 1RM Calculator and Brzycki Formula',
          about: {
            '@type': 'Thing',
            name: '1RM Calculator',
            description: 'A tool to calculate one repetition maximum using the Brzycki formula',
          },
        },
      }),
    },
  ],
})
</script>

<template>
  <article class="about-page">
    <h1>1RM Calculator</h1>
    <p>The 1RM is the maximum weight with which a single repetition of a particular exercise can be done.</p>
    <p>Since often testing what that amount is very risky and very expensive for the central nervous system,
      you can get to know it by applying the Brzycki formula (as long as the number of repetitions is greater
      than 10).</p>
    <p>The purpose of this application is to help calculate the 1RM of any training session.</p>
  </article>
</template>

<style lang="css" scoped>
.about-page {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    font-size: 32px;
    color: #007bff;
    margin-bottom: 10px;
  }
}
</style>
