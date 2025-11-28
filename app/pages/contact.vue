<script setup lang="ts">
// Static contact page with Netlify form handling
</script>

<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <p class="intro-text">
      Have a question, suggestion, or feedback? We'd love to hear from you! Fill out the form below and we'll get back
      to you as soon as possible.
    </p>

    <form name="contact" method="POST" data-netlify="true" class="contact-form">
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
        <input type="text" id="name" name="name" class="form-control" placeholder="Your name" required minlength="2" />
      </div>

      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input type="email" id="email" name="email" class="form-control" placeholder="your.email@example.com"
          required />
      </div>

      <div class="form-group">
        <label for="subject">Subject <span class="required">*</span></label>
        <input type="text" id="subject" name="subject" class="form-control" placeholder="What is this regarding?"
          required minlength="3" />
      </div>

      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" class="form-control" rows="6" placeholder="Tell us what's on your mind..."
          required minlength="10"></textarea>
        <small class="form-text text-muted">
          Minimum 10 characters required
        </small>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">
          Send Message
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
