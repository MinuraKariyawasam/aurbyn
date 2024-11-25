// components/contact/ContactInfo.tsx
export default function ContactInfo() {
    return (
      <div className="relative bg-[#2E294E] py-20 px-8 flex items-center">
        <div className="mx-auto max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-8">Get in Touch</h1>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-semibold text-[#1B998B] mb-4">For Startups</h2>
              <p className="text-gray-300 mb-4">
                If you're building something extraordinary and looking for investment,
                tell us about your vision.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>• Pre-seed to Series A funding</li>
                <li>• Strategic guidance</li>
                <li>• Network access</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-[#1B998B] mb-4">For General Inquiries</h2>
              <p className="text-gray-300 mb-4">
                Questions about Aurbyn or our portfolio companies? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[#1B998B]">Email</p>
                  <p className="text-gray-300">hello@aurbyn.com</p>
                </div>
                <div>
                  <p className="text-[#1B998B]">Location</p>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }