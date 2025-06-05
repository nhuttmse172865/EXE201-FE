import React from "react";
import WebInfor from "./web-infor/WebInfor";
import CustomerUtils from "./customer-utils/CustomerUtils";
import Logo from "./logo/Logo";

const Header = ({ isLogin = false, border }) => {
  return (
    <div className="mx-auto container w-full h-[70px] flex justify-between items-center relative z-50">
      <WebInfor />
      <Logo border={border} />
      {!isLogin && <CustomerUtils />}
    </div>
  );
};

export default Header;
