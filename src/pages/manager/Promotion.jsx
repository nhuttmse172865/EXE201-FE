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
const Promotion = () => {
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
               <p className="text-2xl font-bold">Promotion</p>
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
 {/* Top Section: Stats + Transactions */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  {/* Left Column (1/3 width) */}
  <div className="flex flex-col gap-4">
<div className="bg-white p-4 rounded-xl shadow h-[140px] flex flex-col justify-center space-y-2">
  <div className="flex justify-between items-start">
    <p className="text-gray-500 text-sm">Promotions</p>
    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Monthly</span>
  </div>
  <p className="text-2xl font-bold text-gray-700">100</p>
  <p className="text-sm text-gray-500"> <span className="text-green-500">+10%</span> from last month</p>
</div>

<div className="bg-white p-4 rounded-xl shadow h-[140px] flex flex-col justify-center space-y-2">
  <p className="text-gray-500 text-sm">Promotions Active</p>
  <p className="text-2xl text-gray-700 font-bold">10</p>
  <p className="text-sm text-gray-500">
    over <span className="text-green-500">1000</span> transactions
  </p>
</div>
  </div>

{/* Right Column (2/3 width, spanning 2 rows) */}
<div className="md:col-span-2">
  <div className="bg-white p-4 rounded-xl shadow h-full">
    <p className="text-lg font-bold text-gray-500 mb-4">Promotion’s Transactions</p>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-500 text-left rounded">
          <tr>
            <th className="py-2 px-4 rounded-l-xl">Customer</th>
            <th className="px-4">Store</th>
            <th className="px-4">Service</th>
            <th className="px-4">Date</th>
            <th className="px-4 rounded-r-xl">Price</th>
          </tr>
        </thead>
        <tbody>
  <tr>
    <td className="py-4 px-4 text-gray-500">Cesar Fuller</td>
    <td className="py-4 px-4 text-gray-500">Priscilla Simpson</td>
    <td className="py-4 px-4 text-gray-500">Priscilla Simpson</td>
    <td className="py-4 px-4 text-gray-500">06-03-2025</td>
    <td className="py-4 px-4 text-gray-500">$1,000</td>
  </tr>
  <tr>
    <td className="py-4 px-4 text-gray-500">Cesar Fuller</td>
    <td className="py-4 px-4 text-gray-500">Priscilla Simpson</td>
    <td className="py-4 px-4 text-gray-500">Priscilla Simpson</td>
    <td className="py-4 px-4 text-gray-500">06-03-2025</td>
    <td className="py-4 px-4 text-gray-500">$1,000</td>
  </tr>
  <tr>
    <td className="py-4 px-4 text-gray-500">Cesar Fuller</td>
    <td className="py-4 px-4 text-gray-500">Priscilla Simpson</td>
    <td className="py-4 px-4 text-gray-500">Priscilla Simpson</td>
    <td className="py-4 px-4 text-gray-500">06-03-2025</td>
    <td className="py-4 px-4 text-gray-500">$1,000</td>
  </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>

{/* Promotions Table with Create Button */}
{/* Promotions Table with Create Button */}
<div className="bg-white p-4 rounded-xl shadow">
  <div className="flex justify-between items-center mb-4">
    <p className="text-lg text-gray-500 font-bold">Promotions</p>
    <button className="bg-pink-400 hover:bg-pink-500 w-[110px] h-[35px] text-white px-4 py-2 rounded-md text-sm">
      Create
    </button>

     
  </div>

  <div className="overflow-x-auto">
    <table className="w-full table-auto text-sm text-gray-700">
      <thead className="bg-gray-100 text-gray-600 text-left rounded">
        <tr>
          <th className="p-3 font-semibold rounded-l-xl">Code</th>
          <th className="p-3 font-semibold">Name</th>
          <th className="p-3 font-semibold">Store Target</th>
          <th className="p-3 font-semibold">Customer Target</th>
          <th className="p-3 font-semibold">Service Target</th>
          <th className="p-3 font-semibold">Type</th>
          <th className="p-3 font-semibold">Start Date</th>
          <th className="p-3 font-semibold">End Date</th>
          <th className="p-3 font-semibold">Quantity</th>
          <th className="p-3 font-semibold">Discount</th>
          <th className="p-3 font-semibold rounded-r-xl">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="p-3">PRM000001</td>
          <td className="p-3">Sale 20%</td>
          <td className="p-3">Priscilla Simpson</td>
          <td className="p-3">All</td>
          <td className="p-3">All</td>
          <td className="p-3">Discount</td>
          <td className="p-3">2023-10-26</td>
          <td className="p-3">2023-11-02</td>
          <td className="p-3">1000</td>
          <td className="p-3">20</td>
          <td className="p-3 text-green-600">Active</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">PRM000001</td>
          <td className="p-3">Sale 20%</td>
          <td className="p-3">Priscilla Simpson</td>
          <td className="p-3">All</td>
          <td className="p-3">All</td>
          <td className="p-3">Discount</td>
          <td className="p-3">2023-10-26</td>
          <td className="p-3">2023-11-02</td>
          <td className="p-3">1000</td>
          <td className="p-3">20</td>
          <td className="p-3 text-green-600">Active</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">PRM000001</td>
          <td className="p-3">Sale 20%</td>
          <td className="p-3">Priscilla Simpson</td>
          <td className="p-3">All</td>
          <td className="p-3">All</td>
          <td className="p-3">Discount</td>
          <td className="p-3">2023-10-26</td>
          <td className="p-3">2023-11-02</td>
          <td className="p-3">1000</td>
          <td className="p-3">20</td>
          <td className="p-3 text-green-600">Active</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">PRM000001</td>
          <td className="p-3">Sale 20%</td>
          <td className="p-3">Priscilla Simpson</td>
          <td className="p-3">All</td>
          <td className="p-3">All</td>
          <td className="p-3">Discount</td>
          <td className="p-3">2023-10-26</td>
          <td className="p-3">2023-11-02</td>
          <td className="p-3">1000</td>
          <td className="p-3">20</td>
          <td className="p-3 text-green-600">Active</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">PRM000001</td>
          <td className="p-3">Sale 20%</td>
          <td className="p-3">Priscilla Simpson</td>
          <td className="p-3">All</td>
          <td className="p-3">All</td>
          <td className="p-3">Discount</td>
          <td className="p-3">2023-10-26</td>
          <td className="p-3">2023-11-02</td>
          <td className="p-3">1000</td>
          <td className="p-3">20</td>
          <td className="p-3 text-green-600">Active</td>
        </tr>

                <tr className="hover:bg-gray-50">
          <td className="p-3">PRM000001</td>
          <td className="p-3">Sale 20%</td>
          <td className="p-3">Priscilla Simpson</td>
          <td className="p-3">All</td>
          <td className="p-3">All</td>
          <td className="p-3">Discount</td>
          <td className="p-3">2023-10-26</td>
          <td className="p-3">2023-11-02</td>
          <td className="p-3">1000</td>
          <td className="p-3">20</td>
          <td className="p-3 text-green-600">Active</td>
        </tr>
        {/* ... Add more rows as needed */}
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
export default Promotion;