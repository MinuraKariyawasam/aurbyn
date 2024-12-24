// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// interface EmailRequest {
//   to: string
//   subject: string
//   html: string
//   sendAcknowledgment?: boolean
// } 

// // Add this function right after the interface
// function generateAcknowledgmentEmail(formType: string) {
//     const formattedDate = new Date().toLocaleString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//       timeZoneName: 'short'
//     });
  
//     return `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta name="color-scheme" content="light">
//           <meta name="supported-color-schemes" content="light">
//         </head>
//         <body style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
//           Greetings from Aurbyn,<br><br>
  
//           Thank you for reaching out to Aurbyn ${formType}.<br><br>
  
//           We are writing to inform you that a dedicated team member has been assigned to your inquiry. As an customer, your message and provided details are unaffected. However, we want to ensure you get the best possible support for your requirements.<br><br>
          
//           Our team will review your message and respond accordingly. Here's what you can expect:<br>
//           - A dedicated team member will be assigned to your inquiry<br>
//           - Initial response within 24-48 business hours<br>
//           - Detailed follow-up based on your specific requirements<br><br>
          
//           For your reference:<br>
//           - Inquiry Type: ${formType}<br>
//           - Received on: ${formattedDate}<br>
//           - Tracking ID: ${Math.random().toString(36).substring(2, 15).toUpperCase()}<br><br>
  
//           For additional information or urgent requests, please contact support@aurbyn.com directly. Visit our support page at aurbyn.com/help.<br><br>
  
//           Release notes for your inquiry: N/A<br><br>
  
//           Thank you,<br>
//           The Aurbyn Team<br><br>
  
//           Visit aurbyn.com<br><br>
  
//           If you would no longer like to receive email notifications about this topic or would like to make other changes, you can manage your preferences at aurbyn.com/preferences.<br><br>
  
//           _______________________________________________________________<br>
//           Aurbyn, Inc. is a subsidiary of Aurbyn, Inc. Aurbyn.com is a registered trademark of Aurbyn, Inc. This message was produced and distributed by Aurbyn, Inc. or its affiliates © ${new Date().getFullYear()} Aurbyn, Inc. or its affiliates. All rights reserved.
//         </body>
//       </html>
//     `;
//   }

//   export async function POST(req: Request) {
//     try {
//       const emailData: EmailRequest = await req.json()
//       const { to, subject, html, sendAcknowledgment } = emailData
  
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: "minurakariyawasaminfo@gmail.com",
//           pass: "ceos wytf meem xtlt"
//         }
//       })
  
//       // Send main notification email
//       await transporter.sendMail({
//         from: {
//           name: 'Aurbyn Contact Us form Notification',
//           address: "minurakariyawasaminfo@gmail.com"
//         },
//         to,
//         subject,
//         html,
//         text: 'Please enable HTML to view this email properly.'
//       })
  
//       // Send acknowledgment email if requested
//       if (sendAcknowledgment) {
//         const formType = subject.includes('Fund') ? 'Venture Fund' :
//                         subject.includes('Academy') ? 'Academy' :
//                         subject.includes('Labs') ? 'Labs' : 'Team'
  
//         await transporter.sendMail({
//           from: {
//             name: 'Aurbyn',
//             address: "minurakariyawasaminfo@gmail.com"
//           },
//           to: emailData.html.match(/mailto:(.*?)</)?.[1] || '', // Extract customer email from HTML
//           subject: `Thank you for contacting Aurbyn ${formType}`,
//           html: generateAcknowledgmentEmail(formType),
//           text: 'Please enable HTML to view this email properly.'
//         })
//       }
  
//       return NextResponse.json({ 
//         success: true,
//         message: 'Emails sent successfully' 
//       })
  
//     } catch (error) {
//       console.error('Email sending failed:', error)
//       return NextResponse.json(
//         { 
//           success: false,
//           error: 'Failed to send email' 
//         },
//         { status: 500 }
//       )
//     }
//   }

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_G5pzt2SG_NjJiWbM1mP4bJDorH2A5U2hm')

interface EmailRequest {
  to: string
  subject: string
  html: string
}

function generateAcknowledgmentEmail(formType: string) {
  const formattedDate = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        Greetings from Aurbyn,<br><br>

        Thank you for reaching out to Aurbyn ${formType}.<br><br>

        We are writing to inform you that a dedicated team member has been assigned to your inquiry. As an customer, your message and provided details are unaffected. However, we want to ensure you get the best possible support for your requirements.<br><br>
        
        Our team will review your message and respond accordingly. Here's what you can expect:<br>
        - A dedicated team member will be assigned to your inquiry<br>
        - Initial response within 24-48 business hours<br>
        - Detailed follow-up based on your specific requirements<br><br>
        
        For your reference:<br>
        - Inquiry Type: ${formType}<br>
        - Received on: ${formattedDate}<br>
        - Tracking ID: ${Math.random().toString(36).substring(2, 15).toUpperCase()}<br><br>

        For additional information or urgent requests, please contact support@aurbyn.com directly. Visit our support page at aurbyn.com/help.<br><br>

        Release notes for your inquiry: N/A<br><br>

        Thank you,<br>
        The Aurbyn Team<br><br>

        Visit aurbyn.com<br><br>

        If you would no longer like to receive email notifications about this topic or would like to make other changes, you can manage your preferences at aurbyn.com/preferences.<br><br>

        _______________________________________________________________<br>
        Aurbyn, Inc. is a subsidiary of Aurbyn, Inc. Aurbyn.com is a registered trademark of Aurbyn, Inc. This message was produced and distributed by Aurbyn, Inc. or its affiliates © ${new Date().getFullYear()} Aurbyn, Inc. or its affiliates. All rights reserved.
      </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const emailData: EmailRequest = await req.json()
    const { to, subject, html } = emailData

    // Send main notification email
    await resend.emails.send({
      from: 'Aurbyn Contact Form <contact@aurbyn.com>',
      to,
      subject,
      html
    })

    // Extract customer email using a more robust pattern
    const customerEmail = html.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0] || ''
    console.log('Extracted customer email:', customerEmail) // Debug log

    // Always send acknowledgment email if we have a valid customer email
    if (customerEmail && customerEmail.includes('@')) {
      const formType = subject.includes('Fund') ? 'Venture Fund' :
                      subject.includes('Academy') ? 'Academy' :
                      subject.includes('Labs') ? 'Labs' : 'Team'

      console.log('Sending acknowledgment email to:', customerEmail) // Debug log
      
      await resend.emails.send({
        from: 'Aurbyn <no-reply@aurbyn.com>',
        to: customerEmail,
        subject: `Thank you for contacting Aurbyn ${formType}`,
        html: generateAcknowledgmentEmail(formType)
      })
    } else {
      console.error('No valid customer email found in HTML:', html) // Debug log
    }

    return NextResponse.json({ 
      success: true,
      message: 'Emails sent successfully' 
    })

  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send email' 
      },
      { status: 500 }
    )
  }
}