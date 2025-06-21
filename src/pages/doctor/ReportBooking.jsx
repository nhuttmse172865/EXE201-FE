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

const bookingsData = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: "Hieu",
  date: "12/03/2025",
  time: "16:00",
  address: "Thanh pho Ho Chi Minh",
  phone: "0901234566",
  status: i % 3 === 0 ? "Waiting" : i % 3 === 1 ? "Complete" : "Cancel",
}));

const ReportBooking = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [bookings, setBookings] = useState(bookingsData);

  const handleStatusChange = (index, newStatus) => {
    setBookings((prev) =>
      prev.map((b, i) => (i === index ? { ...b, status: newStatus } : b))
    );
  };

  const paginatedData = bookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex min-h-screen font-sans bg-pink-100">
      {/* Sidebar */}
           <SideBarDoctor/>

      {/* Main */}
      <main className="flex-1 p-8 ml-60">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">
          <p className="text-2xl font-bold">Booking List</p>
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

        {/* Booking Table */}
        <div className="bg-[#0B1C39] text-white rounded-xl overflow-hidden shadow">
          <table className="w-full text-sm">
            <thead className="text-left uppercase text-xs border-b border-[#1f2d52]">
              <tr className="text-[#d1d5db]">
                <th className="p-3">
                  <div className="flex items-center gap-2">
                    <FaUser /> Name
                  </div>
                </th>
                <th className="p-3">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> Booking Date
                  </div>
                </th>
                <th className="p-3">
                  <div className="flex items-center gap-2">
                    <FaClock /> Time
                  </div>
                </th>
                <th className="p-3">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> Address
                  </div>
                </th>
                <th className="p-3">
                  <div className="flex items-center gap-2">
                    <FaPhone /> Phone
                  </div>
                </th>
                <th className="p-3 w-[5%]">
                  <div className="flex items-center gap-2">
                    <FaListUl /> Status
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((booking, index) => (
                <tr
                  key={booking.id}
                  className="border-b border-[#1f2d52] hover:bg-[#1c2a4d] transition"
                >
                  <td className="p-3 pl-6">{booking.name}</td>
                  <td className="p-3 pl-6">{booking.date}</td>
                  <td className="p-3 pl-6">{booking.time}</td>
                  <td className="p-3">{booking.address}</td>
                  <td className="p-3">{booking.phone}</td>
<td className="p-3 relative">
  <button
    onClick={() =>
      setBookings((prev) =>
        prev.map((b, i) =>
          i === (currentPage - 1) * itemsPerPage + index
            ? { ...b, showDropdown: !b.showDropdown }
            : { ...b, showDropdown: false }
        )
      )
    }
    className={`w-full text-left px-3 py-1 rounded-full text-xs font-semibold
      ${
        booking.status === "Waiting"
          ? "bg-green-500 text-white"
          : booking.status === "Complete"
          ? "bg-blue-500 text-white"
          : "bg-gray-500 text-white"
      }`}
  >
    {booking.status}
  </button>

  {booking.showDropdown && (
    <ul className="absolute z-10 bg-white text-sm text-black rounded shadow mt-1 w-full">
      {["Waiting", "Complete", "Cancel"].map((status) => (
        <li
          key={status}
          onClick={() => {
            const globalIndex = (currentPage - 1) * itemsPerPage + index;
            setBookings((prev) =>
              prev.map((b, i) =>
                i === globalIndex
                  ? { ...b, status, showDropdown: false }
                  : { ...b, showDropdown: false }
              )
            );
          }}
          className={`px-3 py-1 cursor-pointer hover:opacity-80 ${
            status === "Waiting"
              ? "bg-green-100 text-green-700"
              : status === "Complete"
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </li>
      ))}
    </ul>
  )}
</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end p-4 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-6 h-6 bg-white text-[#0B1C39] rounded-full shadow disabled:opacity-50"
            >
              &lt;
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev * itemsPerPage < bookings.length ? prev + 1 : prev
                )
              }
              disabled={currentPage * itemsPerPage >= bookings.length}
              className="w-6 h-6 bg-white text-[#0B1C39] rounded-full shadow disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportBooking;
