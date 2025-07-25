export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="w-full h-16 bg-white/10 rounded animate-pulse mb-6"></div>
            <div className="w-3/4 h-8 bg-white/10 rounded animate-pulse mb-4"></div>
            <div className="w-1/2 h-8 bg-white/10 rounded animate-pulse mb-8"></div>
            <div className="flex space-x-4">
              <div className="w-40 h-12 bg-white/10 rounded animate-pulse"></div>
              <div className="w-32 h-12 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Service sections skeleton */}
      <div className="space-y-0">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="w-3/4 h-12 bg-[#FAFAF8] rounded animate-pulse mb-6"></div>
                  <div className="w-full h-6 bg-[#FAFAF8] rounded animate-pulse mb-4"></div>
                  <div className="w-5/6 h-6 bg-[#FAFAF8] rounded animate-pulse mb-6"></div>
                  <div className="space-y-3 mb-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-[#0A3A2E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div className="w-4/5 h-4 bg-[#FAFAF8] rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-rustic border border-[#333333]">
                      <div className="w-20 h-4 bg-[#FAFAF8] rounded animate-pulse mb-2"></div>
                      <div className="w-32 h-4 bg-[#FAFAF8] rounded animate-pulse"></div>
                    </div>
                    <div className="bg-white p-6 rounded-rustic border border-[#333333]">
                      <div className="w-16 h-4 bg-[#FAFAF8] rounded animate-pulse mb-2"></div>
                      <div className="w-24 h-4 bg-[#FAFAF8] rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-48 h-12 bg-[#0A3A2E] rounded animate-pulse"></div>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="aspect-[4/3] bg-[#FAFAF8] rounded-rustic animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process overview skeleton */}
      <div className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-80 h-12 bg-white/10 rounded animate-pulse mx-auto mb-6"></div>
            <div className="w-full max-w-3xl h-6 bg-white/10 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="w-12 h-4 bg-white/10 rounded animate-pulse mx-auto mb-1"></div>
                <div className="w-32 h-6 bg-white/10 rounded animate-pulse mx-auto mb-2"></div>
                <div className="w-24 h-4 bg-white/10 rounded animate-pulse mx-auto mb-4"></div>
                <div className="w-16 h-6 bg-white/10 rounded-full animate-pulse mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}