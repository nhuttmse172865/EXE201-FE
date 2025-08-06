import React, { useRef, useState, useEffect } from "react";
import WebInfor from "./web-infor/WebInfor";
import CustomerUtils from "./customer-utils/CustomerUtils";
import Logo from "./logo/Logo";
import useIsInViewport from "../../../hooks/useIsInViewport";

import { useCart } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = ({ isLogin = false, border }) => {
  const headerSectionRef = useRef(null);
  const inView = useIsInViewport(headerSectionRef, { threshold: 0.1 });

  //
const { cartItems } = useCart(); // dùng context
 

  return (
    <div
      className={`mx-auto container w-full h-[70px] flex justify-between items-center relative z-50 morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
         ref={headerSectionRef}
    >
      <WebInfor />
      <Logo border={border} />
       <div className="flex items-center gap-4">
      {/* Giỏ hàng */}
       <Link to="/cart" className="relative text-xl text-gray-600 hover:text-pink-500">
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 text-xs bg-pink-500 text-white rounded-full px-1">
            {cartItems.length}
          </span>
        )}
      </Link>

      {!isLogin && <CustomerUtils />}
    </div>


    </div>
  );
};

export default Header;
