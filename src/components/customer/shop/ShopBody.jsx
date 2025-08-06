import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const allProducts = [
  {
    slug: "amily-martins",
    name: "Amily Martins",
    image: "/images/products/dog-hotel.jpg",
    price: 25.0,
    description: "Lorem Ipsum is simply dummy",
    rating: 4.9,
  },
  {
    slug: "cat-scratcher",
    name: "Cat Scratcher",
    image: "/images/products/cat-scratcher.jpg",
    price: 14.0,
    description: "Durable scratcher for cats.",
    rating: 4.8,
  },
  {
    slug: "pet-shampoo",
    name: "Pet Shampoo",
    image: "/images/products/shampoo.jpg",
    price: 10.0,
    description: "Gentle shampoo for pets.",
    rating: 4.7,
  },
  {
    slug: "premium-cat-food",
    name: "Premium Cat Food",
    image: "/images/products/cat-food.jpg",
    price: 30.0,
    description: "Tasty and nutritious cat food.",
    rating: 4.6,
  },
  {
    slug: "dog-collar",
    name: "Dog Collar",
    image: "/images/products/collar.jpg",
    price: 12.5,
    description: "Adjustable collar for dogs.",
    rating: 4.5,
  },
];

const ShopBody = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/product/${slug}`);
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      priceFilter === "All" ||
      (priceFilter === "<15" && product.price < 15) ||
      (priceFilter === "15-25" && product.price >= 15 && product.price <= 25) ||
      (priceFilter === ">25" && product.price > 25);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <div className="mb-8">
        <img
          src="/images/banner/shop-banner.jpg"
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
          <option value="<15">Under $15</option>
          <option value="15-25">$15 - $25</option>
          <option value=">25">Over $25</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => handleClick(product.slug)}
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover rounded-t-xl"
              />
              <div className="absolute top-2 right-2 bg-white text-yellow-500 px-2 py-1 rounded-md text-sm font-semibold shadow">
                ⭐ {product.rating}
              </div>
            </div>

            <div className="p-3">
              <h2 className="text-base font-semibold">{product.name}</h2>
              <p className="text-sm text-pink-600 font-bold">${product.price.toFixed(2)}</p>
              <p className="text-xs text-gray-400 mt-1">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default ShopBody;
