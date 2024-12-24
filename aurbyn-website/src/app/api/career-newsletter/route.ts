// app/api/career-newsletter/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_G5pzt2SG_NjJiWbM1mP4bJDorH2A5U2hm')
const CAREER_NEWSLETTER_AUDIENCE_ID = '5a69784f-1613-401e-b06c-5931539b9f72'

interface NewsletterRequest {
    email: string
    name?: string
}

export async function POST(req: Request) {
    try {
        const { email, name }: NewsletterRequest = await req.json()

        // Add contact to the career newsletter audience
        await resend.contacts.create({
            email,
            firstName: name,
            audienceId: CAREER_NEWSLETTER_AUDIENCE_ID,
            unsubscribed: false
        })

        // Send welcome email with CV guide
        await resend.emails.send({
            from: 'Aurbyn Academy <academy@aurbyn.com>',
            to: email,
            subject: 'Your Software Engineer CV Guide + Welcome Resources 🚀',
            html: `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; background-color: #f9fafb; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Introduction -->
                <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="color: #2E294E; font-size: 28px; margin-bottom: 15px;">The Complete Software Engineer CV Guide</h1>
                <p style="color: #1B998B; font-size: 18px; margin: 0;">Your Blueprint for a Standout Tech Resume</p>
                </div>

                <p>Dear ${name || 'aspiring developer'},</p>
                
                <p>Welcome to our comprehensive guide to crafting a compelling software engineer CV. In today's competitive tech landscape, your CV is often your first opportunity to showcase your skills and potential. Let's dive deep into creating a CV that truly stands out.</p>

                <!-- 1. Professional Summary Section -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">1. Crafting Your Professional Summary</h2>
                
                <p>Your professional summary is your elevator pitch - it needs to capture attention in seconds. Here's how to make it powerful:</p>
                
                <h3 style="color: #1B998B; margin-top: 20px;">Key Components:</h3>
                <ul style="padding-left: 20px;">
                    <li>Years of experience and specialization areas</li>
                    <li>Top 2-3 technical skills that align with the job</li>
                    <li>Most significant achievement or contribution</li>
                    <li>Career goals or what you bring to the team</li>
                </ul>

                <div style="background-color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <p style="color: #1B998B; margin-top: 0;"><strong>Example:</strong></p>
                    <p style="margin-bottom: 0;">"Results-driven Software Engineer with 3 years of experience in full-stack development, specializing in React and Node.js. Demonstrated expertise in building scalable microservices architecture that reduced system latency by 40%. Passionate about clean code and developing user-centric solutions."</p>
                </div>
                </div>

                <!-- 2. Technical Skills Section -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">2. Organizing Technical Skills</h2>
                
                <p>Your technical skills section should be scannable and well-organized. Here's the optimal structure:</p>

                <h3 style="color: #1B998B; margin-top: 20px;">Strategic Grouping:</h3>
                <ul style="padding-left: 20px;">
                    <li><strong>Programming Languages:</strong> List by proficiency level
                    <div style="background-color: white; padding: 10px; border-radius: 8px; margin-top: 5px;">
                        Expert: Java, Python | Proficient: JavaScript, TypeScript | Familiar: Go, Ruby
                    </div>
                    </li>
                    <li><strong>Frameworks & Libraries:</strong> Categorize by frontend/backend
                    <div style="background-color: white; padding: 10px; border-radius: 8px; margin-top: 5px;">
                        Frontend: React, Vue.js, Angular | Backend: Spring Boot, Express.js, Django
                    </div>
                    </li>
                    <li><strong>Tools & Platforms:</strong> Group by functionality
                    <div style="background-color: white; padding: 10px; border-radius: 8px; margin-top: 5px;">
                        CI/CD: Jenkins, GitHub Actions | Cloud: AWS, GCP | Containers: Docker, Kubernetes
                    </div>
                    </li>
                </ul>

                <p style="margin-top: 20px;"><strong>Pro Tip:</strong> Tailor this section for each application. Study the job description and prioritize relevant technologies.</p>
                </div>

                <!-- 3. Professional Experience Section -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">3. Showcasing Professional Experience</h2>

                <p>Transform your work history into compelling achievements. Here's how:</p>

                <h3 style="color: #1B998B; margin-top: 20px;">Structure Each Entry:</h3>
                <ol style="padding-left: 20px;">
                    <li>Company name, role, and duration</li>
                    <li>Brief context about the company/team</li>
                    <li>3-5 achievement statements</li>
                    <li>Technologies used</li>
                </ol>

                <h3 style="color: #1B998B; margin-top: 20px;">Achievement Formula:</h3>
                <p><strong>Action Verb + Task + Result/Impact</strong></p>
                
                <div style="background-color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <p style="color: #1B998B; margin-top: 0;"><strong>Examples:</strong></p>
                    <ul style="padding-left: 20px; margin-bottom: 0;">
                    <li>"Engineered a real-time notification system using WebSocket, reducing user complaint tickets by 35%"</li>
                    <li>"Optimized database queries in PostgreSQL, cutting average response time from 2s to 200ms"</li>
                    <li>"Led a team of 4 developers in migrating legacy monolith to microservices, improving deployment frequency by 60%"</li>
                    </ul>
                </div>

                <h3 style="color: #1B998B; margin-top: 20px;">Power Verbs for Tech Roles:</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                    <div style="background-color: white; padding: 10px; border-radius: 8px;">
                    <p style="margin: 0;"><strong>Development:</strong> Architected, Engineered, Implemented, Optimized, Refactored</p>
                    </div>
                    <div style="background-color: white; padding: 10px; border-radius: 8px;">
                    <p style="margin: 0;"><strong>Leadership:</strong> Led, Mentored, Coordinated, Spearheaded, Established</p>
                    </div>
                </div>
                </div>

                <!-- 4. Projects Portfolio -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">4. Building a Strong Projects Portfolio</h2>

                <p>Your projects section is crucial, especially for entry-level positions or career transitions.</p>

                <h3 style="color: #1B998B; margin-top: 20px;">For Each Project, Include:</h3>
                <ul style="padding-left: 20px;">
                    <li>Project name and brief description</li>
                    <li>Your role and responsibilities</li>
                    <li>Technical challenges overcome</li>
                    <li>Technologies used</li>
                    <li>Links to GitHub/live demo</li>
                    <li>Key metrics or results</li>
                </ul>

                <div style="background-color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <p style="color: #1B998B; margin-top: 0;"><strong>Example Project Entry:</strong></p>
                    <p style="font-weight: bold; margin-bottom: 5px;">E-Commerce Platform (github.com/username/project)</p>
                    <p>Full-stack e-commerce application with real-time inventory management</p>
                    <ul style="margin: 10px 0;">
                    <li>Implemented JWT authentication and role-based access control</li>
                    <li>Integrated Stripe payment gateway with webhook support</li>
                    <li>Built responsive UI with React and Material-UI</li>
                    <li>Deployed on AWS using Docker containers</li>
                    </ul>
                    <p style="margin-bottom: 0;"><strong>Tech Stack:</strong> React, Node.js, MongoDB, Docker, AWS</p>
                </div>
                </div>

                <!-- 5. Education & Certifications -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">5. Education & Professional Development</h2>

                <p>While experience is crucial, education and continuous learning demonstrate your foundation and growth mindset.</p>

                <h3 style="color: #1B998B; margin-top: 20px;">Education Section Should Include:</h3>
                <ul style="padding-left: 20px;">
                    <li>Degree, institution, and graduation date</li>
                    <li>Relevant coursework</li>
                    <li>Academic projects</li>
                    <li>GPA (if above 3.5)</li>
                    <li>Academic honors or awards</li>
                </ul>

                <h3 style="color: #1B998B; margin-top: 20px;">Certifications Best Practices:</h3>
                <ul style="padding-left: 20px;">
                    <li>List most recent and relevant first</li>
                    <li>Include certification name, issuing organization, and date</li>
                    <li>Add certification numbers for verification</li>
                    <li>Highlight in-progress certifications too</li>
                </ul>
                </div>

                <!-- 6. Formatting & Style Guide -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">6. Professional Formatting Guidelines</h2>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                    <h3 style="color: #1B998B;">Essential Do's ✅</h3>
                    <ul style="padding-left: 20px;">
                        <li>Keep to 1-2 pages max</li>
                        <li>Use consistent formatting throughout</li>
                        <li>Include white space for readability</li>
                        <li>Use bullet points for achievements</li>
                        <li>Ensure perfect grammar and spelling</li>
                        <li>Save as PDF to preserve formatting</li>
                        <li>Use ATS-friendly font (Arial, Calibri)</li>
                        <li>Include GitHub and LinkedIn links</li>
                    </ul>
                    </div>
                    <div>
                    <h3 style="color: #1B998B;">Critical Don'ts ❌</h3>
                    <ul style="padding-left: 20px;">
                        <li>Use complex fonts or graphics</li>
                        <li>Include personal information</li>
                        <li>Write dense paragraphs</li>
                        <li>Use technical jargon excessively</li>
                        <li>Leave unexplained gaps</li>
                        <li>Include outdated technologies</li>
                        <li>Forget to customize</li>
                        <li>Ignore keywords from job posting</li>
                    </ul>
                    </div>
                </div>
                </div>

                <!-- 7. ATS Optimization -->
                <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="color: #2E294E; margin-top: 0;">7. Optimizing for ATS</h2>

                <p>Most companies use Applicant Tracking Systems (ATS) to screen CVs. Here's how to ensure yours gets through:</p>

                <h3 style="color: #1B998B; margin-top: 20px;">ATS Best Practices:</h3>
                <ul style="padding-left: 20px;">
                    <li>Use standard section headings (e.g., "Work Experience" not "Career Journey")</li>
                    <li>Include keywords from job description naturally</li>
                    <li>Avoid tables, columns, and graphics</li>
                    <li>Use standard bullet points</li>
                    <li>Spell out acronyms first time (e.g., "Application Programming Interface (API)")</li>
                </ul>

                <div style="background-color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <p style="color: #1B998B; margin-top: 0;"><strong>Pro Tip:</strong></p>
                    <p style="margin-bottom: 0;">Test your CV's ATS readability by copying and pasting it into a plain text document. If it remains well-formatted and readable, it's likely ATS-friendly.</p>
                </div>
                </div>

                <!-- Next Steps -->
                <div style="background-color: #2E294E; color: white; padding: 25px; border-radius: 12px; margin: 25px 0;">
                <h2 style="margin-top: 0;">Ready to Build Your CV? 🚀</h2>
                
                <p>Follow these steps to get started:</p>
                
                <ol style="margin: 15px 0; padding-left: 20px;">
                    <li style="margin-bottom: 10px;">Download our ATS-friendly CV template <a href="https://resume.io/resume-templates/ats" style="color: #1B998B;">here</a></li>
                    <li style="margin-bottom: 10px;">Join our <a href="https://web.facebook.com/groups/softwareengineerundergraduatesclub" style="color: #1B998B;">Facebook community</a> for feedback</li>
                    <li style="margin-bottom: 10px;">Watch our detailed CV creation tutorial on <a href="https://youtu.be/XkJNhjndLTU?si=ZQCWZADfpV3EABKG" style="color: #1B998B;">YouTube</a></li>
                    <li style="margin-bottom: 10px;">Book a free <a href="https://aurbyn.com/contact" style="color: #1B998B;">CV review session</a> with our experts</li>
                </ol>
                </div>

              <!-- Footer -->
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eaeaea;">
              <div style="color: #666; font-size: 12px;">
                <p>
                  You're receiving this because you subscribed to Aurbyn Academy updates. 
                  <a href="https://aurbyn.com/preferences" style="color: #1B998B;">Manage preferences</a>
                </p>
                <p style="margin-top: 20px;">
                  _______________________________________________________________<br>
                  Aurbyn, Inc. is a subsidiary of Aurbyn, Inc. Aurbyn.com is a registered trademark of Aurbyn, Inc.<br>
                  This message was produced and distributed by Aurbyn, Inc. or its affiliates © ${new Date().getFullYear()} Aurbyn, Inc. 
                  or its affiliates. All rights reserved.
                </p>
              </div>
            </div>
          </body>
        </html>
      `
        })

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to career newsletter'
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