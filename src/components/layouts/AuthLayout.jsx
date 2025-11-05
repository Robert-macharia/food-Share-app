import { IoLeaf } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
    const navigate= useNavigate();
    const location= useLocation();


    const isLogin = location.pathname === '/auth/login';

  return (
    <div className="min-h-[98vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-4">
      <div className="w-full max-w-[380px] bg-white/80 backdrop-blur-sm p-6 rounded-[32px] shadow-lg mx-auto my-auto">
        <div className="text-center">
          <h1 className="text-xl font-semibold flex items-center justify-center gap-2 text-[#1A202C]">
            <IoLeaf className="text-[#00DC82] text-2xl" />
            Foodshare
          </h1>
          <h2 className="text-2xl font-bold mt-4 text-[#1A202C]">Welcome!</h2>
          <p className="text-[#718096] text-sm mt-1">Please enter your details to get started.</p>
          <div className="mt-4 px-4">
            <div className="w-full relative bg-gray-50 rounded-full p-1">
              {/* sliding indicator */}
              <div
                className={`absolute top-1 left-1 h-[38px] w-1/2 rounded-full bg-white shadow-sm transform transition-transform duration-300 ease-in-out ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-2">
                <button
                  onClick={() => navigate('/auth/login')}
                  role="tab"
                  aria-selected={isLogin}
                  className={`text-sm font-medium py-2 rounded-full transition-colors ${isLogin ? 'text-[#1A202C]' : 'text-[#718096] hover:text-[#4A5568]'}`}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/auth/register')}
                  role="tab"
                  aria-selected={!isLogin}
                  className={`text-sm font-medium py-2 rounded-full transition-colors ${!isLogin ? 'text-[#1A202C]' : 'text-[#718096] hover:text-[#4A5568]'}`}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>

         <Outlet/>

          <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E2E8F0]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-sm text-[#94A3B8] bg-white">OR</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 border border-[#E2E8F0] rounded-xl hover:bg-gray-50 transition-colors">
            <FcGoogle size={18} />
            <span className="text-xs text-[#475569]">Continue with Google</span>
          </button>
          <button type="button" className="flex items-center justify-center gap-2 px-3 py-2.5 border border-[#E2E8F0] rounded-xl hover:bg-gray-50 transition-colors">
            <FaFacebook size={18} className="text-[#1877F2]" />
            <span className="text-xs text-[#475569]">Continue with Facebook</span>
          </button>
        </div>

        <p className="text-center text-sm text-[#94A3B8] mt-5">
          By continuing, you agree to Foodshare's{' '}
          <a href="#" className="text-[#00DC82] hover:text-[#00b36b]">Terms of Service</a> and{' '}
          <a href="#" className="text-[#00DC82] hover:text-[#00b36b]">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;