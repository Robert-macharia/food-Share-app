import { foodSuggestions, categories } from "../mockdata/data";
import { FaMagic, FaCalendarAlt } from "react-icons/fa";

const FoodDetails = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Food Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Food Item Name */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Food Item Name</label>
          <input
            list="food-suggestions"
            type="text"
            placeholder="Apples"
            className="w-full rounded-full border border-gray-200 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#bfe7cf]"
          />
          <datalist id="food-suggestions">
            {foodSuggestions.map((s, i) => (
              <option value={s} key={i} />
            ))}
          </datalist>
          <div className="absolute top-0 right-0 mt-1 mr-2 flex items-center text-[#1f7a4a] text-sm">
            <FaMagic className="mr-1" />
            Smart Suggestions
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <div className="inline-flex items-center gap-3">
            <select className="rounded-full border border-gray-200 px-4 py-2 text-gray-800 bg-white">
              {categories.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
            <span className="text-xs text-gray-400">Category</span>
          </div>
        </div>

        {/* Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
          <input
            type="text"
            placeholder="e.g., servings, kg, lbs"
            className="w-full rounded-full border border-gray-200 px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Expiration Date */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiration / Best By Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full rounded-full border border-gray-200 px-4 py-2 pr-10 focus:outline-none"
            />
            <FaCalendarAlt className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
