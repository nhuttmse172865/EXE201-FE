import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/customer/header/Header";
import Footer from "../../components/customer/footer/Footer";

const Badge = ({ tone = "success", children }) => {
  const map = {
    success: "bg-green-100 text-green-700 border-green-200",
    danger:  "bg-red-100 text-red-700 border-red-200",
    warn:    "bg-yellow-100 text-yellow-700 border-yellow-200",
  };
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm border ${map[tone]}`}>
      {children}
    </span>
  );
};

const Row = ({ label, value, mono=false }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className={mono ? "font-medium tabular-nums" : "font-medium"}>{value}</span>
  </div>
);

const ThankYou = () => {
  const { search } = useLocation();
  const q = useMemo(() => new URLSearchParams(search), [search]);

  // Tham số MoMo redirect
  const resultCode = q.get("resultCode"); // "0" = success
  const message    = q.get("message") || "";
  const orderId    = q.get("orderId") || q.get("orderid") || "—";
  const requestId  = q.get("requestId") || "—";
  const amountRaw  = q.get("amount");
  const transId    = q.get("transId") || "—";

  const amount = useMemo(() => {
    const n = Number(amountRaw || 0);
    return n.toLocaleString(undefined, { style: "currency", currency: "VND" });
  }, [amountRaw]);

  const status = useMemo(() => {
    if (resultCode === "0") return "success";
    if (resultCode === "1006" || resultCode === "49") return "pending";  
    return "failed";
  }, [resultCode]);

  const title = {
    success: "Payment successful!",
    failed:  "Payment Failed",
    pending: "Transaction is pending",
  }[status];

  const tone = {
    success: "success",
    failed:  "danger",
    pending: "warn",
  }[status];

  return (
    <div>
    <div className="min-h-[70vh] bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b bg-pink-500 text-white">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold">Checkout Result</h1>
                <Badge tone={tone}>
                  {status === "success" && (
                    <>
                      <span>✅</span> <span>Success</span>
                    </>
                  )}
                  {status === "failed" && (
                    <>
                      <span>❌</span> <span>Failed</span>
                    </>
                  )}
                  {status === "pending" && (
                    <>
                      <span>⏳</span> <span>Pending</span>
                    </>
                  )}
                </Badge>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">
                  {status === "success" && (
                    <>Thank you! Your order has been received. We have sent you a receipt (if applicable) and will process your order shortly.</>
                  )}
                  {status === "failed" && (
                    <>Sorry, the transaction was unsuccessful. You can try again or choose another method. Message:<span className="font-medium text-gray-800">{message || "—"}</span></>
                  )}
                  {status === "pending" && (
                    <>Your transaction is pending confirmation. You can check the status of your order in Order History.</>
                  )}
                </p>

                <div className="flex gap-3 pt-2">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900 text-white hover:opacity-95"
                  >
                    Continue shopping
                  </Link>
                  <Link
                    to="/profile?tab=orders"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                  >
                    View order
                  </Link>
                  {status === "failed" && (
                    <Link
                      to="/cart"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600"
                    >
                      Payment again
                    </Link>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-gray-100">
                <div className="px-4 py-3 bg-gray-50 border-b text-sm font-medium">
                  Transaction Summary
                </div>
                <div className="p-4 space-y-3">
                  <Row label="Order code" value={<Monospace value={orderId} />} />
                  <Row label="Request ID" value={<Monospace value={requestId} />} />
                  <Row label="Trans ID (MoMo)" value={<Monospace value={transId} />} />
                  <Row label="Amount" value={amount} />
                  <Row label="Result" value={
                    <span className={status === "success" ? "text-green-600 font-medium" : status === "failed" ? "text-red-600 font-medium" : "text-yellow-600 font-medium"}>
                      {status.toUpperCase()}
                    </span>
                  } />
                  {message && <Row label="Message" value={message} />}
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="px-6 py-4 bg-white border-t text-xs text-gray-500">
              Note: If there is a discrepancy, the status in Order History is correct.
            </div>
          </div>
        </div>
      </div>
    </div>
<Footer/>
        </div>
  );
};

const Monospace = ({ value }) => (
  <span className="font-medium text-gray-800 font-mono text-[13px] break-all">{value}</span>
);

export default ThankYou;
