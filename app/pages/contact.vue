<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

// Form fields
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

// Email recipient - you can change this to your actual email
const recipientEmail = 'info@davidsabalete.com' // TODO: Replace with your actual email

useHead({
  title: 'Contact Us - 1RM Calculator Support | My1RM',
  meta: [
    {
      name: 'description',
      content: 'Contact the My1RM Calculator team. Have questions, suggestions, or feedback? We\'d love to hear from you!',
    },
    {
      name: 'keywords',
      content: 'contact 1RM calculator, support, feedback, questions, help',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Contact Us - 1RM Calculator Support',
    },
    {
      property: 'og:description',
      content: 'Contact the My1RM Calculator team. Have questions, suggestions, or feedback? We\'d love to hear from you!',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${siteUrl}/contact`,
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: 'Contact Us - 1RM Calculator Support',
    },
    {
      name: 'twitter:description',
      content: 'Contact the My1RM Calculator team. Have questions, suggestions, or feedback?',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}/contact`,
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
        '@type': 'ContactPage',
        name: 'Contact Us',
        description: 'Contact the My1RM Calculator team for questions, suggestions, or feedback.',
        url: `${siteUrl}/contact`,
        mainEntity: {
          '@type': 'Organization',
          name: 'My1RM Calculator',
          email: recipientEmail,
        },
      }),
    },
  ],
})

// Function to create mailto link with all form values
const handleSubmit = (event: Event) => {
  event.preventDefault()

  // Validate form
  const form = event.target as HTMLFormElement
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  // Encode values for mailto URL
  const encodedSubject = encodeURIComponent(subject.value)
  const encodedBody = encodeURIComponent(
    `Name: ${name.value}\nEmail: ${email.value}\n\nMessage:\n${message.value}`
  )

  // Create mailto link
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`

  // Open email client
  window.location.href = mailtoLink
}
</script>

<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p class="intro-text">
      Have a question, suggestion, or feedback? We'd love to hear from you! Fill out the form below and it will open
      your email client with all the information pre-filled.
    </p>

    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
        <input type="text" id="name" name="name" v-model="name" class="form-control" placeholder="Your name" required
          minlength="2" />
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" name="email" v-model="email" class="form-control"
          placeholder="your.email@example.com" required />
      </div>

      <div class="form-group">
        <label for="subject">Subject <span class="required">*</span></label>
        <input type="text" id="subject" name="subject" v-model="subject" class="form-control"
          placeholder="What is this regarding?" required minlength="3" />
      </div>

      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" v-model="message" class="form-control" rows="6"
          placeholder="Tell us what's on your mind..." required minlength="10"></textarea>
        <small class="form-text text-muted">
          Minimum 10 characters required
        </small>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">
          Open Email Client
        </button>
      </div>
    </form>

    <div class="contact-info">
      <p class="note">
        <strong>Note:</strong> Clicking "Open Email Client" will open your default email application with all fields
        pre-filled. You can review and send the email from there.
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.contact-page {
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

  .intro-text {
    margin-bottom: 30px;
    color: #666;
    line-height: 1.6;
  }

  .contact-form {
    .form-group {
      margin-bottom: 1.5rem;

      label {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
        display: block;

        .required {
          color: #dc3545;
        }
      }

      .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 16px;
        font-family: inherit;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        box-sizing: border-box;

        &:focus {
          border-color: #007bff;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        &:invalid:not(:focus):not(:placeholder-shown) {
          border-color: #dc3545;
        }

        &:valid:not(:focus):not(:placeholder-shown) {
          border-color: #28a745;
        }
      }

      textarea.form-control {
        resize: vertical;
        min-height: 120px;
      }

      .form-text {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #6c757d;
        display: block;
      }
    }

    .form-actions {
      display: flex;
      gap: 10px;
      margin-top: 30px;

      .btn {
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        font-family: inherit;
      }

      .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
        color: white;

        &:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }

        &:active {
          background-color: #004085;
          border-color: #004085;
        }
      }
    }
  }

  .contact-info {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #e9ecef;

    .note {
      color: #6c757d;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
}
</style>
