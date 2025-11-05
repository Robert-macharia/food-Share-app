import React from 'react'

const Values = ({ items = [] }) => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((v) => (
          <div key={v.id} className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 text-xl">{v.icon}</div>
            <h4 className="font-semibold mb-2 text-gray-900">{v.title}</h4>
            <p className="text-gray-600 text-sm">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Values
