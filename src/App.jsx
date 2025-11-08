import AuthLayout from "./components/layouts/AuthLayout";
import Home from "./pages/home/Home";
import LoginForm from "./pages/login/LoginForm";
import Profile from "./pages/profile/Profile";
import MyClaims from "./pages/profile/profileSection/MyClaims";
import MyOffers from "./pages/profile/profileSection/MyOffers";
import Settings from "./pages/profile/profileSection/Settings";
import RegisterForm from "./pages/register/Register";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Routes>

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>

      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />}></Route>

      <Route path="/profile" element={<Profile />}>
        <Route path="offers" element={<MyOffers/>} />
        <Route path="claims" element={<MyClaims />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>

  )
}

export default App
