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


const Advertisement = () => {
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
 <main className="ml-60 p-6 bg-gray-50 flex-1">
      {/* Header */}
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Advertisement</p>
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

      {/* Filter Section */}
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

  {/* Row 2: Store */}
  <div className="flex flex-wrap gap-4">
    <div>
      <label className="text-sm text-gray-600 block mb-1">Store</label>
      <select className="w-[180px] border border-gray-300 rounded px-4 py-2 text-sm">
        <option value="">All Stores</option>
        <option value="Cesar Fuller">Cesar Fuller</option>
      </select>
    </div>
  </div>

  {/* Row 3: Customer Target, Budget, Actual Cost, Status */}
  <div className="flex flex-wrap gap-4">
    <div>
      <label className="text-sm text-gray-600 block mb-1">Customer Target</label>
      <select className="w-[200px] border border-gray-300 rounded px-4 py-2 text-sm">
        <option value="">All Customers</option>
        <option value="Customer Target">Customer Target</option>
      </select>
    </div>
    <div>
      <label className="text-sm text-gray-600 block mb-1">Budget</label>
      <input
        type="number"
        className="w-[150px] border border-gray-300 rounded px-4 py-2 text-sm"
        placeholder="1000"
      />
    </div>
    <div>
      <label className="text-sm text-gray-600 block mb-1">Actual Cost</label>
      <input
        type="number"
        className="w-[150px] border border-gray-300 rounded px-4 py-2 text-sm"
        placeholder="200"
      />
    </div>
    <div>
      <label className="text-sm text-gray-600 block mb-1">Status</label>
      <select className="w-[130px] border border-gray-300 rounded px-4 py-2 text-sm">
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Working">Working</option>
        <option value="Stopped">Stopped</option>
      </select>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex justify-end gap-2 pt-2">
    <button className="bg-white-100 text-pink-500 w-[80px] px-4 py-2 rounded rounded-xl border border-pink-500 text-sm">
      Clear
    </button>
    <button className="bg-pink-500 text-white px-4 w-[100px] py-2 rounded-xl text-sm">
      Search
    </button>
  </div>
</div>


   {/* Table Section */}
<div className="bg-white rounded-xl shadow overflow-x-auto p-4">
  <table className="w-full table-auto text-sm text-gray-700">
    <thead className="bg-gray-100 text-gray-600 text-left rounded">
      <tr>
        <th className="p-3 font-semibold rounded-l-xl ">Code</th>
        <th className="p-3 font-semibold">Name</th>
        <th className="p-3 font-semibold">Store</th>
        <th className="p-3 font-semibold">Customer Target</th>
        <th className="p-3 font-semibold">Budget</th>
        <th className="p-3 font-semibold">Actual Cost</th>
        <th className="p-3 font-semibold">Customer Engagement</th>
        <th className="p-3 font-semibold rounded-r-xl">Status</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["AD000001", "Miranda Berry", "Cesar Fuller", "$1000", "$200", "Customer engagement", "Pending"],
        ["AD000002", "Roger Jensen", "Cesar Fuller", "$1000", "$200", "Customer engagement", "Working"],
        ["AD000003", "Luis Gomez", "Cesar Fuller", "$1000", "$200", "Customer engagement", "Stopped"],
        ["AD000004", "Billy Gregory", "Cesar Fuller", "$1000", "$200", "Customer engagement", "Pending"],
        ["AD000005", "Elisa Ramos", "Cesar Fuller", "$1000", "$200", "Customer engagement", "Stopped"],
      ].map(([code, name, store, budget, cost, engagement, status], i) => (
        <tr key={i} className="hover:bg-gray-50">
          <td className="p-3">{code}</td>
          <td className="p-3">{name}</td>
          <td className="p-3">{store}</td>
          <td className="p-3">Customer Target</td>
          <td className="p-3">{budget}</td>
          <td className="p-3">{cost}</td>
          <td className="p-3">{engagement}</td>
          <td className="p-3">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              status === "Pending"
                ? "bg-yellow-100 text-yellow-600"
                : status === "Working"
                ? "bg-green-100 text-green-600"
                : "bg-pink-100 text-pink-600"
            }`}>
              {status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
      </div>
             {/* Pagination */}
<div className="flex justify-center py-4">
  {/* Previous Button */}
  <button className="px-3 py-1 rounded bg-white mx-1 text-gray-700 hover:bg-gray-100">
    &lt;
  </button>

  {/* Page Numbers */}
  <button className="px-3 py-1 rounded bg-pink-500 text-white mx-1">1</button>
  <button className="px-3 py-1 rounded bg-white text-gray-700 mx-1">2</button>
  <button className="px-3 py-1 rounded bg-white text-gray-700 mx-1">3</button>

  {/* Next Button */}
  <button className="px-3 py-1 rounded bg-white mx-1 text-gray-700 hover:bg-gray-100">
    &gt;
  </button>
</div>
    </main>
    </div>
  );
};

export default Advertisement;