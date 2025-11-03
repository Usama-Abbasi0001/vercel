import React from 'react'

function ToolsSec() {
  return (
    <>
    <div className='lg:w-[1000px] md:w-[700px] w-[350px] border border-white/10 tetx-center flex flex-col justify-center mx-auto'>
        <p className="px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-24 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold border border-white/10">
  Develop with your favorite tools — Launch globally, instantly — Keep pushing
</p>

      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-4 ">
      <div className="w-full max-w-6xl">
        {/* Main Hero Card */}
        <div className="border border-white/10 rounded-lg overflow-hidden">
          {/* Top Hero Section */}
          <div className="border-b border-white/10 py-12 px-8 flex flex-col items-center justify-center text-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl font-medium">
              <span>Scale your</span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm md:text-base font-semibold">
                Enterprise
              </span>
              <span>without compromising</span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span className="text-sm md:text-base font-semibold">Security</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="border-r border-white/10 px-8 py-12 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Ready to deploy?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Start building with a free account. Speak to an expert for your{" "}
                  <span className="text-blue-400 font-semibold">Pro</span> or{" "}
                  <span className="text-blue-400 font-semibold">Enterprise</span> needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
                  Start Deploying
                </button>
                <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
                  Talk to an Expert
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="px-8 py-12 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold">
                  Explore Vercel Enterprise
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  with an interactive product tour, trial, or a personalized demo.
                </p>
              </div>
              <button className="mt-8 w-full md:w-auto px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Explore Enterprise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div></>
  )
}

export default ToolsSec;