import React from 'react'

const Cards = ({ items = [] }) => {
  return (
    // push cards slightly down (approx 20px) using mt-5 (1.25rem)
    <section className="mt-5">
      {/* elevate cards above hero overlays by giving the grid a stacking context */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => {
          const centerIdx = Math.floor(items.length / 2)
          const isCenter = idx === centerIdx
          const baseClasses = 'rounded-xl text-gray-900'
          const centerClasses = 'p-8 shadow-2xl transform -translate-y-4 scale-105 z-30 bg-white'
          const normalClasses = 'p-6 shadow-md bg-white'
          return (
            <article key={it.id} className={`relative ${baseClasses} ${isCenter ? centerClasses : normalClasses}`}>
              <div className={`${isCenter ? 'w-12 h-12 text-2xl' : 'w-10 h-10'} rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3`}>{it.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-600 mb-4">{it.description}</p>
              {it.cta && (
                <button className="text-emerald-700 font-medium">{it.cta}</button>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Cards
