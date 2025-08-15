import React from "react";

export const ORDERS = [
  {
    id: "ORD-20250318-001",
    date: "18/03/2025",
    items: [
      { name: "Cat Scratcher", qty: 1, price: 15 },
      { name: "Dog Food Premium", qty: 2, price: 25 },
    ],
    total: 65,
    status: "Paid",
  },
  {
    id: "ORD-20250215-002",
    date: "15/02/2025",
    items: [{ name: "Cat Toy", qty: 1, price: 8 }],
    total: 8,
    status: "Pending",
  },
  {
    id: "ORD-20250121-003",
    date: "21/01/2025",
    items: [{ name: "Pet Shampoo", qty: 1, price: 12 }],
    total: 12,
    status: "Refunded",
  },
];

export const STATUS_STYLES = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Refunded: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

const currency = (n) => `$${Number(n).toFixed(2)}`;

const OrderHistory = ({ onSelect }) => {
  const handleKey = (e, o) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.(o);
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      {/* Header bảng */}
      <div className="grid grid-cols-12 bg-pink-400 text-white font-semibold px-5 py-3 text-sm">
        <div className="col-span-4">Order</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-2">Items</div>
        <div className="col-span-2">Total</div>
        <div className="col-span-2 text-right pr-2">Status</div>
      </div>

      {/* Rows */}
      <div className="bg-white">
        {ORDERS.map((o, idx) => (
          <div
            key={o.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelect?.(o)}
            onKeyDown={(e) => handleKey(e, o)}
            className={`grid grid-cols-12 items-center px-5 py-4 text-sm cursor-pointer
              hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                idx ? "border-t border-gray-200" : ""
              }`}
            aria-label={`Open order ${o.id}`}
          >
            {/* Order & brief items */}
            <div className="col-span-4">
              <div className="font-medium text-gray-800">{o.id}</div>
              <div className="text-xs text-gray-500 truncate">
                {o.items.map((it) => `${it.name} x${it.qty}`).join(", ")}
              </div>
            </div>

            <div className="col-span-2 text-gray-700">{o.date}</div>
            <div className="col-span-2 text-gray-700">{o.items.length}</div>
            <div className="col-span-2 text-gray-700">{currency(o.total)}</div>

            <div className="col-span-2 flex items-center justify-end">
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                  STATUS_STYLES[o.status] || "bg-gray-100 text-gray-700"
                }`}
              >
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
