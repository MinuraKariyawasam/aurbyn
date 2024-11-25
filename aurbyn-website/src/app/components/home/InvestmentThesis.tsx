// components/home/InvestmentThesis.tsx
export default function InvestmentThesis() {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2E294E] mb-6">Investment Thesis</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#1B998B] pl-4">
                  <h3 className="text-xl font-semibold mb-2">Future-First Technologies</h3>
                  <p className="text-gray-600">
                    We invest in startups building transformative solutions in AI, blockchain, 
                    and emerging technologies.
                  </p>
                </div>
                <div className="border-l-4 border-[#1B998B] pl-4">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Innovation</h3>
                  <p className="text-gray-600">
                    Supporting ventures that combine profitability with positive global impact.
                  </p>
                </div>
                <div className="border-l-4 border-[#1B998B] pl-4">
                  <h3 className="text-xl font-semibold mb-2">Global Scale</h3>
                  <p className="text-gray-600">
                    Backing solutions with potential for worldwide market penetration.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-[#2E294E] mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-6 text-lg">
                To build an ecosystem where groundbreaking ideas evolve into 
                industry-defining companies, driving technological advancement 
                and sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Investment Range</h4>
                  <p className="text-gray-600">$250K - $2M</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Stage Focus</h4>
                  <p className="text-gray-600">Pre-seed to Series A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }