// components/ventures/StartupJourney.tsx
export default function StartupJourney() {
  const stages = [
    {
      stage: "Ideation & Validation",
      duration: "1-3 months",
      focus: [
        "Market research & validation",
        "Customer discovery",
        "MVP planning",
        "Initial team formation"
      ],
      support: [
        "Mentorship sessions",
        "Market research tools",
        "Customer interview frameworks",
        "Technical architecture guidance"
      ]
    },
    {
      stage: "Build & Launch",
      duration: "3-6 months",
      focus: [
        "MVP development",
        "Initial user acquisition",
        "Product iterations",
        "Go-to-market strategy"
      ],
      support: [
        "Technical resources",
        "User testing platform",
        "Marketing support",
        "Launch strategy"
      ]
    },
    {
      stage: "Growth & Scale",
      duration: "6-12 months",
      focus: [
        "User growth",
        "Product optimization",
        "Team expansion",
        "Business model refinement"
      ],
      support: [
        "Growth frameworks",
        "Hiring support",
        "Investor networking",
        "Operational guidance"
      ]
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
            Your Startup Journey
          </h2>
          <p className="text-xl text-gray-600/90 max-w-2xl mx-auto font-light">
            We provide comprehensive support at every stage of your startup journey,
            from initial concept to market success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {stages.map((stage, index) => (
            <div key={stage.stage} className="relative group">
              {/* Connector line */}
              {index < stages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-[#1B998B]/20 to-[#2E294E]/20 transform translate-x-1/2" />
              )}
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-500">
                {/* Stage number */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1B998B] to-[#2E294E] text-white rounded-xl flex items-center justify-center text-xl font-bold transform group-hover:scale-110 transition-transform duration-500">
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
                    {stage.stage}
                  </h3>
                  <p className="text-[#1B998B] font-medium mb-6">{stage.duration}</p>
                  
                  <div className="space-y-8">
                    <div className="backdrop-blur-sm rounded-lg p-6 bg-gray-50/50">
                      <h4 className="font-semibold mb-4 text-[#2E294E]">Founder Focus</h4>
                      <ul className="space-y-3">
                        {stage.focus.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#1B998B] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="backdrop-blur-sm rounded-lg p-6 bg-gray-50/50">
                      <h4 className="font-semibold mb-4 text-[#2E294E]">Our Support</h4>
                      <ul className="space-y-3">
                        {stage.support.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#1B998B] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
