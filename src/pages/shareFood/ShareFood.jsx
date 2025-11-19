import ContactInfo from "./shareFoodSection/ContactInfo ";
import FoodDetails from "./shareFoodSection/FoodDetails";
import FoodPhotos from "./shareFoodSection/FoodPhotos ";
import PickupContact from "./shareFoodSection/PickupContact ";
import SpecialInstructions from "./shareFoodSection/SpecialInstructions ";
import SubmitButtons from "./shareFoodSection/SubmitButtons ";

const ShareFood = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Share Your Extra Food</h1>
            <p className="text-sm text-gray-500">Fill out the details below to list your item for the community.</p>
          </div>
          <div className="text-sm text-gray-400">&nbsp;</div>
        </div>

        <div className="mt-6 space-y-6">
          <FoodDetails />
          <FoodPhotos />
          <PickupContact />
          <ContactInfo />
          <SpecialInstructions />
        </div>

        <div className="mt-8">
          <SubmitButtons />
        </div>
      </div>
    </div>
  );
};

export default ShareFood;
