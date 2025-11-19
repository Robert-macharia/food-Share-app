import React from "react";

const HeroSection = ({ title }) => {
  return (
    <header className="text-center">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{title}</h1>
    </header>
  );
};

export default HeroSection;
