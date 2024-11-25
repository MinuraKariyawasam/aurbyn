export default function Hero() {
    return (
      <section className="relative bg-gray-50 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">
              Investing in 
              <span className="text-[#1B998B]"> Tomorrow's</span> Tech
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We partner with visionary founders building revolutionary technologies 
              that reshape industries and create lasting impact.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-[#2E294E] mb-2">$2M+</div>
                <p className="text-gray-600">Investment Range</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2E294E] mb-2">Pre-Seed</div>
                <p className="text-gray-600">to Series A</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2E294E] mb-2">25+</div>
                <p className="text-gray-600">Portfolio Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }