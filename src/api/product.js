// src/api/product.js

export async function fetchProductById(productId) {
  const res = await fetch(`http://localhost:8080/product/${productId}`);

  console.log("raw response:", res); // in ra Response object

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json(); // parse JSON từ response body
  console.log("parsed data:", data);

  return data;
}

