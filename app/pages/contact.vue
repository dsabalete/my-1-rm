<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAnalytics } from '~/composables/useAnalytics'

const analytics = useAnalytics()

// Form state
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(false)

// Form validation
const isNameValid = computed(() => name.value.trim().length >= 2)
const isEmailValid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})
const isSubjectValid = computed(() => subject.value.trim().length >= 3)
const isMessageValid = computed(() => message.value.trim().length >= 10)
const isFormValid = computed(() =>
  isNameValid.value &&
  isEmailValid.value &&
  isSubjectValid.value &&
  isMessageValid.value
)

// Error messages
const nameError = computed(() => {
  if (name.value.length === 0) return ''
  return isNameValid.value ? '' : 'Name must be at least 2 characters'
})

const emailError = computed(() => {
  if (email.value.length === 0) return ''
  return isEmailValid.value ? '' : 'Please enter a valid email address'
})

const subjectError = computed(() => {
  if (subject.value.length === 0) return ''
  return isSubjectValid.value ? '' : 'Subject must be at least 3 characters'
})

const messageError = computed(() => {
  if (message.value.length === 0) return ''
  return isMessageValid.value ? '' : 'Message must be at least 10 characters'
})

const handleSubmit = async (e: Event) => {
  if (!isFormValid.value) {
    return
  }

  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = false

  try {
    // Prepare form data for Netlify (URL-encoded format)
    const formData = new URLSearchParams()
    formData.append('form-name', 'contact')
    formData.append('name', name.value.trim())
    formData.append('email', email.value.trim())
    formData.append('subject', subject.value.trim())
    formData.append('message', message.value.trim())

    // Track contact form submission
    analytics.trackEvent({
      eventName: 'contact_form_submit',
      eventParams: {
        has_name: name.value.length > 0,
        has_email: email.value.length > 0,
        subject_length: subject.value.length,
        message_length: message.value.length,
      },
    })

    // Submit to Netlify
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    if (response.ok) {
      // Show success message
      submitSuccess.value = true

      // Reset form after a delay
      setTimeout(() => {
        name.value = ''
        email.value = ''
        subject.value = ''
        message.value = ''
        submitSuccess.value = false
      }, 5000)
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    submitError.value = true
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
  submitSuccess.value = false
  submitError.value = false
}
</script>

<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p class="intro-text">
      Have a question, suggestion, or feedback? We'd love to hear from you! Fill out the form below and we'll get back
      to you as soon as possible.
    </p>

    <div v-if="submitSuccess" class="alert alert-success" role="alert">
      <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you as soon as possible.
    </div>

    <div v-if="submitError" class="alert alert-danger" role="alert">
      <strong>Error!</strong> There was a problem submitting your message. Please try again or contact us directly.
    </div>

    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit" class="contact-form">
      <!-- Hidden field for Netlify form identification -->
      <input type="hidden" name="form-name" value="contact" />

      <!-- Honeypot field for spam protection -->
      <div style="position: absolute; left: -9999px;" aria-hidden="true">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>

      <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
        <input type="text" id="name" name="name" class="form-control"
          :class="{ 'is-invalid': nameError, 'is-valid': name.length > 0 && isNameValid }" v-model="name"
          placeholder="Your name" required />
        <div v-if="nameError" class="invalid-feedback">
          {{ nameError }}
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" name="email" class="form-control"
          :class="{ 'is-invalid': emailError, 'is-valid': email.length > 0 && isEmailValid }" v-model="email"
          placeholder="your.email@example.com" required />
        <div v-if="emailError" class="invalid-feedback">
          {{ emailError }}
        </div>
      </div>

      <div class="form-group">
        <label for="subject">Subject <span class="required">*</span></label>
        <input type="text" id="subject" name="subject" class="form-control"
          :class="{ 'is-invalid': subjectError, 'is-valid': subject.length > 0 && isSubjectValid }" v-model="subject"
          placeholder="What is this regarding?" required />
        <div v-if="subjectError" class="invalid-feedback">
          {{ subjectError }}
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" class="form-control"
          :class="{ 'is-invalid': messageError, 'is-valid': message.length > 0 && isMessageValid }" v-model="message"
          rows="6" placeholder="Tell us what's on your mind..." required></textarea>
        <div v-if="messageError" class="invalid-feedback">
          {{ messageError }}
        </div>
        <small class="form-text text-muted">
          {{ message.length }} characters (minimum 10 required)
        </small>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="!isFormValid || isSubmitting">
          <span v-if="isSubmitting">Sending...</span>
          <span v-else>Send Message</span>
        </button>
        <button type="button" class="btn btn-secondary" @click="resetForm" :disabled="isSubmitting">
          Reset
        </button>
      </div>
    </form>

    <div class="contact-info">
      <p class="note">
        <strong>Note:</strong> This form is powered by Netlify Forms. Your message will be securely submitted and we'll
        receive it directly.
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

  .alert {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 5px;
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
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:focus {
          border-color: #007bff;
          outline: 0;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }

        &.is-valid {
          border-color: #28a745;
        }

        &.is-invalid {
          border-color: #dc3545;
        }
      }

      textarea.form-control {
        resize: vertical;
        min-height: 120px;
      }

      .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #dc3545;
      }

      .form-text {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        color: #6c757d;
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

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }

      .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
        color: white;

        &:hover:not(:disabled) {
          background-color: #0056b3;
          border-color: #0056b3;
        }
      }

      .btn-secondary {
        background-color: #6c757d;
        border-color: #6c757d;
        color: white;

        &:hover:not(:disabled) {
          background-color: #5a6268;
          border-color: #545b62;
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
