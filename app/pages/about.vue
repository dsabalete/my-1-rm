<script setup lang="ts">
// About page explaining the 1RM calculator and Brzycki formula

useSeoMeta({
  title: 'About 1RM Calculator - How It Works | Brzycki Formula Explained',
  description: 'Learn about the 1RM calculator and the Brzycki formula. Understand how to calculate your one repetition maximum safely without testing it directly, which can be risky for your central nervous system.',
  ogTitle: 'About 1RM Calculator - How It Works',
  ogDescription: 'Learn about the 1RM calculator and the Brzycki formula. Understand how to safely calculate your one repetition maximum.',
  ogImage: '/img/icons/android-chrome-512x512.png',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'About 1RM Calculator - How It Works',
  twitterDescription: 'Learn about the 1RM calculator and the Brzycki formula.',
})

const route = useRoute()
const siteUrl = useSiteUrl()

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}${route.path}`,
    },
  ],
})
</script>

<template>
  <div class="about-page">
    <h1>1RM Calculator</h1>
    <p>The 1RM is the maximum weight with which a single repetition of a particular exercise can be done.</p>
    <p>Since often testing what that amount is very risky and very expensive for the central nervous system,
      you can get to know it by applying the Brzycki formula (as long as the number of repetitions is greater
      than 10).</p>
    <p>The purpose of this application is to help calculate the 1RM of any training session.</p>
  </div>
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
