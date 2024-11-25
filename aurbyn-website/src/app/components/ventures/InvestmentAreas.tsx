const areas = [
    {
      title: "AI & Machine Learning",
      description: "Transformative AI solutions across industries, from enterprise automation to consumer applications.",
      icon: "🤖",
      examples: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Enterprise SaaS",
      description: "Cloud-native platforms that revolutionize how businesses operate and scale.",
      icon: "🚀",
      examples: ["Workflow Automation", "Data Analytics", "Industry-Specific Solutions"]
    },
    {
      title: "FinTech",
      description: "Next-generation financial technologies reshaping banking, payments, and investments.",
      icon: "💳",
      examples: ["Digital Banking", "Payment Solutions", "WealthTech"]
    }
  ]
  
  export default function InvestmentAreas() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investment Focus</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We focus on high-growth sectors with transformative potential
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {areas.map((area) => (
              <div key={area.title} className="bg-gray-50 rounded-xl p-8">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.examples.map((example) => (
                    <li key={example} className="text-[#1B998B]">• {example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }