import React from "react";

const Filters = () => {
  return (
    <div className="filters flex items-center justify-between mt-6">
      <h2 className="text-lg font-semibold">All Reviews</h2>
      <div className="flex items-center gap-2">
        <button className="btn btn-sm btn-ghost badge badge-accent">Newest First</button>
        <button className="btn btn-sm btn-ghost">Highest Rated</button>
      </div>
    </div>
  );
};

export default Filters;