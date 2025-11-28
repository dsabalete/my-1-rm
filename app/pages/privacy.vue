<script setup lang="ts">
// Privacy Policy page
const lastUpdated = '2024-12-19'

useSeoMeta({
  title: 'Privacy Policy - 1RM Calculator',
  description: 'Privacy Policy for My1RM Calculator. Learn how we collect, use, and protect your information when using our 1RM calculator service.',
  ogTitle: 'Privacy Policy - 1RM Calculator',
  ogDescription: 'Privacy Policy for My1RM Calculator. Learn how we collect, use, and protect your information.',
  ogImage: '/img/icons/android-chrome-512x512.png',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Privacy Policy - 1RM Calculator',
  twitterDescription: 'Privacy Policy for My1RM Calculator.',
  robots: 'noindex, follow', // Privacy pages typically shouldn't be indexed
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
  <div class="privacy-page">
    <h1>Privacy Policy</h1>
    <p class="last-updated">Last updated: {{ lastUpdated }}</p>

    <section>
      <h2>Introduction</h2>
      <p>
        This Privacy Policy describes how My1RM Calculator ("we", "our", or "us") collects, uses, and protects your
        information when you use our website and services.
      </p>
      <p>
        By using our service, you agree to the collection and use of information in accordance with this policy.
      </p>
    </section>

    <section>
      <h2>Information We Collect</h2>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our website, we automatically collect certain information through Google Tag Manager and Google
        Analytics 4, including:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website addresses</li>
        <li>Usage patterns and interactions with the calculator</li>
      </ul>

      <h3>Locally Stored Information</h3>
      <p>
        Our application uses browser localStorage to store your calculator preferences locally on your device,
        including:
      </p>
      <ul>
        <li>Default weight values</li>
        <li>Default number of repetitions</li>
        <li>Preferred unit of measurement (kg or lbs)</li>
      </ul>
      <p>
        This information is stored only on your device and is not transmitted to our servers or third parties.
      </p>
    </section>

    <section>
      <h2>How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To analyze usage patterns and improve our website</li>
        <li>To understand how users interact with our calculator</li>
        <li>To monitor and analyze trends, usage, and activities</li>
        <li>To provide a better user experience</li>
      </ul>
    </section>

    <section>
      <h2>Third-Party Services</h2>
      <p>
        We use Google Tag Manager and Google Analytics 4 to collect and analyze usage data. These services may collect
        information about your use of our website and other websites.
      </p>
      <p>
        Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our
        site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a
          href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google's Ads
          Settings</a>.
      </p>
      <p>
        For more information about how Google collects and processes data, please visit <a
          href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy
          Policy</a>.
      </p>
    </section>

    <section>
      <h2>Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our website and hold certain information.
        Cookies are files with a small amount of data which may include an anonymous unique identifier.
      </p>
      <p>
        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you
        do not accept cookies, you may not be able to use some portions of our service.
      </p>
    </section>

    <section>
      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information. However, no
        method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>
    </section>

    <section>
      <h2>Your Rights</h2>
      <p>Depending on your location, you may have the following rights regarding your personal information:</p>
      <ul>
        <li><strong>Access:</strong> You have the right to request access to your personal information.</li>
        <li><strong>Correction:</strong> You have the right to request correction of inaccurate information.</li>
        <li><strong>Deletion:</strong> You have the right to request deletion of your personal information.</li>
        <li><strong>Opt-out:</strong> You can opt out of Google Analytics by installing the <a
            href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics
            Opt-out Browser Add-on</a>.</li>
        <li><strong>LocalStorage:</strong> You can clear your browser's localStorage to remove locally stored calculator
          preferences.</li>
      </ul>
    </section>

    <section>
      <h2>Children's Privacy</h2>
      <p>
        Our service is not intended for children under the age of 13. We do not knowingly collect personal information
        from children under 13. If you are a parent or guardian and believe your child has provided us with personal
        information, please contact us.
      </p>
    </section>

    <section>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
        Policy on this page and updating the "Last updated" date.
      </p>
      <p>
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
        effective when they are posted on this page.
      </p>
    </section>

    <section>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us through our <NuxtLink to="/contact">
          Contact
        </NuxtLink> page or by visiting <a href="https://www.davidsabalete.com" target="_blank"
          rel="noopener noreferrer">my website</a>.
      </p>
    </section>
  </div>
</template>

<style lang="css" scoped>
.privacy-page {
  margin: 20px auto;
  max-width: 900px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 1.6;

  h1 {
    font-size: 32px;
    color: #007bff;
    margin-bottom: 10px;
  }

  .last-updated {
    color: #666;
    font-style: italic;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 30px;

    h2 {
      font-size: 24px;
      color: #2c3e50;
      margin-top: 30px;
      margin-bottom: 15px;
      border-bottom: 2px solid #007bff;
      padding-bottom: 5px;
    }

    h3 {
      font-size: 18px;
      color: #34495e;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 15px;
      color: #333;
    }

    ul {
      margin-left: 20px;
      margin-bottom: 15px;

      li {
        margin-bottom: 8px;
        color: #333;
      }
    }

    a {
      color: #007bff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
