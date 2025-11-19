import React from "react";
import HeroSection from "./onboardingSlidesFourSections/HeroSection";
import CTASection from "./onboardingSlidesFourSections/CTASection";
import mock from "./mockdata";

const OnboardingSlidesFour = () => {
  return (
    <div className="w-full">
      {/* removed local gradient so outer layout gradient is visible */}
      <div className="min-h-[72vh] flex items-center justify-center relative py-12">
        <div className="max-w-lg mx-auto text-center px-6">
          <HeroSection image={mock.image} title={mock.title} subtitle={mock.subtitle} />
          <div className="mt-8">
            <CTASection primary={mock.primaryCta} secondary={mock.secondaryCta} smallLink={mock.smallLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSlidesFour;
