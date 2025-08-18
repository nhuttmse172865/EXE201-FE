
import React from "react";
import { useNavigate } from "react-router-dom";

const MomoQRModal = ({ open, onClose, amountText, qrImg, onPaid }) => {
  if (!open) return null;
  const navigate = useNavigate(); 
    const handlePaid = () => {
         if (typeof onPaid === "function") onPaid();
 
  };
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-[95%] max-w-md p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Thanh toán MoMo (QR)</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            Đóng
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          Quét mã bằng ứng dụng MoMo. Số tiền: <b>{amountText}</b>
        </p>

        <div className="rounded-xl border p-3 grid place-items-center">
          <img src={qrImg} alt="MoMo QR" className="max-w-[260px]" />
        </div>

        <div className="text-xs text-gray-500 mt-3">
          Gợi ý: sau khi chuyển khoản xong bạn bấm “Đã thanh toán” hoặc “Đóng”.
        </div>

        <div className="mt-4 flex gap-2 justify-end">
          <a
            href={qrImg}
            download
            className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            Tải mã QR
          </a>
          <button
            onClick={handlePaid}
            className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
          >
            Đã thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default MomoQRModal;
