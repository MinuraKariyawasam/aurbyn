// components/labs/CaseStudies.tsx
export default function CaseStudies() {
  const cases = [
    {
      title: "AI Platform Validation",
      category: "Machine Learning",
      image: "/api/placeholder/600/400",
      description: "Technical validation of a machine learning platform's architecture and scalability."
    },
    {
      title: "Blockchain Security",
      category: "Cryptocurrency",
      image: "/api/placeholder/600/400",
      description: "Comprehensive security assessment of a blockchain infrastructure."
    },
    {
      title: "Cloud Migration",
      category: "Infrastructure",
      image: "/api/placeholder/600/400",
      description: "Technical due diligence for a large-scale cloud migration project."
    }
  ]

  return (
    <section className="py-20 bg-gray-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Examples of our technical due diligence work across various technology sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_) => (
            <div 
              key={case_.title}
              className="group relative overflow-hidden rounded-xl bg-gray-800/30"
            >
              <img 
                src={case_.image}
                alt={case_.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/0 p-6 flex flex-col justify-end">
                <span className="text-[#1B998B] text-sm font-medium mb-2">
                  {case_.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {case_.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {case_.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}