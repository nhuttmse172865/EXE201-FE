import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaTachometerAlt,
  FaHandshake,
  FaBullhorn,
  FaGift,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemsPerPage = 8;

const serviceData = [
  { name: "General Check-ups", price: 20 },
  { name: "Vaccinations", price: 20 },
  { name: "Surgery", price: 20 },
  { name: "Grooming", price: 20 },
  { name: "Pet Boarding & Daycare", price: 20 },
  { name: "Spaying", price: 20 },
  { name: "Providing Consulting Online", price: 20 },
  { name: "Other", price: 20 },
  { name: "Extra Service 1", price: 25 },
  { name: "Extra Service 2", price: 15 },
];

const ServicePartner = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const [formServices, setFormServices] = useState(
    serviceData.map((service) => ({
      ...service,
      selected: false,
      price: service.price.toString(),
    }))
  );
  const [consultingPrice, setConsultingPrice] = useState("");
  const [showConsultingPrice, setShowConsultingPrice] = useState(false);
  const [isConsultingChecked, setIsConsultingChecked] = useState(false);

  const [otherServiceName, setOtherServiceName] = useState("");
  const [otherPrice, setOtherPrice] = useState("");
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  const totalPages = Math.ceil(formServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = formServices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePriceChange = (index, value) => {
    const numeric = parseFloat(value);
    const isValidFormat = /^(\d+(\.\d*)?)?$/.test(value);

    if (isValidFormat && (value === "" || numeric > 0)) {
      setFormServices((prev) =>
        prev.map((s, i) => (i === index ? { ...s, price: value } : s))
      );
    }
  };

  const handleOtherPriceChange = (value) => {
    const num = parseFloat(value);
    const isValid = /^(\d+(\.\d*)?)?$/.test(value);
    if (isValid && (value === "" || num > 0)) {
      setOtherPrice(value);
    }
  };

  const handleConsultingChange = (value) => {
    const num = parseFloat(value);
    const isValid = /^(\d+(\.\d*)?)?$/.test(value);
    if (isValid && (value === "" || num > 0)) {
      setConsultingPrice(value);
    }
  };

  const handleCheckboxChange = (index) => {
    setFormServices((prev) =>
      prev.map((s, i) => (i === index ? { ...s, selected: !s.selected } : s))
    );
  };

  // SINGLE async handleConfirm (dùng fetch)
  const handleConfirm = async () => {
    const selectedServices = formServices
      .filter((s) => s.selected && parseFloat(s.price) > 0)
      .map((s) => ({
        name: s.name,
        price: parseFloat(s.price),
      }));

    const hasValidService = selectedServices.length > 0;

    const hasValidConsulting =
      isConsultingChecked &&
      (!showConsultingPrice ||
        (showConsultingPrice && parseFloat(consultingPrice) > 0));

    const hasValidOther =
      isOtherChecked &&
      otherServiceName.trim() !== "" &&
      parseFloat(otherPrice) > 0;

    // Kiểm tra tổng thể: phải có ít nhất 1 mục hợp lệ
    if (!hasValidService && !hasValidConsulting && !hasValidOther) {
      toast.error(
        "Please provide at least one valid service, consulting fee or other service."
      );
      return;
    }

    // Tư vấn có chọn trả phí nhưng chưa nhập số hợp lệ
    if (isConsultingChecked && showConsultingPrice) {
      if (!consultingPrice || parseFloat(consultingPrice) <= 0) {
        toast.error("Please enter a valid consulting price.");
        return;
      }
    }

    // Other thiếu tên hoặc giá không hợp lệ
    if (isOtherChecked) {
      if (!otherServiceName.trim()) {
        toast.error("Please enter a name for the 'Other' service.");
        return;
      }
      if (!otherPrice || parseFloat(otherPrice) <= 0) {
        toast.error("Please enter a valid price for the 'Other' service.");
        return;
      }
    }

    // Build payload: hợp nhất selected + consulting + other
    const payload = {
      hospitalService: [
        ...selectedServices,
        ...(isConsultingChecked
          ? [
              {
                name: "Providing Consulting Online",
                price: showConsultingPrice ? parseFloat(consultingPrice) : 0,
              },
            ]
          : []),
        ...(isOtherChecked
          ? [
              {
                name: otherServiceName.trim(),
                price: parseFloat(otherPrice),
              },
            ]
          : []),
      ],
    };

    // ---- THAY đổi API_URL và cách lấy token nếu cần ----
    const API_URL = "http://localhost:5000/api/services"; // <- đổi thành API của bạn
    const token = sessionStorage.getItem("token"); // hoặc lấy từ prop/context
    console.log(JSON.stringify(payload));
    // try {
    //   const res = await fetch(API_URL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       ...(token ? { Authorization: `Bearer ${token}` } : {}),
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   if (!res.ok) {
    //     const text = await res.text().catch(() => null);
    //     throw new Error(`HTTP ${res.status} ${text || ""}`);
    //   }

    //   const data = await res.json().catch(() => null);
    //   console.log("Server response:", data);

    //   toast.success("Services updated successfully!");
    //   setShowForm(false);

    //   // Optionally update local UI (nếu muốn reflect ngay)
    //   // ví dụ cập nhật formServices để hiển thị giá mới (nếu server chấp nhận)
    //   // setFormServices(prev => prev.map(s => {
    //   //   const found = payload.services.find(ps => ps.name === s.name);
    //   //   return found ? { ...s, price: String(found.price), selected: true } : s;
    //   // }));
    // } catch (error) {
    //   console.error("Error updating services:", error);
    //   toast.error("Failed to update services.");
    // }
  };

  return (
    <div className="flex min-h-screen font-sans bg-pink-100">
      {/* Sidebar */}
      <aside className="w-60 fixed top-0 left-0 h-full bg-white rounded-xl p-4 shadow-lg">
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

      {/* Main Content */}
      <main className="flex-1 p-8 ml-60">
        <ToastContainer />
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Services</p>
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

        {/* Update Button */}
        {!showForm && (
          <div className="mb-5">
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
              onClick={() => setShowForm(true)}
            >
              Update Service
            </button>
          </div>
        )}

        {/* Form or Table */}
        {showForm ? (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-500 mb-6">
              List of Services
            </h2>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm text-gray-700 mb-6">
              {formServices.map((service, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    checked={service.selected}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="w-56">{service.name}</span>
                  <input
                    type="text"
                    value={service.price}
                    onChange={(e) => handlePriceChange(index, e.target.value)}
                    className={`ml-2 px-2 border rounded-md w-24 text-center text-sm ${
                      service.price !== "" && Number(service.price) <= 0
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <span className="text-gray-500 font-semibold">$</span>
                </label>
              ))}
            </div>

            {/* Consulting */}
            <div className="mt-4 mb-4">
              <label className="flex items-center space-x-2 text-sm text-gray-700 mb-2">
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={isConsultingChecked}
                  onChange={(e) => setIsConsultingChecked(e.target.checked)}
                />
                <span>Provide online consulting services</span>
              </label>
              <div className="flex items-center space-x-4 ml-6 text-sm">
                <span className="font-semibold text-gray-500">
                  Consulting fee
                </span>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="consulting"
                    className="accent-pink-500"
                    checked={showConsultingPrice}
                    onChange={() => setShowConsultingPrice(true)}
                  />
                  <input
                    type="text"
                    disabled={!showConsultingPrice}
                    value={consultingPrice}
                    onChange={(e) => handleConsultingChange(e.target.value)}
                    placeholder="20"
                    className={`border rounded-md px-2 py-1 text-sm w-24 text-center ${
                      consultingPrice !== "" && parseFloat(consultingPrice) <= 0
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <span className="text-gray-500 font-semibold">$</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="consulting"
                    className="accent-pink-500"
                    checked={!showConsultingPrice}
                    onChange={() => setShowConsultingPrice(false)}
                  />
                  <span>Free</span>
                </label>
              </div>
            </div>

            {/* Other */}
            <div className="flex items-center space-x-4 mb-6">
              <label className="flex items-center space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="accent-pink-500"
                  checked={isOtherChecked}
                  onChange={(e) => setIsOtherChecked(e.target.checked)}
                />
                <span>Other</span>
              </label>
              <input
                type="text"
                className="border rounded-md px-2 py-1 text-sm w-1/3"
                placeholder="Service name"
                value={otherServiceName}
                onChange={(e) => setOtherServiceName(e.target.value)}
              />
              <input
                type="text"
                className={`border rounded-md px-2 py-1 text-sm w-24 text-center ${
                  otherPrice !== "" && parseFloat(otherPrice) <= 0
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="20"
                value={otherPrice}
                onChange={(e) => handleOtherPriceChange(e.target.value)}
              />
              <span className="text-gray-500 font-semibold">$</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-6 py-2 rounded-md border bg-white text-pink-400 border-pink-400"
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 rounded-md bg-pink-400 text-white hover:bg-pink-500"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          // TABLE
          <div className="bg-white rounded-2xl shadow-md p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-transparent">
                  <th className="pb-4 w-[70%]">Service Name</th>
                  <th className="pb-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((service, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200"
                    style={{ height: "60px" }}
                  >
                    <td className="text-gray-800 text-sm">{service.name}</td>
                    <td className="text-gray-800 text-sm">${service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex justify-end mt-6 space-x-2 text-sm">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-100 text-gray-600"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-purple-700 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-100 text-gray-600"
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ServicePartner;
