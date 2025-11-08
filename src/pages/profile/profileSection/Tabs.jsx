import { tabs } from "../mockdata";
import NavLink from "../../../components/navlinks/NavLink";
import React from "react";

const Tabs = () => {
  return (

    <div className="mt-6">

      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={`/profile${tab.to}`}
            icon={tab.icon && React.createElement(tab.icon)}
            text={tab.label}
            light={false}
          />
        ))}
      </div>

      {/* Optional placeholder content */}
      <div className="mt-3 p-4 bg-base-100 rounded-lg shadow-sm text-center text-sm text-gray-500">
        <p>Select a tab to view its content.</p>
      </div>
    </div>

  );
};

export default Tabs;
