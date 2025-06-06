import React, { useRef } from "react";
import Title from "./content/title/Title";
import Offer from "./content/offer/Offer";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const OfferSection = () => {
  const offerSectionRef = useRef(null);
  const inView = useIsInViewport(offerSectionRef, { threshold: 0.1 });
  return (
    <div
      className={`mx-auto container morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
      id="container-offer-section"
       ref={offerSectionRef}
    >
      <Title />
      <Offer />
    </div>
  );
};

export default OfferSection;
