import React, { useState } from 'react'
import Filters from './Filters'

const Header = () => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">Find Food Near You</h1>
        <p className="mt-1 text-sm text-gray-600">Browse available food listings from your community.</p>
      </div>

      <div className="flex-1 sm:flex-none">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
          <input className="flex-1 min-w-0 bg-transparent outline-none text-sm" placeholder="Search for food (eg. bread, apples...)" />
          <button className="ml-3 bg-[#1f7a4a] text-white px-4 py-1 rounded-full text-sm">Search</button>
        </div>
        {/* filter chips: allow horizontal scroll on small screens to avoid overlap */}
        <div className="mt-3 text-sm">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-1">
            <button className="shrink-0 bg-white border border-gray-200 rounded-full px-3 py-1">Category</button>
            <button className="shrink-0 bg-white border border-gray-200 rounded-full px-3 py-1">Distance</button>
            <button className="shrink-0 bg-white border border-gray-200 rounded-full px-3 py-1">ExpirationDate</button>
            <button className="shrink-0 bg-white border border-gray-200 rounded-full px-3 py-1">Sort By</button>
          </div>

          {/* mobile filter toggle */}
          <div className="mt-2 md:hidden">
            <button onClick={() => setShowFilters((s) => !s)} className="bg-[#1f7a4a] text-white px-3 py-1 rounded-full text-sm">
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>

        {/* render mobile filters inline when toggled */}
        {showFilters && (
          <div className="mt-4 md:hidden">
            <Filters mobile />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
