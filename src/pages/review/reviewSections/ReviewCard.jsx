import React from "react";

const StarRow = ({ rating = 0 }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, i) => {
      const filled = i < rating;
      return (
        <svg
          key={i}
          className={`w-4 h-4 ${i !== 0 ? "ml-2" : ""}`}
          viewBox="0 0 24 24"
          fill={filled ? "currentColor" : "none"}
          stroke={filled ? "none" : "#E5E7EB"}
          strokeWidth={filled ? 0 : 1.5}
          aria-hidden
        >
          <path
            d="M12 .587l3.668 7.431L23.6 9.748l-5.8 5.654L19.336 24 12 19.897 4.664 24l1.536-8.598L0.4 9.748l7.932-1.73z"
            // use currentColor for filled stars (set below)
          />
          <style>{filled ? `svg { color: #F59E0B; }` : `svg { color: #E5E7EB; }`}</style>
        </svg>
      );
    })}
  </div>
);

const ReviewCard = ({ comment }) => {
  return (
    <article className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">
      <div className="flex items-start gap-4">
        <img
          src={comment.avatar}
          alt={comment.user}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium text-sky-200">{comment.user}</div>
              <div className="text-xs text-gray-400 mt-0.5">{comment.date}</div>
            </div>
            <div className="ml-4">
              <StarRow rating={comment.rating} />
            </div>
          </div>
          <p className="text-gray-600 mt-3 leading-relaxed text-sm">{comment.text}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;