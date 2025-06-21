import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaListUl, FaClipboardList, FaUser, FaEnvelope } from "react-icons/fa"; // ✅ đã thêm FaEnvelope

const SideBarDoctor = () => {
  const location = useLocation();

  const links = [
    { to: "/reportbooking-doctor", icon: <FaListUl />, label: "Report Booking" },
    { to: "/reportconsult-doctor", icon: <FaClipboardList />, label: "Report Consult" },
    { to: "/message-doctor", icon: <FaEnvelope />, label: "Message" },
    { to: "/account-settings", icon: <FaUser />, label: "Account settings" },
  ];

  return (
    <aside className="w-60 fixed top-0 left-0 h-full bg-white rounded-xl p-4 shadow-lg">
      <nav className="space-y-2 mt-20">
        <div className="text-gray-400 font-semibold">Manage</div>
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
              location.pathname === item.to
                ? "text-pink-500 font-semibold bg-pink-100"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBarDoctor;
