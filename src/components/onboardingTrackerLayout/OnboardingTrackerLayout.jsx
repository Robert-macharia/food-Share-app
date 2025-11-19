import React, { useMemo } from "react";
import { Outlet, useLocation, useNavigate, NavLink } from "react-router-dom";

const slides = [
  { path: "/onboarding/welcome-visitor", label: "Welcome" },
  { path: "/onboarding/share-food-procedure", label: "Share" },
  { path: "/onboarding/find-food-procedure", label: "Find" },
  { path: "/onboarding/all-set-to-onboard", label: "All set" },
];

const OnboardingTrackerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // normalize pathname (no trailing slash)
  const pathname = location.pathname.replace(/\/+$/, "");

  const currentIndex = useMemo(() => {
    const idx = slides.findIndex((s) => s.path === pathname);
    return idx === -1 ? 0 : idx;
  }, [pathname]);

  const goNext = () => {
    if (currentIndex < slides.length - 1) navigate(slides[currentIndex + 1].path);
    else navigate("/"); // fallback after last
  };
  const goBack = () => {
    if (currentIndex > 0) navigate(slides[currentIndex - 1].path);
  };
  const skip = () => navigate("/");

  return (
    // outer wrapper keeps the greenish gradient
    <div className="min-h-screen bg-gradient-to-br from-green-50/80 to-white flex items-center justify-center p-3">
      {/* panel is now transparent so the gradient is visible beneath */}
      <div className="w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* compact top tracker - transparent background so gradient shows through */}
        <div className="relative px-4 py-3 bg-transparent">
          {/* connecting line centered vertically relative to circles */}
          <div className="absolute left-6 right-6 top-6 h-0.5 bg-white/30 z-0" />
          <div className="relative z-10 flex items-center justify-between gap-2">
            {slides.map((s, i) => {
              const active = i === currentIndex;
              const completed = i < currentIndex;
              const bgClass = active ? "bg-green-600" : completed ? "bg-green-400" : "bg-white";
              return (
                <button
                  key={s.path}
                  onClick={() => navigate(s.path)}
                  className="flex-1 flex flex-col items-center text-center focus:outline-none"
                  aria-current={active ? "step" : undefined}
                >
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all ${bgClass} ${active ? "border-green-600" : "border-gray-200"}`}
                    style={{ transform: "translateY(-6px)" }}
                    aria-hidden
                  >
                    {/* inner indicator: white dot for active, small filled for completed */}
                    {active ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white block" />
                    ) : completed ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white/90 block" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-transparent block" />
                    )}
                  </div>

                  <div className={`mt-3 text-[11px] truncate ${active ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                    {s.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* centered content area - reduced padding and constrained height; content scrolls if needed */}
        <main className="p-3 sm:p-4 flex-1 overflow-auto">
          <div className="w-full">
            <Outlet />
          </div>
        </main>

        {/* footer actions - compact and mobile-friendly */}
        <div className="border-t border-white/20 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Back: hidden on first slide */}
            {currentIndex > 0 ? (
              <button
                onClick={goBack}
                className="px-3 py-2 rounded-md text-sm bg-white/90 border border-white/30 text-gray-700 hover:bg-white/100"
              >
                Back
              </button>
            ) : (
              <div className="w-0 h-0" aria-hidden />
            )}

            <button onClick={skip} className="px-2 py-2 text-sm text-gray-600 hover:underline">
              Skip tour
            </button>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-end gap-3">
            {currentIndex === slides.length - 1 ? (
              <NavLink
                to="/policies-and-guidelines"
                className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition w-full sm:w-auto text-center"
              >
                Proceed to policies and guidelines
              </NavLink>
            ) : (
              <button
                onClick={goNext}
                className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition w-full sm:w-auto"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTrackerLayout;
