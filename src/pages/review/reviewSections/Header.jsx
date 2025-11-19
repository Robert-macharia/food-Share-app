import React from "react";

const Header = ({ name = "Alex Doe", subtitle, avatarUrl }) => {
  return (
    <header className="flex items-center gap-4 py-4 border-b">
      <img src={avatarUrl} alt={name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;