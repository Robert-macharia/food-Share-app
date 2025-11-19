import React from 'react'

const DonorCard = ({ donor }) => {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3">
        <img src={donor.avatar} alt={donor.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="text-sm font-semibold">Donated by</div>
          <div className="text-sm text-gray-700">{donor.name}</div>
          <a href={donor.profileUrl} className="text-xs text-[#1f7a4a]">View Profile</a>
        </div>
      </div>
    </div>
  )
}

export default DonorCard
