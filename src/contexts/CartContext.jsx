import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

function getCurrentUserId() {
  // Lấy userId hiện tại (ví dụ: email) – bạn sẽ set ở màn login
  return localStorage.getItem("currentUserId"); // có thể null
}

function cartKeyOf(uid) {
  return `cart_${uid || "guest"}`;
}

function loadCart(uid = getCurrentUserId()) {
  try {
    const raw = localStorage.getItem(cartKeyOf(uid));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items, uid = getCurrentUserId()) {
  localStorage.setItem(cartKeyOf(uid), JSON.stringify(items));
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart theo user khi app mở
  useEffect(() => {
    setCartItems(loadCart());
  }, []);

  // Nghe event khi user đăng nhập/đăng xuất để load đúng giỏ
  useEffect(() => {
    const reload = () => setCartItems(loadCart());

    // Sự kiện tùy chỉnh do FE phát ra sau login/logout
    window.addEventListener("cart-user-changed", reload);

    // Dự phòng: nếu có thay đổi currentUserId ở tab khác
    const onStorage = (e) => {
      if (e.key === "currentUserId") reload();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cart-user-changed", reload);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const updated = [...prev, product];
      saveCart(updated);
      return updated;
    });
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => {
      const updated = prev.filter((_, i) => i !== indexToRemove);
      saveCart(updated);
      return updated;
    });
  };


  const clearCart = () => {
    setCartItems([]);
    saveCart([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
