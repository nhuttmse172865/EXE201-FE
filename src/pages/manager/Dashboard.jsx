import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaBell, FaSearch, FaDollarSign } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { FaTachometerAlt, FaHandshake, FaBullhorn, FaGift, FaClipboardList, FaNewspaper, FaCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const pieData = [
  { name: "Pending", value: 15, color: "#FBBF24" },
  { name: "On Progress", value: 20, color: "#3B82F6" },
  { name: "Already", value: 65, color: "#10B981" },
];

const lineData = [
  { name: "Apr 30", partner: 400, others: 240 },
  { name: "May 05", partner: 300, others: 139 },
  { name: "May 10", partner: 500, others: 400 },
  { name: "May 15", partner: 700, others: 480 },
  { name: "May 20", partner: 600, others: 300 },
  { name: "May 25", partner: 400, others: 240 },
  { name: "May 30", partner: 380, others: 210 },
];

const statusColors = {
  Pending: "bg-yellow-300",
  "On Progress": "bg-blue-400",
  Already: "bg-green-400",
  Cancelled: "bg-red-400",
};

const Dashboard = () => {
 const location = useLocation();
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
<aside className="w-60 fixed top-0 left-0 h-full bg-white rounded-xl p-4 space-y-6 shadow-lg z-10">
  <nav className="space-y-2 mt-10">
    <div className="text-gray-400 font-semibold">MENU</div>

    <Link
      to="/dashboard"
      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
        location.pathname === "/dashboard"
          ? "text-pink-500 font-semibold bg-pink-100"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <FaTachometerAlt /> Dashboard
    </Link>

    <Link
      to="/partners"
      className={`flex items-center gap-2 p-2 rounded cursor-pointer text-gray-700 hover:bg-gray-100`}
    >
      <FaHandshake /> Partners
    </Link>

    <Link
      to="/advertisement"
      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
        location.pathname === "/advertisement"
          ? "text-pink-500 font-semibold bg-pink-100"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <FaBullhorn /> Advertisement
    </Link>

    <Link
      to="/promotion"
      className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer"
    >
      <FaGift /> Promotion
    </Link>

    <Link
      to="/plans"
      className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer"
    >
      <FaClipboardList /> Plans
    </Link>

    <Link
      to="/news"
      className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer"
    >
      <FaNewspaper /> News
    </Link>

    <div className="pt-4 text-gray-400">TOOLS</div>

    <Link
      to="/settings"
      className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer"
    >
      <FaCog /> Settings
    </Link>
  </nav>
</aside>


      {/* Main content */}
<main className="flex-1 p-6 bg-pink-50 ml-60">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Dashboard</p>
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

        {/* Metrics Cards */}
        <div className="grid grid-cols-3 text-gray-700 gap-6 mb-6">
          {["Transactions", "Upcoming Partners", "Revenue"].map((title, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center justify-between">
                <h2 className="text-md font-semibold">{title}</h2>
                {title === "Revenue" ? (
                  <FaDollarSign className="text-green-500" />
                ) : (
                  <HiOutlineUsers className="text-purple-500" />
                )}
              </div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-green-500">+10% vs last month</p>
            </div>
          ))}
        </div>

        {/* Revenue Overview + Partner Registration */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Revenue Overview Chart */}
          <div className="col-span-2 bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between mb-2">
              <h2 className="text-gray-700 font-semibold">Revenue Overview</h2>
              <span className="text-sm text-gray-500">Apr 30 - May 30</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <Tooltip />
                <Line type="monotone" dataKey="partner" stroke="#6366F1" name="Partner Fee" />
                <Line type="monotone" dataKey="others" stroke="#F43F5E" name="Others Fee" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Registration Partner */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-gray-700 font-semibold mb-2">Registration Partner</h2>
            <div className="flex justify-between ">
              <p className="text-gray-700 pb-2">Email</p>
              <p className="text-gray-700 pb-2">Status</p>
            </div>
            {[
              { email: "thanhdatvt111@gmail.com", date: "05-03-2025", status: "Pending" },
              { email: "thanhdatvt111@gmail.com", date: "05-03-2025", status: "On Progress" },
              { email: "thanhdatvt111@gmail.com", date: "05-03-2025", status: "Already" },
              { email: "thanhdatvt111@gmail.com", date: "05-03-2025", status: "Cancelled" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">{item.email}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                <span
                  className={`text-white text-xs flex items-center px-1 py-1 rounded ${statusColors[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions + Pie Chart */}
        <div className="grid grid-cols-3 gap-6">
          {/* Transactions */}
          <div className="col-span-2 bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Transactions</h2>
            <div className="grid grid-cols-5 text-sm font-semibold text-gray-600 mb-2 bg-gray-100 p-2 rounded">
              <div>Customer</div>
              <div>Store</div>
              <div>Service</div>
              <div>Date</div>
              <div>Price</div>
            </div>
            {[
              ["Lucas Lambert", "Fbase", "Ads", "05-03-2025", "$12"],
              ["Adrienne Burke", "Fbase", "Booster Plans", "05-03-2025", "$20"],
              ["Bruce Owens", "Romano Aguilar", "Bathing Pet", "05-03-2025", "$22"],
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-5 text-sm py-2 p-2">
                {row.map((cell, j) => (
                  <div key={j}>{cell}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
            <h2 className="font-semibold mb-4">Status Distribution</h2>
            <PieChart width={180} height={180}>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={70}
                innerRadius={40}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="mt-4 space-y-1">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: d.color }}
                  ></span>
                  {d.name} - {d.value}%
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;