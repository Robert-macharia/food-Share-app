import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ comments = [] }) => {
  return (
    <div className="review-list mt-4 space-y-4">
      {comments.map(c => (
        <ReviewCard key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default ReviewList;