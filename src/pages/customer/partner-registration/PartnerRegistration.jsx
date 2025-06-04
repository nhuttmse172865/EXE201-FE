import React from "react";
import Header from "../../../components/customer/header/Header";
import Footer from "../../../components/customer/footer/Footer";
import Body from "../../../components/customer/partner/Body";

const PartnerRegistration = () => {
  return (
    <div>
      <Header isLogin={true} />
      <Body />
      <Footer
        h1="Ready to Take Your Clinic to the Next Level?"
        p="Connect, Optimize, Grow Clinic."
        button={"BE PARTNER"}
      />
    </div>
  );
};

export default PartnerRegistration;
