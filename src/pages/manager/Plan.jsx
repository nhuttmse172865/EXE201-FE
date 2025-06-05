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
const Plan = () => {
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
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                location.pathname === "/promotion"
                  ? "text-pink-500 font-semibold bg-pink-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FaGift /> Promotion
            </Link>
        
            <Link
              to="/plans"
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                location.pathname === "/plans"
                  ? "text-pink-500 font-semibold bg-pink-100"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
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
               <p className="text-2xl font-bold">Plans</p>
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

{/* Statistics Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  {/* Plan's Transactions */}
  <div className="bg-white p-4 rounded-xl shadow">
    <p className="text-lg text-gray-500 font-bold mb-4">Plan’s Transactions</p>
    <div className="overflow-x-auto">
      <table className="w-full table-auto text-sm text-gray-700">
        <thead className="bg-gray-100 text-gray-600 text-left rounded">
          <tr>
            <th className="p-3 font-semibold rounded-l">Customer</th>
            <th className="p-3 font-semibold">Plan</th>
            <th className="p-3 font-semibold">Date</th>
            <th className="p-3 font-semibold rounded-r">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="p-3">Edwin Duran</td>
            <td className="p-3">Normal</td>
            <td className="p-3">07-03-2025</td>
            <td className="p-3">$1,000</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-3">Edwin Duran</td>
            <td className="p-3">Normal</td>
            <td className="p-3">07-03-2025</td>
            <td className="p-3">$1,000</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-3">Edwin Duran</td>
            <td className="p-3">Normal</td>
            <td className="p-3">07-03-2025</td>
            <td className="p-3">$1,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Pie Chart Statistics */}
  <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center">
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={[
            { name: "Normal", value: 60 },
            { name: "Premium", value: 30 },
            { name: "Others", value: 10 },
          ]}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          <Cell fill="#7b7be5" /> {/* Normal - Purple */}
          <Cell fill="#ffc107" /> {/* Premium - Yellow */}
          <Cell fill="#f875aa" /> {/* Others - Pink */}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <div className="absolute text-center">
      <p className="text-2xl font-bold text-gray-700">1,950</p>
      <p className="text-sm text-gray-400">customers</p>
    </div>
    
    {/* Legend */}
    <div className="mt-4 flex justify-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#7b7be5] rounded"></div>
        <span className="text-sm text-gray-600">Normal</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#ffc107] rounded"></div>
        <span className="text-sm text-gray-600">Premium</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#f875aa] rounded"></div>
        <span className="text-sm text-gray-600">Others</span>
      </div>
    </div>
  </div>
</div>


{/* Plans Table with Create Button */}
<div className="bg-white p-4 rounded-xl shadow">
  <div className="flex justify-between items-center mb-4">
    <p className="text-lg text-gray-500 font-bold">Plans</p>
    <button className="bg-pink-400 hover:bg-pink-500 w-[110px] h-[35px] text-white px-4 py-2 rounded-md text-sm">
      Create
    </button>

  </div>

  <div className="overflow-x-auto">
    <table className="w-full table-auto text-sm text-gray-700">
      <thead className="bg-gray-100 text-gray-600 text-left rounded">
        <tr>
          <th className="p-3 font-semibold rounded-l">Code</th>
          <th className="p-3 font-semibold">Name</th>
          <th className="p-3 font-semibold">Price</th>
          <th className="p-3 font-semibold">Feature</th>
          <th className="p-3 font-semibold">Limit</th>
          <th className="p-3 font-semibold">Target</th>
          <th className="p-3 font-semibold rounded-r">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="p-3">P000001</td>
          <td className="p-3">Normal</td>
          <td className="p-3">0</td>
          <td className="p-3">Make an appointment</td>
          <td className="p-3">Limit</td>
          <td className="p-3">Customer</td>
          <td className="p-3 text-gray-600">Pending</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">P000001</td>
          <td className="p-3">Normal</td>
          <td className="p-3">0</td>
          <td className="p-3">Make an appointment</td>
          <td className="p-3">Limit</td>
          <td className="p-3">Customer</td>
          <td className="p-3 text-gray-600">Pending</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">P000001</td>
          <td className="p-3">Normal</td>
          <td className="p-3">0</td>
          <td className="p-3">Make an appointment</td>
          <td className="p-3">Limit</td>
          <td className="p-3">Customer</td>
          <td className="p-3 text-gray-600">Pending</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">P000001</td>
          <td className="p-3">Normal</td>
          <td className="p-3">0</td>
          <td className="p-3">Make an appointment</td>
          <td className="p-3">Limit</td>
          <td className="p-3">Customer</td>
          <td className="p-3 text-gray-600">Pending</td>
        </tr>

      </tbody>
    </table>
  </div>
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
export default Plan;