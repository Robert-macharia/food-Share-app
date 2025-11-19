import React from 'react'
import FoodCard from './FoodCard'

const CardsGrid = ({ items = [] }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <FoodCard item={it} key={it.id} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="px-6 py-2 rounded-full bg-white border border-gray-200">Load More</button>
      </div>
    </div>
  )
}

export default CardsGrid
