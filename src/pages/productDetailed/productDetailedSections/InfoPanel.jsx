import React from 'react'

const InfoPanel = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-emerald-600 font-semibold bg-emerald-50 inline-block px-3 py-1 rounded-full">{item.category}</div>
          <h2 className="text-xl font-bold text-gray-900 mt-3">{item.title}</h2>
          <div className="text-sm text-gray-500 mt-1">Posted {item.posted}</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Quantity</div>
          <div className="ml-auto font-semibold text-gray-900">{item.quantity}</div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Best By</div>
          <div className="ml-auto font-semibold text-gray-900">{item.bestBy}</div>
        </div>

        <div className="p-3 bg-white rounded-lg border border-gray-100">
          <div className="text-sm font-medium text-gray-700 mb-2">Pickup Information</div>
          <div className="text-sm text-gray-500">{item.pickup}</div>
          <div className="mt-3 h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">300 x 300</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-gray-700 mb-2">Special Instructions</div>
        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{item.specialInstructions}</div>
      </div>
    </div>
  )
}

export default InfoPanel
