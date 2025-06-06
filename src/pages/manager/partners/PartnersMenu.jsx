import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";

const PartnersMenu = () => {
  const location = useLocation();
  const isParentActive = location.pathname.startsWith("/partners");
  const isAvailableActive = location.pathname === "/partners" || location.pathname === "/partners/available";
  const isRegistrationActive = location.pathname === "/partners/registration";

  return (
    <div>
      <div
        className={`flex items-center gap-2 p-2 rounded cursor-default ${
          isParentActive ? "text-pink-500 font-semibold bg-pink-100" : "text-gray-700"
        }`}
      >
        <FaHandshake />
        <span>Partners</span>
      </div>

      <div className="ml-6 space-y-1 text-sm mt-1">
        <Link
          to="/partners/available"
          className={`block ${
            isAvailableActive ? "text-pink-500 font-semibold" : "text-gray-600 hover:text-pink-500"
          }`}
        >
          Available
        </Link>
        <Link
          to="/partners/registration"
          className={`block ${
            isRegistrationActive ? "text-pink-500 font-semibold" : "text-gray-600 hover:text-pink-500"
          }`}
        >
          Registration
        </Link>
      </div>
    </div>
  );
};

export default PartnersMenu;
