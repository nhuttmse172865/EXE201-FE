import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaTachometerAlt,
  FaHandshake,
  FaBullhorn,
  FaGift,
} from "react-icons/fa";

const HospitalClinicPartner = () => {
  const location = useLocation();

  const initialData = {
    name: "PetCare",
    address: "xxx-xxxx-xxxx",
    phone: "0504632262",
    email: "xxx@gmail.com",
    from: "07:30",
    to: "17:30",
    image:
      "https://cdn2.vectorstock.com/i/1000x1000/38/60/pet-hospital-building-flat-style-vector-28033860.jpg",
  };

  const [formData, setFormData] = useState(initialData);
  const [editedData, setEditedData] = useState(initialData);
  const [editField, setEditField] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [previewImage, setPreviewImage] = useState(initialData.image);

  const handleInputChange = (field, value) => {
    if (field === "phone" && !/^\d*$/.test(value)) return; // Allow only digits
    setEditedData((prev) => ({ ...prev, [field]: value }));
    setShowButtons(true);
  };

  const handleCancel = () => {
    setEditedData(formData);
    setShowButtons(false);
    setEditField(null);
  };

  const handleSave = () => {
    const phoneRegex = /^0\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(editedData.phone)) {
      toast.error("Phone number must start with 0 and be 10 digits.");
      return;
    }

    if (!emailRegex.test(editedData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setFormData(editedData);
    setShowButtons(false);
    setEditField(null);
    toast.success("Update success!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const formatTimeToAMPM = (timeStr) => {
    const [hour, minute] = timeStr.split(":");
    const date = new Date();
    date.setHours(Number(hour));
    date.setMinutes(Number(minute));
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex min-h-screen font-sans bg-pink-100">
      {/* Sidebar */}
      <aside className="w-60 fixed top-0 left-0 h-full bg-white rounded-xl p-4 space-y-6 shadow-lg z-10">
        <nav className="space-y-2 mt-10">
          <div className="text-gray-400 font-semibold">MENU</div>
          <Link
            to="/dashboard-partner"
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
              location.pathname === "/dashboard-partner"
                ? "text-pink-500 font-semibold bg-pink-100"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaTachometerAlt /> Dashboard
          </Link>
          <Link
            to="/service-partner"
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
              location.pathname === "/service-partner"
                ? "text-pink-500 font-semibold bg-pink-100"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaHandshake /> Service
          </Link>
          <Link
           to="/doctor-partner"
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
              location.pathname === "/doctor-partner"
                ? "text-pink-500 font-semibold bg-pink-100"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaBullhorn /> Doctor
          </Link>
          <Link
            to="/hospitalclinic-partner"
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
              location.pathname === "/hospitalclinic-partner"
                ? "text-pink-500 font-semibold bg-pink-100"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaGift /> Hospital/Clinic
          </Link>
        </nav>
      </aside>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Main content */}
      <main className="flex-1 p-8 ml-60">
          {/* Header */}
                <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
                  <p className="text-2xl font-bold">Hospital/Clinic</p>
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
                
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-6">
            Hospital/Clinic Information
          </h2>

          <div className="flex gap-6">
            {/* Form Fields */}
            <div className="flex-1 space-y-4">
              {["name", "address", "phone", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-sm mb-1 capitalize">
                    {field === "name"
                      ? "Clinic/Hospital Name"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "phone" ? "tel" : "text"}
                    inputMode={field === "phone" ? "numeric" : undefined}
                    pattern={field === "phone" ? "[0-9]*" : undefined}
                    value={editedData[field]}
                    readOnly={editField !== field}
                    onFocus={() => setEditField(field)}
                    onChange={(e) =>
                      handleInputChange(field, e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm bg-white"
                  />
                </div>
              ))}

              {/* Operating Hours */}
              <div>
                <label className="block text-sm mb-1 font-medium">
                  Operating Hours <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="text-sm mr-2">From</span>
                    <input
                      type="time"
                      value={editedData.from}
                      onChange={(e) =>
                        handleInputChange("from", e.target.value)
                      }
                      onFocus={() => setEditField("from")}
                      className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                    />
                  </div>
                  <span className="text-sm">To</span>
                  <div className="flex items-center">
                    <input
                      type="time"
                      value={editedData.to}
                      onChange={(e) => handleInputChange("to", e.target.value)}
                      onFocus={() => setEditField("to")}
                      className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                    />
                    
                  </div>
                </div>
              </div>

              {/* Buttons */}
              {showButtons && (
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 rounded-md border border-pink-400 text-pink-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>

            {/* Image Preview */}
            <div className="flex flex-col items-center">
              <label className="text-sm text-gray-500 mb-2">
                Clinic/Hospital Image
              </label>
              <img
                src={previewImage}
                alt="Clinic"
                className="w-56 h-36 object-cover rounded-lg mb-2 border"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HospitalClinicPartner;
