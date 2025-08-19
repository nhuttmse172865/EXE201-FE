import BASE from "../utils/base";

export async function createMomoPayment() {
  const res = await fetch(`${BASE.BASE_URL}/payment`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Payment API error");
  const data = await res.json();
  // data = { resultCode, message, orderId, requestId, amount, payUrl, ... }
  if (data.resultCode !== 0 || !data.payUrl) {
    throw new Error(data.message || "Cannot get payUrl");
  }
  return data;
}
