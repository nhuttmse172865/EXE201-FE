import React from "react";
import HeadSection from "./head-section/HeadSection";
import ServiceSection from "./service-section/ServiceSection";
import VeterinarySection from "./veterinary-section/VeterinarySection";

const Body = () => {
  return (
    <div className=" min-h-[calc(100vh-200px)]">
      <HeadSection />
      <ServiceSection />
      <VeterinarySection />
    </div>
  );
};

export default Body;
