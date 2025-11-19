import React from 'react'

const CoreValues = ({ items = [] }) => {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold text-gray-700 text-center mb-6">Our Core Values</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((v, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">{/* icon */}</div>
              <div>
                <h3 className="font-semibold text-gray-800">{v.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{v.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoreValues
