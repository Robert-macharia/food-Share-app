import React from "react";

const StarRow = ({ rating = 0 }) => (
  <div className="flex">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="inline-block mr-1" width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "#F59E0B" : "none"} stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 .587l3.668 7.431L23.6 9.748l-5.8 5.654L19.336 24 12 19.897 4.664 24l1.536-8.598L0.4 9.748l7.932-1.73z"/>
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ comment }) => {
  return (
    <article className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-start gap-4">
        <img src={comment.avatar} alt={comment.user} className="w-12 h-12 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{comment.user}</div>
              <div className="text-xs text-gray-400">{comment.date}</div>
            </div>
            <div className="text-sm"><StarRow rating={comment.rating} /></div>
          </div>
          <p className="text-gray-700 mt-3">{comment.text}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;