import React from 'react'

const FoodCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="h-40 bg-gray-100 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-gray-500">{item.distance}</div>
          <div className="text-sm text-[#1f7a4a] font-medium">Posted 2d ago</div>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
