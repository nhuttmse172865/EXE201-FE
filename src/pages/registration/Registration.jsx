import React from "react";
import Header from "../../components/customer/header/Header";
import Body from "../../components/registration/Body";

const Registration = () => {
  return (
    <div className="relative">
      <Header isLogin={true} border={false} />
      <Body />
    </div>
  );
};

export default Registration;
