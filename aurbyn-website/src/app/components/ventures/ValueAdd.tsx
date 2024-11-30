export default function ValueAdd() {
    const services = [
      {
        title: "Strategic Growth Support",
        description: "Access our network of industry experts, potential customers, and strategic partners to accelerate your growth trajectory.",
        icon: "⚡️",
        color: "from-blue-500/20 to-indigo-500/20"
      },
      {
        title: "Operational Excellence",
        description: "Hands-on support in key operational areas including talent acquisition, product development, and go-to-market strategy.",
        icon: "🚀",
        color: "from-emerald-500/20 to-teal-500/20"
      },
      {
        title: "Capital Network",
        description: "Strong relationships with leading global investors to support your future funding rounds and strategic opportunities.",
        icon: "💫",
        color: "from-violet-500/20 to-purple-500/20"
      }
    ]
  
    return (
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
              Value-Add Partnership
            </h2>
            <p className="text-xl text-gray-600/90 max-w-2xl mx-auto font-light">
              Beyond capital, we provide comprehensive support to help you scale effectively
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="group relative overflow-hidden"
              >
                {/* Background gradient and effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#2E294E] to-[#1B998B] bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-600/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }