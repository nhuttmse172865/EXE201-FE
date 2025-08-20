import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import { useCart } from "../../../contexts/CartContext";
import { fetchProductById } from "../../../api/product";
import img1 from "../../../assets/images/pet-food-baner.jpg";
import BASE from "../../../utils/base.js";

/* === API PayOS (qua BE) === */
async function createPayOSPayment({ amount, description }) {
  const res = await fetch(`${BASE.BASE_URL}/payment/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, description }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json?.success) {
    throw new Error(json?.message || `Create payment failed (${res.status})`);
  }
  return json.data; // { checkoutUrl, orderCode, amount, description }
}

const DetailProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    note: "",
    paymentMethod: "momo", // dùng "momo" để giữ nguyên validate, thực chất thanh toán qua PayOS
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProductById(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error fetching product");
        setLoading(false);
      });
  }, [productId]);

  // utils
  const parsePrice = (p) =>
    typeof p === "number" ? p : Number(String(p).replace(/[^\d]/g, "")) || 0;

  const unitPrice = useMemo(
    () => (product ? parsePrice(product.price) : 0),
    [product]
  );
  const total = useMemo(() => unitPrice * qty, [unitPrice, qty]);
  const currency = (n) => `${Number(n).toLocaleString("vi-VN")} VND`;

  // ESC để đóng modal
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowCheckout(false);
    if (showCheckout) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showCheckout]);

  if (loading)
    return <div className="text-center mt-20 text-gray-500">Loading product...</div>;
  if (error)
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!product)
    return <div className="text-center mt-20 text-red-500">Product not found</div>;

  // add to cart
  const handleAddToCart = () => {
    addToCart({ ...product, qty, price: unitPrice });
    alert("Product added to cart!");
  };

  // mở modal checkout
  const buyNow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const uid = localStorage.getItem("currentUserId");
    if (!isLoggedIn || !uid) {
      alert("Bạn cần đăng nhập để mua ngay!");
      navigate("/login");
      return;
    }
    setShowCheckout(true);
  };

  // +/- quantity
  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(99, q + 1));

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
    if (form.paymentMethod !== "momo") {
      err.paymentMethod = "Vui lòng chọn phương thức MoMo/PayOS để tiếp tục.";
    }
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    try {
      setSubmitting(true);

      if (form.paymentMethod === "momo") {
        // PayOS: yêu cầu amount là số nguyên VND và description <= 25 ký tự
        const amount = parseInt(String(total).replace(/[^\d]/g, ""), 10) || 0;
        if (amount <= 0) throw new Error("Tổng tiền không hợp lệ.");

        const makeShortDesc = (amt) => {
          const s = `PetCare ${amt} VND`; // ngắn gọn, tránh vượt 25 ký tự
          return s.length > 25 ? s.slice(0, 25) : s;
        };
        const description = makeShortDesc(amount);

        const data = await createPayOSPayment({ amount, description });
        if (!data?.checkoutUrl) throw new Error("Không nhận được checkoutUrl");
        window.location.href = data.checkoutUrl; // chuyển sang trang thanh toán PayOS
        return;
      }
    } catch (e2) {
      console.error(e2);
      alert(e2.message || "Unable to initiate payment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-10">
        {/* Banner */}
        <div className="mb-8">
          <img
            src={img1}
            alt="Shop Banner"
            className="w-full h-[250px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Product detail */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.imageUrl || product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-fit rounded-lg shadow"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-pink-600 font-semibold mb-2">
              {typeof product.price === "number"
                ? currency(product.price)
                : product.price}
            </p>
            {!!product.rating && (
              <p className="text-sm text-yellow-600 mb-2">⭐ {product.rating} / 5</p>
            )}
            {!!product.details && (
              <p className="mb-4 text-gray-700">{product.details}</p>
            )}

            {/* Quantity +/- */}
            <div className="flex items-center gap-4 mb-4">
              <label className="text-sm text-gray-600">Quantity</label>

              <div className="flex items-center h-10 rounded-md border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  onClick={dec}
                  disabled={qty <= 1}
                  className="px-3 h-full text-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <div className="w-px self-stretch bg-gray-200" />

                <div className="w-12 h-full grid place-items-center select-none">
                  {qty}
                </div>

                <div className="w-px self-stretch bg-gray-200" />
                <button
                  type="button"
                  onClick={inc}
                  disabled={qty >= 99}
                  className="px-3 h-full text-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <span className="text-sm text-gray-600">
                Total: <b>{currency(total)}</b>
              </span>
            </div>

            <br />
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={buyNow}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
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
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowCheckout(false)} />
          {/* dialog */}
          <div className="relative w-[95%] max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-pink-500 text-white px-5 py-3 font-semibold flex items-center justify-between">
              <span id="checkout-title">Checkout</span>
              <button
                onClick={() => setShowCheckout(false)}
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
                pattern="^0[0-9]{9}$"    
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
                      value="momo"
                      checked={form.paymentMethod === "momo"}
                      onChange={handleChange}
                    />
                    <span>PayOS (MoMo/Thẻ qua PayOS)</span>
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p className="text-xs text-red-600 mt-1">{errors.paymentMethod}</p>
                )}
              </div>

              <div className="md:col-span-2 flex items-center justify-between pt-2">
                <div className="text-sm text-gray-600">
                  Tổng thanh toán: <b>{currency(total)}</b>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-gray-900 text-white rounded hover:opacity-95 disabled:opacity-60"
                >
                  {submitting ? "processing..." : "Order confirmation"}
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

function Field({ label, name, error, className = "", ...rest }) {
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

export default DetailProduct;
