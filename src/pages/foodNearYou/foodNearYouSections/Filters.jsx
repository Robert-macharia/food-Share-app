const Filters = ({ mobile = false }) => {
  const base = mobile ? 'bg-white p-4 rounded-lg border border-gray-100' : 'sticky top-24 bg-[#f6f5e8] p-4 rounded-lg'

  return (
    <div className={base}>
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter & Sort</h3>

      <div className="mb-4">
        <div className="text-xs font-medium text-gray-500 mb-2">Category</div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Produce
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Baked Goods
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Dairy
          </label>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-medium text-gray-500 mb-2">Distance</div>
        <input type="range" min="0" max="10" defaultValue="2" className="w-full" />
        <div className="text-xs text-gray-500 mt-1">Up to 10 miles</div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-medium text-gray-500 mb-2">Sort By</div>
        <select className="w-full rounded-full border border-gray-200 px-3 py-2 text-sm">
          <option>Newest</option>
          <option>Closest Distance</option>
          <option>Expiration Date</option>
        </select>
      </div>

      <button className="w-full bg-[#1f7a4a] text-white rounded-full py-2 font-medium">Apply Filters</button>
    </div>
  )
}

export default Filters
