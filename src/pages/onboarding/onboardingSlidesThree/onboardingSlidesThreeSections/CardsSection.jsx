import React from "react";

const Icon = ({ name }) => {
  const common = { className: "w-5 h-5", stroke: "currentColor", fill: "none", strokeWidth: 1.5 };
  if (name === "search") {
    return (
      <svg {...common} viewBox="0 0 24 24" className="w-5 h-5 text-yellow-600">
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (name === "select") {
    return (
      <svg {...common} viewBox="0 0 24 24" className="w-5 h-5 text-yellow-600">
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  // check
  return (
    <svg {...common} viewBox="0 0 24 24" className="w-5 h-5 text-yellow-600">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
};

const Card = ({ c }) => (
  <div className="rounded-lg p-6 flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-4">
      <Icon name={c.icon} />
    </div>
    <div className="text-sm font-medium text-gray-900">{c.title}</div>
    <div className="mt-2 text-xs text-gray-500">{c.description}</div>
  </div>
);

const CardsSection = ({ cards = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-stretch">
      {cards.map((c) => (
        <Card key={c.id} c={c} />
      ))}
    </div>
  );
};

export default CardsSection;
