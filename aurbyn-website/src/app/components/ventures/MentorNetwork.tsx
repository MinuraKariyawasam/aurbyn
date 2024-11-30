// components/ventures/MentorNetwork.tsx
export default function MentorNetwork() {
    const areas = [
      {
        title: "Technical Excellence",
        expertise: [
          "Cloud Architecture",
          "AI/ML Development",
          "Security & Compliance",
          "Scalable Infrastructure"
        ],
        gradient: "from-cyan-500/20 to-blue-500/20"
      },
      {
        title: "Business Strategy",
        expertise: [
          "Go-to-Market Strategy",
          "Business Model Innovation",
          "Financial Planning",
          "International Expansion"
        ],
        gradient: "from-purple-500/20 to-pink-500/20"
      },
      {
        title: "Growth & Operations",
        expertise: [
          "Growth Marketing",
          "Sales & BD",
          "Team Building",
          "Operational Efficiency"
        ],
        gradient: "from-emerald-500/20 to-teal-500/20"
      }
    ]
  
    return (
      <section className="py-32 bg-[#2E294E] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30 bg-[url('/grid.svg')] bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E294E] via-[#2E294E]/95 to-[#2E294E]" />
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#1B998B] bg-clip-text text-transparent">
              Expert Mentor Network
            </h2>
            <p className="text-xl text-gray-300/90 max-w-2xl mx-auto font-light">
              Access industry leaders and domain experts who can guide you through specific challenges
            </p>
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.title} className="group relative">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`} />
                
                {/* Card content */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
                  <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white to-[#1B998B] bg-clip-text text-transparent">
                    {area.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {area.expertise.map((item) => (
                      <li key={item} className="flex items-center group/item">
                        <span className="w-2 h-2 bg-[#1B998B] rounded-full mr-4 group-hover/item:scale-125 transition-transform" />
                        <span className="text-gray-300/90 group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-20 text-center">
            <p className="text-gray-300/90 max-w-2xl mx-auto font-light leading-relaxed">
              Our mentors are successful founders, industry veterans, and domain experts 
              who are committed to helping the next generation of entrepreneurs succeed.
            </p>
          </div>
        </div>
      </section>
    )
  }
  