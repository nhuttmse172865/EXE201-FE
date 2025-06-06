import React from "react";

import {
  FaBell, FaSearch, FaTachometerAlt, FaHandshake, FaBullhorn,
  FaGift, FaClipboardList, FaNewspaper, FaCog
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-600",
  Cooperated: "bg-green-100 text-green-600",
  Banned: "bg-pink-100 text-pink-600",
};

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

const partnersData = [
  { code: "PN0000001", name: "Cesar Fuller", phone: "+983722404755", email: "lorena_...@yahoo.com", address: "2 Gannett Dr, Johnson City NY 13790", description: "Description", status: "Pending" },
  { code: "PN0000002", name: "Shelley Miranda", phone: "+215422303933", email: "isaac_holmes@icloud...", address: "2055 Niagara Falls Blvd, Amherst NY 14228", description: "Description", status: "Cooperated" },
  { code: "PN0000003", name: "Sean Chandler", phone: "+344007744271", email: "stella_thomas@yaho...", address: "550 Providence Hwy, Walpole MA 2081", description: "Description", status: "Banned" },
  { code: "PN0000004", name: "Leah Brown", phone: "+3026885798682", email: "shirley_sharp@outlo...", address: "550 Providence Hwy, Walpole MA 2081", description: "Description", status: "Cooperated" },
  { code: "PN0000005", name: "Megan Howard", phone: "+253860597898B", email: "flora_newton@icloud...", address: "601 Frank Sottile Blvd, Kingston NY 12401", description: "Description", status: "Cooperated" },
  { code: "PN0000006", name: "Joanne Austin", phone: "+871846916524", email: "calvin_rhodes@outlo...", address: "279 Troy Road, East Greenbush NY 12061", description: "Description", status: "Cooperated" },
];

const SidebarLink = ({ to, icon: Icon, label, exact = false }) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
        isActive ? "text-pink-500 font-semibold bg-pink-100" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <Icon /> {label}
    </Link>
  );
};

const AvailablePartners = () => {
  
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-60 fixed top-0 left-0 h-full bg-white rounded-xl p-4 space-y-6 shadow-lg z-10">
        <nav className="space-y-2 mt-10">
          <div className="text-gray-400 font-semibold">MENU</div>

          <SidebarLink to="/dashboard" icon={FaTachometerAlt} label="Dashboard" />
          {/* <SidebarLink to="/partners" icon={FaHandshake} label="Partners" /> */}

<PartnersMenu /> 

          <SidebarLink to="/advertisement" icon={FaBullhorn} label="Advertisement" />
          <SidebarLink to="/promotion" icon={FaGift} label="Promotion" />
          <SidebarLink to="/plans" icon={FaClipboardList} label="Plans" />
          <SidebarLink to="/news" icon={FaNewspaper} label="News" />

          <div className="pt-4 text-gray-400">TOOLS</div>
          <SidebarLink to="/settings" icon={FaCog} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-60 p-6 bg-gray-50 flex-1">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Partners</p>
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-500" />
            <FaBell className="text-gray-500" />
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-bold">Tran Minh Nhut</p>
                <p className="text-xs text-gray-500">nhutminhsondesign@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Filters */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 space-y-4">
          {/* Row 1: Code & Name */}
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Code</label>
              <input
                type="text"
                placeholder="AD000001"
                className="w-[150px] border border-gray-300 rounded px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Name</label>
              <input
                type="text"
                placeholder="Miranda Berry"
                className="w-[200px] border border-gray-300 rounded px-4 py-2 text-sm"
              />
            </div>
          </div>

          {/* Row 2: Phone + Email + Address */}
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              <input
                type="text"
                placeholder="+983722404755"
                className="border border-gray-300 w-[175px] rounded px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email</label>
              <input
                type="text"
                placeholder="lorena_...@gmail.com"
                className="border border-gray-300 rounded px-4 py-2 text-sm w-[246px]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Address</label>
              <input
                type="text"
                placeholder="Johnson City..."
                className="border border-gray-300 rounded px-4 py-2 text-sm w-[300px]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <button className="bg-white-100 text-pink-500 w-[80px] px-4 py-2 rounded rounded-xl border border-pink-500 text-sm">
              Clear
            </button>
            <button className="bg-pink-500 text-white px-4 w-[120px] py-2 rounded-xl text-sm">
              Search
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto p-4">
          <table className="w-full table-auto text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600 text-left">
              <tr>
                {["Code", "Name", "Phone", "Email", "Address", "Description", "Status"].map((col, idx) => (
                  <th
                    key={col}
                    className={`p-3 font-semibold ${idx === 0 ? "rounded-l-xl" : ""} ${idx === 6 ? "rounded-r-xl" : ""}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {partnersData.map((p, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-3">{p.code}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.phone}</td>
                  <td className="p-3">{p.email}</td>
                  <td className="p-3">{p.address}</td>
                  <td className="p-3">{p.description}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[p.status] || ""}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center py-4">
          {["<", 1, 2, 3, ">"].map((p, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded mx-1 ${
                p === 1 ? "bg-pink-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AvailablePartners;
