import AuthLayout from "./components/layouts/AuthLayout";
import SuccessCard from "./components/SuccessCard";
import ContactPage from "./pages/contactPage/ContactPage";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/how_it_works/HowItWorks";
import LoginForm from "./pages/login/LoginForm";
import NotFoundPage from "./pages/not_found/NotFoundPage";
import Profile from "./pages/profile/Profile";
import MyClaims from "./pages/profile/profileSection/MyClaims";
import MyOffers from "./pages/profile/profileSection/MyOffers";
import Settings from "./pages/profile/profileSection/Settings";
import RegisterForm from "./pages/register/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import ShareFood from "./pages/shareFood/ShareFood";
import About from "./pages/about/About";
import MainLayout from "./components/layouts/MainLayout";
import FoodNearYou from "./pages/foodNearYou/foodNearYou";
import ProductDetailed from "./pages/productDetailed/productDetailed";
import Chat from "./pages/chat/chat";
import Review from "./pages/review/Review";
import OnboardingTrackerLayout from "./components/onboardingTrackerLayout/OnboardingTrackerLayout";
import OnboardingSlidesOne from "./pages/onboarding/onboardingSlidesOne/onboardingSlidesOne";
import OnboardingSlidesTwo from "./pages/onboarding/onboardingSlidesTwo/onboardingSlidesTwo";
import OnboardingSlidesThree from "./pages/onboarding/onboardingSlidesThree/onboardingSlidesThree";
import OnboardingSlidesFour from "./pages/onboarding/onboardingSlidesFour/onboardingSlidesFour";
import PolicyGuidance from "./pages/policy-guidance/PolicyGuidance";

function App() {
  // layered radial gradients: greenish corners + faint warm center
  const appBg = {
    backgroundColor: "#ffffff",
    backgroundImage: `
      radial-gradient(400px 400px at 8% 10%, rgba(134,239,172,0.55), transparent 20%),
      radial-gradient(350px 350px at 92% 88%, rgba(134,239,172,0.5), transparent 18%),
      radial-gradient(700px 700px at 50% 40%, rgba(255,179,77,0.08), transparent 18%)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    // wrapper with decorative background, full viewport height
    <div style={appBg} className="min-h-screen">
      <Routes>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

        <Route path="/onboarding" element={<OnboardingTrackerLayout />}>
          <Route index element={<Navigate to="welcome-visitor" replace />} />
          <Route path="welcome-visitor" element={<OnboardingSlidesOne />} />
          <Route path="share-food-procedure" element={<OnboardingSlidesTwo />} />
          <Route path="find-food-procedure" element={<OnboardingSlidesThree />} />
          <Route path="all-set-to-onboard" element={<OnboardingSlidesFour />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Success" element={<SuccessCard/>} />
          <Route path="/how-it-works" element={<HowItWorks />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/food-near-you" element={<FoodNearYou />}></Route>
          <Route path="/listing/:id" element={<ProductDetailed />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/share-food" element={<ShareFood/>} />
          <Route path="/messages" element={<Chat/>} />
        </Route>
          <Route path="/chat" element={<Chat/>} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/policies-and-guidelines" element={<PolicyGuidance />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="offers" element={<MyOffers />} />
          <Route path="claims" element={<MyClaims />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
