import React, { useRef, useState, useEffect } from "react";
import WebInfor from "./web-infor/WebInfor";
import CustomerUtils from "./customer-utils/CustomerUtils";
import Logo from "./logo/Logo";
import useIsInViewport from "../../../hooks/useIsInViewport";
import { useCart } from "../../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ border, isLogo = true }) => {
  const headerSectionRef = useRef(null);
  const inView = useIsInViewport(headerSectionRef, { threshold: 0.1 });

  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  // Đồng bộ isLogin khi login/logout
  useEffect(() => {
    const syncLoginState = () =>
      setIsLogin(localStorage.getItem("isLoggedIn") === "true");

    // LoginForm / CartContext
    const onCartUserChanged = () => syncLoginState();

    window.addEventListener("cart-user-changed", onCartUserChanged);
    //  thay đổi localStorage từ tab khác (nếu dùng nhiều tab)
    const onStorage = (e) => {
      if (e.key === "isLoggedIn") syncLoginState();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cart-user-changed", onCartUserChanged);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const handleLogout = () => {
    // Xoá đăng nhập + userId hiện tại
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUserId");
    
    window.dispatchEvent(new Event("cart-user-changed"));

    setIsLogin(false);
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <div
      className={`mx-auto container w-full h-[70px] flex justify-between items-center relative z-50 morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
      ref={headerSectionRef}
    >
      <WebInfor />

      {isLogo && <Logo border={border} />}

      <div className="flex items-center gap-4">
        {/* Giỏ hàng */}
        <Link
          to="/cart"
          className="relative text-xl text-gray-600 hover:text-pink-500"
        >
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* login/register hoặc profile */}
        {!isLogin ? (
          <CustomerUtils />
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              type="button"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xl"
              title="My Profile"
              onClick={() => setMenuOpen((s) => !s)}
            >
              👤
            </button>

            {menuOpen && (
              <div
                className="absolute right-0 top-full bg-white border rounded shadow px-4 py-2 cursor-pointer whitespace-nowrap z-50"
                onClick={handleLogout}
              >
                Logout
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
