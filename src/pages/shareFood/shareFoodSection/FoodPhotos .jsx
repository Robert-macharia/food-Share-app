import { FaCamera, FaCloudUploadAlt } from "react-icons/fa";

const FoodPhotos = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Food Photos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Take Photo */}
        <button className="border-2 border-dashed border-[#bfe7cf] rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-green-50 transition">
          <FaCamera className="text-[#1f7a4a] text-3xl mb-2" />
          <p className="font-semibold text-[#1f7a4a]">Take Photo</p>
          <p className="text-sm text-gray-500 mt-1">Use your device camera to capture images.</p>
        </button>

        {/* Upload Photo */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white">
          <FaCloudUploadAlt className="text-gray-500 text-3xl mb-2" />
          <p className="font-semibold text-gray-700">Upload Photo</p>
          <p className="text-sm text-gray-500 mt-1">Drag and drop or click to select files.</p>
        </div>
      </div>

      {/* Sample Images */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm h-28">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="sample"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm h-28">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="sample"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm h-28 hidden sm:block">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            alt="sample"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodPhotos;
