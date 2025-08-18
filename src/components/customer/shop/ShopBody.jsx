import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE from "../../../utils/base";
import image1 from "../../../assets/images/shop-banner.jpg";

const ShopBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE.BASE_URL}/product/available-list`);      
      // Ensure that we are setting an array to the products state
      const productsData = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      setProducts(productsData);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]); // Set to empty array on error to prevent crash
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const navigate = useNavigate();
  

  const handleClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  const filteredProducts =
    Array.isArray(products) &&
    products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesFilter =
        priceFilter === "All" ||
        (priceFilter === "<15" && product.price < 15000) ||
        (priceFilter === "15-25" &&
          product.price >= 15000 &&
          product.price <= 25000) ||
        (priceFilter === ">25" && product.price > 25000);

      return matchesSearch && matchesFilter;
    });

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <div className="mb-8">
        <img
          src={image1}
          alt="Shop Banner"
          className="w-full h-[250px] object-cover rounded-2xl shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Pet Products</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded w-full md:w-1/4"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="All">All Prices</option>
          <option value="<15">Under 15.000 VND</option>
          <option value="15-25">15.000 VND - 25. 000 VND</option>
          <option value=">25">Over 25. 000 VND</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleClick(product.id)}
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-36 object-fit rounded-t-xl"
                />
                <div className="absolute top-2 right-2 bg-white text-yellow-500 px-2 py-1 rounded-md text-sm font-semibold shadow">
                  ⭐ {product.rating}
                </div>
              </div>

              <div className="p-3">
                <h2 className="text-base font-semibold">{product.name}</h2>
                <p className="text-sm text-pink-600 font-bold">
                  {product.price.toLocaleString("vi-VN")} VND
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {(!filteredProducts || filteredProducts.length === 0) && (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default ShopBody;