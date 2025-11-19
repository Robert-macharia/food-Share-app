import React from "react";

const HeroSection = ({ image, title, subtitle }) => {
  return (
    <header className="text-center">
      <div className="mx-auto w-40 h-40 rounded-2xl overflow-hidden mb-6">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h1>

      <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
        {subtitle}
      </p>
    </header>
  );
};

export default HeroSection;
