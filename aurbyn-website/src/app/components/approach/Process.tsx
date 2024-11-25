const steps = [
    {
      title: "Initial Screening",
      description: "Quick assessment of fit with investment thesis and criteria",
      duration: "1-2 Days"
    },
    {
      title: "Deep Dive",
      description: "Detailed evaluation of technology, team, and market opportunity",
      duration: "2-3 Weeks"
    },
    {
      title: "Due Diligence",
      description: "Comprehensive review of business, legal, and financial aspects",
      duration: "3-4 Weeks"
    },
    {
      title: "Investment Decision",
      description: "Final evaluation and term sheet presentation",
      duration: "1-2 Weeks"
    }
  ]
  
  export default function Process() {
    return (
      <section className="py-20 bg-[#2E294E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Investment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative bg-white p-6 rounded-xl">
                <div className="w-10 h-10 bg-[#1B998B] text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-[#1B998B] font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  