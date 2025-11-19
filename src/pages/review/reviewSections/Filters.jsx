import React from "react";

const Filters = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Newest First</button>
      <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Highest Rated</button>
    </div>
  );
};

export default Filters;