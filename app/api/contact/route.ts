import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

// Rate limiting simplu (în producție, folosește Redis sau alt serviciu)
const submissions = new Map<string, number>()
const RATE_LIMIT = 3 // 3 submisii per IP per 15 minute
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userSubmissions = submissions.get(ip) || 0

  if (userSubmissions >= RATE_LIMIT) {
    return false
  }

  submissions.set(ip, userSubmissions + 1)
  setTimeout(() => {
    const current = submissions.get(ip) || 0
    if (current > 0) {
      submissions.set(ip, current - 1)
    }
  }, RATE_LIMIT_WINDOW)

  return true
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  return forwarded?.split(',')[0] || realIP || 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request)

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Prea multe încercări. Te rugăm să încerci mai târziu.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, message, gdpr } = body

    // Validare simplă
    if (!name || !email || !phone || !subject || !message || !gdpr) {
      return NextResponse.json(
        { error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      )
    }

    // Salvare locală (JSON)
    const submission = {
      type: 'contact',
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip,
    }

    const submissionsDir = path.join(process.cwd(), 'submissions')
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true })
    }

    const filename = `contact-${Date.now()}.json`
    fs.writeFileSync(
      path.join(submissionsDir, filename),
      JSON.stringify(submission, null, 2)
    )

    // Trimitere email (dacă SMTP este configurat)
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_EMAIL
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL,
        subject: `[Cucu Fast Service] Contact: ${subject}`,
        html: `
          <h2>Mesaj nou de la ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Subiect:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'A apărut o eroare. Te rugăm să încerci din nou.' },
      { status: 500 }
    )
  }
}

