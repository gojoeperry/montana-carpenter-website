export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <div className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="w-2/3 h-16 bg-white/10 rounded animate-pulse mb-6"></div>
            <div className="w-full h-8 bg-white/10 rounded animate-pulse mb-4"></div>
            <div className="w-4/5 h-8 bg-white/10 rounded animate-pulse mb-8"></div>
            <div className="flex space-x-4">
              <div className="w-40 h-12 bg-white/10 rounded animate-pulse"></div>
              <div className="w-32 h-12 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio gallery skeleton */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-80 h-12 bg-[#FAFAF8] rounded animate-pulse mx-auto mb-6"></div>
            <div className="w-full max-w-3xl h-6 bg-[#FAFAF8] rounded animate-pulse mx-auto mb-4"></div>
            <div className="w-2/3 h-6 bg-[#FAFAF8] rounded animate-pulse mx-auto"></div>
          </div>
          
          {/* Filter buttons skeleton */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-32 h-12 bg-[#FAFAF8] rounded-rustic animate-pulse"></div>
            ))}
          </div>
          
          {/* Gallery grid skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="group bg-white border border-[#333333] rounded-rustic overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-[#FAFAF8] animate-pulse"></div>
                  <div className="absolute inset-0 bg-black/60">
                    <div className="absolute top-4 left-4">
                      <div className="w-20 h-6 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-3/4 h-6 bg-white/20 rounded animate-pulse mb-2"></div>
                      <div className="w-full h-4 bg-white/20 rounded animate-pulse mb-3"></div>
                      <div className="w-24 h-8 bg-white/20 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load more button skeleton */}
          <div className="text-center mt-12">
            <div className="w-48 h-12 bg-[#0A3A2E] rounded animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}