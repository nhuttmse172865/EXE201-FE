import React from "react";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import { useCart } from "../../../contexts/CartContext";
import cartBanner from "../../../assets/images/cart-banner.jpg"; // Import the image

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Assumes item.price is a number. If it's a string, it should be converted in the context.
  const getTotal = () => {
    return cartItems
      .reduce((sum, item) => sum + item.price, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    // In a real application, you would navigate to a checkout page or open a payment modal.
    alert("Checkout not implemented. Total: $" + getTotal());
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
            {/* Use item.id as the key for better performance and stability */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-gray-300 border-dashed pb-4">
                <img
                  src={item.image} // Ensure this path is correct
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  {/* Format the price for display */}
                  <p className="text-pink-600 font-bold">${item.price.toFixed(2)}</p>
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
