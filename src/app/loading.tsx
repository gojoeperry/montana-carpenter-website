export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FAFAF8] rounded-rustic animate-pulse"></div>
              <div className="hidden sm:block">
                <div className="w-48 h-6 bg-[#FAFAF8] rounded animate-pulse mb-1"></div>
                <div className="w-32 h-3 bg-[#FAFAF8] rounded animate-pulse"></div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-16 h-4 bg-[#FAFAF8] rounded animate-pulse"></div>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="w-32 h-4 bg-[#FAFAF8] rounded animate-pulse"></div>
              <div className="w-24 h-8 bg-[#0A3A2E] rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-20 py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="w-full h-16 bg-white/10 rounded animate-pulse mb-6"></div>
            <div className="w-3/4 h-8 bg-white/10 rounded animate-pulse mb-4"></div>
            <div className="w-1/2 h-8 bg-white/10 rounded animate-pulse mb-8"></div>
            <div className="flex space-x-4">
              <div className="w-32 h-12 bg-white/10 rounded animate-pulse"></div>
              <div className="w-32 h-12 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-96 h-12 bg-[#FAFAF8] rounded animate-pulse mx-auto mb-6"></div>
            <div className="w-full max-w-3xl h-6 bg-[#FAFAF8] rounded animate-pulse mx-auto mb-4"></div>
            <div className="w-2/3 h-6 bg-[#FAFAF8] rounded animate-pulse mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white border border-[#333333] rounded-rustic overflow-hidden">
                <div className="aspect-[4/3] bg-[#FAFAF8] animate-pulse"></div>
                <div className="p-6">
                  <div className="w-3/4 h-6 bg-[#FAFAF8] rounded animate-pulse mb-4"></div>
                  <div className="w-full h-4 bg-[#FAFAF8] rounded animate-pulse mb-2"></div>
                  <div className="w-2/3 h-4 bg-[#FAFAF8] rounded animate-pulse mb-4"></div>
                  <div className="w-24 h-8 bg-[#0A3A2E] rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}