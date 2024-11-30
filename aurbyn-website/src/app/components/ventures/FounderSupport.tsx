'use client'

export default function FounderSupport() {
  const resources = [
    {
      title: "Startup Toolkit",
      description: "Access to essential tools, templates, and frameworks for building your startup",
      items: [
        "Financial modeling templates",
        "Legal document templates",
        "Product development frameworks",
        "Marketing playbooks"
      ],
      gradient: "from-teal-500/10 via-[#1B998B]/10 to-emerald-500/10",
      hoverGradient: "from-teal-500/20 via-[#1B998B]/20 to-emerald-500/20"
    },
    {
      title: "Expert Network",
      description: "Connect with industry experts and experienced founders",
      items: [
        "1-on-1 mentorship",
        "Industry introductions",
        "Technical advisors",
        "Domain experts"
      ],
      gradient: "from-[#2E294E]/10 via-purple-500/10 to-indigo-500/10",
      hoverGradient: "from-[#2E294E]/20 via-purple-500/20 to-indigo-500/20"
    },
    {
      title: "Growth Resources",
      description: "Resources and support for scaling your business",
      items: [
        "Growth marketing tools",
        "Talent acquisition support",
        "Sales frameworks",
        "Partnership opportunities"
      ],
      gradient: "from-blue-500/10 via-cyan-500/10 to-[#1B998B]/10",
      hoverGradient: "from-blue-500/20 via-cyan-500/20 to-[#1B998B]/20"
    }
  ]

  return (
    <section className="relative py-32 bg-[#2E294E] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E294E]/95 to-[#2E294E]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#1B998B] bg-clip-text text-transparent">
            Comprehensive Founder Support
          </h2>
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto font-light">
            Beyond capital, we provide founders with the tools, resources, and connections
            needed to build successful companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="group relative">
              {/* Card background with gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${resource.gradient} opacity-10`} />
              
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm" />
              
              {/* Content */}
              <div className="relative h-full p-8 rounded-2xl border border-white/10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#1B998B] bg-clip-text text-transparent">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300/90 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {resource.items.map((item) => (
                    <div key={item} className="flex items-start group/item">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-[#1B998B] group-hover/item:scale-125 transition-transform" />
                      <span className="text-gray-300/90 group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
