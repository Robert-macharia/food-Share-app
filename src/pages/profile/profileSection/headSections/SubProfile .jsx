
// profileSection/headSections/SubProfile.jsx
import React from "react";
import { userProfile } from "../../mockdata";
import { FaCamera, FaPen } from "react-icons/fa";

const SubProfile = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      {/* Profile Info Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src={userProfile.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-white shadow"
          />
          <div className="absolute bottom-0 left-0 bg-green-500 p-1 rounded-full">
            <FaCamera className="text-white text-xs" />
          </div>
        </div>

        {/* Text Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{userProfile.name}</h2>
          <p className="text-sm text-gray-500">{userProfile.email}</p>
          <p className="text-sm text-gray-400">Joined: {userProfile.joined}</p>
        </div>
      </div>

      {/* Edit Button */}
      <button className="btn btn-outline btn-sm sm:btn-md flex items-center gap-2 text-gray-600 border-gray-300">
        <FaPen className="text-gray-500 text-sm" />
        Edit Profile
      </button>
    </div>
  );
};

export default SubProfile;
