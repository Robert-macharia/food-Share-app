import React from "react";
import HeroSection from "./onboardingSlidesOneSections/HeroSection";
import DetailsSection from "./onboardingSlidesOneSections/DetailsSection";
import mock from "./mockdata";

const OnboardingSlidesOne = () => {
  return (
    <div className="w-full">
      {/* removed local bg-gradient so outer layout gradient is visible */}
      <div className="pt-10 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-transparent">
            <HeroSection title={mock.title} subtitle={mock.subtitle} />
          </div>
        </div>
      </div>

      <div className="-mt-8 mx-auto px-6 max-w-3xl">
        {/* removed bg-white so card is transparent on top of layout gradient */}
        <div className="rounded-xl p-8">
          <DetailsSection bullets={mock.bullets} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlidesOne;
