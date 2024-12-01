"use client"
import { useState } from 'react'
import { Send, Loader2, Check, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

type FormType = 'fund' | 'academy' | 'labs' | 'general'

interface FormFields {
  name: string
  email: string
  message: string
  source: string
}

const initialFormState: FormFields = {
  name: '',
  email: '',
  message: '',
  source: ''
}

const sourceOptions = [
  'Google Search',
  'Social Media',
  'Referral',
  'Blog/Article',
  'Conference/Event',
  'Other'
]

export default function ContactPage() {
  const router = useRouter()
  const [formType, setFormType] = useState<FormType>('labs')
  const [formData, setFormData] = useState<FormFields>(initialFormState)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(2)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      // Format the date
      const now = new Date();
      const formattedDate = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });

      // Prepare email content with HTML template
      // Collect detailed system information
      const getBrowserInfo = () => {
        const browserInfo = {
          name: '',
          version: '',
          os: ''
        };
        
        const userAgent = navigator.userAgent;
        let tem;
        let M = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
          browserInfo.name = 'IE';
          browserInfo.version = tem[1] || '';
        } else if (M[1] === 'Chrome') {
          tem = userAgent.match(/\bOPR\/(\d+)/);
          if (tem != null) {
            browserInfo.name = 'Opera';
            browserInfo.version = tem[1];
          }
        } else {
          M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
          browserInfo.name = M[0];
          browserInfo.version = M[1];
        }
        
        // Detect OS
        if (userAgent.indexOf("Win") != -1) browserInfo.os = "Windows";
        else if (userAgent.indexOf("Mac") != -1) browserInfo.os = "MacOS";
        else if (userAgent.indexOf("Linux") != -1) browserInfo.os = "Linux";
        else if (userAgent.indexOf("Android") != -1) browserInfo.os = "Android";
        else if (userAgent.indexOf("iOS") != -1) browserInfo.os = "iOS";
        else browserInfo.os = "Unknown";
        
        return browserInfo;
      };

      const systemInfo = {
        browser: getBrowserInfo(),
        userAgent: window.navigator.userAgent,
        language: window.navigator.language,
        platform: window.navigator.platform,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        screenColorDepth: window.screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        cookiesEnabled: navigator.cookieEnabled,
        doNotTrack: navigator.doNotTrack,
        onLine: navigator.onLine,
        connectionType: (navigator as any).connection ? (navigator as any).connection.effectiveType : 'unknown',
        deviceMemory: (navigator as any).deviceMemory ? `${(navigator as any).deviceMemory} GB` : 'unknown',
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'Direct',
        ipAddress: 'Will be collected server-side'
      }

      const emailContent = {
        to: "minurakariyawasaminfo@gmail.com",
        subject: `[Aurbyn] New ${formType.charAt(0).toUpperCase() + formType.slice(1)} Inquiry - ${formData.name}`,
        sendAcknowledgment: true,  // Add this line,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
                
                body { 
                  font-family: 'Inter', sans-serif;
                  line-height: 1.6;
                  color: #1a1a1a;
                  background-color: #f5f5f5;
                  margin: 0;
                  padding: 0;
                }
                
                .container { 
                  max-width: 600px;
                  margin: 40px auto;
                  background: #ffffff;
                  border-radius: 16px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                  overflow: hidden;
                }
                
                .header { 
                  background: linear-gradient(135deg, #2E294E 0%, #1B998B 100%);
                  color: white;
                  padding: 32px;
                  position: relative;
                }
                
                .logo {
                  font-size: 24px;
                  font-weight: 600;
                  margin-bottom: 8px;
                }
                
                .content { 
                  padding: 32px;
                }
                
                .field { 
                  margin-bottom: 24px;
                }
                
                .label { 
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  color: #666;
                  margin-bottom: 8px;
                }
                
                .value { 
                  font-size: 16px;
                  color: #1a1a1a;
                }
                
                .message-box { 
                  background: #f8f9fa;
                  padding: 20px;
                  border-radius: 8px;
                  border: 1px solid #e9ecef;
                  margin-top: 8px;
                }
                
                .tag { 
                  display: inline-block;
                  background: rgba(255, 255, 255, 0.2);
                  color: white;
                  padding: 4px 12px;
                  border-radius: 20px;
                  font-size: 14px;
                  backdrop-filter: blur(4px);
                }
                
                .system-info {
                  margin-top: 32px;
                  padding-top: 24px;
                  border-top: 1px solid #e9ecef;
                }
                
                .system-info-grid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 16px;
                  margin-top: 16px;
                }
                
                .system-info-item {
                  font-size: 13px;
                  color: #666;
                }
                
                .footer { 
                  margin-top: 32px;
                  padding-top: 24px;
                  border-top: 1px solid #e9ecef;
                  font-size: 13px;
                  color: #666;
                  text-align: center;
                }
                
                a {
                  color: #1B998B;
                  text-decoration: none;
                }
                
                a:hover {
                  text-decoration: underline;
                }
              </style>
            </head>
            <body>
          <!DOCTYPE html>
          <html>
            <head>
              <meta name="color-scheme" content="light">
              <meta name="supported-color-schemes" content="light">
              <style>
                body {
                  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                  line-height: 1.5;
                  color: #333;
                  margin: 0;
                  padding: 0;
                  -webkit-font-smoothing: antialiased;
                }
                
                .container {
                  max-width: 800px;
                  margin: 0 auto;
                  background: #ffffff;
                }
                
                .header {
                  background: linear-gradient(135deg, #2E294E 0%, #1B998B 100%);
                  padding: 20px 30px;
                  color: white;
                }
                
                .content {
                  padding: 30px;
                }
                
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 25px;
                  background-color: #ffffff;
                }
                
                th {
                  text-align: left;
                  padding: 12px 15px;
                  background-color: #f8f9fa;
                  font-weight: 600;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  color: #666;
                  border-bottom: 2px solid #e9ecef;
                }
                
                td {
                  padding: 12px 15px;
                  border-bottom: 1px solid #e9ecef;
                  font-size: 14px;
                }
                
                .section-title {
                  font-size: 18px;
                  font-weight: 600;
                  color: #2E294E;
                  margin: 30px 0 15px;
                  padding-bottom: 8px;
                  border-bottom: 2px solid #e9ecef;
                }
                
                .badge {
                  display: inline-block;
                  padding: 4px 8px;
                  font-size: 12px;
                  font-weight: 500;
                  border-radius: 4px;
                  background: rgba(255, 255, 255, 0.2);
                  color: white;
                }
                
                .message-box {
                  background-color: #f8f9fa;
                  border: 1px solid #e9ecef;
                  border-radius: 6px;
                  padding: 15px;
                  margin-top: 10px;
                }
                
                .footer {
                  margin-top: 30px;
                  padding: 20px;
                  background-color: #f8f9fa;
                  font-size: 12px;
                  color: #666;
                  text-align: center;
                  border-radius: 6px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <table style="background: transparent; margin: 0;">
                    <tr>
                      <td style="border: none; padding: 0;">
                        <h1 style="margin: 0; font-size: 24px;">New Lead</h1>
                        <p style="margin: 5px 0 0;">from: ${formData.name} | Contact Us form</p>
                        <span class="badge" style="margin-top: 10px;">${formType.toUpperCase()}</span>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <div class="content">
                  <div class="section-title">Contact Information</div>
                  <table>
                    <tr>
                      <th width="30%">Field</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>${formData.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href="mailto:${formData.email}" style="color: #1B998B;">${formData.email}</a></td>
                    </tr>
                    <tr>
                      <td>Source</td>
                      <td>${formData.source}</td>
                    </tr>
                  </table>

                  <div class="section-title">Message</div>
                  <div class="message-box">
                    ${formData.message.replace(/\n/g, '<br>')}
                  </div>

                  <div class="section-title">System Information</div>
                  <table>
                    <tr>
                      <th width="30%">Field</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>Browser</td>
                      <td>${systemInfo.browser.name} ${systemInfo.browser.version}</td>
                    </tr>
                    <tr>
                      <td>Operating System</td>
                      <td>${systemInfo.browser.os}</td>
                    </tr>
                    <tr>
                      <td>Screen Resolution</td>
                      <td>${systemInfo.screenResolution}</td>
                    </tr>
                    <tr>
                      <td>Device Memory</td>
                      <td>${systemInfo.deviceMemory}</td>
                    </tr>
                    <tr>
                      <td>Connection Type</td>
                      <td>${systemInfo.connectionType}</td>
                    </tr>
                    <tr>
                      <td>Language</td>
                      <td>${systemInfo.language}</td>
                    </tr>
                    <tr>
                      <td>Timezone</td>
                      <td>${systemInfo.timezone}</td>
                    </tr>
                    <tr>
                      <td>Referrer</td>
                      <td>${systemInfo.referrer}</td>
                    </tr>
                  </table>

                  <div class="footer">
                    Submitted on ${formattedDate}<br>
                    This is an automated message from the Aurbyn Contact Form System
                  </div>
                </div>
              </div>
            </body>
          </html>
            </body>
          </html>
        `
      };

      // Send to your API endpoint that handles email sending
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitted(true)
      
      // Clear form and redirect after successful submission
      setTimeout(() => {
        setSubmitted(false)
        setFormData(initialFormState)
        router.push('/') // Redirect to home page
      }, 2000)

    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleTabChange = (index: number, type: FormType) => {
    setActiveTab(index)
    setFormType(type)
  }

  return (
    <main className="min-h-screen pt-16 sm:pt-32 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10">
            {/* Tab Navigation */}
            <div className="px-4 sm:px-8 pt-6 sm:pt-8">
              <div className="flex flex-wrap sm:flex-nowrap justify-between gap-2 bg-white/[0.03] backdrop-blur-sm rounded-xl p-1">
                {[
                  { id: 'fund', label: 'Venture Fund' },
                  { id: 'academy', label: 'Academy' },
                  { id: 'labs', label: 'Labs' },
                  { id: 'general', label: 'General' }
                ].map((type, index) => (
                  <button
                    key={type.id}
                    onClick={() => handleTabChange(index, type.id as FormType)}
                    className={`flex-1 min-w-[calc(50%-4px)] sm:min-w-0 py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-white/10 text-white shadow-sm' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-medium text-white mb-2">Get in Touch</h2>
                <p className="text-sm sm:text-base text-gray-400">{
                  formType === 'fund' ? "Looking for investment? Tell us about your startup." :
                  formType === 'academy' ? "Interested in our tech career programs? Let's discuss your goals." :
                  formType === 'labs' ? "Need technical due diligence? Share your requirements." :
                  "Have a general inquiry? We're here to help."
                }</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/[0.03] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1B998B]/50 focus:border-[#1B998B]/50 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/[0.03] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1B998B]/50 focus:border-[#1B998B]/50 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    How Did You Hear About Us?
                  </label>
                  <div className="relative">
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      required
                      className="appearance-none w-full px-4 py-3 bg-[#1a1d2d] border border-[#2a2e3f] rounded-lg text-gray-100 focus:outline-none focus:border-[#1B998B] transition-all duration-200 text-sm"
                    >
                      <option value="" disabled className="bg-[#1a1d2d]">Select an option</option>
                      {sourceOptions.map(option => (
                        <option key={option} value={option} className="bg-[#1a1d2d] py-2">
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/[0.03] border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#1B998B]/50 focus:border-[#1B998B]/50 transition-all duration-300 resize-none text-sm sm:text-base"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-xs sm:text-sm p-2.5 sm:p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500/20 text-green-400 border border-green-500/20'
                      : 'bg-gradient-to-r from-[#2E294E] to-[#1B998B] text-white hover:shadow-lg hover:shadow-[#1B998B]/20'
                  }`}
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  ) : submitted ? (
                    <>
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Message Sent</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}