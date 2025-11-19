import React from "react";

const StarSvg = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#F59E0B" : "none"} stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 .587l3.668 7.431L23.6 9.748l-5.8 5.654L19.336 24 12 19.897 4.664 24l1.536-8.598L0.4 9.748l7.932-1.73z"/>
  </svg>
);

const RatingsOverview = ({ summary = {} }) => {
  const { avgRating = 0, totalReviews = 0, distribution = {} } = summary;
  const total = Object.values(distribution).reduce((a, b) => a + b, 0) || totalReviews || 1;
  return (
    <section className="ratings-overview p-6 bg-base-100 rounded-lg shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-shrink-0">
          <div className="text-5xl font-extrabold">{avgRating.toFixed(1)}</div>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="mr-1">{<StarSvg filled={i < Math.round(avgRating)} />}</span>)}</div>
            <div className="text-sm text-gray-500">{totalReviews} reviews</div>
          </div>
        </div>

        <div className="flex-1">
          {Object.entries(distribution).sort((a, b) => b[0] - a[0]).map(([starKey, count]) => {
            const pct = Math.round((count / total) * 100);
            const barColor = starKey === "5" ? "bg-success" : starKey === "4" ? "bg-green-300" : "bg-gray-300";
            return (
              <div key={starKey} className="flex items-center gap-4 py-2">
                <div className="w-6 text-sm">{starKey}</div>
                <div className="flex-1 bg-gray-200 h-3 rounded overflow-hidden">
                  <div className={`${barColor} h-full`} style={{ width: `${pct}%` }} />
                </div>
                <div className="w-12 text-right text-sm text-gray-600">{pct}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RatingsOverview;