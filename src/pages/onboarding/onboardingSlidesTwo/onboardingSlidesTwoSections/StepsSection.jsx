import React from "react";

const Icon = ({ name }) => {
  // simple inline SVGs for camera, chat, map-pin — keep stroke currentColor to use Tailwind color classes
  if (name === "camera") {
    return (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <circle cx="12" cy="13.5" r="3" />
        <path d="M9 7l1-2h4l1 2" />
      </svg>
    );
  }
  if (name === "chat") {
    return (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  }
  // map-pin
  return (
    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      <path d="M12 21s7-4.5 7-10A7 7 0 0 0 5 11c0 5.5 7 10 7 10z" />
    </svg>
  );
};

const StepCard = ({ step }) => {
  return (
    <div className="rounded-full px-6 py-4 flex items-start gap-4">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
          <Icon name={step.icon} />
        </div>
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{step.title}</div>
        <div className="text-sm text-gray-500 mt-1">{step.description}</div>
      </div>
    </div>
  );
};

const StepsSection = ({ steps = [] }) => {
  return (
    <div className="space-y-4">
      {steps.map((s) => (
        <StepCard key={s.id} step={s} />
      ))}
    </div>
  );
};

export default StepsSection;
