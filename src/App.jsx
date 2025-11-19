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

function App() {

  return (
    <Routes>

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
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

      <Route path="/profile" element={<Profile />}>
        <Route path="offers" element={<MyOffers />} />
        <Route path="claims" element={<MyClaims />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="/*" element={<NotFoundPage />}></Route>
    </Routes>

  )
}

export default App
