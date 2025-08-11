// src/components/customer/account/OrderDetail.jsx
import React, { useMemo } from "react";

const currency = (n) => `$${Number(n ?? 0).toFixed(2)}`;

export default function OrderDetail({ order, onBack }) {
  const { items, subTotal, shipping, discount, total } = useMemo(() => {
    const lines = order?.items ?? [];
    const sub = lines.reduce((s, it) => s + (it.price ?? 0) * (it.qty ?? 0), 0);
    const shipping = Number(order?.shippingFee ?? 0);
    const discount = Number(order?.discount ?? 0);
    const total = Number(order?.total ?? sub + shipping - discount);
    return { items: lines, subTotal: sub, shipping, discount, total };
  }, [order]);

  if (!order) return null;

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      <div className="h-14 bg-pink-400 flex items-center justify-between px-5">
        <div className="text-white font-semibold">
          Order <span className="opacity-90">{order.id}</span>
        </div>
        <button
          onClick={onBack}
          className="px-3 py-1.5 rounded-lg bg-white/15 text-white text-sm hover:bg-white/25"
        >
          ← Back
        </button>
      </div>

      <div className="p-6">
        {/* meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-sm text-gray-600">Date: {order.date}</span>
          <span className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
            {order.status}
          </span>
        </div>

        {/* items */}
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-4 py-2.5 text-sm font-medium">Items</div>
          <div className="divide-y">
            {items.map((it, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 p-4 text-sm">
                <div className="col-span-7">
                  <div className="font-medium text-gray-800">{it.name}</div>
                  <div className="text-gray-500">Qty: {it.qty}</div>
                </div>
                <div className="col-span-2 text-right text-gray-600">
                  {currency(it.price)}
                </div>
                <div className="col-span-3 text-right font-medium">
                  {currency((it.price ?? 0) * (it.qty ?? 0))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* summary */}
        <div className="mt-6 md:ml-auto md:w-96 rounded-xl border border-gray-100">
          <div className="px-4 py-2.5 border-b font-medium">Summary</div>
          <div className="px-4 py-3 space-y-2 text-sm">
            <Row label="Subtotal" value={currency(subTotal)} />
            <Row label="Shipping" value={currency(shipping)} />
            <Row label="Discount" value={`- ${currency(discount)}`} />
            <div className="h-px bg-gray-100 my-2" />
            <Row label={<b>Total</b>} value={<b>{currency(total)}</b>} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600">{label}</span>
      <span>{value}</span>
    </div>
  );
}
