import React from "react";

const Stars = ({ value }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg key={i} className={`w-4 h-4 ${i < value ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.41 2.72c-.784.57-1.84-.197-1.54-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.587 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  ));
  return <div className="flex gap-1">{stars}</div>;
};

const RatingBar = ({ star, percent, color = "bg-green-400" }) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="w-6 text-gray-600">{star}</div>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div style={{ width: `${percent}%` }} className={`${color} h-full`} />
      </div>
      <div className="w-10 text-right text-gray-500">{percent}%</div>
    </div>
  );
};

const RatingsOverview = ({ summary }) => {
  const { average, totalReviews, distribution } = summary;
  return (
    <section className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-start gap-6">
      <div className="md:w-48 text-center md:text-left">
        <div className="text-4xl font-bold">{average.toFixed(1)}</div>
        <div className="mt-1"><Stars value={Math.round(average)} /></div>
        <div className="text-sm text-gray-500 mt-2">{totalReviews} reviews</div>
      </div>

      <div className="flex-1">
        <div className="space-y-2">
          {distribution.map((d) => (
            <RatingBar
              key={d.stars}
              star={d.stars}
              percent={d.percent}
              color={d.stars >= 4 ? "bg-green-400" : d.stars === 3 ? "bg-yellow-400" : "bg-red-400"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsOverview;