import React, { useEffect, useMemo, useState } from "react";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import { useCart } from "../../../contexts/CartContext";
import cartBanner from "../../../assets/images/cart-banner.jpg"; // Import the image

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    note: "",
    paymentMethod: "cod",
  });
  const [errors, setErrors] = useState({});

  const parsePrice = (p) =>
    typeof p === "number" ? p : Number(String(p).replace(/[^0-9.]/g, "")) || 0;

  const total = useMemo(
    () => cartItems.reduce((s, it) => s + parsePrice(it.price), 0),
    [cartItems]
  );
  const currency = (n) =>
    Number(n).toLocaleString(undefined, { style: "currency", currency: "USD" });

  // mở/đóng modal
  const openModal = () => setShowCheckout(true);
  const closeModal = () => setShowCheckout(false);

  // ESC để đóng
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeModal();
    if (showCheckout) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showCheckout]);

  // chặn nhập sai cho phone
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
      if (value.length === 1 && value[0] !== "0") return;
    }
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.fullName.trim()) err.fullName = "Vui lòng nhập họ tên.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Email không hợp lệ.";
    if (!/^0\d{9}$/.test(form.phone))
      err.phone = "SĐT phải bắt đầu bằng 0 và gồm 10 số.";
    if (!form.address.trim()) err.address = "Vui lòng nhập địa chỉ.";
    if (!form.city.trim()) err.city = "Vui lòng nhập thành phố.";
    if (!form.postalCode.trim()) err.postalCode = "Vui lòng nhập mã bưu chính.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;
    alert(
      `Đặt hàng thành công!\nTổng: ${currency(total)}\nThanh toán: ${form.paymentMethod.toUpperCase()}`
    );
    closeModal();
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        {/* Banner */}
        <div className="mb-8">
          <img
            src={cartBanner} // Use the imported image
            alt="Cart Banner"
            className="w-full h-[250px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-gray-300 border-dashed pb-4"
              >
                <img
                  src={item.image} // Ensure this path is correct
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-pink-600 font-bold">
                    {typeof item.price === "number"
                      ? currency(item.price)
                      : item.price}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                {/* Pass item.id to removeFromCart for reliable removal */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8 pt-4">
              <p className="text-xl font-semibold">Total: {currency(total)}</p>
              <button
                onClick={openModal}
                className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL CHECKOUT */}
      {showCheckout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-labelledby="checkout-title"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
          />
          {/* dialog */}
          <div className="relative w-[95%] max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-pink-500 text-white px-5 py-3 font-semibold flex items-center justify-between">
              <span id="checkout-title">Checkout</span>
              <button
                onClick={closeModal}
                className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25"
              >
                Đóng
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                label="Họ và tên"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Field
                label="Số điện thoại"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                inputMode="numeric"
                pattern="0\d{9}"
                maxLength={10}
                placeholder="0xxxxxxxxx"
                autoComplete="tel"
                error={errors.phone}
              />
              <Field
                label="Thành phố"
                name="city"
                value={form.city}
                onChange={handleChange}
                error={errors.city}
              />
              <Field
                className="md:col-span-2"
                label="Địa chỉ"
                name="address"
                value={form.address}
                onChange={handleChange}
                error={errors.address}
              />
              <Field
                label="Mã bưu chính"
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                error={errors.postalCode}
              />
              <Field
                label="Ghi chú"
                name="note"
                value={form.note}
                onChange={handleChange}
              />

              <div className="md:col-span-2">
                <label className="text-sm text-gray-600 block mb-1">
                  Phương thức thanh toán
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={form.paymentMethod === "cod"}
                      onChange={handleChange}
                    />
                    <span>Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={form.paymentMethod === "card"}
                      onChange={handleChange}
                    />
                    <span>Thẻ / Ví</span>
                  </label>
                </div>
              </div>

              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <div className="text-sm text-gray-600">
                  Tổng thanh toán: <b>{currency(total)}</b>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gray-900 text-white rounded hover:opacity-95"
                >
                  Xác nhận đặt hàng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

function Field({
  label,
  name,
  error,
  className = "",
  ...rest
}) {
  return (
    <div className={className}>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        name={name}
        {...rest}
        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

export default Cart;
