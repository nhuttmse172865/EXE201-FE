import React from "react";
import Action from "./action/Action";
import Information from "./information/Information";

const Footer = ({hiddenAction = false , h1, p, button }) => {
  return (
    <div className="">
      <div className="bg-(--color-primary-5)">
           {!hiddenAction && <Action h1={h1} p={p} button={button} />}
      </div>
      <div className="">
        <Information />
      </div>
    </div>
  );
};

export default Footer;
