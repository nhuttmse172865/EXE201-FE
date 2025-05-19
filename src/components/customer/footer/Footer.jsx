import React from "react";
import Action from "./action/Action";
import Information from "./information/Information";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-(--color-primary-5)">
           <Action />
      </div>
      <div className="">
        <Information />
      </div>
    </div>
  );
};

export default Footer;
