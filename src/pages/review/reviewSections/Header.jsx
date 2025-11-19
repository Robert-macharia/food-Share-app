import React from "react";

const Header = ({ name, subtitle, avatarUrl }) => {
  return (
    <header className="bg-white rounded-lg p-6 flex items-center gap-4">
      <img src={avatarUrl} alt={name} className="w-20 h-20 rounded-full border border-gray-100" />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </header>
  );
};

export default Header;