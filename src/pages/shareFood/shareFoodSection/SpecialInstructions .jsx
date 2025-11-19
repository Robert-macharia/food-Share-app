// shareFoodSection/SpecialInstructions.jsx
import React from "react";

const SpecialInstructions = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Special Instructions</h2>

      <textarea
        className="w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#bfe7cf]"
        rows={4}
        placeholder="e.g. Please call me, please bring your own container"
      />
    </div>
  );
};

export default SpecialInstructions;
