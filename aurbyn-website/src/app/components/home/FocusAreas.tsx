// components/home/FocusAreas.tsx
const areas = [
    {
      title: "AI & Machine Learning",
      description: "Next-generation AI solutions transforming industries",
      icon: "🤖"
    },
    {
      title: "FinTech Innovation",
      description: "Revolutionary financial technology platforms",
      icon: "💳"
    },
    {
      title: "Enterprise SaaS",
      description: "Cloud-native solutions for modern businesses",
      icon: "🚀"
    },
    {
      title: "Deep Tech",
      description: "Breakthrough technologies solving complex challenges",
      icon: "🔬"
    }
  ]
  
  export default function FocusAreas() {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2E294E] mb-16">Investment Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area) => (
              <div key={area.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }