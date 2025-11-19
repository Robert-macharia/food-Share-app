import React from 'react'

const ActionBar = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="flex items-center gap-3">
        <button className="bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">Contact Donor</button>
        <button className="bg-[#1f7a4a] text-white px-5 py-3 rounded-full shadow-lg">Claim Item</button>
      </div>
    </div>
  )
}

export default ActionBar
