export default function Hero() {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#2E294E] to-[#1B998B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shaping the Future 
            <span className="block">of Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Strategic capital and acceleration for visionary startups 
            transforming industries.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#2E294E] px-8 py-3 rounded-lg font-medium">
              Our Approach
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      </section>
    )
  }