import React, { useRef } from "react";
import WebInfor from "./web-infor/WebInfor";
import CustomerUtils from "./customer-utils/CustomerUtils";
import Logo from "./logo/Logo";
import useIsInViewport from "../../../hooks/useIsInViewport";

const Header = ({ isLogin = false, border }) => {
  const headerSectionRef = useRef(null);
  const inView = useIsInViewport(headerSectionRef, { threshold: 0.1 });
  return (
    <div
      className={`mx-auto container w-full h-[70px] flex justify-between items-center relative z-50 morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
         ref={headerSectionRef}
    >
      <WebInfor />
      <Logo border={border} />
      {!isLogin && <CustomerUtils />}
    </div>
  );
};

export default Header;
