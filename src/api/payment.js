const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// Tạo link PayOS qua BE
export async function createPayment({ amount, description }) {
  const res = await fetch(`${BASE_URL}/payment/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, description }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json?.success) {
    const msg = json?.message || `Create payment failed (${res.status})`;
    throw new Error(msg);
  }
  return json.data; // { checkoutUrl, orderCode, amount, description }
}

// (tuỳ chọn) đọc trạng thái theo orderId nếu bạn dùng DB
export async function getPaymentStatus(orderId) {
  const res = await fetch(`${BASE_URL}/payment/status/${orderId}`);
  if (!res.ok) throw new Error("Không lấy được trạng thái thanh toán");
  return res.json();
}
