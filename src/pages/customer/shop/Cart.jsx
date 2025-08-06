import React from "react";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import { useCart } from "../../../contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotal = () => {
    return cartItems
      .reduce((sum, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return sum + price;
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    alert("Checkout not implemented. Total: $" + getTotal());
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        {/* Banner */}
        <div className="mb-8">
          <img
            src="/images/banner/shop-banner.jpg"
            alt="Shop Banner"
            className="w-full h-[250px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b border-gray-300 border-dashed pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-pink-600 font-bold">{item.price}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8  pt-4">
              <p className="text-xl font-semibold">Total: ${getTotal()}</p>
              <button
                onClick={handleCheckout}
                className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
