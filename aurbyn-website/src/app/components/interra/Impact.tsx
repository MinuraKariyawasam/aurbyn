// components/interra/Impact.tsx
export default function Impact() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#1B998B] mb-2">1000+</div>
              <p className="text-gray-600">Students Mentored</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#1B998B] mb-2">85%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#1B998B] mb-2">50K+</div>
              <p className="text-gray-600">YouTube Subscribers</p>
            </div>
          </div>
        </div>
      </section>
    )
  }