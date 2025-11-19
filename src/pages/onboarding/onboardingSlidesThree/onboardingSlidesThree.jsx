import React from "react";
import mock from "./mockdata";
import HeroSection from "./onboardingSlidesThreeSections/HeroSection";
import CardsSection from "./onboardingSlidesThreeSections/CardsSection";

const OnboardingSlidesThree = () => {
  return (
    <div className="w-full">
      <div className="pt-10 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <HeroSection title={mock.title} subtitle={mock.subtitle} />
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-8">
          <CardsSection cards={mock.cards} />
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlidesThree;
