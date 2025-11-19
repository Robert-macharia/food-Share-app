import React from "react";

const IconCircle = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-600">
    {children}
  </div>
);

const DetailsSection = ({ bullets = [] }) => {
  return (
    <div className="space-y-6">
      {bullets.map((b) => (
        <div key={b.id} className="flex items-start gap-4">
          <IconCircle>
            {/* simple illustrative SVG icon (generic) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </IconCircle>

          <div>
            <div className="text-gray-900 font-medium">{b.title}</div>
            <div className="text-gray-600 mt-1 max-w-xl">{b.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsSection;
