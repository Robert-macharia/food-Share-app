// shareFoodSection/PickupContact.jsx
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const PickupContact = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Pickup & Contact</h2>

      {/* Pickup Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
        <div className="flex gap-3 items-center">
          <input className="w-full rounded-full border border-gray-200 px-4 py-2" placeholder="Enter full address" />
          <button className="bg-white border border-green-200 text-[#1f7a4a] px-3 py-2 rounded-full text-sm">Use Current Location</button>
        </div>
        <p className="text-xs text-gray-500 mt-1">Tip: Use precise address for smoother pickup.</p>
      </div>

      {/* Map Illustration */}
      <div className="w-full h-44 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 text-sm mb-6 shadow-sm">
        <FaMapMarkerAlt className="text-[#1f7a4a] text-2xl mr-2" />
        <div className="text-left">
          <div className="text-sm font-medium text-gray-700">Pickup location preview</div>
          <div className="text-xs text-gray-400">Map placeholder — will show selected address</div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            className="w-full rounded-full border border-gray-200 px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone or Email</label>
          <input
            type="text"
            placeholder="jane@example.com"
            className="w-full rounded-full border border-gray-200 px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PickupContact;
