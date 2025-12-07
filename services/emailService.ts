'use server'

import nodemailer from 'nodemailer'

interface WaitlistFormData {
  name: string
  email: string
  organization: string
  field: string
  level: string
  uploadPapers: string
  expectations: string
}

export async function sendWaitlistEmail(data: WaitlistFormData) {
  // Check for required environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials not found in environment variables')
    return { success: false, message: 'Server configuration error. Please check environment variables.' }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or configure host/port for other providers
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sending to yourself
    subject: `New Waitlist Signup: ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Waitlist Signup</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
          <p><strong>Field:</strong> ${data.field}</p>
          <p><strong>Academic Level:</strong> ${data.level}</p>
          <p><strong>Willing to Upload Papers:</strong> ${data.uploadPapers}</p>
          <div style="margin-top: 20px;">
            <strong>Expectations:</strong>
            <p style="white-space: pre-wrap;">${data.expectations || 'None provided'}</p>
          </div>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Waitlist application sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again later.' }
  }
}
