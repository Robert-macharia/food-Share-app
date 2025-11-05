import  { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <div className="space-y-2">
        <div>
          <label className="text-sm font-medium text-[#4A5568]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="mt-1 w-full px-2.5 py-1.5 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00DC82] focus:border-transparent outline-none placeholder-[#A0AEC0] text-sm text-[#1A202C]"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#4A5568]">Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              className="w-full px-2.5 py-1.5 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00DC82] focus:border-transparent outline-none text-sm text-[#1A202C]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-[#4A5568]">Confirm Password</label>
          <div className="relative mt-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="w-full px-2.5 py-1.5 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#00DC82] focus:border-transparent outline-none text-sm text-[#1A202C]"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>
        </div>

        <button type="submit" className="w-full bg-[#00DC82] hover:bg-[#00b36b] text-white py-2 rounded-xl transition-colors font-medium">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;