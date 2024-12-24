// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import WelcomeEmail from '../../components/emails/WelcomeEmail'

const resend = new Resend('re_G5pzt2SG_NjJiWbM1mP4bJDorH2A5U2hm')
const NEWSLETTER_AUDIENCE_ID = '5a69784f-1613-401e-b06c-5931539b9f72'

interface NewsletterRequest {
  email: string
}

export async function POST(req: Request) {
  try {
    const { email }: NewsletterRequest = await req.json()

    // Add contact to the newsletter audience
    await resend.contacts.create({
      email,
      audienceId: NEWSLETTER_AUDIENCE_ID,
      unsubscribed: false
    })

    // Send welcome email using the React Email template
    await resend.emails.send({
      from: 'Aurbyn Newsletter <newsletter@aurbyn.com>',
      to: email,
      subject: 'Welcome to the Inner Circle of Innovation 🌟',
      react: WelcomeEmail()
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter'
    })

  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to subscribe to newsletter'
      }, 
      { status: 500 }
    )
  }
}