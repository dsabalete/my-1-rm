<script setup lang="ts">
// About page explaining the 1RM calculator and available formulas
import { getAllFormulas } from '~/constants/1rm'

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const formulas = getAllFormulas()

useHead({
  title: 'About 1RM Calculator - Multiple Formulas Explained | My1RM',
  meta: [
    {
      name: 'description',
      content: 'Learn about the 1RM (One Repetition Maximum) calculator with multiple formulas: Brzycki, Epley, Lombardi, Mayhew, O\'Conner, and Wathan. Understand how to safely calculate your maximum strength without risking injury.',
    },
    {
      name: 'keywords',
      content: '1RM calculator, Brzycki formula, Epley formula, Lombardi formula, one rep max, strength training, maximum weight, rep max calculation, 1RM formulas',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'About 1RM Calculator - Multiple Formulas Explained',
    },
    {
      property: 'og:description',
      content: 'Learn about the 1RM calculator with multiple formulas. Understand how to safely calculate your maximum strength.',
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
      content: 'About 1RM Calculator - Multiple Formulas Explained',
    },
    {
      name: 'twitter:description',
      content: 'Learn about the 1RM calculator with multiple formulas. Understand how to safely calculate your maximum strength.',
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
        description: 'Learn about the 1RM calculator with multiple formulas. Understand how to safely calculate your maximum strength.',
        url: `${siteUrl}/about`,
        mainEntity: {
          '@type': 'Article',
          headline: 'About 1RM Calculator and Available Formulas',
          about: {
            '@type': 'Thing',
            name: '1RM Calculator',
            description: 'A tool to calculate one repetition maximum using multiple formulas including Brzycki, Epley, Lombardi, Mayhew, O\'Conner, and Wathan',
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
    <p>The 1RM (One Repetition Maximum) is the maximum weight with which a single repetition of a particular exercise
      can be done.</p>
    <p>Since testing your actual 1RM is very risky and expensive for the central nervous system, you can estimate it
      using various mathematical formulas based on the weight you can lift for multiple repetitions.</p>

    <section>
      <h2>Available Formulas</h2>
      <p>This calculator supports multiple 1RM estimation formulas, each with different characteristics and accuracy for
        various rep ranges:</p>
      <ul class="formula-list">
        <li v-for="formula in formulas" :key="formula.id" class="formula-item">
          <strong>{{ formula.name }}</strong>
          <p class="formula-description">{{ formula.description }}</p>
          <code class="formula-code">{{ formula.formula }}</code>
        </li>
      </ul>
    </section>

    <section>
      <h2>Choosing a Formula</h2>
      <p>Different formulas work better for different scenarios:</p>
      <ul>
        <li><strong>Brzycki</strong>: Most accurate for rep ranges ≤ 10. Recommended for most users.</li>
        <li><strong>Epley</strong>: Popular and widely used, good general-purpose formula.</li>
        <li><strong>Lombardi</strong>: Good for powerlifting and explosive movements.</li>
        <li><strong>Mayhew et al.</strong>: Accurate for higher rep ranges.</li>
        <li><strong>O'Conner et al.</strong>: Good for general strength training.</li>
        <li><strong>Wathan</strong>: Accurate across various rep ranges.</li>
      </ul>
      <p>You can select your preferred formula from the dropdown menu in the calculator. The default formula is Brzycki,
        which works well for most training scenarios.</p>
    </section>

    <section>
      <h2>Important Notes</h2>
      <ul>
        <li>These formulas provide <strong>estimates</strong>, not exact values. Actual 1RM may vary based on individual
          factors.</li>
        <li>Formulas are most accurate when the number of repetitions is between 1-10.</li>
        <li>Always prioritize safety when attempting maximum lifts. Consider using a spotter and proper form.</li>
        <li>Different formulas may give slightly different results. Choose the one that best fits your training style.
        </li>
      </ul>
    </section>
  </article>
</template>

<style lang="css" scoped>
.about-page {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 1.6;

  h1 {
    font-size: 32px;
    color: #007bff;
    margin-bottom: 10px;
  }

  section {
    margin-top: 2rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 24px;
      color: #2c3e50;
      margin-top: 30px;
      margin-bottom: 15px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 5px;
    }

    ul {
      margin-left: 20px;
      margin-bottom: 15px;

      li {
        margin-bottom: 10px;
        color: #333;
      }
    }
  }

  .formula-list {
    list-style: none;
    margin-left: 0;
    padding: 0;
  }

  .formula-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-left: 4px solid #007bff;
    border-radius: 4px;

    strong {
      display: block;
      font-size: 1.2rem;
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .formula-description {
      margin: 0.5rem 0;
      color: #666;
      font-size: 0.95rem;
    }

    .formula-code {
      display: block;
      margin-top: 0.5rem;
      padding: 0.5rem;
      background-color: #e9ecef;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      color: #2c3e50;
      overflow-x: auto;
    }
  }
}
</style>
