import React from "react";
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
    details: "This premium dog food is made with natural ingredients, providing complete nutrition.",
  },
  "cat-scratcher": {
    name: "Cat Scratcher",
    image: "/src/assets/images/cat-scratcher.jpg",
    price: "$15.00",
    description: "Durable scratcher for cats.",
    rating: 4.8,
    details: "Helps your cat stay active and keeps claws healthy. Made from eco-friendly materials.",
  },
};

const DetailProduct = () => {
  const { productId } = useParams();
  const product = mockProducts[productId];
  const { addToCart } = useCart();  
  if (!product) {
    return <div className="text-center mt-20 text-red-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart!");
  };

  const buyNow = () => {
    addToCart(product);
    alert("Redirecting to checkout...");
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
            <p className="text-xl text-pink-600 font-semibold mb-2">{product.price}</p>
            <p className="text-sm text-yellow-600 mb-2">⭐ {product.rating} / 5</p>
            <p className="mb-4 text-gray-700">{product.details}</p>

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

      <Footer />
    </div>
  );
};

export default DetailProduct;
