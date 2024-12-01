// app/contact/page.tsx
import ContactForm from '../components/contact/ContactForm'

export const metadata = {
  title: 'Contact Us | Aurbyn',
  description: 'Get in touch with Aurbyn for investment opportunities and general inquiries.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E294E] to-[#1B998B]/10 pt-32 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="animate-fadeIn">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}