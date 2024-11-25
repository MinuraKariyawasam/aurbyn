// app/contact/page.tsx
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

export const metadata = {
  title: 'Contact Us | Aurbyn',
  description: 'Get in touch with Aurbyn for investment opportunities and general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="min-h-screen grid lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}