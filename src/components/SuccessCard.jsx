const SuccessCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8faf8]">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-[380px] text-center border border-gray-100">
        {/* Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-green-200 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Success!</h2>

        {/* Message */}
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
          Your offer for <span className="font-medium text-gray-700">'Fresh Sourdough Loaf'</span> has been
          successfully submitted.
        </p>

        <hr className="border-gray-200 mb-6" />

        {/* Next Steps */}
        <p className="text-gray-600 mb-4 text-sm">What would you like to do next?</p>

        <div className="flex justify-center gap-3 mb-6">
          <button className="btn btn-success text-white px-6 py-2 rounded-full font-medium shadow-md hover:brightness-95">
            View My Offers
          </button>
          <button className="btn bg-green-100 text-green-700 px-6 py-2 rounded-full font-medium hover:bg-green-200">
            Browse More Food
          </button>
        </div>

        <a
          href="#"
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default SuccessCard;
