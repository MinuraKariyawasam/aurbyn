// components/interra/Services.tsx
const services = [
    {
      title: "Career Mentorship",
      description: "1-on-1 guidance from industry experts",
      icon: "🎯"
    },
    {
      title: "Technical Interview Prep",
      description: "Mock interviews and feedback sessions",
      icon: "💻"
    },
    {
      title: "Resume Building",
      description: "Professional CV review and optimization",
      icon: "📝"
    }
  ]
  
  export default function Services() {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  