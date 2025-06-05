import React, { useRef } from "react";
import TitleSection from "./title-section/TitleSection";
import Veterinary from "./veterinary/Veterinary";
import useIsInViewport from "../../../../hooks/useIsInViewport";

const VeterinarySection = () => {
  const veterinarySectionRef = useRef(null);
  const inView = useIsInViewport(veterinarySectionRef, { threshold: 0.1 });
  return (
    <div
      className={`mb-20 mx-auto morph-in-item ${
        inView ? "morph-in-active" : ""
      }`}
      ref={veterinarySectionRef}
    >
      <TitleSection />
      <Veterinary />
    </div>
  );
};

export default VeterinarySection;
