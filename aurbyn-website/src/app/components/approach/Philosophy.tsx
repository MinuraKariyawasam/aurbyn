// components/approach/Philosophy.tsx
const pillars = [
    {
      title: "Vision-Driven",
      description: "We invest in founders with ambitious visions and the capability to execute."
    },
    {
      title: "Long-term Partnership",
      description: "Beyond capital, we provide strategic guidance and operational support."
    },
    {
      title: "Innovation Focus",
      description: "We prioritize breakthrough technologies that create lasting impact."
    },
    {
      title: "Global Perspective",
      description: "We back solutions with potential for worldwide market penetration."
    }
  ]
  
  export default function Philosophy() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Investment Pillars</h2>
              <div className="space-y-8">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="flex gap-4">
                    <div className="w-1 bg-[#1B998B] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                      <p className="text-gray-600">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Thesis</h3>
              <p className="text-gray-600 mb-6">
                We believe the next generation of transformative companies will emerge 
                from the intersection of cutting-edge technology and sustainable business models.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#1B998B]">80%</div>
                  <p className="text-sm text-gray-600">Focus on Tech Innovation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-[#1B998B]">5+ Years</div>
                  <p className="text-sm text-gray-600">Investment Horizon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }