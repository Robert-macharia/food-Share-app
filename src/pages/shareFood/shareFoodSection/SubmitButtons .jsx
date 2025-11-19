

const SubmitButtons = () => {
  return (
    <div className="flex items-center justify-between gap-4 mt-6">
      <div>
        <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">Cancel</button>
      </div>

      <div>
        <button className="px-5 py-2 rounded-full bg-[#1f7a4a] text-white font-medium shadow hover:brightness-95 transition">Submit Offer</button>
      </div>
    </div>
  );
};

export default SubmitButtons;
