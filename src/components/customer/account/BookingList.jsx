import React from "react";

const STATUS_STYLES = {
  Cancel:   { color: "#ef4444", label: "Cancel" },    
  Complete: { color: "#3b82f6", label: "Done" },  
  Waiting:  { color: "#22c55e", label: "Waiting" },   
};

const bookings = [
  { name: "Phòng khám Trần Việt Hoàng", time: "15:00", date: "18/03/2025", address: "30 xa lộ hà nội, tp HCM", status: "Cancel" },
  { name: "Phòng khám Trần Minh Nhựt",  time: "16:30", date: "15/02/2022", address: "30 xa lộ hà nội, tp HCM", status: "Complete" },
  { name: "Phòng khám Trọng Hiếu",      time: "19:05", date: "21/03/2025", address: "30 xa lộ hà nội, tp HCM", status: "Waiting" },
];

const BookingList = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="grid grid-cols-12 bg-pink-400 text-white font-semibold px-5 py-3 text-sm">
        <div className="col-span-4">Name</div>
        <div className="col-span-2">Time</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-3">Address</div>
        <div className="col-span-1 text-right pr-2">Status</div>
      </div>

      {/* Rows */}
      <div className="bg-white">
        {bookings.map((b, idx) => {
          const key = (b.status || "").trim();
          const st = STATUS_STYLES[key] || STATUS_STYLES.Waiting;

          return (
            <div
              key={idx}
              className={`grid grid-cols-12 items-center px-5 py-4 text-sm ${
                idx ? "border-t border-gray-200" : ""
              }`}
            >
              {/* Name */}
              <div className="col-span-4">
                <span className="inline-block bg-gray-100 text-gray-600 rounded-md px-3 py-2 truncate max-w-full">
                  {b.name}
                </span>
              </div>

              {/* Time / Date */}
              <div className="col-span-2 text-gray-700 whitespace-nowrap">{b.time}</div>
              <div className="col-span-2 text-gray-700 whitespace-nowrap">{b.date}</div>

              {/* Address */}
              <div
                className="col-span-3 text-gray-700 truncate whitespace-nowrap pr-4"
                title={b.address}
              >
                {b.address}
              </div>

              {/* Status */}
              <div className="col-span-1 flex items-center justify-end gap-2 relative z-10 shrink-0">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: st.color }}
                />
                <span className="text-gray-600">{st.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingList;
