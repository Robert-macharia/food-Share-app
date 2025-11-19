import React from "react";

const HeroSection = ({ title, subtitle }) => {
  return (
    <header className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-1.5 rounded-full bg-green-200 shadow-sm" />
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

export default HeroSection;
