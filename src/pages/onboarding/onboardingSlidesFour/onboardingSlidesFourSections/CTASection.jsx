import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = ({ primary, secondary, smallLink }) => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => nav("/share-food")}
          className="px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition text-sm"
        >
          {primary}
        </button>

        <button
          onClick={() => nav("/food-near-you")}
          className="px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition"
        >
          {secondary}
        </button>
      </div>

      <button onClick={() => nav("/home")} className="text-xs text-gray-500 hover:underline mt-2">
        {smallLink}
      </button>
    </div>
  );
};

export default CTASection;
