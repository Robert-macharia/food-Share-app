import React from "react";

const StarRow = ({ value }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < value ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.41 2.72c-.784.57-1.84-.197-1.54-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.587 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69L9.05 2.927z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ comment }) => {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-4">
      <div className="flex items-start gap-4">
        <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{comment.name}</div>
              <div className="text-xs text-gray-500">{comment.date}</div>
            </div>
            <div className="text-sm">
              <StarRow value={comment.rating} />
            </div>
          </div>
          <p className="mt-3 text-gray-700 text-sm">{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewList = ({ comments = [] }) => {
  return (
    <div>
      {comments.map((c) => (
        <ReviewCard key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default ReviewList;