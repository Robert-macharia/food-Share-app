import React from "react";
import HeroSection from "./onboardingSlidesTwoSections/HeroSection";
import StepsSection from "./onboardingSlidesTwoSections/StepsSection";
import mock from "./mockdata";

const OnboardingSlidesTwo = () => {
  return (
    <div className="w-full">
      <div className="py-10">
        <div className="max-w-3xl mx-auto px-6">
          <HeroSection title={mock.title} />
          <div className="mt-8">
            <StepsSection steps={mock.steps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlidesTwo;
