interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed',
    })
  }

  const config = useRuntimeConfig()
  const recipientEmail = config.contactRecipientEmail || 'info@davidsabalete.com'
  const resendApiKey = config.resendApiKey
  const resendFromEmail = config.resendFromEmail || recipientEmail

  // Read and validate request body
  const body = await readBody<ContactFormData>(event)

  // Validate required fields
  if (!body.name || !body.email || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    })
  }

  // Validate field lengths
  if (body.name.length < 2 || body.name.length > 100) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name must be between 2 and 100 characters',
    })
  }

  if (body.subject.length < 3 || body.subject.length > 200) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Subject must be between 3 and 200 characters',
    })
  }

  if (body.message.length < 10 || body.message.length > 5000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Message must be between 10 and 5000 characters',
    })
  }

  // If Resend API key is configured, use Resend
  if (resendApiKey) {
    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFromEmail,
          to: [recipientEmail],
          reply_to: body.email,
          subject: `Contact Form: ${body.subject}`,
          text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></p>
            <p><strong>Subject:</strong> ${escapeHtml(body.subject)}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
            <p><small>This is an automated message from the My1RM Calculator contact form. Please do not reply to this email.</small></p>
          `,
        }),
      })

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text()
        console.error('Resend API error:', errorText)
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to send email',
        })
      }

      return {
        success: true,
        message: 'Your message has been sent successfully!',
      }
    } catch (error: any) {
      console.error('Error sending email via Resend:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email',
      })
    }
  }

  // Fallback: If no email service is configured, return success but log a warning
  // In production, you should configure an email service
  console.warn('No email service configured. Contact form submission received but not sent:', {
    name: body.name,
    email: body.email,
    subject: body.subject,
    message: body.message.substring(0, 100) + '...',
  })

  // Return success even without email service (for development/testing)
  return {
    success: true,
    message: 'Your message has been received! (Email service not configured)',
  }
})

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

