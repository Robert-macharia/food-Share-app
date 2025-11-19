import React from "react";

const HeroSection = ({ title, subtitle }) => {
  return (
    <header className="mb-6">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {title}
      </h1>
      <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

export default HeroSection;
