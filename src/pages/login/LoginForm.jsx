import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-[#4A5568]">Email / Username</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email or username"
            className="mt-1.5 w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00DC82] focus:border-transparent outline-none placeholder-[#A0AEC0] text-sm text-[#1A202C]"
          />
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-[#4A5568]">Password</label>
            <a href="#" className="text-sm text-[#00DC82] hover:text-[#00b36b]">Forgot Password?</a>
          </div>
          <div className="relative mt-1.5">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full px-3.5 py-2.5 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00DC82] focus:border-transparent outline-none text-sm text-[#1A202C]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#00DC82] hover:bg-[#00b36b] text-white py-3 rounded-xl transition-colors font-medium">
          Login
        </button>
      </div>
    </form>
  );
};



export default LoginForm;