import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import { useCart } from "../../../contexts/CartContext";

const mockProducts = {
  "dog-food": {
    name: "Dog Food Premium",
    image: "/src/assets/images/dog-food.png",
    price: "$25.00",
    description: "High-quality food for your dog.",
    rating: 4.9,
    details:
      "This premium dog food is made with natural ingredients, providing complete nutrition.",
  },
  "cat-scratcher": {
    name: "Cat Scratcher",
    image: "/src/assets/images/cat-scratcher.jpg",
    price: "$15.00",
    description: "Durable scratcher for cats.",
    rating: 4.8,
    details:
      "Helps your cat stay active and keeps claws healthy. Made from eco-friendly materials.",
  },
};

const DetailProduct = () => {
  const { productId } = useParams();
  const product = mockProducts[productId];
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
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

  const unitPrice = useMemo(() => (product ? parsePrice(product.price) : 0), [product]);
  const total = useMemo(() => unitPrice * qty, [unitPrice, qty]);
  const currency = (n) =>
    Number(n).toLocaleString(undefined, { style: "currency", currency: "USD" });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowCheckout(false);
    if (showCheckout) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showCheckout]);

  if (!product) {
    return <div className="text-center mt-20 text-red-500">Product not found</div>;
  }

  // 
  const handleAddToCart = () => {
    addToCart({ ...product, qty, price: unitPrice });
    alert("Product added to cart!");
  };

  //  
  const buyNow = () => {
    setShowCheckout(true);
  };

  // Nút +/-  
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Email không hợp lệ.";
    if (!/^0\d{9}$/.test(form.phone))
      err.phone = "SĐT phải bắt đầu bằng 0 và gồm 10 số.";
    if (!form.address.trim()) err.address = "Vui lòng nhập địa chỉ.";
    if (!form.city.trim()) err.city = "Vui lòng nhập thành phố.";
    if (!form.postalCode.trim()) err.postalCode = "Vui lòng nhập mã bưu chính.";
    return err;
  };

  const submitCheckout = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    //  
    alert(
      `Đặt hàng thành công!\nSản phẩm: ${product.name} x${qty}\nTổng: ${currency(
        total
      )}\nThanh toán: ${form.paymentMethod.toUpperCase()}`
    );
    setShowCheckout(false);
  };

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-10">
        {/* Banner */}
        <div className="mb-8">
          <img
            src="/src/assets/images/pet-food-baner.jpg"
            alt="Shop Banner"
            className="w-full h-[250px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Product detail */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-pink-600 font-semibold mb-2">
              {typeof product.price === "number" ? currency(product.price) : product.price}
            </p>
            <p className="text-sm text-yellow-600 mb-2">⭐ {product.rating} / 5</p>
            <p className="mb-4 text-gray-700">{product.details}</p>

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

    {/* kẻ dọc */}
    <div className="w-px self-stretch bg-gray-200" />

    {/* cột số lượng */}
    <div className="w-12 h-full grid place-items-center select-none">
      {qty}
    </div>

    {/* kẻ dọc */}
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

<br/>
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

            <form onSubmit={submitCheckout} className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
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
  maxLength={10}
  pattern="^0[0-9]{9}$"            
  title="Số điện thoại phải bắt đầu bằng 0 và gồm 10 chữ số"
  onInvalid={(e) =>
    e.target.setCustomValidity("Số điện thoại phải bắt đầu bằng 0 và gồm 10 chữ số")
  }
  onInput={(e) => e.target.setCustomValidity("")}  
  autoComplete="tel"
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
