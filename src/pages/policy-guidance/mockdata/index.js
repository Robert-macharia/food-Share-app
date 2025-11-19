const mockData = {
  strictFoodSharingRules: {
    description:
      "To maintain quality and trust, all members must adhere to the following rules:",
    rules: [
      "Food Quality: Only share food that's fresh, unopened, and has been stored properly.",
      "Accurate Descriptions: List ingredients, expiration dates, and any relevant handling details.",
      "Reliable Coordination: Honor pickup and drop-off agreements and communicate promptly if you are unable to make an exchange."
    ]
  },

  zeroTolerancePolicy: {
    description:
      "We maintain a zero-tolerance policy for harassment of any kind. This includes, but is not limited to:",
    points: [
      "Verbal or written abuse, threats, or intimidation.",
      "Unwanted or inappropriate contact or communication.",
      "Discrimination based on ethnicity, religion, gender, or any other personal attribute."
    ]
  },

  reportingViolations: {
    description:
      "If you encounter any behavior that violates our policies, please report it immediately. Your reports are crucial for maintaining community safety.",
    buttons: [
      { label: "Report a Violation", style: "btn-primary" },
      { label: "Confidentiality Assured", style: "btn-outline btn-info" }
    ]
  },

  actionsAndConsequences: {
    description:
      "Each report is reviewed by our team. Actions taken are based on the severity and frequency of the violation and may include:",
    actions: [
      {
        title: "Official Warning",
        details:
          "A formal notice issued for minor or first-time violations, reminding the user of expected conduct."
      },
      {
        title: "Temporary Suspension",
        details:
          "Short-term removal from the platform while violations are investigated or resolved."
      },
      {
        title: "Permanent Account Termination",
        details:
          "Applied for severe or repeated violations that compromise community safety."
      }
    ]
  },

  safetyDuringInteraction: {
    description:
      "Always prioritize your personal safety when meeting for a food exchange.",
    tips: [
      "Meet in a well-lit, public place whenever possible.",
      "Inform a trusted friend or family member about the meeting.",
      "Trust your instincts. If a situation feels uncomfortable, cancel the exchange and leave.",
      "Keep your personal information private unless necessary for coordination."
    ]
  }
};

export default mockData;
