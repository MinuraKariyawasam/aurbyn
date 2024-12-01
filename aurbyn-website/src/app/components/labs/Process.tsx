export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive review of technical documentation and architecture."
    },
    {
      number: "02",
      title: "Deep Technical Analysis",
      description: "Thorough examination of codebase, infrastructure, and technical practices."
    },
    {
      number: "03",
      title: "Security Validation",
      description: "Rigorous security assessment and vulnerability testing."
    },
    {
      number: "04",
      title: "Performance Testing",
      description: "Evaluation of system performance, scalability, and reliability."
    },
    {
      number: "05",
      title: "Recommendations",
      description: "Detailed report with findings and strategic recommendations."
    }
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic approach to technical due diligence that ensures thorough
            evaluation and valuable insights.
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="flex items-start gap-8 bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-[#1B998B]/10 rounded-lg flex items-center justify-center">
                <span className="text-[#1B998B] text-2xl font-bold">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}