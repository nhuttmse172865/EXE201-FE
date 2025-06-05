import React, { useRef } from "react";
import Action from "./action/Action";
import Information from "./information/Information";
import useIsInViewport from "../../../hooks/useIsInViewport";

const Footer = ({ hiddenAction = false, h1, p, button }) => {
  const footerSectionRef = useRef(null);
  const inView = useIsInViewport(footerSectionRef, { threshold: 0.1 });
  return (
    <div
      className={`morph-in-item ${inView ? "morph-in-active" : ""}`}
      ref={footerSectionRef}
    >
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
