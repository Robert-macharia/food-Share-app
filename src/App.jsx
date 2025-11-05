import AuthLayout from "./components/layouts/AuthLayout";
import Home from "./pages/home/Home";
import LoginForm from "./pages/login/LoginForm";
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
    </Routes>

  )
}

export default App
