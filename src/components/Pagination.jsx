import React from "react";

const Pagination = ({ totalPages = 1, currentPage = 1 }) => {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);
  return (
    <nav className="flex items-center justify-center gap-3 text-sm text-gray-600">
      {pages.map(p => (
        <button key={p} className={`w-8 h-8 rounded-full ${p === currentPage ? "bg-green-200 text-green-800" : "bg-white border"}`}>
          {p}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;