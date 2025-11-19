import { Link } from "react-router-dom";
import { FiSearch, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8faf8] text-center px-6 py-10 sm:px-8 md:px-12">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
        Oops! Page Not Found.
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base mb-8 leading-relaxed">
        It seems the page you’re looking for has been moved, eaten, or never
        existed in the first place. Let’s get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
        <Link
          to="/"
          className="btn btn-success text-white px-6 py-2 sm:px-8 rounded-full font-medium shadow-md hover:brightness-95 transition-all"
        >
          Go to Home Page
        </Link>
        <Link
          to="/browse"
          className="btn bg-green-100 text-green-700 px-6 py-2 sm:px-8 rounded-full font-medium hover:bg-green-200 transition-all"
        >
          Browse Food Listings
        </Link>
      </div>

      {/* Search bar */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mb-12">
        <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-lg sm:text-xl" />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Footer links */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-500 mb-6">
        <Link to="/privacy" className="hover:text-gray-700">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-gray-700">
          Terms of Service
        </Link>
        <Link to="/contact" className="hover:text-gray-700">
          Contact Us
        </Link>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-4 text-gray-400 mb-4">
        <Link to="#" className="hover:text-green-600 transition-colors">
          <FiFacebook size={18}  />
        </Link>
        <Link to="#" className="hover:text-green-600 transition-colors">
          <FiTwitter size={18} />
        </Link>
        <Link to="#" className="hover:text-green-600 transition-colors">
          <FiInstagram size={18} />
        </Link>
      </div>

      {/* Footer copyright */}
      <p className="text-xs sm:text-sm text-gray-400 mt-2">
        © 2024 Foodshare. All rights reserved.
      </p>
    </div>
  );
};

export default NotFoundPage;
