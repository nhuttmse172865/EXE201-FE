import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function PayResult() {
  const [sp] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    // Nếu PayOS/BE redirect kèm tham số (vd: orderCode, status)
    const status = sp.get("status") || "PAID"; // fallback
    if (status === "PAID") clearCart?.();
  }, [sp, clearCart]);

  return (
    <div className="min-h-[60vh] grid place-items-center text-center p-6">
      <div className="max-w-md w-full p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-green-600">Thanh toán thành công</h2>
        <p className="mt-2 text-gray-600">Cảm ơn bạn đã mua hàng tại PetCare.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 rounded bg-gray-900 text-white"
        >
          Về trang chủ
        </button>
      </div>
    </div>
  );
}
