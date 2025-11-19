// shareFoodSection/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Contact Info</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
          <input
            type="text"
            defaultValue="Jane Doe"
            className="w-full rounded-full border border-gray-200 px-4 py-2 bg-white text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Contact Phone or Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone or Email</label>
          <input
            type="text"
            defaultValue="jane.doe@example.com"
            className="w-full rounded-full border border-gray-200 px-4 py-2 bg-white text-gray-800 placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
