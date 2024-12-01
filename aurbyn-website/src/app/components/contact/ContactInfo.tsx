// components/contact/ContactInfo.tsx
export default function ContactInfo() {
  return (
    <div className="px-8 py-24 lg:px-16 lg:py-32">
      <div className="max-w-xl">
        <span className="text-[#1B998B] text-sm font-medium">
          Get in Touch
        </span>
        
        <h1 className="mt-4 text-5xl font-bold text-white">
          Let's Build Something<br />
          <span className="text-[#1B998B]">Extraordinary</span> Together
        </h1>
        
        <p className="mt-6 text-lg text-white/80">
          Whether you're a founder, aspiring tech professional, or seeking technical
          validation, we're here to help you succeed.
        </p>

        <div className="mt-12 space-y-8 text-white">
          <div>
            <h3 className="text-[#1B998B] font-medium mb-2">Email Us</h3>
            <a href="mailto:hello@aurbyn.com" className="hover:text-[#1B998B] transition-colors">
              hello@aurbyn.com
            </a>
          </div>

          <div>
            <h3 className="text-[#1B998B] font-medium mb-2">Visit Us</h3>
            <p>Colombo, Sri Lanka</p>
          </div>

          <div>
            <h3 className="text-[#1B998B] font-medium mb-2">Working Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}