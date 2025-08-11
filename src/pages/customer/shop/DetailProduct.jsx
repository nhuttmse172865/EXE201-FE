import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../../components/customer/header/Header';
import Footer from '../../../components/customer/footer/Footer';
import { useCart } from "../../../contexts/CartContext";

const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axios.get(`http://localhost:8080/product/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to fetch product details.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
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
            {/* <p className="text-sm text-yellow-600 mb-2">⭐ {product.rating} / 5</p> */}
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