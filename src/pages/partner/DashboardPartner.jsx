import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { YAxis, Legend, CartesianGrid, Dot } from "recharts";
import { Link, useLocation } from "react-router-dom";
import { FaBell, FaSearch, FaDollarSign } from "react-icons/fa";
import { FaCreditCard, FaCalendarAlt, FaCalendarCheck } from "react-icons/fa";
import { FaTachometerAlt, FaHandshake, FaBullhorn, FaGift, FaClipboardList, FaNewspaper, FaCog } from "react-icons/fa";

const data = [
  { name: "Jan", revenue: 10000 },
  { name: "Feb", revenue: 15000 },
  { name: "Mar", revenue: 14000 },
  { name: "Apr", revenue: 18000 },
  { name: "May", revenue: 25000 },
  { name: "Jun", revenue: 38753 },
  { name: "Jul", revenue: 30000 },
  { name: "Aug", revenue: 22000 },
  { name: "Sept", revenue: 27000 },
  { name: "Oct", revenue: 29000 },
  { name: "Nov", revenue: 0 },
  { name: "Dec", revenue: 0 },
];

const reviews = [
  {
    name: "Jons Sena",
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.0,
    time: "2 days ago",
  },
  {
    name: "Sofia",
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 3.0,
    time: "2 days ago",
  },
  {
    name: "Anandreansyah",
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    time: "2 days ago",
  },
];

const DashboardPartner = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen font-sans">
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
 

      {/* Main content */}
      <main className="flex-1 p-8 bg-pink-100 ml-60">
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

{/* Top Stats */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow flex items-center p-6 h-[120px]">
    <FaCreditCard className="text-4xl text-gray-600 mr-6" />
    <div>
      <p className="text-xs text-gray-500 font-semibold mb-1">REVENUE TODAY</p>
      <p className="text-[#FFB4C7] text-xl font-bold">$800.000</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow flex items-center p-6 h-[120px]">
    <FaCalendarAlt className="text-4xl text-gray-600 mr-6" />
    <div>
      <p className="text-xs text-gray-500 font-semibold mb-1">TOTAL NUMBER OF RESERVATIONS PENDING</p>
      <p className="text-[#FFB4C7] text-xl font-bold">10</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-xl shadow flex items-center p-6 h-[120px]">
    <FaCalendarCheck className="text-4xl text-gray-600 mr-6" />
    <div>
      <p className="text-xs text-gray-500 font-semibold mb-1">TOTAL NUMBER OF RESERVATIONS PROCESSED</p>
      <p className="text-[#FFB4C7] text-xl font-bold">10</p>
    </div>
  </div>
</div>

        {/* Total Revenue Chart */}
<div className="bg-white rounded-xl shadow p-6 mb-6">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-md font-bold">Total Revenue</h3>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
        <span className="text-sm text-gray-500">2025</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
        <span className="text-sm text-gray-500">2026</span>
      </div>
    </div>
  </div>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis
        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        domain={[0, 45000]}
      />
      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#3b82f6"
        strokeWidth={3}
        dot={({ cx, cy, payload }) => {
          const max = Math.max(...data.map((d) => d.revenue));
          const min = Math.min(...data.map((d) => d.revenue));
          const color =
            payload.revenue === max
              ? "#3b82f6"
              : payload.revenue === min
              ? "#f87171"
              : "#ddd";

          return (
            <circle
              cx={cx}
              cy={cy}
              r={5}
              fill={color}
              stroke={color}
              strokeWidth={1}
            />
          );
        }}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

{/* Customer Reviews */}
<div className="mt-10">
  {/* Tiêu đề và Nút chuyển trang */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-md font-bold">Customer Review</h3>
    <div className="flex space-x-2">
      <button className="w-6 h-6 rounded-full bg-white text-pink-500 shadow">{'<'}</button>
      <button className="w-6 h-6 rounded-full bg-white text-pink-500 shadow">{'>'}</button>
    </div>
  </div>

  {/* Grid hiển thị review */}
  <div className="grid grid-cols-3 gap-4">
    {reviews.map((r, i) => (
      <div key={i} className="bg-white p-4 rounded-xl shadow">
        <div className="flex items-center mb-3">
          <img src={`https://i.pravatar.cc/40?img=${i + 1}`} className="w-10 h-10 rounded-full mr-3" alt="" />
          <div>
            <p className="font-semibold">{r.name}</p>
            <p className="text-xs text-gray-500">{r.time}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-2">{r.comment}</p>
<div className="text-sm flex items-center space-x-1">
  <span className="text-yellow-400">
    {"★".repeat(Math.floor(r.rating))}{"☆".repeat(5 - Math.floor(r.rating))}
  </span>
  <span className="text-gray-700 font-bold">{r.rating.toFixed(1)}</span>
</div>
      </div>
    ))}
  </div>
</div>
      </main>
    </div>
  );
};

export default DashboardPartner;
