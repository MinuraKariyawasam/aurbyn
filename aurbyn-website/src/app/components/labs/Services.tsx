// components/labs/Services.tsx
import { Microscope, GitBranch, Lock, Scale, Cpu, Zap } from 'lucide-react'

const services = [
  {
    icon: Microscope,
    title: "Technical Due Diligence",
    description: "Comprehensive analysis of technology stacks, architectures, and technical capabilities."
  },
  {
    icon: GitBranch,
    title: "Code Quality Analysis",
    description: "Deep review of source code, development practices, and technical debt assessment."
  },
  {
    icon: Lock,
    title: "Security Assessment",
    description: "Thorough evaluation of security measures, vulnerabilities, and data protection practices."
  },
  {
    icon: Scale,
    title: "Scalability Validation",
    description: "Assessment of system performance, scalability potential, and infrastructure resilience."
  },
  {
    icon: Cpu,
    title: "Technical Innovation",
    description: "Evaluation of technological differentiation and competitive advantages."
  },
  {
    icon: Zap,
    title: "Performance Testing",
    description: "Rigorous testing of system performance, reliability, and optimization opportunities."
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical evaluation services to validate technology investments
            and identify opportunities for optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors duration-200"
            >
              <service.icon className="w-8 h-8 text-[#1B998B] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}