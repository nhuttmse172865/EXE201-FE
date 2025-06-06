import React from "react";
import Header from "../../../../components/customer/header/Header";
import Footer from "../../../../components/customer/footer/Footer";
import Body from "../../../../components/customer/partner/registration-form/Body";

const PartnerRegistrationForm = () => {
  return (
    <div>
      <Header isLogin={true} />
      <Body />
      <Footer hiddenAction={true} />
    </div>
  );
};

export default PartnerRegistrationForm;
