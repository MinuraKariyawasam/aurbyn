// components/ventures/Approach.tsx
const stages = [
    {
      title: "Pre-Seed",
      amount: "$250K - $500K",
      description: "Early validation, MVP development, initial market traction",
      stage: "1"
    },
    {
      title: "Seed",
      amount: "$500K - $1M",
      description: "Product-market fit, team expansion, revenue growth",
      stage: "2"
    },
    {
      title: "Series A",
      amount: "$1M - $2M",
      description: "Scaling operations, market expansion, accelerated growth",
      stage: "3"
    }
  ]
  
  export default function Approach() {
    return (
      <section className="py-20 bg-[#2E294E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Investment Approach</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Strategic capital and hands-on support at every stage
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#1B998B] transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {stages.map((stage) => (
                <div key={stage.title} className="bg-white rounded-xl p-8">
                  <div className="w-12 h-12 bg-[#1B998B] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                    {stage.stage}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                  <div className="text-[#1B998B] font-semibold mb-4">{stage.amount}</div>
                  <p className="text-gray-600">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }