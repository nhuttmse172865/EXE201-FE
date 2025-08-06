import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaSearch,
  FaBell,
  FaTachometerAlt,
  FaHandshake,
  FaBullhorn,
  FaGift,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const initialDoctors = [
  { name: "Dr. John Doe", email: "john@example.com", phone: "0901234567" },
  { name: "Dr. Anna Smith", email: "anna@example.com", phone: "0912345678" },
];

const DoctorPartner = () => {
  const location = useLocation();
  const [doctors, setDoctors] = useState(initialDoctors);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    license: null,
    identity: null,
  });

  const handleDrop = (field) => (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.size <= 100 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, [field]: file }));
    } else {
      toast.error("File must be under 100MB");
    }
  };

  const { getRootProps: licenseRoot, getInputProps: licenseInput } = useDropzone({
    onDrop: handleDrop("license"),
    accept: { "image/jpeg": [], "image/png": [] },
  });

  const { getRootProps: identityRoot, getInputProps: identityInput } = useDropzone({
    onDrop: handleDrop("identity"),
    accept: { "image/jpeg": [], "image/png": [] },
  });

  const handleChange = (field, value) => {
    if (field === "phone") {
      // Chỉ cho nhập số & bắt đầu bằng số 0
      if (!/^\d{0,10}$/.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

const handleSubmit = () => {
  const { username, email, phone, password, license, identity } = formData;
  const phoneRegex = /^0\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || !email || !phone || !password) {
    toast.error("Please fill in all fields");
    return;
  }

  if (!emailRegex.test(email)) {
    toast.error("Invalid email format");
    return;
  }

  if (!phoneRegex.test(phone)) {
    toast.error("Phone must start with 0 and be 10 digits");
    return;
  }

  if (!license || !identity) {
    toast.error("Please upload both Veterinary License and Identity Card/Passport");
    return;
  }

  // Nếu mọi thứ hợp lệ:
  setDoctors([...doctors, { name: username, email, phone }]);
  toast.success("Account created successfully");

  setFormData({
    username: "",
    email: "",
    phone: "",
    password: "",
    license: null,
    identity: null,
  });
  setShowForm(false);
};

  return (
    <div className="min-h-screen font-sans bg-pink-100 flex">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <aside className="w-60 fixed top-0 left-0 h-full bg-white rounded-xl p-4 shadow-lg">
        <nav className="space-y-2 mt-10">
          <div className="text-gray-400 font-semibold">MENU</div>
          <Link to="/dashboard-partner" className={`flex items-center gap-2 p-2 rounded cursor-pointer ${location.pathname === "/dashboard-partner" ? "text-pink-500 font-semibold bg-pink-100" : "text-gray-700 hover:bg-gray-100"}`}>
            <FaTachometerAlt /> Dashboard
          </Link>
          <Link to="/service-partner" className={`flex items-center gap-2 p-2 rounded cursor-pointer ${location.pathname === "/service-partner" ? "text-pink-500 font-semibold bg-pink-100" : "text-gray-700 hover:bg-gray-100"}`}>
            <FaHandshake /> Service
          </Link>
          <Link to="/doctor-partner" className={`flex items-center gap-2 p-2 rounded cursor-pointer ${location.pathname === "/doctor-partner" ? "text-pink-500 font-semibold bg-pink-100" : "text-gray-700 hover:bg-gray-100"}`}>
            <FaBullhorn /> Doctor
          </Link>
          <Link to="/hospitalclinic-partner" className={`flex items-center gap-2 p-2 rounded cursor-pointer ${location.pathname === "/hospitalclinic-partner" ? "text-pink-500 font-semibold bg-pink-100" : "text-gray-700 hover:bg-gray-100"}`}>
            <FaGift /> Hospital/Clinic
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60 p-8">
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

        {!showForm ? (
          <>
            <div className="flex justify-start mb-5">
              <button
                onClick={() => setShowForm(true)}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
              >
                Create Account
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
             <table className="w-full text-left">
  <thead className="text-sm text-gray-400 border-b border-gray-200">
    <tr>
      <th className="pb-3 w-[20%]">Name</th>
      <th className="pb-3 w-[30%]">Email</th>
      <th className="pb-3">Phone</th>
    </tr>
  </thead>
  <tbody>
    {doctors.map((doc, idx) => (
      <tr
        key={idx}
        className="border-b border-gray-200 text-sm text-gray-700"
        style={{ height: "60px" }}
      >
        <td>{doc.name}</td>
        <td>{doc.email}</td>
        <td>{doc.phone}</td>
      </tr>
    ))}
  </tbody>
</table>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-6">Add New Account Doctor</h2>
            <div className="flex gap-6">
              {/* Form Inputs */}
              <div className="flex-1 space-y-4">
                {["username", "email", "phone", "password"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm mb-1 capitalize">{field}</label>
                    <input
                      type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Dropzone Uploads */}
              <div className="flex-1 space-y-6">
                {[
                  { label: "Veterinary License", field: "license", props: licenseRoot(), input: licenseInput() },
                  { label: "Identity Card/Passport", field: "identity", props: identityRoot(), input: identityInput() },
                ].map(({ label, field, props, input }) => (
                  <div key={field}>
                    <label className="block font-semibold text-sm mb-1">Upload {label}</label>
                    <p className="text-sm text-gray-400 mb-1">Please upload file in jpeg or png format and make sure the file size is under 100 MB.</p>
                    <div {...props} className="border-2 border-dashed border-purple-300 rounded-md text-center p-6 bg-purple-50 cursor-pointer">
                      <input {...input} />
                      <p className="text-sm font-medium mb-1 text-gray-700">Drop file or browse</p>
                      <p className="text-xs text-gray-500 mb-2">Format: jpeg, .png & Max file size: 100 MB</p>
                      <button className="bg-purple-700 text-white text-sm px-3 py-1 rounded-md">Browse Files</button>
                    </div>
                    {formData[field]?.name && (
                      <p className="text-xs text-gray-600 mt-1">Selected file: <strong>{formData[field].name}</strong></p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => setShowForm(false)}
                className="w-40 px-6 py-2 rounded-md border text-pink-500 border-pink-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="w-40 px-6 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorPartner;
