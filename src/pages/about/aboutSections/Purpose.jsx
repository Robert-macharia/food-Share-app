import React from 'react'

const Purpose = ({ heading, paragraphs = [], pillars = [] }) => {
  return (
    <section className="py-12">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-700">{heading}</h2>
        <div className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm">{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">{/* icon placeholder */}</div>
            <div>
              <h3 className="font-semibold text-emerald-700">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Purpose
