import React from 'react'

const Testimonials = ({ items = [] }) => {
  return (
    <section className="mt-12 mb-12">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Stories from our Community</h3>
      <div className="space-y-4">
        {items.map((t) => (
          <blockquote key={t.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <p className="text-gray-800">“{t.quote}”</p>
            <footer className="text-sm text-gray-500 mt-3">— {t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
