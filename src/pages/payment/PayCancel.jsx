import { useNavigate } from "react-router-dom";

export default function PayCancel() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] grid place-items-center text-center p-6">
      <div className="max-w-md w-full p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-red-600">Bạn đã hủy thanh toán</h2>
        <p className="mt-2 text-gray-600">Đơn hàng chưa được tạo.</p>
        <button
          onClick={() => navigate("/cart")}
          className="mt-6 px-5 py-2 rounded bg-gray-900 text-white"
        >
          Quay lại giỏ hàng
        </button>
      </div>
    </div>
  );
}
