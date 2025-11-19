import React from 'react'

const Story = ({ events = [] }) => {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold text-gray-700 text-center mb-6">Our Story</h2>

      <div className="max-w-3xl mx-auto relative">
        {/* vertical timeline line */}
        <div className="absolute left-16 top-4 bottom-4 w-px bg-amber-200" />

        <div className="space-y-6 relative">
          {events.map((e, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center w-16">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-sm font-semibold text-amber-800">{/* icon placeholder */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" />
                  </svg>
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">{e.year}</div>
              </div>

              <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800">{e.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
