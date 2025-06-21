import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaListUl,
  FaClipboardList,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SideBarDoctor from "./SideBarDoctor";

const initialData = {
  name: "Tran Minh Nhut",
  email: "nhutnt@gmail.com",
  phone: "0123456789",
  location: "Benh Vien Ha Noi",
};

const AccountSettings = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(initialData);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

const handleSave = () => {
  const emailRegex = /^[^\s@]+@gmail\.com$/;
  const phoneRegex = /^0\d{9}$/;

  if (!emailRegex.test(formData.email)) {
    alert("Email must be a valid @gmail.com address.");
    return;
  }

  if (!phoneRegex.test(formData.phone)) {
    alert("Phone must start with 0 and contain exactly 10 digits.");
    return;
  }

  if (!formData.location.trim()) {
    alert("Location cannot be empty.");
    return;
  }

  alert("Profile updated successfully!");
  console.log("Saved data:", formData);
};

  return (
    <div className="flex min-h-screen font-sans bg-pink-100">
      {/* Sidebar */}
     <SideBarDoctor/>

      {/* Main */}
      <main className="flex-1 p-8 ml-60">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Profile Information</p>
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-500" />
            <FaBell className="text-gray-500" />
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-bold">Tran Minh Nhut</p>
                <p className="text-xs text-gray-500">
                  nhutminhsondesign@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
<div className="max-w-10xl mx-auto bg-white p-8 rounded-xl shadow">
        <div className="flex items-center mb-6">
          <img
            src="https://i.pravatar.cc/80"
            alt="avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">Dr. Minh Nhut</h2>
            <p className="text-sm text-gray-500">alexronaldes@gmail.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-15">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-5">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-5">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-5">Phone Number</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-5">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-gray-100"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
          >
            Save
          </button>
        </div>
      </div>
      </main>
    </div>
  );
};

export default AccountSettings;
