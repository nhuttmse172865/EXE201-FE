export const toVND = (n) =>
  Number(n || 0).toLocaleString("vi-VN", { maximumFractionDigits: 0 }) + " VND";